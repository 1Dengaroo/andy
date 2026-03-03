import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3 px-2">
      <Card className="w-full p-8 text-center">
        <h1 className="text-7xl font-extralight tracking-tight">
          4<span className="text-accent-primary">0</span>4
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">This page doesn&apos;t exist</p>
        <div className="mt-6">
          <Button asChild>
            <Link href="/" className="gap-2">
              <ArrowLeft size={16} />
              Back home
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
