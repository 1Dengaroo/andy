import React from 'react';
import { skillCategories } from '@/lib/data';

const Page = () => {
  return (
    <div className="md:flex-start items-center space-y-4 md:flex md:gap-4">
      <div>
        <h1 className="text-4xl font-extralight">
          Technical <span className="text-blue-600">Skills</span>
        </h1>
        <p className="mt-4 text-lg font-light leading-relaxed text-white/80">
          Here are some of the technologies I have worked with in a professional setting.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="group relative overflow-hidden rounded-xl border border-white/20 bg-black/30 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-black/50"
          >
            <div className="absolute -inset-1 -z-10 bg-gradient-to-r from-blue-400 to-red-700 opacity-0 blur transition-opacity duration-300 group-hover:opacity-40" />

            <h2 className="mb-4 text-xl font-light text-blue-400">{category.title}</h2>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-light transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
