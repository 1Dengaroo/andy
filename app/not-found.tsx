import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8">
      <div className="space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-6xl font-extralight">
            4<span className="text-blue-600">0</span>4
          </h1>
          <p className="text-xl font-light text-gray-400">Page not found</p>
        </div>

        <Link href="/" className="group relative inline-flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-6 py-2 text-sm backdrop-blur-md transition-all duration-300 group-hover:border-white/40 group-hover:bg-black/50">
            <ChevronLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span className="font-light tracking-wide">Return Home</span>
          </div>
          <div className="absolute -inset-[1px] -z-10 rounded-full bg-gradient-to-r from-blue-400 to-red-700 opacity-0 blur transition-opacity duration-300 group-hover:opacity-40"></div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
