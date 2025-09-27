import { Card } from '../ui/card';
import { Button } from '../ui/button';

function FooterCard() {
  return (
    <Card className="flex h-full min-h-20 flex-col items-center justify-center px-6 text-xs text-muted-foreground">
      <p className="text-center">
        Made by{' '}
        <Button variant="link" asChild className="text-hue h-auto p-0 text-xs font-medium">
          <a
            href="https://linkedin.com/in/andydeng-"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Andy Deng on LinkedIn"
          >
            Andy Deng
          </a>
        </Button>
        {' • '}
        <Button variant="link" asChild className="text-hue h-auto p-0 text-xs">
          <a
            href="https://github.com/1dengaroo/andy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
          >
            Source Code
          </a>
        </Button>
      </p>
    </Card>
  );
}

export default FooterCard;
