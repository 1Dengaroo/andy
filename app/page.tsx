import MainCard from '@/components/cards/welcome-card';
import AboutCard from '@/components/cards/about-card';
import TimeCard from '@/components/cards/time-card';
import ProjectsCard from '@/components/cards/evera-card';
import ExperienceCard from '@/components/cards/experience-card';
import FooterCard from '@/components/cards/footer-card';
import LoopkitCard from '@/components/cards/loopkit-card';
import SkillsCard from '@/components/cards/skills-card';
import EducationCard from '@/components/cards/education-card';
import CTACard from '@/components/cards/cta-card';
import Controls from '@/components/layout/controls';

const Page = () => {
  const DELAY_INCREMENT = 300;

  return (
    <div className="mb-8 mt-4 flex w-full flex-col items-center gap-3 px-2">
      <div className="mx-auto w-full max-w-7xl animate-fade-slide-up opacity-0">
        <Controls />
      </div>

      {/* Row 1: Welcome + Experience (left) | About + Skills (right) */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 lg:grid-cols-4">
        <div className="flex flex-col gap-3 lg:col-span-3">
          <div
            className="animate-fade-slide-up opacity-0"
            style={{ animationDelay: `${DELAY_INCREMENT * 0}ms` }}
          >
            <MainCard />
          </div>
          <div
            className="flex-1 animate-fade-slide-up opacity-0"
            style={{ animationDelay: `${DELAY_INCREMENT * 1}ms` }}
          >
            <ExperienceCard />
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:col-span-1">
          <div
            className="h-full animate-fade-slide-up opacity-0"
            style={{ animationDelay: `${DELAY_INCREMENT * 2}ms` }}
          >
            <AboutCard />
          </div>
          <div
            className="h-full animate-fade-slide-up opacity-0"
            style={{ animationDelay: `${DELAY_INCREMENT * 3}ms` }}
          >
            <SkillsCard />
          </div>
        </div>
      </div>

      {/* Row 2: Projects (3 cols) + Education (1 col) */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div
          className="h-full animate-fade-slide-up opacity-0"
          style={{ animationDelay: `${DELAY_INCREMENT * 4}ms` }}
        >
          <TimeCard />
        </div>
        <div
          className="h-full animate-fade-slide-up opacity-0"
          style={{ animationDelay: `${DELAY_INCREMENT * 5}ms` }}
        >
          <ProjectsCard />
        </div>
        <div
          className="h-full animate-fade-slide-up opacity-0"
          style={{ animationDelay: `${DELAY_INCREMENT * 6}ms` }}
        >
          <LoopkitCard />
        </div>
        <div
          className="h-full animate-fade-slide-up opacity-0"
          style={{ animationDelay: `${DELAY_INCREMENT * 7}ms` }}
        >
          <EducationCard />
        </div>
      </div>

      {/* Row 3: CTA + Footer */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 lg:grid-cols-4 animate-fade-slide-up opacity-0"
        style={{ animationDelay: `${DELAY_INCREMENT * 8}ms` }}
      >
        <div className="lg:col-span-3">
          <CTACard />
        </div>
        <div className="lg:col-span-1">
          <FooterCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
