'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect, ReactNode } from 'react';

interface LoaderProps {
  finishLoading: () => void;
}

// Courtesy of Brittany Chiang - https://github.com/bchiang7/v4/blob/main/src/components/loader.js
const Loader = ({ finishLoading }: LoaderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    const animationTimeout = setTimeout(() => {
      finishLoading();
    }, 3200);

    return () => {
      clearTimeout(timeout);
      clearTimeout(animationTimeout);
    };
  }, [finishLoading]);

  return (
    <div
      className="loader-container fixed inset-0 z-50 flex items-center justify-center bg-transparent"
      style={{
        opacity: isMounted ? 1 : 0,
        animation: 'loaderFadeOut 200ms ease-in-out 3000ms forwards'
      }}
    >
      <div className="logo-wrapper">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              className="logo-path"
              d="M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 z"
              fill="none"
            />
            <text
              className="logo-letter"
              x="50"
              y="50"
              dominantBaseline="central"
              textAnchor="middle"
            >
              A
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default function LoaderWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [isLoading, setIsLoading] = useState(false); // Temporarily disabled

  useEffect(() => {
    if (!isHomePage) {
      setIsLoading(false);
    }
  }, [isHomePage]);

  return (
    <>
      {isLoading && <Loader finishLoading={() => setIsLoading(false)} />}
      <div style={{ display: isLoading ? 'none' : 'block' }}>{children}</div>
    </>
  );
}
