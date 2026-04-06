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
        {/* Deep indigo base */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #1a1440 0%, #0f0d2e 50%, #1a1440 100%)'
          }}
        />

        {/* Floating UI panels — signal dashboard aesthetic */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Panel 1 — Signal dashboard, right side */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-5px]"
            style={{
              right: '5%',
              top: '8%',
              width: '48%',
              height: '72%',
              borderRadius: 10,
              border: '1px solid rgba(99,102,241,0.2)',
              backgroundColor: 'rgba(99,102,241,0.06)',
              boxShadow: '0 8px 32px rgba(99,102,241,0.1)',
              overflow: 'hidden'
            }}
          >
            {/* Header with tabs */}
            <div
              className="flex items-center justify-between border-b px-2.5 py-1.5"
              style={{ borderColor: 'rgba(99,102,241,0.15)' }}
            >
              <div className="flex items-center gap-1.5">
                <div
                  className="size-1.5 rounded-full"
                  style={{ backgroundColor: 'rgba(99,102,241,0.5)' }}
                />
                <div
                  className="h-1 w-6 rounded-full"
                  style={{ backgroundColor: 'rgba(99,102,241,0.3)' }}
                />
              </div>
              <div className="flex gap-1">
                <div
                  className="h-1.5 w-5 rounded-sm"
                  style={{ backgroundColor: 'rgba(99,102,241,0.2)' }}
                />
                <div
                  className="h-1.5 w-5 rounded-sm"
                  style={{ backgroundColor: 'rgba(99,102,241,0.08)' }}
                />
              </div>
            </div>
            {/* Signal rows */}
            <div className="space-y-1.5 p-2.5">
              {[
                { w: '70%', badge: 'rgba(52,211,153,0.25)', dot: 'rgba(52,211,153,0.6)' },
                { w: '85%', badge: 'rgba(251,191,36,0.2)', dot: 'rgba(251,191,36,0.5)' },
                { w: '60%', badge: 'rgba(52,211,153,0.25)', dot: 'rgba(52,211,153,0.6)' },
                { w: '75%', badge: 'rgba(99,102,241,0.15)', dot: 'rgba(99,102,241,0.4)' }
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div
                    className="size-3.5 shrink-0 rounded"
                    style={{ backgroundColor: `rgba(99,102,241,${0.18 - i * 0.03})` }}
                  />
                  <div className="flex-1 space-y-0.5">
                    <div
                      className="h-1 rounded-full"
                      style={{
                        backgroundColor: `rgba(99,102,241,${0.24 - i * 0.04})`,
                        width: row.w
                      }}
                    />
                    <div
                      className="h-0.5 rounded-full"
                      style={{
                        backgroundColor: `rgba(99,102,241,${0.12 - i * 0.02})`,
                        width: '60%'
                      }}
                    />
                  </div>
                  {/* Status badge with dot */}
                  <div className="flex shrink-0 items-center gap-0.5">
                    <div className="size-1 rounded-full" style={{ backgroundColor: row.dot }} />
                    <div className="h-2 w-5 rounded-full" style={{ backgroundColor: row.badge }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 2 — Email compose preview, left side */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-3px] group-hover:rotate-[0.5deg]"
            style={{
              left: '6%',
              top: '8%',
              width: 110,
              height: 92,
              borderRadius: 8,
              border: '1px solid rgba(99,102,241,0.18)',
              backgroundColor: 'rgba(99,102,241,0.05)',
              boxShadow: '0 6px 24px rgba(99,102,241,0.1)',
              transform: 'rotate(-3deg)',
              overflow: 'hidden'
            }}
          >
            {/* Email header — To + Subject */}
            <div className="border-b px-2 py-1.5" style={{ borderColor: 'rgba(99,102,241,0.12)' }}>
              <div className="flex items-center gap-1">
                <div
                  className="size-2.5 rounded-full"
                  style={{ backgroundColor: 'rgba(99,102,241,0.25)' }}
                />
                <div className="space-y-0.5">
                  <div
                    className="h-0.5 w-8 rounded-full"
                    style={{ backgroundColor: 'rgba(99,102,241,0.25)' }}
                  />
                  <div
                    className="h-0.5 w-5 rounded-full"
                    style={{ backgroundColor: 'rgba(99,102,241,0.12)' }}
                  />
                </div>
              </div>
              {/* Subject line */}
              <div className="mt-1 flex items-center gap-1">
                <div
                  className="h-0.5 w-2 rounded-full"
                  style={{ backgroundColor: 'rgba(99,102,241,0.2)' }}
                />
                <div
                  className="h-0.5 w-12 rounded-full"
                  style={{ backgroundColor: 'rgba(99,102,241,0.18)' }}
                />
              </div>
            </div>
            {/* Email body lines */}
            <div className="space-y-1 p-2">
              <div
                className="h-0.5 w-full rounded-full"
                style={{ backgroundColor: 'rgba(99,102,241,0.14)' }}
              />
              <div
                className="h-0.5 w-[90%] rounded-full"
                style={{ backgroundColor: 'rgba(99,102,241,0.11)' }}
              />
              <div
                className="h-0.5 w-[70%] rounded-full"
                style={{ backgroundColor: 'rgba(99,102,241,0.09)' }}
              />
              <div className="pt-0.5">
                <div
                  className="h-0.5 w-full rounded-full"
                  style={{ backgroundColor: 'rgba(99,102,241,0.11)' }}
                />
                <div
                  className="mt-0.5 h-0.5 w-[60%] rounded-full"
                  style={{ backgroundColor: 'rgba(99,102,241,0.08)' }}
                />
              </div>
              {/* AI generated indicator */}
              <div className="mt-1 flex items-center gap-0.5">
                <div
                  className="size-1 rounded-full"
                  style={{ backgroundColor: 'rgba(139,92,246,0.4)' }}
                />
                <div
                  className="h-0.5 w-5 rounded-full"
                  style={{ backgroundColor: 'rgba(139,92,246,0.2)' }}
                />
              </div>
            </div>
          </div>

          {/* Panel 3 — Contact card, bottom-left */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-2px] group-hover:rotate-[-0.5deg]"
            style={{
              left: '22%',
              bottom: '36%',
              borderRadius: 7,
              border: '1px solid rgba(99,102,241,0.15)',
              backgroundColor: 'rgba(99,102,241,0.04)',
              boxShadow: '0 4px 16px rgba(99,102,241,0.08)',
              transform: 'rotate(1deg)',
              padding: '5px 7px',
              overflow: 'hidden'
            }}
          >
            <div className="flex items-center gap-1.5">
              <div
                className="size-3.5 rounded-full"
                style={{ backgroundColor: 'rgba(52,211,153,0.2)' }}
              />
              <div className="space-y-0.5">
                <div
                  className="h-0.5 w-7 rounded-full"
                  style={{ backgroundColor: 'rgba(99,102,241,0.22)' }}
                />
                <div
                  className="h-0.5 w-10 rounded-full"
                  style={{ backgroundColor: 'rgba(99,102,241,0.1)' }}
                />
              </div>
              {/* Send button */}
              <div
                className="h-2.5 w-5 rounded"
                style={{ backgroundColor: 'rgba(99,102,241,0.2)' }}
              />
            </div>
          </div>
        </div>

        {/* Subtle brand glow behind panels */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 70% at 70% 40%, rgba(99,102,241,0.14) 0%, transparent 70%)'
          }}
        />

        {/* Secondary glow — left side warmth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 35% 50% at 20% 35%, rgba(139,92,246,0.08) 0%, transparent 60%)'
          }}
        />

        {/* Bottom gradient for text */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background:
              'linear-gradient(to top, rgba(15,13,46,1) 0%, rgba(15,13,46,0.85) 40%, transparent 100%)'
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
