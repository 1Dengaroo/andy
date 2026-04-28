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
        <span className="section-label">About</span>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a full-stack product engineer, currently at{' '}
            <span className="font-medium text-foreground">Pega</span>, where I&apos;m responsible
            for end-to-end development of Blueprint features and enhancements across the frontend
            and backend. I have expertise in modern TypeScript, Next.js, and event-driven backend
            systems to develop elegant user experiences, scalable backend architecture, and robust
            LLM infrastructure.
          </p>
          <p>
            I&apos;m independent, work fast, and ship at quality. The work I find most rewarding
            sits where product meets infrastructure, where decisions compound and the technical bar
            is high enough to keep learning. Outside of work, I build across AI, developer tooling,
            and web. Recent projects include{' '}
            <span className="font-medium text-foreground">Remes</span>, an AI-powered outbound sales
            platform, <span className="font-medium text-foreground">sigdiff</span>, an open-source
            npm package for semantic code diffing, and{' '}
            <span className="font-medium text-foreground">Leafpad</span>, a developer tools suite
            with 1,200+ monthly active users.
          </p>
          <p>
            I&apos;m drawn to scale and to teams that take engineering seriously. I want to work on
            products used by millions, where the problems stay hard enough to grow into and the
            quality of the work shows.
          </p>
          <p>
            Reach out:{' '}
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
