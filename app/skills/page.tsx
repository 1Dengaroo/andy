import Link from 'next/link';
import SkillCategory from '@/components/skills/skill-category-card';
import { skillCategories } from '@/lib/data';
import { ChevronLeft } from 'lucide-react';

const Page = () => {
  return (
    <div className="max-w-4xl space-y-8">
      <Link href="/" className="group inline-flex items-center gap-2">
        <ChevronLeft
          size={16}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        <span className="text-sm font-light">Back</span>
      </Link>

      <div>
        <h1 className="text-4xl font-extralight">
          Technical <span className="text-blue-600">Skills</span>
        </h1>
        <p className="mt-4 text-lg font-light leading-relaxed text-white/80">
          A comprehensive overview of my technical expertise and tools I work with
        </p>
      </div>

      <div className="space-y-6">
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} title={category.title} skills={category.skills} />
        ))}
      </div>
    </div>
  );
};

export default Page;
