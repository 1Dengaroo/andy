'use client';

import { Card, CardContent } from '../ui/card';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { ProjectModal, useHashModal } from './project-modal';

function RemesCard() {
  const [open, setOpen] = useHashModal('remes');

  return (
    <>
      <Card
        id="remes"
        className="group relative aspect-[5/2] cursor-pointer overflow-hidden !border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        <div
          className="absolute inset-0 transition-all duration-700 group-hover:scale-105"
          style={{
            background:
              'linear-gradient(135deg, #6366f1 0%, #7c3aed 30%, #a855f7 60%, #d946ef 100%)',
          }}
        />
        {/* Layered UI screenshots on the right */}
        <div className="absolute right-[5%] top-1/2 z-[1] hidden -translate-y-1/2 sm:block">
          <Image
            src="/images/remes-mid.png"
            alt=""
            width={320}
            height={192}
            className="rounded-lg shadow-2xl opacity-90 transition-all duration-700 group-hover:translate-x-1"
            style={{ transform: 'rotate(2deg)' }}
          />
        </div>
        <div className="absolute right-[-2%] top-1/2 z-[2] hidden -translate-y-[40%] sm:block">
          <Image
            src="/images/remes-right.png"
            alt=""
            width={260}
            height={160}
            className="rounded-lg shadow-2xl transition-all duration-700 group-hover:translate-x-2"
            style={{ transform: 'rotate(-1deg)' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <CardContent className="relative z-10 flex h-full w-full flex-col justify-end p-5">
          <div className="flex items-end justify-between">
            <div>
              <span className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest text-white/50">
                AI-Powered Outbound
              </span>
              <div className="flex items-center gap-2">
                <Image
                  src="/logos/remes-logo.png"
                  alt="Remes"
                  width={20}
                  height={20}
                  className="rounded-sm"
                />
                <span
                  className="text-xl font-bold tracking-tight text-white sm:text-2xl"
                  style={{ fontFamily: 'var(--font-bricolage)' }}
                >
                  Remes
                </span>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/80" />
          </div>
        </CardContent>
      </Card>

      <ProjectModal
        open={open}
        onOpenChange={setOpen}
        preview={
          <div
            className="relative h-full w-full"
            style={{
              background:
                'linear-gradient(135deg, #6366f1 0%, #7c3aed 30%, #a855f7 60%, #d946ef 100%)',
            }}
          >
            <div className="absolute left-[8%] top-1/2 z-[1] -translate-y-[45%]">
              <Image
                src="/images/remes-mid.png"
                alt=""
                width={420}
                height={252}
                className="rounded-lg shadow-2xl"
                style={{ transform: 'rotate(-1deg)' }}
              />
            </div>
            <div className="absolute right-[5%] top-1/2 z-[2] -translate-y-[55%]">
              <Image
                src="/images/remes-right.png"
                alt=""
                width={340}
                height={210}
                className="rounded-lg shadow-2xl"
                style={{ transform: 'rotate(1deg)' }}
              />
            </div>
          </div>
        }
        logo={
          <Image
            src="/logos/remes-logo.png"
            alt="Remes"
            width={20}
            height={20}
            className="rounded-lg"
          />
        }
        title="Remes"
        subtitle="AI-powered outbound sales platform"
        link={{ label: 'remes.vercel.app', href: 'https://remes.vercel.app' }}
      >
        <p>
          An AI-powered outbound sales platform for SMBs. Monitors the web for buying signals like
          job postings, funding rounds, and hiring surges, finds decision-makers via Apollo, and
          generates personalized outreach emails using Claude.
        </p>
        <p>
          Built in collaboration with a sales colleague who actively uses it at Modal Labs. Stack
          includes Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Supabase, Anthropic
          Claude API, Apollo API, and Gmail OAuth. ~200 users, sending 100-300 personalized
          outreach emails per week.
        </p>
      </ProjectModal>
    </>
  );
}

export default RemesCard;
