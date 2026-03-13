'use client';

import { useRef, useEffect } from 'react';

const CLIPS = [
  { src: '/videos/demo/clip-back.mp4', x: -28, rotate: -8, scale: 0.85, opacity: 0.6, z: 0 },
  { src: '/videos/demo/clip-mid.mp4', x: 22, rotate: 6, scale: 0.9, opacity: 0.75, z: 1 },
  { src: '/videos/demo/clip-front.mp4', x: 0, rotate: 0, scale: 1, opacity: 1, z: 2 }
] as const;

export function DemoPreview() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((v) => {
      if (!v) return;
      v.play().catch(() => {});
    });
  }, []);

  return (
    <div className="relative flex items-center justify-center" style={{ width: 160, height: 140 }}>
      {CLIPS.map((clip, i) => (
        <div
          key={clip.src}
          className="absolute"
          style={{
            zIndex: clip.z,
            transform: `translateX(${clip.x}px) rotate(${clip.rotate}deg) scale(${clip.scale})`,
            opacity: clip.opacity
          }}
        >
          <div
            className="overflow-hidden rounded-lg border border-border/40 bg-black shadow-lg"
            style={{ width: 72, aspectRatio: '9/16' }}
          >
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={clip.src}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
