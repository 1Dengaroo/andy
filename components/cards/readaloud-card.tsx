'use client';

import { Card, CardContent } from '../ui/card';
import { ArrowUpRight, Play } from 'lucide-react';
import { ProjectModal, useHashModal } from './project-modal';
import { MockReadAloud } from './readaloud-demos';

/* ── ReadAloud palette — daylight white, ultramarine accent, lemon highlight ── */
const BG = '#f7f8fc';
const PANEL = '#ffffff';
const BORDER = '#dcdfef';
const LINE_STRONG = '#b9bed8';
const HIGHLIGHT = '#f9e03f';
const PRIMARY = '#2f43fa';

const SHADOW = '0 8px 24px rgba(5,6,20,0.35)';

function ReadAloudCard() {
  const [open, setOpen] = useHashModal('readaloud');

  return (
    <>
      <Card
        id="readaloud"
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
        {/* Base gradient — deep navy ink into ultramarine */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #0A0B1A 0%, #14142B 42%, #232C86 76%, #0C0D1E 100%)'
          }}
        />

        {/* Ultramarine glow — behind the reader, intensifies on hover */}
        <div
          className="absolute -right-10 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full opacity-75 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background: 'radial-gradient(circle, rgba(47,67,250,0.50) 0%, transparent 70%)'
          }}
        />

        {/* Lemon glow — the highlight color, top-left for depth */}
        <div
          className="absolute -left-12 -top-12 h-44 w-44 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(249,224,63,0.16) 0%, transparent 70%)'
          }}
        />

        {/* Mock reader — a page of text with the spoken word lit up */}
        <div
          aria-hidden
          className="absolute right-7 top-1/2 hidden -translate-y-1/2 transition-transform duration-500 group-hover:scale-105 sm:block"
        >
          <div className="relative h-28 w-36">
            {/* Reading surface */}
            <div
              className="absolute inset-x-0 top-0 rounded-lg p-3"
              style={{ backgroundColor: PANEL, boxShadow: SHADOW, border: `1px solid ${BORDER}` }}
            >
              <div className="flex items-center gap-1">
                <div className="h-1 w-8 rounded-full" style={{ backgroundColor: LINE_STRONG }} />
                <div className="h-1 w-10 rounded-full" style={{ backgroundColor: BORDER }} />
                <div className="h-1 w-5 rounded-full" style={{ backgroundColor: BORDER }} />
              </div>

              {/* The active word — slides forward on hover, as the pill does in the app */}
              <div className="mt-1.5 flex items-center gap-1">
                <div className="h-1 w-4 rounded-full" style={{ backgroundColor: BORDER }} />
                <div
                  className="h-2.5 w-9 rounded-[3px] transition-transform duration-700 group-hover:translate-x-3"
                  style={{ backgroundColor: HIGHLIGHT }}
                />
                <div className="h-1 w-6 rounded-full" style={{ backgroundColor: BORDER }} />
              </div>

              <div className="mt-1.5 flex items-center gap-1">
                <div className="h-1 w-6 rounded-full" style={{ backgroundColor: BORDER }} />
                <div className="h-1 w-12 rounded-full" style={{ backgroundColor: BORDER }} />
              </div>
              <div className="mt-1.5 flex items-center gap-1">
                <div className="h-1 w-9 rounded-full" style={{ backgroundColor: BORDER }} />
                <div className="h-1 w-4 rounded-full" style={{ backgroundColor: BORDER }} />
              </div>
            </div>

            {/* Floating player dock */}
            <div
              className="absolute inset-x-4 bottom-1 flex items-center gap-1.5 rounded-full px-1.5 py-1 transition-transform duration-700 group-hover:translate-y-[-2px]"
              style={{ backgroundColor: PANEL, boxShadow: SHADOW, border: `1px solid ${BORDER}` }}
            >
              <div
                className="flex size-3 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: PRIMARY }}
              >
                <Play className="size-1.5" fill={PANEL} style={{ color: PANEL }} />
              </div>
              <div
                className="h-0.5 flex-1 overflow-hidden rounded-full"
                style={{ backgroundColor: BG }}
              >
                <div className="h-full w-1/3 rounded-full" style={{ backgroundColor: PRIMARY }} />
              </div>
            </div>
          </div>
        </div>

        {/* Scrim so the title stays legible over the reader */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(100deg, rgba(10,11,26,0.92) 0%, rgba(10,11,26,0.6) 45%, transparent 75%)'
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{ background: 'linear-gradient(to top, rgba(8,9,20,0.85) 0%, transparent 100%)' }}
        />

        <CardContent className="relative z-10 flex h-full w-full flex-col justify-end p-5">
          <div className="flex items-end justify-between">
            <div>
              <span className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest text-white/50">
                Project
              </span>
              <span
                className="text-lg font-bold tracking-tight text-white sm:text-xl"
                style={{ fontFamily: 'var(--font-space-grotesk)', letterSpacing: '-0.025em' }}
              >
                ReadAloud
              </span>
            </div>
            <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/80" />
          </div>
        </CardContent>
      </Card>

      <ProjectModal
        open={open}
        onOpenChange={setOpen}
        triggerId="readaloud"
        closeClassName="text-black"
        className="sm:!max-w-2xl"
        previewClassName=""
        preview={
          <div className="relative h-full w-full p-5 pb-3" style={{ backgroundColor: BG }}>
            <MockReadAloud />
          </div>
        }
        title="ReadAloud"
        subtitle="Paste text, hear it spoken, follow every word"
        link={{ label: 'read-aloud-silk.vercel.app', href: 'https://read-aloud-silk.vercel.app' }}
      >
        <p>
          A minimal read-aloud tool. Paste anything, hear it in Amazon Polly&apos;s Matthew voice,
          and follow along with a pill that slides word by word as it is spoken. Click any word to
          seek straight to it.
        </p>
        <p>
          The tricky part is timing: Polly returns word-level speech marks in UTF-8 byte offsets,
          which get re-based against each chunk&apos;s decoded audio duration so highlighting stays
          in sync across a long document. Built with Next.js App Router, TypeScript, Tailwind, and
          AWS Polly, with readings saved to IndexedDB.
        </p>
      </ProjectModal>
    </>
  );
}

export default ReadAloudCard;
