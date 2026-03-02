import MainCard from '@/components/cards/welcome-card';
import AboutCard from '@/components/cards/about-card';
import TimeCard from '@/components/cards/time-card';
import ProjectsCard from '@/components/cards/evera-card';
import ExperienceCard from '@/components/cards/experience-card';
import FooterCard from '@/components/cards/footer-card';
import LoopkitCard from '@/components/cards/loopkit-card';
import Controls from '@/components/layout/controls';

const Page = () => {
  const DELAY_INCREMENT = 300;

  return (
    <div className="mt-4 flex w-full flex-col items-center gap-3 px-2">
      <div className="mx-auto w-full max-w-7xl animate-fade-slide-up opacity-0">
        <Controls />
      </div>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 lg:grid-cols-4">
        <div className="flex flex-col gap-3 lg:col-span-3">
          <div
            className="animate-fade-slide-up opacity-0"
            style={{ animationDelay: `${DELAY_INCREMENT * 0}ms` }}
          >
            <MainCard />
          </div>
          <div
            className="animate-fade-slide-up opacity-0"
            style={{ animationDelay: `${DELAY_INCREMENT * 1}ms` }}
          >
            <ExperienceCard />
          </div>
        </div>
        <div
          className="h-full animate-fade-slide-up opacity-0 lg:col-span-1"
          style={{ animationDelay: `${DELAY_INCREMENT * 2}ms` }}
        >
          <AboutCard />
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div
          className="h-full animate-fade-slide-up opacity-0"
          style={{ animationDelay: `${DELAY_INCREMENT * 3}ms` }}
        >
          <TimeCard />
        </div>
        <div
          className="h-full animate-fade-slide-up opacity-0"
          style={{ animationDelay: `${DELAY_INCREMENT * 4}ms` }}
        >
          <ProjectsCard />
        </div>
        <div
          className="h-full animate-fade-slide-up opacity-0"
          style={{ animationDelay: `${DELAY_INCREMENT * 5}ms` }}
        >
          <LoopkitCard />
        </div>
        <div
          className="h-full animate-fade-slide-up opacity-0"
          style={{ animationDelay: `${DELAY_INCREMENT * 6}ms` }}
        >
          <FooterCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
