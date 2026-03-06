import MainCard from '@/components/cards/welcome-card';
import AboutCard from '@/components/cards/about-card';
import ParselyCard from '@/components/cards/parsely-card';
import ProjectsCard from '@/components/cards/evera-card';
import ExperienceCard from '@/components/cards/experience-card';
import FooterCard from '@/components/cards/footer-card';
import QuFlowCard from '@/components/cards/quflow-card';
import SkillsCard from '@/components/cards/skills-card';
import EducationCard from '@/components/cards/education-card';
import CTACard from '@/components/cards/cta-card';
import Controls from '@/components/layout/controls';
import FadeIn from '@/components/layout/fade-in';

const DELAY_INCREMENT = 100;

const Page = () => {
  return (
    <div className="mb-8 mt-4 flex w-full flex-col items-center gap-3 px-2">
      <div className="mx-auto w-full max-w-7xl animate-fade-slide-up opacity-0">
        <Controls />
      </div>

      {/* Row 1: Welcome + Experience (left) | About + Skills (right) */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 lg:grid-cols-4">
        <div className="contents lg:col-span-3 lg:flex lg:flex-col lg:gap-3">
          <div
            className="order-2 animate-fade-slide-up opacity-0 lg:order-none"
            style={{ animationDelay: `${DELAY_INCREMENT * 0}ms` }}
          >
            <MainCard />
          </div>
          <div
            className="order-3 animate-fade-slide-up opacity-0 lg:order-none lg:flex-1"
            style={{ animationDelay: `${DELAY_INCREMENT * 1}ms` }}
          >
            <ExperienceCard />
          </div>
        </div>
        <div className="contents lg:col-span-1 lg:flex lg:flex-col lg:gap-3">
          <div
            className="order-1 h-full animate-fade-slide-up opacity-0 lg:order-none"
            style={{ animationDelay: `${DELAY_INCREMENT * 2}ms` }}
          >
            <AboutCard />
          </div>
          <div
            className="order-4 h-full animate-fade-slide-up opacity-0 lg:order-none"
            style={{ animationDelay: `${DELAY_INCREMENT * 3}ms` }}
          >
            <SkillsCard />
          </div>
        </div>
      </div>

      {/* Row 2: Projects (3 cols) + Education (1 col) */}
      <div
        id="projects"
        className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
      >
        <FadeIn className="h-full">
          <ParselyCard />
        </FadeIn>
        <FadeIn className="h-full" delay={DELAY_INCREMENT}>
          <QuFlowCard />
        </FadeIn>
        <FadeIn className="h-full" delay={DELAY_INCREMENT * 2}>
          <ProjectsCard />
        </FadeIn>
        <FadeIn className="h-full" delay={DELAY_INCREMENT * 3}>
          <EducationCard />
        </FadeIn>
      </div>

      {/* Row 3: CTA + Footer */}
      <FadeIn id="contact" className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <CTACard />
        </div>
        <div className="lg:col-span-1">
          <FooterCard />
        </div>
      </FadeIn>
    </div>
  );
};

export default Page;
