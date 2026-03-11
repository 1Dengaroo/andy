import { Card, CardContent } from '../ui/card';
import { skillCategories } from '@/lib/data';

function SkillsCard() {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <span className="section-label">Toolkit</span>
        <div className="mt-3 space-y-3">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <p className="mb-1.5 text-xs font-medium uppercase tracking-wider text-foreground/70">
                {category.title}
              </p>
              <div className="flex flex-wrap gap-1">
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
