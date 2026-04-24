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
        {/* Warm paper base */}
        <div className="absolute inset-0" style={{ backgroundColor: '#f5f2eb' }} />

        {/* Floating UI elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Editor window mockup — center-right */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-4px]"
            style={{
              right: '8%',
              top: '10%',
              width: '40%',
              height: '72%',
              borderRadius: 8,
              border: '1px solid #e5e4dc',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              overflow: 'hidden'
            }}
          >
            {/* Toolbar */}
            <div
              className="flex items-center gap-1 border-b px-2.5 py-1.5"
              style={{ borderColor: '#eceae3' }}
            >
              <div className="size-1.5 rounded-full" style={{ backgroundColor: '#e5e4dc' }} />
              <div className="size-1.5 rounded-full" style={{ backgroundColor: '#e5e4dc' }} />
              <div className="size-1.5 rounded-full" style={{ backgroundColor: '#e5e4dc' }} />
              <div className="ml-2 flex gap-1">
                <div
                  className="rounded px-1 py-0.5 text-[6px] font-bold"
                  style={{ color: '#8a9490' }}
                >
                  B
                </div>
                <div className="rounded px-1 py-0.5 text-[6px] italic" style={{ color: '#8a9490' }}>
                  I
                </div>
                <div className="rounded px-1 py-0.5 text-[6px]" style={{ color: '#8a9490' }}>
                  H
                </div>
              </div>
            </div>

            {/* Split pane content */}
            <div className="flex h-full">
              {/* Left: markdown source */}
              <div className="flex-1 p-2">
                <div className="space-y-1">
                  <div className="flex gap-1">
                    <div className="h-1 w-3 rounded-full" style={{ backgroundColor: '#388E3C' }} />
                    <div className="h-1 w-10 rounded-full" style={{ backgroundColor: '#e5e4dc' }} />
                  </div>
                  <div className="h-1 w-14 rounded-full" style={{ backgroundColor: '#e5e4dc' }} />
                  <div className="flex gap-1">
                    <div className="h-1 w-2 rounded-full" style={{ backgroundColor: '#388E3C' }} />
                    <div className="h-1 w-8 rounded-full" style={{ backgroundColor: '#e5e4dc' }} />
                  </div>
                  <div className="h-1 w-6 rounded-full" style={{ backgroundColor: '#e5e4dc' }} />
                  <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#e5e4dc' }} />
                  <div className="flex gap-1">
                    <div className="h-1 w-1 rounded-full" style={{ backgroundColor: '#4BAE4F' }} />
                    <div className="h-1 w-7 rounded-full" style={{ backgroundColor: '#e5e4dc' }} />
                  </div>
                  <div className="h-1 w-10 rounded-full" style={{ backgroundColor: '#e5e4dc' }} />
                </div>
              </div>

              {/* Divider */}
              <div className="w-px" style={{ backgroundColor: '#eceae3' }} />

              {/* Right: preview */}
              <div className="flex-1 p-2">
                <div className="space-y-1">
                  <div className="h-1.5 w-10 rounded-full" style={{ backgroundColor: '#d4d0c8' }} />
                  <div className="h-1 w-14 rounded-full" style={{ backgroundColor: '#eceae3' }} />
                  <div className="h-1 w-11 rounded-full" style={{ backgroundColor: '#eceae3' }} />
                  <div
                    className="mt-1 h-1 w-8 rounded-full"
                    style={{ backgroundColor: '#eceae3' }}
                  />
                  <div className="w-13 h-1 rounded-full" style={{ backgroundColor: '#eceae3' }} />
                  <div className="h-1 w-10 rounded-full" style={{ backgroundColor: '#eceae3' }} />
                </div>
              </div>
            </div>
          </div>

          {/* JSON formatter panel — center-left */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-3px] group-hover:rotate-[0.5deg]"
            style={{
              left: '25%',
              top: '8%',
              width: 100,
              height: 80,
              borderRadius: 7,
              border: '1px solid #e5e4dc',
              backgroundColor: '#ffffff',
              boxShadow: '0 3px 16px rgba(0,0,0,0.05)',
              transform: 'rotate(-2deg)',
              overflow: 'hidden'
            }}
          >
            <div
              className="flex items-center justify-between border-b px-2 py-1"
              style={{ borderColor: '#eceae3' }}
            >
              <div className="h-0.5 w-6 rounded-full" style={{ backgroundColor: '#d4d0c8' }} />
              <div className="flex gap-0.5">
                <div className="h-1.5 w-4 rounded-sm" style={{ backgroundColor: '#4BAE4F15' }} />
                <div className="h-1.5 w-4 rounded-sm" style={{ backgroundColor: '#eceae3' }} />
              </div>
            </div>
            <div className="p-2 font-mono">
              <div className="space-y-0.5">
                <div className="flex gap-0.5">
                  <div className="h-0.5 w-1" style={{ backgroundColor: '#8a9490' }} />
                </div>
                <div className="flex gap-0.5 pl-1.5">
                  <div className="h-0.5 w-4 rounded-full" style={{ backgroundColor: '#388E3C' }} />
                  <div className="h-0.5 w-6 rounded-full" style={{ backgroundColor: '#b45309' }} />
                </div>
                <div className="flex gap-0.5 pl-1.5">
                  <div className="h-0.5 w-5 rounded-full" style={{ backgroundColor: '#388E3C' }} />
                  <div className="h-0.5 w-3 rounded-full" style={{ backgroundColor: '#2563eb' }} />
                </div>
                <div className="flex gap-0.5 pl-1.5">
                  <div className="h-0.5 w-4 rounded-full" style={{ backgroundColor: '#388E3C' }} />
                  <div className="h-0.5 w-4 rounded-full" style={{ backgroundColor: '#7c3aed' }} />
                </div>
                <div className="flex gap-0.5">
                  <div className="h-0.5 w-1" style={{ backgroundColor: '#8a9490' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Sticky note — far left */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-2px] group-hover:rotate-[-1deg]"
            style={{
              left: '6%',
              top: '15%',
              width: 68,
              height: 56,
              borderRadius: 6,
              backgroundColor: '#fef9c3',
              boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              transform: 'rotate(-4deg)',
              padding: 6
            }}
          >
            <div className="h-1 w-9 rounded-full" style={{ backgroundColor: '#e5d78c' }} />
            <div className="mt-1 h-0.5 w-11 rounded-full" style={{ backgroundColor: '#efe5a0' }} />
            <div className="mt-0.5 h-0.5 w-7 rounded-full" style={{ backgroundColor: '#efe5a0' }} />
            <div className="mt-0.5 h-0.5 w-9 rounded-full" style={{ backgroundColor: '#efe5a0' }} />
          </div>

          {/* Second sticky note — blue */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-1px]"
            style={{
              left: '12%',
              top: '45%',
              width: 56,
              height: 44,
              borderRadius: 5,
              backgroundColor: '#dbeafe',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              transform: 'rotate(2deg)',
              padding: 5
            }}
          >
            <div className="h-0.5 w-7 rounded-full" style={{ backgroundColor: '#93c5fd' }} />
            <div className="mt-1 h-0.5 w-9 rounded-full" style={{ backgroundColor: '#bfdbfe' }} />
            <div className="mt-0.5 h-0.5 w-5 rounded-full" style={{ backgroundColor: '#bfdbfe' }} />
          </div>

          {/* Third sticky note — green, overlapping */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-2px] group-hover:rotate-[1deg]"
            style={{
              left: '2%',
              top: '38%',
              width: 52,
              height: 42,
              borderRadius: 5,
              backgroundColor: '#dcfce7',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              transform: 'rotate(-6deg)',
              padding: 5
            }}
          >
            <div className="h-0.5 w-6 rounded-full" style={{ backgroundColor: '#86efac' }} />
            <div className="mt-1 h-0.5 w-8 rounded-full" style={{ backgroundColor: '#bbf7d0' }} />
            <div className="mt-0.5 h-0.5 w-5 rounded-full" style={{ backgroundColor: '#bbf7d0' }} />
          </div>

          {/* Fourth sticky note — purple, tucked behind */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-1px]"
            style={{
              left: '15%',
              top: '22%',
              width: 48,
              height: 38,
              borderRadius: 5,
              backgroundColor: '#ede9fe',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              transform: 'rotate(5deg)',
              padding: 5
            }}
          >
            <div className="h-0.5 w-7 rounded-full" style={{ backgroundColor: '#c4b5fd' }} />
            <div className="mt-1 h-0.5 w-5 rounded-full" style={{ backgroundColor: '#ddd6fe' }} />
          </div>

          {/* Third sticky note — pink, far right */}
          <div
            className="absolute hidden transition-transform duration-700 group-hover:translate-y-[-2px] group-hover:rotate-[1deg] lg:block"
            style={{
              right: '6%',
              top: '14%',
              width: 60,
              height: 48,
              borderRadius: 5,
              backgroundColor: '#fce7f3',
              boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
              transform: 'rotate(3deg)',
              padding: 5
            }}
          >
            <div className="h-0.5 w-8 rounded-full" style={{ backgroundColor: '#f9a8d4' }} />
            <div className="mt-1 h-0.5 w-10 rounded-full" style={{ backgroundColor: '#fbcfe8' }} />
            <div className="mt-0.5 h-0.5 w-6 rounded-full" style={{ backgroundColor: '#fbcfe8' }} />
          </div>

          {/* Stats footer bar — bottom right area */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-2px]"
            style={{
              right: '10%',
              bottom: '36%',
              borderRadius: 5,
              border: '1px solid #e5e4dc',
              backgroundColor: '#ffffff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              padding: '3px 8px'
            }}
          >
            <div className="flex items-center gap-2 text-[5px]" style={{ color: '#8a9490' }}>
              <span>128 words</span>
              <span style={{ color: '#d4d0c8' }}>·</span>
              <span>12 lines</span>
              <span style={{ color: '#d4d0c8' }}>·</span>
              <span>1 min read</span>
            </div>
          </div>
        </div>

        {/* Bottom gradient — darken for text legibility */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)'
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
                  style={{ fontFamily: 'var(--font-space-grotesk)', letterSpacing: '-0.025em' }}
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
        triggerId="leafpad"
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
