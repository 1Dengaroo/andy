'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

export default function AuroraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isLight = resolvedTheme === 'light' || resolvedTheme === 'dotcom';

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uColor1: { value: new THREE.Color(isLight ? 0x7c3aed : 0x06b6d4) },
        uColor2: { value: new THREE.Color(isLight ? 0x2563eb : 0xc026d3) },
        uColor3: { value: new THREE.Color(isLight ? 0x059669 : 0x22c55e) },
        uColor4: { value: new THREE.Color(isLight ? 0xdb2777 : 0xf59e0b) },
        uOpacity: { value: isLight ? 0.35 : 0.25 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform vec3 uColor4;
        uniform float uOpacity;
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
          for (int i = 0; i < 5; i++) {
            v += a * noise(p);
            p *= 2.0;
            a *= 0.5;
          }
          return v;
        }

        void main() {
          vec2 uv = vUv;
          float aspect = uResolution.x / uResolution.y;
          uv.x *= aspect;

          float t = uTime * 0.15;

          // Create flowing aurora bands with more variation
          float band1 = fbm(vec2(uv.x * 1.5 + t, uv.y * 0.8 + t * 0.3));
          float band2 = fbm(vec2(uv.x * 1.2 - t * 0.7, uv.y * 1.0 + t * 0.2));
          float band3 = fbm(vec2(uv.x * 0.8 + t * 0.5, uv.y * 1.3 - t * 0.4));
          float band4 = fbm(vec2(uv.x * 1.8 + t * 0.9, uv.y * 0.6 - t * 0.6));

          // Spread across more of the screen
          float verticalMask = smoothstep(0.05, 0.35, vUv.y) * smoothstep(1.0, 0.55, vUv.y);

          // Combine bands with richer colors
          vec3 color = uColor1 * band1 + uColor2 * band2 + uColor3 * band3 + uColor4 * band4;
          float totalBand = band1 + band2 + band3 + band4;
          color = color / (totalBand + 0.001);

          // Boost saturation
          float luminance = dot(color, vec3(0.299, 0.587, 0.114));
          color = mix(vec3(luminance), color, 1.4);

          float intensity = totalBand * 0.25;
          intensity = smoothstep(0.2, 0.65, intensity);

          float alpha = intensity * verticalMask * uOpacity;

          gl_FragColor = vec4(color, alpha);
        }
      `
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      material.uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [resolvedTheme]);

  return <div ref={containerRef} className="h-full w-full" />;
}
