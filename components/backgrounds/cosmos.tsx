'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

export default function CosmosBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isLight = resolvedTheme === 'light' || resolvedTheme === 'dotcom';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const pixelRatio = Math.min(window.devicePixelRatio, 2);

    const starCount = 3000;
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    const twinklePhases = new Float32Array(starCount);
    const starColors = new Float32Array(starCount * 3);

    const starColorPalette = isLight
      ? [new THREE.Color(0x6633cc), new THREE.Color(0x3366cc), new THREE.Color(0xcc3366), new THREE.Color(0x336699)]
      : [new THREE.Color(0xffffff), new THREE.Color(0xaaccff), new THREE.Color(0xffccaa), new THREE.Color(0xffaaaa)];

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      sizes[i] = Math.random() * 3.5 + 0.8;
      twinklePhases[i] = Math.random() * Math.PI * 2;

      const c = starColorPalette[Math.floor(Math.random() * starColorPalette.length)];
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aPhase', new THREE.BufferAttribute(twinklePhases, 1));
    geometry.setAttribute('aColor', new THREE.BufferAttribute(starColors, 3));

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 0.9 },
        uPixelRatio: { value: pixelRatio }
      },
      vertexShader: `
        attribute float aSize;
        attribute float aPhase;
        attribute vec3 aColor;
        uniform float uTime;
        uniform float uPixelRatio;
        varying float vTwinkle;
        varying vec3 vColor;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vTwinkle = 0.4 + 0.6 * sin(uTime * 1.2 + aPhase);
          vColor = aColor;
          gl_PointSize = aSize * uPixelRatio * (2.0 / -mvPosition.z) * vTwinkle;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float uOpacity;
        varying float vTwinkle;
        varying vec3 vColor;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float core = smoothstep(0.5, 0.0, d);
          float glow = smoothstep(0.5, 0.15, d);
          float alpha = (core * 0.8 + glow * 0.2) * uOpacity * vTwinkle;
          gl_FragColor = vec4(vColor, alpha);
        }
      `
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // Shooting stars
    const shootingStarCount = 3;
    const shootingStars: {
      mesh: THREE.Mesh;
      velocity: THREE.Vector3;
      life: number;
      maxLife: number;
      cooldown: number;
    }[] = [];

    const shootingStarGeo = new THREE.PlaneGeometry(1, 0.01);

    for (let i = 0; i < shootingStarCount; i++) {
      const mat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        uniforms: {
          uColor: { value: new THREE.Color(isLight ? 0x4444aa : 0xffffff) },
          uOpacity: { value: 0.0 }
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          uniform float uOpacity;
          varying vec2 vUv;
          void main() {
            float trail = smoothstep(0.0, 1.0, vUv.x);
            float width = smoothstep(0.5, 0.0, abs(vUv.y - 0.5));
            gl_FragColor = vec4(uColor, trail * width * uOpacity);
          }
        `
      });

      const mesh = new THREE.Mesh(shootingStarGeo, mat);
      mesh.visible = false;
      scene.add(mesh);

      shootingStars.push({
        mesh,
        velocity: new THREE.Vector3(),
        life: 0,
        maxLife: 0,
        cooldown: Math.random() * 8 + 4
      });
    }

    // Supernova bursts
    const supernovaCount = 2;
    const supernovas: {
      mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
      life: number;
      maxLife: number;
      cooldown: number;
    }[] = [];

    for (let i = 0; i < supernovaCount; i++) {
      const sGeo = new THREE.PlaneGeometry(4, 4);
      const sMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        uniforms: {
          uTime: { value: 0 },
          uProgress: { value: 0 },
          uColor1: { value: new THREE.Color(isLight ? 0xdd5522 : 0xff6633) },
          uColor2: { value: new THREE.Color(isLight ? 0x6622cc : 0x6633ff) },
          uOpacity: { value: isLight ? 0.25 : 0.2 }
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uProgress;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          uniform float uOpacity;
          varying vec2 vUv;
          void main() {
            vec2 center = vUv - 0.5;
            float dist = length(center);

            float ringRadius = uProgress * 0.5;
            float ring = smoothstep(ringRadius - 0.08, ringRadius - 0.02, dist)
                       * smoothstep(ringRadius + 0.08, ringRadius + 0.02, dist);

            float flash = smoothstep(0.15, 0.0, dist) * (1.0 - uProgress);

            vec3 color = mix(uColor1, uColor2, dist * 2.0 + uProgress * 0.5);

            float fade = 1.0 - smoothstep(0.6, 1.0, uProgress);

            float alpha = (ring * 0.6 + flash) * uOpacity * fade;
            gl_FragColor = vec4(color, alpha);
          }
        `
      });

      const mesh = new THREE.Mesh(sGeo, sMat);
      mesh.visible = false;
      scene.add(mesh);

      supernovas.push({
        mesh,
        life: 0,
        maxLife: 3.0,
        cooldown: Math.random() * 12 + 6
      });
    }

    // Nebula clouds
    const nebulaGroup = new THREE.Group();
    const nebulaColors = isLight
      ? [0x8844cc, 0x4466cc, 0xcc4488, 0x4499aa]
      : [0x6633cc, 0x3355cc, 0xcc3366, 0x3399aa];

    for (let i = 0; i < 7; i++) {
      const nebulaGeo = new THREE.PlaneGeometry(4, 4);
      const nebulaMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: {
          uColor: { value: new THREE.Color(nebulaColors[i % nebulaColors.length]) },
          uOpacity: { value: isLight ? 0.15 : 0.1 },
          uTime: { value: 0 },
          uSeed: { value: Math.random() * 100 }
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          uniform float uOpacity;
          uniform float uTime;
          uniform float uSeed;
          varying vec2 vUv;

          float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
          }

          float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            f = f * f * (3.0 - 2.0 * f);
            float a = hash(i);
            float b = hash(i + vec2(1.0, 0.0));
            float c = hash(i + vec2(0.0, 1.0));
            float d = hash(i + vec2(1.0, 1.0));
            return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
          }

          float fbm(vec2 p) {
            float v = 0.0;
            float a = 0.5;
            for (int i = 0; i < 4; i++) {
              v += a * noise(p);
              p *= 2.0;
              a *= 0.5;
            }
            return v;
          }

          void main() {
            vec2 p = vUv * 3.0 + uSeed;
            float n = fbm(p + uTime * 0.04) * 0.6 + fbm(p * 1.5 - uTime * 0.03) * 0.4;
            float edge = smoothstep(0.0, 0.25, vUv.x) * smoothstep(1.0, 0.75, vUv.x)
                       * smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.75, vUv.y);
            gl_FragColor = vec4(uColor, n * edge * uOpacity);
          }
        `
      });

      const nebula = new THREE.Mesh(nebulaGeo, nebulaMat);
      nebula.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 3 - 1.5
      );
      nebula.rotation.z = Math.random() * Math.PI;
      nebulaGroup.add(nebula);
    }
    scene.add(nebulaGroup);

    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const delta = clock.getDelta();
      material.uniforms.uTime.value = elapsed;

      nebulaGroup.children.forEach((child) => {
        const mesh = child as THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
        mesh.material.uniforms.uTime.value = elapsed;
      });

      // Animate shooting stars
      shootingStars.forEach((s) => {
        if (s.life > 0) {
          s.life -= delta;
          s.mesh.position.add(s.velocity.clone().multiplyScalar(delta));
          const progress = 1 - s.life / s.maxLife;
          const mat = s.mesh.material as THREE.ShaderMaterial;
          mat.uniforms.uOpacity.value =
            (progress < 0.3 ? progress / 0.3 : (1 - progress) / 0.7) * 0.6;
          if (s.life <= 0) {
            s.mesh.visible = false;
            s.cooldown = Math.random() * 10 + 5;
          }
        } else {
          s.cooldown -= delta;
          if (s.cooldown <= 0) {
            const angle = Math.random() * Math.PI * 0.5 + Math.PI * 0.75;
            s.velocity.set(Math.cos(angle) * 3, Math.sin(angle) * 3, 0);
            s.mesh.position.set(
              (Math.random() - 0.3) * 6,
              (Math.random() * 0.5 + 0.5) * 4,
              -1
            );
            s.mesh.rotation.z = angle;
            s.mesh.visible = true;
            s.life = Math.random() * 0.8 + 0.4;
            s.maxLife = s.life;
          }
        }
      });

      // Animate supernovas
      supernovas.forEach((s) => {
        if (s.life > 0) {
          s.life -= delta;
          const progress = 1 - s.life / s.maxLife;
          s.mesh.material.uniforms.uProgress.value = progress;
          if (s.life <= 0) {
            s.mesh.visible = false;
            s.cooldown = Math.random() * 15 + 8;
          }
        } else {
          s.cooldown -= delta;
          if (s.cooldown <= 0) {
            s.mesh.position.set(
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 4,
              -2
            );
            s.mesh.visible = true;
            s.life = s.maxLife;
            s.mesh.material.uniforms.uProgress.value = 0;
          }
        }
      });

      stars.rotation.y = elapsed * 0.015;
      stars.rotation.x = elapsed * 0.008;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      shootingStarGeo.dispose();
      shootingStars.forEach((s) => {
        (s.mesh.material as THREE.ShaderMaterial).dispose();
      });
      supernovas.forEach((s) => {
        s.mesh.geometry.dispose();
        s.mesh.material.dispose();
      });
      nebulaGroup.children.forEach((child) => {
        const mesh = child as THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [resolvedTheme]);

  return <div ref={containerRef} className="h-full w-full" />;
}
