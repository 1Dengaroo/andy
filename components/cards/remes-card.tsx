'use client';

import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { ProjectModal, useHashModal } from './project-modal';
import { MockSignalDashboard, MockContactList, MockEmailPreview } from './remes-demos';

/* Remes brand palette: #455eb5, #5643cc, #673fd7, #6366f1 */

const TABS = [
  { key: 'signals', label: 'Signals', Component: MockSignalDashboard },
  { key: 'contacts', label: 'Contacts', Component: MockContactList },
  { key: 'outreach', label: 'Outreach', Component: MockEmailPreview }
] as const;

function RemesCard() {
  const [open, setOpen] = useHashModal('remes');
  const [activeTab, setActiveTab] = useState(0);

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
        {/* Base gradient — diagonal brand wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #455eb5 0%, #5643cc 40%, #673fd7 70%, #6366f1 100%)'
          }}
        />

        {/* Large soft glow — center-right */}
        <div
          className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            opacity: 0.85,
            background:
              'radial-gradient(ellipse 70% 90% at 70% 55%, rgba(139,92,246,0.45) 0%, rgba(99,102,241,0.2) 40%, transparent 70%)'
          }}
        />

        {/* Secondary glow — top-left warmth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 55% 65% at 15% 25%, rgba(99,102,241,0.35) 0%, transparent 60%)'
          }}
        />

        {/* Fade to black at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-3/4"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(10,5,30,0.45) 40%, transparent 100%)'
          }}
        />

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
        className="max-h-[90vh] overflow-y-auto !border-[#ddd8ed] !bg-[#f6f5fc] !text-[#1c1a30] sm:!max-w-3xl"
        previewClassName=""
        preview={
          <div className="relative h-full w-full p-5 pb-3" style={{ backgroundColor: '#f6f5fc' }}>
            {/* Tab bar */}
            <div className="mb-3 flex items-center gap-1">
              {TABS.map((tab, i) => (
                <button
                  key={tab.key}
                  type="button"
                  className="rounded-lg px-3 py-1.5 text-[11px] font-medium transition-all duration-150"
                  style={{
                    backgroundColor: activeTab === i ? '#6366f110' : '#6366f104',
                    color: activeTab === i ? '#6366f1' : '#7e7c9a'
                  }}
                  onClick={() => setActiveTab(i)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* All tabs stacked in same grid cell — tallest sets height, no layout shift */}
            <div className="grid rounded-xl">
              {TABS.map((tab, i) => (
                <div
                  key={tab.key}
                  className="col-start-1 row-start-1"
                  style={{
                    visibility: activeTab === i ? 'visible' : 'hidden',
                    pointerEvents: activeTab === i ? 'auto' : 'none'
                  }}
                >
                  <tab.Component />
                </div>
              ))}
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
        link={{ label: 'remes.so', href: 'https://remes.so' }}
      >
        <p style={{ color: '#5e5c78' }}>
          An AI-powered outbound sales platform for SMBs. Monitors the web for buying signals like
          job postings, funding rounds, and hiring surges, finds decision-makers via Apollo, and
          generates personalized outreach emails using Claude.
        </p>
        <p style={{ color: '#5e5c78' }}>
          Built in collaboration with a sales colleague who actively uses it at Modal Labs. Stack
          includes Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Supabase, Anthropic
          Claude API, Apollo API, and Gmail OAuth.
        </p>
      </ProjectModal>
    </>
  );
}

export default RemesCard;
