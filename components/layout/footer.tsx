import Link from 'next/link';
import { socialLinks, navigationLinks } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 animate-fade-slide-up p-3 opacity-0 backdrop-blur-sm [animation-delay:800ms] sm:p-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-around gap-3 pb-2 sm:gap-4 md:flex-row md:justify-between md:pb-0">
        <div className="order-1 flex gap-4 sm:gap-6 md:order-2">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-light text-white transition-colors duration-300 hover:text-blue-400 sm:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="order-3 flex gap-2 sm:gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label={link.label}
            >
              <div className="rounded-full border border-white/20 bg-black/30 p-1.5 backdrop-blur-md transition-all duration-300 group-hover:border-white/40 group-hover:bg-black/50 sm:p-2">
                <link.icon
                  size={14}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute -inset-[1px] -z-10 rounded-full bg-gradient-to-r from-blue-400 to-red-700 opacity-0 blur transition-opacity duration-300 group-hover:opacity-40"></div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
