import { ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { LucideIcon } from 'lucide-react';

interface Skill {
  name?: string;
  icon?: LucideIcon;
  description?: string;
}

interface SkillCategory {
  title: string;
  skills: (Skill | string)[];
}

interface SkillCategoryProps {
  category: SkillCategory;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  return (
    <Card className="group relative border-white/20 bg-black/30 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-black/40 hover:shadow-lg">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between text-xl font-light">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {category.title}
          </span>
          <ChevronRight className="h-5 w-5 text-blue-400/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-400" />
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, index) => {
            const skillObj = typeof skill === 'string' ? { name: skill } : skill;

            return (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-light tracking-wide text-white/90 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                      {skillObj.icon && <skillObj.icon className="h-4 w-4 text-blue-400" />}
                      <span>{skillObj.name}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">
                      {skillObj.description || `Experience with ${skillObj.name}`}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCategory;
