import MainCard from '@/components/cards/welcome-card';
import AboutCard from '@/components/cards/about-card';
import TimeCard from '@/components/cards/time-card';
import ProjectsCard from '@/components/cards/evera-card';
import ExperienceCard from '@/components/cards/experience-card';
import FooterCard from '@/components/cards/footer-card';
import PlaygroundCard from '@/components/cards/playground-card';
import ThemePickerCard from '@/components/cards/theme-picker-card';
import ParticlesToggleCard from '@/components/cards/particles-toggle-card';

const Page = () => {
  const DELAY_INCREMENT = 300;

  return (
    <div className="mt-8 flex w-full flex-col items-center gap-4 px-4 md:px-0">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-3">
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

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          className="h-full animate-fade-slide-up opacity-0"
          style={{ animationDelay: `${DELAY_INCREMENT * 3}ms` }}
        >
          <PlaygroundCard />
        </div>
        <div
          className="h-full animate-fade-slide-up opacity-0"
          style={{ animationDelay: `${DELAY_INCREMENT * 4}ms` }}
        >
          <ThemePickerCard />
        </div>
        <div
          className="h-full animate-fade-slide-up opacity-0"
          style={{ animationDelay: `${DELAY_INCREMENT * 5}ms` }}
        >
          <TimeCard />
        </div>
        <div
          className="h-full animate-fade-slide-up opacity-0"
          style={{ animationDelay: `${DELAY_INCREMENT * 6}ms` }}
        >
          <ProjectsCard />
        </div>
        <div
          className="h-full animate-fade-slide-up opacity-0"
          style={{ animationDelay: `${DELAY_INCREMENT * 7}ms` }}
        >
          <ParticlesToggleCard />
        </div>
        <div
          className="h-full animate-fade-slide-up opacity-0"
          style={{ animationDelay: `${DELAY_INCREMENT * 8}ms` }}
        >
          <FooterCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
