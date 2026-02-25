import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card';
import { socialLinks } from '@/lib/data';
import { ModeToggle } from '../theme/theme-toggle';
import { Bird } from 'lucide-react';

function WelcomeCard() {
  return (
    <Card className="group">
      <CardHeader className="flex w-full flex-row justify-between gap-4">
        <div className="flex items-center gap-2">
          Welcome!
          <span className="text-hue">
            <Bird className="h-5 w-5" />
          </span>
        </div>

        <ModeToggle className="group-hover:text-hue" />
      </CardHeader>
      <CardContent>
        <CardDescription className="flex flex-col gap-y-4">
          <p>
            Software Engineer with 2+ years of experience building scalable, user-focused web
            applications. Currently building <span className="text-hue">Blueprint AI</span> products
            at Pega.
          </p>

          <p>
            At Pega, I&apos;ve developed numerous features from 0-1, ensuring best practices across
            React, TypeScript, accessibility, and scalability standards. I&apos;ve helped improve
            performance across the app, reducing initial load times by{' '}
            <span className="text-hue">75%</span> and improving app-wide performance ranging from
            25% to 75% through frontend and backend optimization.
          </p>

          <p>
            Previously at <span className="text-hue">forREAL</span>, I built a property management
            platform from the ground up using Next.js and Django, including apartment listings with
            maps and search algorithms, lease applications/approvals, automated document signing and
            identity verification flows (with Stripe and TransUnion), maintenance request tracking,
            and payment processing with Stripe (including auto-pay functionality).
          </p>

          <p>
            I find joy in working in high-velocity environments and working with teams with grit and
            intensity. I am always excited to build and work on ground-breaking products.
          </p>

          <p>
            Want to get in touch? You can reach me here:{' '}
            <a href="mailto:andydeng0224@gmail.com" className="text-hue hover:underline">
              andydeng0224@gmail.com
            </a>
          </p>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex gap-x-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Button
                key={link.label}
                variant="outline"
                size="icon"
                asChild
                className="group-hover:text-hue p-4"
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              </Button>
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
}

export default WelcomeCard;
