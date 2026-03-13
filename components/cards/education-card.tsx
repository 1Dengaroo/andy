import Image from 'next/image';
import { Card } from '../ui/card';

function EducationCard() {
  return (
    <Card className="flex h-full items-center gap-4 p-5">
      <Image
        src="/logos/bc-logo.svg"
        alt="Boston College logo"
        width={40}
        height={40}
        className="shrink-0"
      />
      <div className="min-w-0">
        <p className="text-sm font-medium text-foreground">Boston College</p>
        <p className="text-xs text-muted-foreground">
          B.A. Computer Science
          <span className="mx-1.5 text-border">|</span>
          2024
        </p>
      </div>
    </Card>
  );
}

export default EducationCard;
