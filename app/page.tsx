'use client';

import { useState, useEffect } from 'react';
import WelcomeCard from '@/components/cards/welcome-card';
import AboutCard from '@/components/cards/about-card';
import OoeyCard from '@/components/cards/ooey-card';
import ExperienceCard from '@/components/cards/experience-card';
import QuFlowCard from '@/components/cards/quflow-card';
import SkillsCard from '@/components/cards/skills-card';
import EducationCard from '@/components/cards/education-card';
import CTACard from '@/components/cards/cta-card';
import RemesCard from '@/components/cards/remes-card';
import RShortsCard from '@/components/cards/rshorts-card';
import LeafpadCard from '@/components/cards/leafpad-card';
import Controls from '@/components/layout/controls';
import FadeIn from '@/components/layout/fade-in';
import FooterCard from '@/components/cards/footer-card';

const D = 80;

const Page = () => {
  const [contentVisible, setContentVisible] = useState(true);
  const toggle = () => setContentVisible((v) => !v);

  useEffect(() => {
    document.body.style.overflow = contentVisible ? '' : 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [contentVisible]);

  return (
    <div className="mb-8 mt-4 flex w-full flex-col items-center gap-2 px-2">
      <div className="mx-auto w-full max-w-[76rem] animate-fade-slide-up opacity-0">
        <Controls
          contentVisible={contentVisible}
          onToggleContent={toggle}
        />
      </div>

      <div
        style={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? 'translateY(0)' : 'translateY(24px)',
          transition:
            'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: contentVisible ? 'auto' : 'none'
        }}
        className="flex w-full flex-col items-center gap-2"
      >
        {/* Row 1: About (photo) | Welcome */}
        <div className="mx-auto grid w-full max-w-[76rem] grid-cols-1 gap-2 lg:grid-cols-3">
          <div
            className="order-2 animate-fade-slide-up opacity-0 lg:order-none lg:col-span-1"
            style={{ animationDelay: `${D}ms` }}
          >
            <AboutCard />
          </div>
          <div
            className="order-1 h-full animate-fade-slide-up opacity-0 lg:order-none lg:col-span-2"
            style={{ animationDelay: `${D * 0}ms` }}
          >
            <WelcomeCard />
          </div>
        </div>

        {/* Row 2: Two project cards side by side */}
        <div className="mx-auto grid w-full max-w-[76rem] grid-cols-1 gap-2 sm:grid-cols-2">
          <FadeIn>
            <OoeyCard />
          </FadeIn>
          <FadeIn delay={D}>
            <RemesCard />
          </FadeIn>
        </div>

        {/* Row 3: Experience (wide) | Skills + Education (stacked) */}
        <div className="mx-auto grid w-full max-w-[76rem] grid-cols-1 gap-2 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <ExperienceCard />
          </FadeIn>
          <div className="flex flex-col gap-2 lg:col-span-2">
            <FadeIn delay={D}>
              <SkillsCard />
            </FadeIn>
            <FadeIn delay={D * 2}>
              <EducationCard />
            </FadeIn>
          </div>
        </div>

        {/* Row 4: Three project cards */}
        <div className="mx-auto grid w-full max-w-[76rem] grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <FadeIn>
            <RShortsCard />
          </FadeIn>
          <FadeIn delay={D}>
            <LeafpadCard />
          </FadeIn>
          <FadeIn delay={D * 2}>
            <QuFlowCard />
          </FadeIn>
        </div>

        {/* Row 5: CTA + Footer */}
        <FadeIn className="mx-auto flex w-full max-w-[76rem] flex-col gap-2">
          <div id="contact">
            <CTACard />
          </div>
          <FooterCard />
        </FadeIn>
      </div>
    </div>
  );
};

export default Page;
