'use client';

import { useState, useEffect } from 'react';
import WelcomeCard from '@/components/cards/welcome-card';
import AboutCard from '@/components/cards/about-card';
import OoeyCard from '@/components/cards/ooey-card';
import SigdiffCard from '@/components/cards/sigdiff-card';
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

const D = 60;

const Page = () => {
  const [contentVisible, setContentVisible] = useState(true);
  const toggle = () => setContentVisible((v) => !v);

  useEffect(() => {
    document.body.style.overflow = contentVisible ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [contentVisible]);

  return (
    <div className="mb-8 mt-4 flex w-full flex-col items-center gap-3 px-2">
      <FadeIn className="mx-auto w-full max-w-7xl">
        <Controls contentVisible={contentVisible} onToggleContent={toggle} />
      </FadeIn>

      <div
        style={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.35s ease-out, transform 0.35s ease-out',
          pointerEvents: contentVisible ? 'auto' : 'none'
        }}
        className="flex w-full flex-col items-center gap-3"
      >
        {/* Row 1: About (photo) | Welcome */}
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 lg:grid-cols-3">
          <FadeIn className="order-2 lg:order-none lg:col-span-1" delay={D}>
            <AboutCard />
          </FadeIn>
          <FadeIn className="order-1 h-full lg:order-none lg:col-span-2">
            <WelcomeCard />
          </FadeIn>
        </div>

        {/* Row 2: Experience (wide) | Skills + Education (stacked) */}
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 lg:grid-cols-6">
          <FadeIn className="lg:col-span-4" delay={D}>
            <ExperienceCard />
          </FadeIn>
          <div className="flex flex-col gap-3 lg:col-span-2">
            <FadeIn delay={D * 2} className="flex flex-1 flex-col">
              <SkillsCard />
            </FadeIn>
            <FadeIn delay={D * 3}>
              <EducationCard />
            </FadeIn>
          </div>
        </div>

        {/* Rows 3–4: All project cards — 3 columns */}
        <div
          id="projects"
          className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          <FadeIn>
            <SigdiffCard />
          </FadeIn>
          <FadeIn delay={D}>
            <RemesCard />
          </FadeIn>
          <FadeIn delay={D * 2}>
            <OoeyCard />
          </FadeIn>
          <FadeIn delay={D * 3}>
            <LeafpadCard />
          </FadeIn>
          <FadeIn delay={D * 4}>
            <RShortsCard />
          </FadeIn>
          <FadeIn delay={D * 5}>
            <QuFlowCard />
          </FadeIn>
        </div>

        {/* Row 5: CTA + Footer */}
        <FadeIn className="mx-auto flex w-full max-w-7xl flex-col gap-3">
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
