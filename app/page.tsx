import MainCard from '@/components/cards/welcome-card';
import AboutCard from '@/components/cards/about-card';
import TimeCard from '@/components/cards/time-card';
import ProjectsCard from '@/components/cards/evera-card';
import ExperienceCard from '@/components/cards/experience-card';
import FooterCard from '@/components/cards/footer-card';
import PlaygroundCard from '@/components/cards/playground-card';

const Page = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4 px-4 md:px-0">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 md:flex-row">
        <div className="flex w-full flex-col gap-4 md:w-3/4">
          <MainCard />
          <ExperienceCard />
        </div>
        <div className="flex w-full flex-col gap-4 md:w-1/4">
          <AboutCard />
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 md:flex-row">
        <div className="flex w-full flex-col gap-4 md:w-3/4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="h-full w-full">
              <PlaygroundCard />
            </div>
            <div className="h-full w-full">
              <TimeCard />
            </div>
            <div className="h-full w-full">
              <ProjectsCard />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 md:w-1/4">
          <FooterCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
