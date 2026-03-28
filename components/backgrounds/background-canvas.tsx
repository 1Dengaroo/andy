'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const CosmosBackground = dynamic(() => import('./cosmos'), { ssr: false });
const AuroraBackground = dynamic(() => import('./aurora'), { ssr: false });
const GridBackground = dynamic(() => import('./grid'), { ssr: false });

const componentMap: Record<string, React.ComponentType> = {
  cosmos: CosmosBackground,
  aurora: AuroraBackground,
  grid: GridBackground
};

export default function BackgroundCanvas() {
  const [backgroundId, setBackgroundId] = useState('none');

  useEffect(() => {
    const stored = localStorage.getItem('background-id');
    if (stored !== null) {
      setBackgroundId(stored);
    }

    const handleChange = (e: CustomEvent<string>) => {
      setBackgroundId(e.detail);
    };

    window.addEventListener('background-change', handleChange as EventListener);
    return () => {
      window.removeEventListener('background-change', handleChange as EventListener);
    };
  }, []);

  if (backgroundId === 'none' || !componentMap[backgroundId]) return null;

  const Component = componentMap[backgroundId];

  return (
    <div className="fixed inset-0 h-full w-full">
      <Component />
    </div>
  );
}
