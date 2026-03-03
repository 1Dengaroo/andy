import Image from 'next/image';
import { Card } from '../ui/card';

function EducationCard() {
  return (
    <Card className="flex h-full items-center gap-4 p-6">
      <Image
        src="/bc-logo.svg"
        alt="Boston College logo"
        width={48}
        height={48}
        className="shrink-0"
      />
      <div>
        <p className="font-medium text-accent-primary">Boston College</p>
        <p className="text-sm text-foreground">B.A. Computer Science</p>
        <p className="text-xs text-muted-foreground">Class of 2024</p>
      </div>
    </Card>
  );
}

export default EducationCard;
