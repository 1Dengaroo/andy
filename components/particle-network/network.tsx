"use client";

import { useEffect, useRef } from "react";
import { Dot, DotsConfig, MousePosition } from "./types";

const CanvasDots: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const dotsRef = useRef<DotsConfig>({
    nb: 0,
    distance: 0,
    d_radius: 0,
    array: [],
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = (): void => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();

    ctx.lineWidth = 0.4;
    ctx.strokeStyle = "rgb(81, 162, 233)";

    const mousePosition: MousePosition = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const updateDotsConfig = (): void => {
      const windowSize = window.innerWidth;
      const newConfig: DotsConfig = {
        nb: 200,
        distance: 55,
        d_radius: 220,
        array: [],
      };

      if (windowSize > 1600) {
        newConfig.nb = 600;
        newConfig.distance = 80;
        newConfig.d_radius = 350;
      } else if (windowSize > 1300) {
        newConfig.nb = 575;
        newConfig.distance = 70;
        newConfig.d_radius = 300;
      } else if (windowSize > 1100) {
        newConfig.nb = 500;
        newConfig.distance = 65;
        newConfig.d_radius = 280;
      } else if (windowSize > 800) {
        newConfig.nb = 300;
        newConfig.distance = 60;
        newConfig.d_radius = 250;
      }

      dotsRef.current = newConfig;
    };
    updateDotsConfig();

    const draw = (): void => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (dotsRef.current.array.length === 0) {
        for (let i = 0; i < dotsRef.current.nb; i++) {
          dotsRef.current.array.push(new Dot(canvas));
        }
      }

      dotsRef.current.array.forEach((dot, i) => {
        if (i !== 0) {
          dot.animate(canvas.width, canvas.height);
        }
        dot.create(ctx, mousePosition, canvas.width);
      });

      dotsRef.current.array.forEach((dot1, i) => {
        dotsRef.current.array.forEach((dot2, j) => {
          if (i < j) {
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

                ctx.strokeStyle = `rgba(81, 162, 233, ${opacity})`;
                ctx.stroke();
              }
            }
          }
        });
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent): void => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;

      if (dotsRef.current.array[0]) {
        dotsRef.current.array[0].x = e.clientX;
        dotsRef.current.array[0].y = e.clientY;
      }
    };

    const handleResize = (): void => {
      updateCanvasSize();
      updateDotsConfig();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default CanvasDots;
