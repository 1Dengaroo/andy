'use client';

import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { everaBackgroundImage } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

function EveraCard() {
  const router = useRouter();

  const handleCardClick = () => {
    router.push('https://everafashion.com');
  };

  return (
    <Card
      className="group relative h-full cursor-pointer overflow-hidden transition-opacity hover:opacity-80"
      onClick={handleCardClick}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${everaBackgroundImage})` }}
      />
      <CardContent className="relative z-10 pt-6">
        <div className="flex items-center justify-between px-6">
          <p className="text-center align-middle font-serif text-2xl">Evera Fashion</p>
          <Button
            variant="link"
            size="icon"
            aria-label="Visit Evera Fashion"
            onClick={handleCardClick}
            className="group-hover:text-hue"
          >
            <ArrowUpRight className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default EveraCard;
