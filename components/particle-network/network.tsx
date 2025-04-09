'use client';

import { useEffect, useRef } from 'react';
import { Dot, DotsConfig, MousePosition, colorDot } from './types';

const CanvasDots: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const dotsRef = useRef<DotsConfig>({
    nb: 0,
    distance: 0,
    d_radius: 0,
    array: []
  });

  const primaryColor = useRef<string>(colorDot[0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = (): void => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();

    ctx.lineWidth = 0.4;
    ctx.strokeStyle = primaryColor.current;

    const mousePosition: MousePosition = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };

    const updateDotsConfig = (): void => {
      const windowSize = window.innerWidth;
      const newConfig: DotsConfig = {
        nb: 200,
        distance: 55,
        d_radius: 220,
        array: []
      };

      if (windowSize > 1600) {
        newConfig.nb = 400;
        newConfig.distance = 80;
        newConfig.d_radius = 350;
      } else if (windowSize > 1300) {
        newConfig.nb = 350;
        newConfig.distance = 70;
        newConfig.d_radius = 300;
      } else if (windowSize > 1100) {
        newConfig.nb = 300;
        newConfig.distance = 65;
        newConfig.d_radius = 280;
      } else if (windowSize > 800) {
        newConfig.nb = 250;
        newConfig.distance = 60;
        newConfig.d_radius = 250;
      }

      dotsRef.current = newConfig;
    };
    updateDotsConfig();

    // Extract the RGB values from the primary color for connection lines
    const rgbMatch = primaryColor.current.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    const lineColorRGB = rgbMatch
      ? { r: parseInt(rgbMatch[1]), g: parseInt(rgbMatch[2]), b: parseInt(rgbMatch[3]) }
      : { r: 81, g: 162, b: 233 }; // Fallback to original blue

    const friction = 0.98;
    const repelRadius = 100;
    const repelForce = 0.05;
    const baselineSpeed = 0.1;

    const draw = (): void => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (dotsRef.current.array.length === 0) {
        for (let i = 0; i < dotsRef.current.nb; i++) {
          const dot = new Dot(canvas);
          dot.vx = (Math.random() - 0.5) * 0.4;
          dot.vy = (Math.random() - 0.5) * 0.4;
          dotsRef.current.array.push(dot);
        }
      }

      dotsRef.current.array.forEach((dot, i) => {
        const dx = dot.x - mousePosition.x;
        const dy = dot.y - mousePosition.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const speed = Math.sqrt(dot.vx * dot.vx + dot.vy * dot.vy);

        if (dist < repelRadius && dist > 0) {
          const angle = Math.atan2(dy, dx);
          dot.vx += Math.cos(angle) * repelForce;
          dot.vy += Math.sin(angle) * repelForce;
        }

        if (speed > baselineSpeed) {
          dot.vx *= friction;
          dot.vy *= friction;
        } else {
          if (speed === 0) {
            const angle = Math.random() * Math.PI * 2;
            dot.vx = Math.cos(angle) * baselineSpeed;
            dot.vy = Math.sin(angle) * baselineSpeed;
          } else {
            const angle = Math.atan2(dot.vy, dot.vx);
            dot.vx = Math.cos(angle) * baselineSpeed;
            dot.vy = Math.sin(angle) * baselineSpeed;
          }
        }

        if (i !== 0) {
          dot.animate(canvas.width, canvas.height);
        }

        dot.create(ctx, mousePosition, canvas.width);
      });

      const gridSize = dotsRef.current.distance;
      const grid: { [key: string]: Dot[] } = {};

      // Place dots in grid cells
      dotsRef.current.array.forEach((dot) => {
        const cellX = Math.floor(dot.x / gridSize);
        const cellY = Math.floor(dot.y / gridSize);
        const key = `${cellX},${cellY}`;

        if (!grid[key]) {
          grid[key] = [];
        }
        grid[key].push(dot);
      });

      // Check connections only for nearby dots
      dotsRef.current.array.forEach((dot1, i) => {
        const cellX = Math.floor(dot1.x / gridSize);
        const cellY = Math.floor(dot1.y / gridSize);

        // Check 9 surrounding cells (3x3 grid)
        for (let x = cellX - 1; x <= cellX + 1; x++) {
          for (let y = cellY - 1; y <= cellY + 1; y++) {
            const key = `${x},${y}`;
            const cellDots = grid[key];

            if (cellDots) {
              cellDots.forEach((dot2) => {
                // Skip if it's the same dot or already processed
                const j = dotsRef.current.array.indexOf(dot2);
                if (i >= j) return;

                const dx = dot1.x - dot2.x;
                const dy = dot1.y - dot2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < dotsRef.current.distance) {
                  const mouseDistance = Math.sqrt(
                    Math.pow((dot1.x + dot2.x) / 2 - mousePosition.x, 2) +
                      Math.pow((dot1.y + dot2.y) / 2 - mousePosition.y, 2)
                  );

                  if (mouseDistance < dotsRef.current.d_radius) {
                    ctx.beginPath();
                    ctx.moveTo(dot1.x, dot1.y);
                    ctx.lineTo(dot2.x, dot2.y);

                    const opacity = Math.max(
                      0.15,
                      1.2 -
                        mouseDistance / dotsRef.current.d_radius -
                        (distance / dotsRef.current.distance) * 0.5
                    );

                    ctx.strokeStyle = `rgba(${lineColorRGB.r}, ${lineColorRGB.g}, ${lineColorRGB.b}, ${opacity})`;
                    ctx.stroke();
                  }
                }
              });
            }
          }
        }
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    let lastMouseMoveTime = 0;
    const handleMouseMove = (e: MouseEvent): void => {
      const now = performance.now();
      if (now - lastMouseMoveTime > 16) {
        mousePosition.x = e.clientX;
        mousePosition.y = e.clientY;
        lastMouseMoveTime = now;
      }
    };

    const handleResize = (): void => {
      updateCanvasSize();

      const windowSize = window.innerWidth;

      if (windowSize > 1600) {
        dotsRef.current.distance = 80;
        dotsRef.current.d_radius = 350;
      } else if (windowSize > 1300) {
        dotsRef.current.distance = 70;
        dotsRef.current.d_radius = 300;
      } else if (windowSize > 1100) {
        dotsRef.current.distance = 65;
        dotsRef.current.d_radius = 280;
      } else if (windowSize > 800) {
        dotsRef.current.distance = 60;
        dotsRef.current.d_radius = 250;
      } else {
        dotsRef.current.distance = 55;
        dotsRef.current.d_radius = 220;
      }

      const currentParticles = dotsRef.current.array.length;
      let targetParticles = 200;

      if (windowSize > 1600) targetParticles = 400;
      else if (windowSize > 1300) targetParticles = 350;
      else if (windowSize > 1100) targetParticles = 300;
      else if (windowSize > 800) targetParticles = 250;

      if (Math.abs(currentParticles - targetParticles) > targetParticles * 0.3) {
        dotsRef.current.array = [];
        dotsRef.current.nb = targetParticles;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 h-full w-full">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
};

export default CanvasDots;
