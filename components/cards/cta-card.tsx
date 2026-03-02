import Link from 'next/link';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { socialLinks } from '@/lib/data';
import { Mail } from 'lucide-react';

function CTACard() {
  return (
    <Card className="flex h-full w-full flex-col items-center justify-between gap-3 px-6 py-4 sm:flex-row sm:gap-4">
      <div className="flex items-center gap-3 sm:gap-4">
        <p className="text-sm text-foreground">Interested in working together?</p>
        <Button
          asChild
          className="shrink-0 bg-accent-primary text-white hover:bg-accent-primary/90"
        >
          <a href="mailto:andydeng0224@gmail.com?subject=Let's%20Work%20Together">
            <Mail className="h-4 w-4" />
            Get in Touch
          </a>
        </Button>
      </div>
      <div className="flex gap-1">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Button key={link.label} variant="ghost" size="icon" asChild>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <Icon className="h-4 w-4" />
              </Link>
            </Button>
          );
        })}
      </div>
    </Card>
  );
}

export default CTACard;
