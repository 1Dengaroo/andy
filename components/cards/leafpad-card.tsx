'use client';

import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { ProjectModal, useHashModal } from './project-modal';
import { MockMarkdownEditor, MockJsonFormatter, MockNotepad } from './leafpad-demos';

const TABS = [
  { key: 'markdown', label: 'Markdown', Component: MockMarkdownEditor },
  { key: 'json', label: 'JSON', Component: MockJsonFormatter },
  { key: 'notepad', label: 'Notepad', Component: MockNotepad }
] as const;

function LeafpadCard() {
  const [open, setOpen] = useHashModal('leafpad');
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Card
        id="leafpad"
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
        {/* Base gradient — deep forest green */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #1a3a2a 0%, #0f2a1e 40%, #0d1f16 70%, #0a1810 100%)'
          }}
        />

        {/* Primary glow — center-right */}
        <div
          className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            opacity: 0.85,
            background:
              'radial-gradient(ellipse 70% 90% at 70% 55%, rgba(75,174,79,0.30) 0%, rgba(56,142,60,0.15) 40%, transparent 70%)'
          }}
        />

        {/* Secondary glow — top-left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 55% 65% at 15% 25%, rgba(56,142,60,0.25) 0%, transparent 60%)'
          }}
        />

        {/* Bottom fade for text legibility */}
        <div
          className="absolute inset-x-0 bottom-0 h-3/4"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(5,20,12,0.45) 40%, transparent 100%)'
          }}
        />

        <CardContent className="relative z-10 flex h-full w-full flex-col justify-end p-5">
          <div className="flex items-end justify-between">
            <div>
              <span className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest text-white/50">
                Developer Tools
              </span>
              <div className="flex items-center gap-2">
                <Image src="/logos/leafpad-logo.svg" alt="Leafpad" width={18} height={18} />
                <span
                  className="text-lg font-bold tracking-tight text-white sm:text-xl"
                  style={{ fontFamily: 'var(--font-sora)', letterSpacing: '-0.025em' }}
                >
                  Leafpad
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
        className="max-h-[90vh] overflow-y-auto !border-[#e5e4dc] !bg-[#f5f2eb] !text-[#1a2820] sm:!max-w-3xl"
        previewClassName=""
        closeClassName="text-[#8a9490] hover:text-[#1a2820]"
        preview={
          <div className="relative h-full w-full p-5 pb-3" style={{ backgroundColor: '#f5f2eb' }}>
            {/* Tab bar */}
            <div className="mb-3 flex items-center gap-1">
              {TABS.map((tab, i) => (
                <button
                  key={tab.key}
                  type="button"
                  className="rounded-lg px-3 py-1.5 text-[11px] font-medium transition-all duration-150"
                  style={{
                    backgroundColor: activeTab === i ? '#4BAE4F10' : '#4BAE4F04',
                    color: activeTab === i ? '#388E3C' : '#8a9490'
                  }}
                  onClick={() => setActiveTab(i)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* All tabs stacked in same grid cell — tallest sets height, no layout shift */}
            <div className="grid overflow-hidden rounded-xl">
              {TABS.map((tab, i) => (
                <div
                  key={tab.key}
                  className="col-start-1 row-start-1 min-w-0"
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
        logo={<Image src="/logos/leafpad-logo.svg" alt="Leafpad" width={20} height={20} />}
        title="Leafpad"
        subtitle="A clean set of developer tools"
        link={{ label: 'leafpad.app', href: 'https://leafpad.app' }}
      >
        <p style={{ color: '#5e6a62' }}>
          I wanted a clean markdown editor, a fast JSON formatter, and a simple notepad that I
          actually enjoyed using. So I built them all in one place.
        </p>
        <p style={{ color: '#5e6a62' }}>
          Leafpad is simple, free, and focused. No ads, no accounts, no distractions. Just the
          tools, done well.
        </p>
      </ProjectModal>
    </>
  );
}

export default LeafpadCard;
