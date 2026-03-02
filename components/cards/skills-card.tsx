import { Card, CardContent, CardHeader } from '../ui/card';
import { skillCategories } from '@/lib/data';

function SkillsCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div>Skills</div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <p className="text-sm font-medium text-accent-primary">{category.title}</p>
              <p className="text-sm text-muted-foreground">{category.skills.join(', ')}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default SkillsCard;
