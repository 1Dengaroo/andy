'use client';

import { useState } from 'react';
import { FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { experiences } from '@/lib/data';

const VISIBLE_COUNT = 2;

function AchievementList({ achievements }: { achievements: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = achievements.length > VISIBLE_COUNT;
  const visible = expanded ? achievements : achievements.slice(0, VISIBLE_COUNT);

  return (
    <>
      <ul className="space-y-2.5">
        {visible.map((achievement, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed">
            <span className="shrink-0 text-accent-primary">▹</span>
            <span className="text-foreground/90">{achievement}</span>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          className="mt-2 text-sm text-accent-primary hover:underline"
        >
          {expanded ? 'Show less' : `Show ${achievements.length - VISIBLE_COUNT} more`}
        </button>
      )}
    </>
  );
}

function ExperienceCard() {
  return (
    <Card id="experience" className="group h-full pb-6">
      <CardHeader className="flex flex-row justify-between gap-4">
        <div>Experience</div>
        <Button variant="outline" size="icon" className="group-hover:text-accent-primary" asChild>
          <a
            href="/Andy_Deng_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
          >
            <FileText className="h-5 w-5" />
          </a>
        </Button>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible defaultValue="0">
          {experiences.map((exp, index) => (
            <AccordionItem
              key={index}
              value={index.toString()}
              className="border-b border-border/50"
            >
              <AccordionTrigger className="text-left hover:no-underline [&[data-state=open]]:text-accent-primary">
                <div className="flex w-full items-center justify-between pr-2">
                  <div className="flex flex-col items-start gap-0.5 sm:flex-row sm:items-center sm:gap-2">
                    <span className="font-semibold">
                      {exp.roles ? exp.roles[0].role : exp.role}
                    </span>
                    <span className="text-sm font-normal text-accent-primary">@ {exp.company}</span>
                  </div>
                  <span className="hidden font-mono text-xs text-muted-foreground sm:block">
                    {exp.roles ? exp.roles[0].date : exp.date}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {exp.roles ? (
                  <div className="space-y-6">
                    {exp.roles.map((role, roleIndex) => (
                      <div key={roleIndex}>
                        <h4 className="font-semibold">{role.role}</h4>
                        <p className="mb-3 font-mono text-xs text-muted-foreground">{role.date}</p>
                        <AchievementList achievements={role.achievements} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <p className="mb-3 font-mono text-xs text-muted-foreground sm:hidden">
                      {exp.date}
                    </p>
                    <AchievementList achievements={exp.achievements ?? []} />
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
