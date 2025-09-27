'use client';

import { Card, CardContent } from '../ui/card';

function PlaygroundCard() {
  const hueColors = [
    { color: '217 91% 53%', label: 'Blue' },
    { color: '142 76% 36%', label: 'Green' },
    { color: '0 84% 60%', label: 'Red' },
    { color: '280 83% 60%', label: 'Purple' },
    { color: '45 93% 47%', label: 'Orange' }
  ];

  const handleColorClick = (hue: string) => {
    document.documentElement.style.setProperty('--hue', hue);
  };

  return (
    <Card className="group relative h-full overflow-hidden">
      <CardContent className="relative z-10 pt-6">
        <div className="flex justify-center gap-3">
          {hueColors.map((item) => (
            <button
              key={item.color}
              onClick={() => handleColorClick(item.color)}
              className="h-10 w-10 rounded-full border-2 border-border transition-transform hover:scale-110"
              style={{ backgroundColor: `hsl(${item.color})` }}
              aria-label={`Change theme to ${item.label}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default PlaygroundCard;
