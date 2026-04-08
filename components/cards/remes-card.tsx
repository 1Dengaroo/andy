'use client';

import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { ProjectModal, useHashModal } from './project-modal';
import { MockSignalDashboard, MockContactList, MockEmailPreview } from './remes-demos';

/* Remes brand palette: #455eb5, #5643cc, #673fd7, #6366f1 */
/* Hero colors — matches remes.so landing page */
const HERO_BG = 'rgb(2, 9, 58)';
const HERO_STROKE = '#8b8dca';
const HERO_STROKE_LIGHT = '#5a5d9e';

const CONVEYOR_PATH =
  'm-2.75 440.36 210.2-57.14a20 20 0 0 1 25.25 19.3v148.26a20 20 0 0 0 20 20h240.7a20 20 0 0 0 20-20V479.7c0-50.1 49.93-84.84 96.9-67.42l233.78 86.67a72.5 72.5 0 0 1-15.11 139.78l-174.75 24.57a41.1 41.1 0 0 1-46.83-40.7l.02-359.45a36.9 36.9 0 0 1 36.92-36.9h191.94a54.13 54.13 0 0 0 14.01-106.43l-428-114.68a31.58 31.58 0 0 0-39.76 30.5v170.6a20 20 0 0 1-20 20H-18.15';

const GEAR_PATH =
  'M416.08 16.42l1.22 4.88q1.24.22 2.41.64l3.5-3.62 2.66 1.54-1.38 4.84a15 15 0 0 1 1.77 1.77l4.83-1.39 1.54 2.67-3.62 3.5q.42 1.16.65 2.4l4.88 1.23v3.08l-4.88 1.21q-.23 1.25-.65 2.42l3.62 3.5-1.54 2.66-4.83-1.39a15 15 0 0 1-1.77 1.77l1.38 4.84-2.66 1.54-3.5-3.62q-1.16.41-2.41.64l-1.22 4.88H413l-1.22-4.88q-1.25-.22-2.41-.64l-3.5 3.62-2.66-1.54 1.38-4.84a15 15 0 0 1-1.77-1.77L398 47.75l-1.54-2.67 3.62-3.5q-.42-1.16-.65-2.4l-4.88-1.22v-3.09l4.88-1.21q.23-1.25.65-2.42l-3.62-3.5 1.54-2.66 4.83 1.39q.81-.96 1.77-1.77l-1.38-4.84 2.66-1.54 3.5 3.62q1.16-.41 2.41-.64L413 16.4zM414.7 31a5.73 5.73 0 1 0 0 11.45 5.73 5.73 0 0 0 0-11.45';

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
        className="group relative aspect-[5/2] cursor-pointer overflow-hidden !border-0"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: HERO_BG }} />

        {/* Left conveyor — primary */}
        <svg
          className="pointer-events-none absolute left-0 top-0 h-full opacity-60"
          width="896"
          height="668"
          viewBox="0 0 896 668"
          fill="none"
          style={{ transform: 'translate(-30%, -5%)' }}
          aria-hidden="true"
        >
          <path
            d={CONVEYOR_PATH}
            stroke={HERO_STROKE}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          <path d={GEAR_PATH} fill={HERO_STROKE} />
        </svg>

        {/* Right conveyor — mirrored, lighter */}
        <svg
          className="pointer-events-none absolute right-0 top-0 h-full opacity-35"
          width="896"
          height="668"
          viewBox="0 0 896 668"
          fill="none"
          style={{ transform: 'translate(40%, 15%) scaleX(-1)' }}
          aria-hidden="true"
        >
          <path
            d={CONVEYOR_PATH}
            stroke={HERO_STROKE_LIGHT}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* Floating gear — bottom right area */}
        <svg
          className="pointer-events-none absolute bottom-[20%] right-[15%] opacity-25 transition-transform duration-700 group-hover:rotate-12"
          width="48"
          height="48"
          viewBox="394 12 44 44"
          fill="none"
          aria-hidden="true"
        >
          <path d={GEAR_PATH} fill={HERO_STROKE} />
        </svg>

        <CardContent className="relative z-10 flex h-full w-full flex-col justify-end p-5">
          <div className="flex items-end justify-between">
            <div>
              <span
                className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest"
                style={{ color: HERO_STROKE }}
              >
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
                  className="text-xl font-bold tracking-tight sm:text-2xl"
                  style={{ color: '#ffffff', fontFamily: 'var(--font-bricolage)' }}
                >
                  Remes
                </span>
              </div>
            </div>
            <ArrowUpRight
              className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              style={{ color: HERO_STROKE }}
            />
          </div>
        </CardContent>
      </Card>

      <ProjectModal
        open={open}
        onOpenChange={setOpen}
        triggerId="remes"
        className="max-h-[90vh] overflow-y-auto !border-[#ddd8ed] !bg-[#f6f5fc] !text-[#1c1a30] sm:!max-w-3xl"
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
