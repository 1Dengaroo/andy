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
        <CardDescription className="flex flex-col gap-y-6">
          <p>
            Hi, I&apos;m <strong>Andy Deng</strong>, a front-end focused software engineer from New
            York, NY. Currently, I&apos;m working at Pegasystems in Boston, MA.
          </p>
          <p>
            Feel free to reach out to me if you have any projects in mind, or just to say hello.
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
