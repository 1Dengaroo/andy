import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

function AboutCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          About <span className="inline-block animate-wiggle text-accent-primary">Me</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-lg">
          <Image src="/pfp.webp" alt="Andy Deng" fill className="object-cover" />
        </div>
        <CardDescription className="flex flex-col gap-y-4">
          <p>
            I&apos;m a front-end focused software engineer from{' '}
            <span className="text-accent-primary">New York, NY</span>.
          </p>
          <p>I move quickly, take ownership seriously, and care deeply about product quality.</p>
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
