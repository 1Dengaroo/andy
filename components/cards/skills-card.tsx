import { Card, CardContent } from '../ui/card';
import { skillCategories } from '@/lib/data';

function SkillsCard() {
  return (
    <Card className="flex flex-1 flex-col">
      <CardContent className="pt-6">
        <span className="section-label">Technical Skills</span>
        <div className="mt-3 space-y-4">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground/60">
                {category.title}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span key={skill} className="tag-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default SkillsCard;
