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
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            Software Engineer with 2+ years of experience building products from 0 to 1. Currently
            working on AI-powered development tools at{' '}
            <span className="font-medium text-foreground">Pega</span>, where I own features
            end-to-end across the React frontend and Java backend. Recently won Pega&apos;s annual
            hackathon across 225+ participants.
          </p>
          <p>
            I&apos;m a builder at heart. I thrive in fast-paced environments where I can take
            ownership and ship work that matters. On the side, I build projects across developer
            tooling and web applications -- including{' '}
            <span className="font-medium text-foreground">sigdiff</span>, an open source npm package
            for semantic code diffing, and{' '}
            <span className="font-medium text-foreground">Leafpad</span>, a developer tools suite
            with 1,200+ monthly users.
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
                      className="h-8 w-8 rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-primary hover:text-accent-primary active:translate-y-0"
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
                  className="h-8 w-8 rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-primary hover:text-accent-primary active:translate-y-0"
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
