import Link from 'next/link';
import { Code2, User2, BookText, ChevronRight } from 'lucide-react';

const navLinks = [
  { href: '/about', icon: User2, text: 'About' },
  { href: '/skills', icon: Code2, text: 'Skills' },
  { href: '/experience', icon: BookText, text: 'Experience' }
];

const Navbar = () => {
  return (
    <div className="absolute bottom-12 flex gap-4">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="animate-fade-slide-up group relative opacity-0 [animation-delay:600ms]"
        >
          <div className="flex items-center gap-3 rounded-full border border-white/20 bg-black/30 px-6 py-2 text-sm backdrop-blur-md transition-all duration-300 group-hover:border-white/40 group-hover:bg-black/50">
            <link.icon size={16} className="transition-transform duration-300" />
            <span className="relative font-light tracking-wide">{link.text}</span>
            <ChevronRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
          <div className="absolute -inset-[1px] -z-10 rounded-full bg-gradient-to-r from-blue-400 to-red-700 opacity-0 blur transition-opacity duration-300 group-hover:opacity-40"></div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
