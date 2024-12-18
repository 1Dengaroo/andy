import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ScrollArea className="mb-16">
      <div className="py-16">
        <div className="w-full max-w-6xl">
          <Link href="/" className="group mb-8 inline-flex items-center gap-2">
            <ChevronLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span className="text-sm font-light">Back</span>
          </Link>
          {children}
        </div>
      </div>
    </ScrollArea>
  );
}
