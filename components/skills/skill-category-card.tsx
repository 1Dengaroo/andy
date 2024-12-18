const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="group relative ml-8 before:absolute before:-left-[41px] before:top-3 before:h-4 before:w-4 before:rounded-full before:border-2 before:border-blue-400 before:bg-black before:transition-all before:duration-300 before:content-[''] after:absolute after:-bottom-12 after:-left-[33px] after:top-3 after:w-[2px] after:bg-gradient-to-b after:from-blue-400/50 after:to-transparent after:content-[''] last:after:hidden before:hover:border-blue-300 before:hover:bg-blue-400/20">
    <div className="relative mb-6 inline-block">
      <h3 className="text-2xl font-light tracking-wider transition-colors duration-300 group-hover:text-blue-400">
        <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
          {title}
        </span>
      </h3>
    </div>

    <div className="mb-12 flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="relative overflow-hidden rounded-sm bg-gradient-to-r from-black/40 to-black/20 px-4 py-1.5 text-sm font-light tracking-wider text-white/90 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[100%] before:bg-gradient-to-r before:from-blue-600/10 before:to-purple-600/10 before:transition-transform before:duration-300 hover:text-white hover:before:translate-y-0"
        >
          {skill}
          <div className="absolute inset-0 -z-20 bg-gradient-to-r from-blue-400/5 to-purple-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </span>
      ))}
    </div>
  </div>
);

export default SkillCategory;
