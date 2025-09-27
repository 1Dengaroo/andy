'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';

function TimeCard() {
  const TIMEZONE = 'EST';
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const estTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(new Date());

      setTime(estTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="h-full w-full">
      <CardContent className="pt-6">
        <div className="text-center align-middle font-serif text-2xl">
          {time} {TIMEZONE}
        </div>
      </CardContent>
    </Card>
  );
}

export default TimeCard;
