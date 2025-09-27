import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

function AboutCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          About <span className="text-hue">Me</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="flex flex-col gap-y-4">
          <p>
            I&apos;m a front-end focused software engineer from{' '}
            <span className="text-hue">New York, NY</span>.
          </p>
          <div>
            <p>My favorite tools to work with include:</p>
            <ul className="list-inside list-disc">
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Ruby</li>
              <li>Rails</li>
              <li>Git</li>
            </ul>
          </div>

          <p>
            Currently at Pegasystems, I work on Blueprint GenAI workflow automation serving
            enterprise clients.
          </p>

          <p>
            Previously, I&apos;ve contributed to startups and research projects, building payment
            processing systems, lease management platforms, matching algorithms.
          </p>

          <div>
            <p>Some tools/skills I am hoping to gain more exposure to:</p>
            <ul className="list-inside list-disc">
              <li>Mobile development</li>
              <li>AWS</li>
              <li>CI/CD deployment pipelines</li>
              <li>Jenkins</li>
            </ul>
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
