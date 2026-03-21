import Link from 'next/link';
import { FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { socialLinks } from '@/lib/data';

function WelcomeCard() {
  return (
    <Card className="flex h-full flex-col justify-between">
      <CardContent className="pt-6">
        <span className="section-label">Introduction</span>
        <h2 className="heading-serif mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Always <span className="text-accent-primary">building</span>, always{' '}
          <span className="text-accent-primary">learning</span>.
        </h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            Currently building <span className="font-medium text-foreground">Blueprint AI</span> at
            Pega, where I own features end-to-end across the React frontend and Java backend --
            shipping AI-assisted features throughout the platform and recently winning Pega&apos;s
            annual hackathon across 225+. Blueprint AI was also recognized with MTLC&apos;s Product
            of the Year award for software and apps.
          </p>
          <p>
            Outside of work, I build to solve real problems. Most recently{' '}
            <span className="font-medium text-foreground">Remes</span>, an AI-powered outbound sales
            platform actively used by GTM representatives at ServiceNow, and{' '}
            <span className="font-medium text-foreground">Leafpad</span>, a developer tools suite
            with 500+ monthly visitors. I&apos;m driven by ambitious goals and the people around me
            who raise the bar.
          </p>
          <p>
            <a
              href="mailto:andydeng0224@gmail.com"
              className="text-accent-primary transition-colors hover:text-accent-primary/80"
            >
              andydeng0224@gmail.com
            </a>
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex gap-x-1.5">
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
                      className="h-8 w-8 rounded-sm transition-colors hover:border-accent-primary hover:text-accent-primary"
                    >
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="h-8 w-8 rounded-sm transition-colors hover:border-accent-primary hover:text-accent-primary"
                >
                  <a
                    href="/docs/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Resume"
                  >
                    <FileText className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Resume</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
}

export default WelcomeCard;
