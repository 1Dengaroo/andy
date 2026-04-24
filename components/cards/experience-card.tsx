'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { experiences } from '@/lib/data';

const VISIBLE_COUNT = 2;

function AchievementList({ achievements }: { achievements: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = achievements.length > VISIBLE_COUNT;
  const visible = expanded ? achievements : achievements.slice(0, VISIBLE_COUNT);

  return (
    <>
      <ul className="space-y-2">
        {visible.map((achievement, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-primary" />
            <span className="text-muted-foreground">{achievement}</span>
          </li>
        ))}
      </ul>
      {hasMore && (
        <Button
          variant="link"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          className="mt-2 h-auto p-0 font-mono text-xs text-accent-primary transition-colors hover:text-accent-primary/80 hover:no-underline"
        >
          {expanded ? '- Show less' : `+ ${achievements.length - VISIBLE_COUNT} more`}
        </Button>
      )}
    </>
  );
}

function ExperienceCard() {
  return (
    <Card id="experience" className="h-full pb-6">
      <CardContent className="pt-6">
        <span className="section-label">Experience</span>
        <Accordion type="single" collapsible defaultValue="0" className="mt-3">
          {experiences.map((exp, index) => (
            <AccordionItem
              key={index}
              value={index.toString()}
              className="border-b border-border/30"
            >
              <AccordionTrigger className="text-left hover:no-underline [&[data-state=open]]:text-accent-primary">
                <div className="flex w-full items-center justify-between pr-2">
                  <div className="flex flex-col items-start gap-0.5 sm:flex-row sm:items-center sm:gap-2">
                    {exp.roles ? (
                      <span className="text-sm font-semibold text-accent-primary">
                        {exp.company}
                      </span>
                    ) : (
                      <>
                        <span className="text-sm font-semibold">{exp.role}</span>
                        <span className="text-xs text-accent-primary">@ {exp.company}</span>
                      </>
                    )}
                  </div>
                  <span className="hidden font-mono text-xs text-muted-foreground sm:block">
                    {exp.roles ? exp.dateRange : exp.date}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {exp.roles ? (
                  <div className="space-y-5">
                    {exp.roles.map((role, roleIndex) => (
                      <div key={roleIndex}>
                        <h4 className="text-sm font-semibold">{role.role}</h4>
                        <p className="mb-2.5 font-mono text-xs text-muted-foreground">
                          {role.date}
                        </p>
                        <AchievementList achievements={role.achievements} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <p className="mb-2.5 font-mono text-xs text-muted-foreground sm:hidden">
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
