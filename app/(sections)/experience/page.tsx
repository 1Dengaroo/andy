import { experiences } from '@/lib/data';

const Page = () => {
  return (
    <>
      <h1 className="mb-12 text-4xl font-extralight">
        Professional <span className="text-blue-600">Experience</span>
      </h1>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className={`space-y-4`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-light text-white">
                {exp.role} · <span className="text-blue-400">{exp.company}</span>
              </h2>
              <div className="text-sm font-light text-gray-400">
                {exp.location} · {exp.date}
              </div>
            </div>

            <ul className="space-y-2 text-sm font-light leading-relaxed">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-blue-400">›</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
