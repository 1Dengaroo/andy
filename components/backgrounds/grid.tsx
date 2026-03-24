'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

export default function GridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isLight = resolvedTheme === 'light' || resolvedTheme === 'dotcom';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 2, 5);
    camera.lookAt(0, 0, -10);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const gridColor = isLight ? 0x5566aa : 0x4488ff;

    // Create grid lines
    const gridSize = 40;
    const gridSpacing = 1;
    const positions: number[] = [];

    for (let z = -gridSize; z <= gridSize; z += gridSpacing) {
      positions.push(-gridSize, 0, z, gridSize, 0, z);
    }

    for (let x = -gridSize; x <= gridSize; x += gridSpacing) {
      positions.push(x, 0, -gridSize, x, 0, gridSize);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const material = new THREE.LineBasicMaterial({
      color: gridColor,
      transparent: true,
      opacity: isLight ? 0.25 : 0.2
    });

    const grid = new THREE.LineSegments(geometry, material);
    scene.add(grid);

    // Horizon glow
    const glowGeo = new THREE.PlaneGeometry(80, 0.5);
    const glowMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uColor: { value: new THREE.Color(gridColor) },
        uTime: { value: 0 }
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
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          float glow = smoothstep(0.5, 0.0, abs(vUv.y - 0.5));
          float pulse = 0.7 + 0.3 * sin(uTime * 0.5);
          gl_FragColor = vec4(uColor, glow * 0.15 * pulse);
        }
      `
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    glowMesh.position.set(0, 0.01, -20);
    glowMesh.rotation.x = -Math.PI / 2;
    scene.add(glowMesh);

    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      grid.position.z = (elapsed * 0.5) % gridSpacing;

      glowMat.uniforms.uTime.value = elapsed;

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
      glowGeo.dispose();
      glowMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [resolvedTheme]);

  return <div ref={containerRef} className="h-full w-full" />;
}
