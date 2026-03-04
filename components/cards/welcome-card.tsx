import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { socialLinks } from '@/lib/data';
import { Bird } from 'lucide-react';

function WelcomeCard() {
  return (
    <Card>
      <CardHeader className="flex w-full flex-row justify-between gap-4">
        <div className="flex items-center gap-2">
          Welcome!
          <span className="text-accent-primary">
            <Bird className="h-5 w-5 animate-float" />
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="flex flex-col gap-y-4">
          <p>
            Software Engineer with 2+ years of experience building products from 0-1. Currently
            building <span className="text-accent-primary">Blueprint AI</span> products at Pega.
          </p>

          <p>
            I find joy in working in high-velocity environments and working with teams with grit and
            intensity.
          </p>

          <p>
            Want to get in touch? You can reach me here:{' '}
            <a href="mailto:andydeng0224@gmail.com" className="text-accent-primary hover:underline">
              andydeng0224@gmail.com
            </a>
          </p>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex gap-x-2">
          <TooltipProvider>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Tooltip key={link.label}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="p-4 hover:text-accent-primary"
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
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
}

export default WelcomeCard;
