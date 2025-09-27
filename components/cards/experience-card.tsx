'use client';

import { FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { experiences } from '@/lib/data';

function ExperienceCard() {
  return (
    <Card className="group h-full pb-6">
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
        <Tabs defaultValue="0" className="flex gap-6">
          <TabsList className="flex h-auto flex-col items-stretch justify-start bg-transparent p-0">
            {experiences.map((exp, index) => (
              <TabsTrigger
                key={index}
                value={index.toString()}
                className="data-[state=active]:text-hue data-[state=active]:border-hue data-[state=active]:bg-hue/10 justify-start whitespace-nowrap rounded-none border-l-2 border-border px-4 py-3 text-left text-sm"
              >
                {exp.company}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex-1 overflow-y-auto">
            {experiences.map((exp, index) => (
              <TabsContent key={index} value={index.toString()} className="mt-0" tabIndex={-1}>
                <h3 className="mb-1 text-lg font-semibold">
                  {exp.role} <span className="text-hue">@ {exp.company}</span>
                </h3>

                <p className="mb-4 font-mono text-xs text-muted-foreground">{exp.date}</p>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex gap-3 text-sm leading-relaxed">
                      <span className="text-hue">▹</span>
                      <span className="text-foreground/90">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
