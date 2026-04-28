'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '../ui/card';

function AboutCard() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Card className="h-full overflow-hidden">
      <div className="relative h-full w-full overflow-hidden bg-muted">
        {!loaded && <div className="absolute inset-0 animate-pulse bg-muted" />}
        <Image
          src="/images/pfp.webp"
          alt="Andy Deng"
          fill
          sizes="(max-width: 1024px) 100vw, 25vw"
          loading="lazy"
          className={`object-cover transition-all duration-500 ${loaded ? 'opacity-100 hover:scale-[1.03]' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </Card>
  );
}

export default AboutCard;
