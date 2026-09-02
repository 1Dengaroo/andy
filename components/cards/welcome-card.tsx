import { Card, CardContent } from '../ui/card';

function WelcomeCard() {
  return (
    <Card className="flex h-full flex-col">
      <CardContent className="pt-6">
        <span className="section-label">About</span>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a software engineer at{' '}
            <span className="font-medium text-foreground">CLEAR</span>, where I work on the payments
            and subscriptions platform behind over $1B in annual revenue and identity products used
            by millions of members. Before that I owned end-to-end development of Blueprint at Pega
            across the frontend, backend, and agentic infrastructure. I work fast, ship at quality,
            and ramp quickly in unfamiliar domains, thriving where the scope is broad and the
            problems are ambiguous.
          </p>
          <p>
            Outside of work, I build across AI, developer tooling, and web applications. I&apos;m
            drawn to scale and to teams that take engineering seriously. I want to work on systems
            used by millions, where the problems stay hard enough to grow into and the quality of
            the work shows.
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
    </Card>
  );
}

export default WelcomeCard;
