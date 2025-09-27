import { Card } from '../ui/card';

function FooterCard() {
  return (
    <Card className="flex h-full min-h-20 flex-col items-center justify-center px-6 text-xs text-muted-foreground">
      <p className="text-center">
        Made by{' '}
        <a
          href="https://linkedin.com/in/andydeng-"
          target="_blank"
          rel="noopener noreferrer"
          className="text-hue font-medium transition-colors hover:underline"
          aria-label="Connect with Andy Deng on LinkedIn"
        >
          Andy Deng
        </a>
        {' • '}
        <a
          href="https://github.com/1dengaroo/andy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-hue transition-colors hover:underline"
          aria-label="View source code on GitHub"
        >
          Source Code
        </a>
      </p>
    </Card>
  );
}

export default FooterCard;
