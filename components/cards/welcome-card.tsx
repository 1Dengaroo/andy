import { Card, CardContent } from '../ui/card';

function WelcomeCard() {
  return (
    <Card className="flex h-full flex-col">
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
    </Card>
  );
}

export default WelcomeCard;
