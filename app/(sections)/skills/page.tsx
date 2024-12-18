import SkillCategory from '@/components/skills/skill-category-card';

import { AlertCircle } from 'lucide-react';
import { skillCategories } from '@/lib/data';

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl gap-x-8 space-y-8 md:flex">
      <div className="space-y-4 pt-8">
        <h1 className="text-4xl font-extralight tracking-tight">
          Technical <span className="text-blue-600">Skills</span>
        </h1>
        <div className="flex items-start gap-2 rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 text-blue-400">
          <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0" />
          <p className="text-sm font-light leading-relaxed">
            These are technologies I&apos;ve worked with professionally. Each skill represents
            hands-on experience in real-world projects and applications.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} category={category} />
        ))}
      </div>
    </div>
  );
}
