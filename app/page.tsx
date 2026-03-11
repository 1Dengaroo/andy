import WelcomeCard from '@/components/cards/welcome-card';
import AboutCard from '@/components/cards/about-card';
import EveraCard from '@/components/cards/evera-card';
import ExperienceCard from '@/components/cards/experience-card';
import QuFlowCard from '@/components/cards/quflow-card';
import SkillsCard from '@/components/cards/skills-card';
import EducationCard from '@/components/cards/education-card';
import CTACard from '@/components/cards/cta-card';
import RShortsCard from '@/components/cards/rshorts-card';
import LeafpadCard from '@/components/cards/leafpad-card';
import Controls from '@/components/layout/controls';
import FadeIn from '@/components/layout/fade-in';
import FooterCard from '@/components/cards/footer-card';

const DELAY = 100;

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
            style={{ animationDelay: `${DELAY * 0}ms` }}
          >
            <WelcomeCard />
          </div>
          <div
            className="order-3 animate-fade-slide-up opacity-0 lg:order-none lg:flex-1"
            style={{ animationDelay: `${DELAY * 1}ms` }}
          >
            <ExperienceCard />
          </div>
        </div>
        <div className="contents lg:col-span-1 lg:flex lg:flex-col lg:gap-3">
          <div
            className="order-1 h-full animate-fade-slide-up opacity-0 lg:order-none"
            style={{ animationDelay: `${DELAY * 2}ms` }}
          >
            <AboutCard />
          </div>
          <div
            className="order-4 h-full animate-fade-slide-up opacity-0 lg:order-none"
            style={{ animationDelay: `${DELAY * 3}ms` }}
          >
            <SkillsCard />
          </div>
          <div
            className="order-5 animate-fade-slide-up opacity-0 lg:order-none"
            style={{ animationDelay: `${DELAY * 4}ms` }}
          >
            <EducationCard />
          </div>
        </div>
      </div>

      {/* Row 2: Projects — 2x2 grid */}
      <div id="projects" className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2">
        <FadeIn>
          <EveraCard />
        </FadeIn>
        <FadeIn delay={DELAY}>
          <RShortsCard />
        </FadeIn>
        <FadeIn delay={DELAY * 2}>
          <LeafpadCard />
        </FadeIn>
        <FadeIn delay={DELAY * 3}>
          <QuFlowCard />
        </FadeIn>
      </div>

      {/* Row 3: CTA + Footer */}
      <FadeIn
        id="contact"
        className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 lg:grid-cols-4"
      >
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
