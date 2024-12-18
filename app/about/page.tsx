import { Github, Linkedin, Mail, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const Page = () => {
  const socialLinks = [
    { href: 'https://github.com/1Dengaroo', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/andydeng-', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:andydeng0224@gmail.com', icon: Mail, label: 'Email' }
  ];

  return (
    <div className="max-w-3xl space-y-8">
      <Link href="/" className="group inline-flex items-center gap-2">
        <ChevronLeft
          size={16}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        <span className="text-sm font-light">Back</span>
      </Link>

      <div className="space-y-6">
        <h1 className="text-4xl font-extralight">
          About <span className="text-blue-600">Me</span>
        </h1>

        <div className="space-y-4 text-lg font-light leading-relaxed">
          <p>
            I&apos;m a full stack software engineer with a passion for building elegant user
            interfaces and designing maintainable system architecture. I have expertise in a wide
            variety of modern web technologies, as well as experience working with game development
            engines and data visualization tools/libraries.
          </p>

          <p>
            Currently, I&apos;m a software engineer at <strong>forREAL</strong>, where I work on
            building and maintaining an end-to-end apartment renting platform, where I make
            important frontend and backend contributions to our payments, lease, authentication, and
            apartment listing services.
          </p>

          <p>
            Previously, I have worked on diverse projects including e-commerce platforms,
            recommendation systems, and esports platforms. Feel free to reach out to me if you have
            any questions or would like to collaborate on a project! (ps. Source code for this
            website is available on my GitHub!)
          </p>
        </div>

        <div className="flex gap-4 pt-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm backdrop-blur-md transition-all duration-300 group-hover:border-white/40 group-hover:bg-black/50">
                <link.icon size={16} />
                <span className="font-light tracking-wide">{link.label}</span>
              </div>
              <div className="absolute -inset-[1px] -z-10 rounded-full bg-gradient-to-r from-blue-400 to-red-700 opacity-0 blur transition-opacity duration-300 group-hover:opacity-40"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
