'use client';

import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { ArrowUpRight } from 'lucide-react';
import { ProjectModal, useHashModal } from './project-modal';
import { MockMarkdownEditor, MockJsonFormatter, MockNotepad } from './leafpad-demos';

/* ── Refined neutral palette (matches the app's monochrome UI) ── */
const BASE = '#f7f7f8';
const PANEL = '#ffffff';
const BORDER = '#e4e4e7';
const BORDER_SUBTLE = '#f0f0f1';
const INK = '#27272a';
const LINE = '#e4e4e7';
const LINE_STRONG = '#d4d4d8';
const MUTED = '#a1a1aa';

const SHADOW_LG = '0 1px 3px rgba(0,0,0,0.05), 0 6px 16px rgba(0,0,0,0.04)';
const SHADOW_MD = '0 1px 2px rgba(0,0,0,0.04), 0 3px 10px rgba(0,0,0,0.03)';
const SHADOW_SM = '0 1px 2px rgba(0,0,0,0.04)';

const TABS = [
  { key: 'markdown', label: 'Markdown', Component: MockMarkdownEditor },
  { key: 'json', label: 'JSON', Component: MockJsonFormatter },
  { key: 'notepad', label: 'Notepad', Component: MockNotepad }
] as const;

function LeafpadCard() {
  const [open, setOpen] = useHashModal('toolbench');
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Card
        id="toolbench"
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
        {/* Neutral base */}
        <div className="absolute inset-0" style={{ backgroundColor: BASE }} />

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
              borderRadius: 6,
              border: `1px solid ${BORDER}`,
              backgroundColor: PANEL,
              boxShadow: SHADOW_LG,
              overflow: 'hidden'
            }}
          >
            {/* Toolbar */}
            <div
              className="flex items-center gap-1 border-b px-2.5 py-1.5"
              style={{ borderColor: BORDER_SUBTLE }}
            >
              <div className="size-1.5 rounded-full" style={{ backgroundColor: LINE_STRONG }} />
              <div className="size-1.5 rounded-full" style={{ backgroundColor: LINE_STRONG }} />
              <div className="size-1.5 rounded-full" style={{ backgroundColor: LINE_STRONG }} />
              <div className="ml-2 flex gap-1">
                <div className="rounded px-1 py-0.5 text-[6px] font-bold" style={{ color: MUTED }}>
                  B
                </div>
                <div className="rounded px-1 py-0.5 text-[6px] italic" style={{ color: MUTED }}>
                  I
                </div>
                <div className="rounded px-1 py-0.5 text-[6px]" style={{ color: MUTED }}>
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
                    <div className="h-1 w-3 rounded-full" style={{ backgroundColor: INK }} />
                    <div className="h-1 w-10 rounded-full" style={{ backgroundColor: LINE }} />
                  </div>
                  <div className="h-1 w-14 rounded-full" style={{ backgroundColor: LINE }} />
                  <div className="flex gap-1">
                    <div className="h-1 w-2 rounded-full" style={{ backgroundColor: INK }} />
                    <div className="h-1 w-8 rounded-full" style={{ backgroundColor: LINE }} />
                  </div>
                  <div className="h-1 w-6 rounded-full" style={{ backgroundColor: LINE }} />
                  <div className="h-1 w-12 rounded-full" style={{ backgroundColor: LINE }} />
                  <div className="flex gap-1">
                    <div
                      className="h-1 w-1 rounded-full"
                      style={{ backgroundColor: LINE_STRONG }}
                    />
                    <div className="h-1 w-7 rounded-full" style={{ backgroundColor: LINE }} />
                  </div>
                  <div className="h-1 w-10 rounded-full" style={{ backgroundColor: LINE }} />
                </div>
              </div>

              {/* Divider */}
              <div className="w-px" style={{ backgroundColor: BORDER_SUBTLE }} />

              {/* Right: preview */}
              <div className="flex-1 p-2">
                <div className="space-y-1">
                  <div
                    className="h-1.5 w-10 rounded-full"
                    style={{ backgroundColor: LINE_STRONG }}
                  />
                  <div
                    className="h-1 w-14 rounded-full"
                    style={{ backgroundColor: BORDER_SUBTLE }}
                  />
                  <div
                    className="h-1 w-11 rounded-full"
                    style={{ backgroundColor: BORDER_SUBTLE }}
                  />
                  <div
                    className="mt-1 h-1 w-8 rounded-full"
                    style={{ backgroundColor: BORDER_SUBTLE }}
                  />
                  <div
                    className="w-13 h-1 rounded-full"
                    style={{ backgroundColor: BORDER_SUBTLE }}
                  />
                  <div
                    className="h-1 w-10 rounded-full"
                    style={{ backgroundColor: BORDER_SUBTLE }}
                  />
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
              borderRadius: 6,
              border: `1px solid ${BORDER}`,
              backgroundColor: PANEL,
              boxShadow: SHADOW_MD,
              transform: 'rotate(-2deg)',
              overflow: 'hidden'
            }}
          >
            <div
              className="flex items-center justify-between border-b px-2 py-1"
              style={{ borderColor: BORDER_SUBTLE }}
            >
              <div className="h-0.5 w-6 rounded-full" style={{ backgroundColor: LINE_STRONG }} />
              <div className="flex gap-0.5">
                <div className="h-1.5 w-4 rounded-sm" style={{ backgroundColor: '#27272a14' }} />
                <div className="h-1.5 w-4 rounded-sm" style={{ backgroundColor: BORDER_SUBTLE }} />
              </div>
            </div>
            <div className="p-2 font-mono">
              <div className="space-y-0.5">
                <div className="flex gap-0.5">
                  <div className="h-0.5 w-1" style={{ backgroundColor: MUTED }} />
                </div>
                <div className="flex gap-0.5 pl-1.5">
                  <div className="h-0.5 w-4 rounded-full" style={{ backgroundColor: INK }} />
                  <div
                    className="h-0.5 w-6 rounded-full"
                    style={{ backgroundColor: LINE_STRONG }}
                  />
                </div>
                <div className="flex gap-0.5 pl-1.5">
                  <div className="h-0.5 w-5 rounded-full" style={{ backgroundColor: INK }} />
                  <div
                    className="h-0.5 w-3 rounded-full"
                    style={{ backgroundColor: LINE_STRONG }}
                  />
                </div>
                <div className="flex gap-0.5 pl-1.5">
                  <div className="h-0.5 w-4 rounded-full" style={{ backgroundColor: INK }} />
                  <div
                    className="h-0.5 w-4 rounded-full"
                    style={{ backgroundColor: LINE_STRONG }}
                  />
                </div>
                <div className="flex gap-0.5">
                  <div className="h-0.5 w-1" style={{ backgroundColor: MUTED }} />
                </div>
              </div>
            </div>
          </div>

          {/* Note — front */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-2px] group-hover:rotate-[-1deg]"
            style={{
              left: '7%',
              top: '16%',
              width: 70,
              height: 58,
              borderRadius: 6,
              backgroundColor: PANEL,
              border: `1px solid ${BORDER}`,
              boxShadow: SHADOW_SM,
              transform: 'rotate(-3deg)',
              padding: 7
            }}
          >
            <div className="h-1 w-9 rounded-full" style={{ backgroundColor: INK }} />
            <div className="mt-1.5 h-0.5 w-11 rounded-full" style={{ backgroundColor: LINE }} />
            <div className="mt-1 h-0.5 w-7 rounded-full" style={{ backgroundColor: LINE }} />
            <div className="mt-1 h-0.5 w-9 rounded-full" style={{ backgroundColor: LINE }} />
          </div>

          {/* Note — lower */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-1px]"
            style={{
              left: '14%',
              top: '46%',
              width: 58,
              height: 44,
              borderRadius: 6,
              backgroundColor: PANEL,
              border: `1px solid ${BORDER}`,
              boxShadow: SHADOW_SM,
              transform: 'rotate(2deg)',
              padding: 6
            }}
          >
            <div className="h-0.5 w-7 rounded-full" style={{ backgroundColor: LINE_STRONG }} />
            <div className="mt-1.5 h-0.5 w-9 rounded-full" style={{ backgroundColor: LINE }} />
            <div className="mt-1 h-0.5 w-5 rounded-full" style={{ backgroundColor: LINE }} />
          </div>

          {/* Note — tucked behind */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-2px] group-hover:rotate-[1deg]"
            style={{
              left: '2%',
              top: '42%',
              width: 52,
              height: 42,
              borderRadius: 6,
              backgroundColor: PANEL,
              border: `1px solid ${BORDER}`,
              boxShadow: SHADOW_SM,
              transform: 'rotate(-6deg)',
              padding: 6
            }}
          >
            <div className="h-0.5 w-6 rounded-full" style={{ backgroundColor: LINE_STRONG }} />
            <div className="mt-1.5 h-0.5 w-8 rounded-full" style={{ backgroundColor: LINE }} />
            <div className="mt-1 h-0.5 w-5 rounded-full" style={{ backgroundColor: LINE }} />
          </div>

          {/* Stats footer bar — bottom right area */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-2px]"
            style={{
              right: '10%',
              bottom: '36%',
              borderRadius: 5,
              border: `1px solid ${BORDER}`,
              backgroundColor: PANEL,
              boxShadow: SHADOW_SM,
              padding: '3px 8px'
            }}
          >
            <div className="flex items-center gap-2 text-[5px]" style={{ color: MUTED }}>
              <span>128 words</span>
              <span style={{ color: LINE_STRONG }}>·</span>
              <span>12 lines</span>
              <span style={{ color: LINE_STRONG }}>·</span>
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
              <span
                className="text-lg font-bold tracking-tight text-white sm:text-xl"
                style={{ fontFamily: 'var(--font-space-grotesk)', letterSpacing: '-0.025em' }}
              >
                Toolbench
              </span>
            </div>
            <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/80" />
          </div>
        </CardContent>
      </Card>

      <ProjectModal
        open={open}
        onOpenChange={setOpen}
        triggerId="toolbench"
        className="!border-[#e4e4e7] !bg-[#f7f7f8] !text-[#18181b] sm:!max-w-3xl"
        previewClassName=""
        closeClassName="text-[#a1a1aa] hover:text-[#18181b]"
        preview={
          <div className="relative h-full w-full p-5 pb-3" style={{ backgroundColor: BASE }}>
            {/* Tab bar */}
            <div className="mb-3 flex items-center gap-1">
              {TABS.map((tab, i) => (
                <button
                  key={tab.key}
                  type="button"
                  className="rounded-md px-3 py-1.5 text-[11px] font-medium transition-all duration-150"
                  style={{
                    backgroundColor: activeTab === i ? '#27272a0d' : 'transparent',
                    color: activeTab === i ? INK : MUTED
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
        title="Toolbench"
        subtitle="A clean set of developer tools"
        link={{ label: 'toolbench-one.vercel.app', href: 'https://toolbench-one.vercel.app' }}
      >
        <p style={{ color: '#52525b' }}>
          I wanted a clean markdown editor, a fast JSON formatter, and a simple notepad that I
          actually enjoyed using. So I built them all in one place.
        </p>
        <p style={{ color: '#52525b' }}>
          Toolbench is simple, free, and focused. No ads, no accounts, no distractions. Just the
          tools, done well.
        </p>
      </ProjectModal>
    </>
  );
}

export default LeafpadCard;
