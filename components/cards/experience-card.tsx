'use client';

import { FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { experiences } from '@/lib/data';

function ExperienceCard() {
  return (
    <Card id="experience" className="group h-full pb-6">
      <CardHeader className="flex flex-row justify-between gap-4">
        <div>Experience</div>
        <Button variant="outline" size="icon" className="group-hover:text-hue" asChild>
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
        {/* Mobile: Accordion */}
        <div className="md:hidden">
          <Accordion type="single" collapsible defaultValue="0">
            {experiences.map((exp, index) => (
              <AccordionItem key={index} value={index.toString()}>
                <AccordionTrigger className="text-left hover:text-hue">
                  <div className="flex flex-col items-start gap-1">
                    <span className="font-semibold">
                      {exp.roles ? exp.roles[0].role : exp.role}
                    </span>
                    <span className="text-sm font-normal text-hue">@ {exp.company}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {exp.roles ? (
                    <div className="space-y-6">
                      {exp.roles.map((role, roleIndex) => (
                        <div key={roleIndex}>
                          <h4 className="font-semibold">{role.role}</h4>
                          <p className="mb-3 font-mono text-xs text-muted-foreground">
                            {role.date}
                          </p>
                          <ul className="space-y-2.5">
                            {role.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex gap-3 text-sm leading-relaxed">
                                <span className="shrink-0 text-hue">▹</span>
                                <span className="text-foreground/90">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <p className="mb-3 font-mono text-xs text-muted-foreground">{exp.date}</p>
                      <ul className="space-y-2.5">
                        {exp.achievements?.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex gap-3 text-sm leading-relaxed">
                            <span className="shrink-0 text-hue">▹</span>
                            <span className="text-foreground/90">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Desktop: Horizontal Tabs */}
        <div className="hidden md:block">
          <Tabs defaultValue="0">
            <TabsList className="mb-6 flex w-full justify-start gap-2 bg-transparent p-0">
              {experiences.map((exp, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  className="rounded-md border border-border px-4 py-2 text-sm data-[state=active]:border-hue data-[state=active]:bg-hue/10 data-[state=active]:text-hue"
                >
                  {exp.company}
                </TabsTrigger>
              ))}
            </TabsList>

            {experiences.map((exp, index) => (
              <TabsContent key={index} value={index.toString()} className="mt-0">
                {exp.roles ? (
                  <div className="space-y-6">
                    {exp.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="space-y-3">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {role.role} <span className="text-hue">@ {exp.company}</span>
                          </h3>
                          <p className="mt-1 font-mono text-xs text-muted-foreground">
                            {role.date}
                          </p>
                        </div>
                        <ul className="space-y-2.5">
                          {role.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex gap-3 text-sm leading-relaxed">
                              <span className="shrink-0 text-hue">▹</span>
                              <span className="text-foreground/90">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {exp.role} <span className="text-hue">@ {exp.company}</span>
                      </h3>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">{exp.date}</p>
                    </div>
                    <ul className="space-y-2.5">
                      {exp.achievements?.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex gap-3 text-sm leading-relaxed">
                          <span className="shrink-0 text-hue">▹</span>
                          <span className="text-foreground/90">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
