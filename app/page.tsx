import MainCard from '@/components/cards/welcome-card';
import AboutCard from '@/components/cards/about-card';
import TimeCard from '@/components/cards/time-card';
import ProjectsCard from '@/components/cards/evera-card';
import ExperienceCard from '@/components/cards/experience-card';
import FooterCard from '@/components/cards/footer-card';
import PlaygroundCard from '@/components/cards/playground-card';

const Page = () => {
  const DELAY_INCREMENT = 300;

  return (
    <div className="flex w-full flex-col items-center gap-4 px-4 md:px-0">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 md:flex-row">
        <div className="flex w-full flex-col gap-4 md:w-3/4">
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
        <div className="flex w-full flex-col gap-4 md:w-1/4">
          <div
            className="h-full animate-fade-slide-up opacity-0"
            style={{ animationDelay: `${DELAY_INCREMENT * 2}ms` }}
          >
            <AboutCard />
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 md:flex-row">
        <div className="flex w-full flex-col gap-4 md:w-3/4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div
              className="h-full w-full animate-fade-slide-up opacity-0"
              style={{ animationDelay: `${DELAY_INCREMENT * 3}ms` }}
            >
              <PlaygroundCard />
            </div>
            <div
              className="h-full w-full animate-fade-slide-up opacity-0"
              style={{ animationDelay: `${DELAY_INCREMENT * 4}ms` }}
            >
              <TimeCard />
            </div>
            <div
              className="h-full w-full animate-fade-slide-up opacity-0"
              style={{ animationDelay: `${DELAY_INCREMENT * 5}ms` }}
            >
              <ProjectsCard />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 md:w-1/4">
          <div
            className="h-full animate-fade-slide-up opacity-0"
            style={{ animationDelay: `${DELAY_INCREMENT * 6}ms` }}
          >
            <FooterCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
