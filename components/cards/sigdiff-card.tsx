'use client';

import { Card, CardContent } from '../ui/card';
import { ArrowUpRight } from 'lucide-react';
import { ProjectModal, useHashModal } from './project-modal';
import { MockSigdiffTerminal } from './sigdiff-demos';

function SigdiffCard() {
  const [open, setOpen] = useHashModal('sigdiff');

  return (
    <>
      <Card
        id="sigdiff"
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
        {/* Dark base */}
        <div className="absolute inset-0" style={{ backgroundColor: '#0d1117' }} />

        {/* Diff-style side-by-side visualization */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Hunk header — spanning both columns */}
          <div
            className="absolute font-mono text-[6px]"
            style={{
              left: '8%',
              right: '8%',
              top: '6%',
              color: 'rgba(88,166,255,0.6)',
              borderBottom: '1px solid rgba(48,54,61,0.5)',
              paddingBottom: 3
            }}
          >
            @@ -1,11 +1,11 @@ export interface ApiSurface
          </div>

          {/* Left column — "before" (removals) */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-x-[-3px]"
            style={{
              left: '8%',
              top: '14%',
              width: '38%',
              bottom: '38%'
            }}
          >
            <div className="space-y-[3px]">
              {/* Neutral */}
              <div className="flex items-center gap-1 rounded-sm px-1.5 py-[2px]">
                <span className="font-mono text-[6px]" style={{ color: 'rgba(139,148,158,0.45)' }}>
                  1
                </span>
                <div
                  className="h-[2px] w-16 rounded-full"
                  style={{ backgroundColor: 'rgba(139,148,158,0.2)' }}
                />
              </div>
              {/* Removed lines */}
              {[20, 14, 10, 17, 12, 19, 8].map((w, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 rounded-sm px-1.5 py-[2px]"
                  style={{ backgroundColor: 'rgba(248,81,73,0.15)' }}
                >
                  <span className="font-mono text-[6px]" style={{ color: 'rgba(248,81,73,0.7)' }}>
                    {i + 2}
                  </span>
                  <span className="font-mono text-[6px]" style={{ color: 'rgba(248,81,73,0.6)' }}>
                    -
                  </span>
                  <div
                    className="h-[2px] rounded-full"
                    style={{ backgroundColor: `rgba(248,81,73,${0.4 - i * 0.03})`, width: w * 4 }}
                  />
                </div>
              ))}
              {/* Neutral */}
              <div className="flex items-center gap-1 rounded-sm px-1.5 py-[2px]">
                <span className="font-mono text-[6px]" style={{ color: 'rgba(139,148,158,0.45)' }}>
                  9
                </span>
                <div
                  className="h-[2px] w-12 rounded-full"
                  style={{ backgroundColor: 'rgba(139,148,158,0.2)' }}
                />
              </div>
              <div className="flex items-center gap-1 rounded-sm px-1.5 py-[2px]">
                <span className="font-mono text-[6px]" style={{ color: 'rgba(139,148,158,0.45)' }}>
                  10
                </span>
                <div
                  className="h-[2px] w-8 rounded-full"
                  style={{ backgroundColor: 'rgba(139,148,158,0.15)' }}
                />
              </div>
            </div>
          </div>

          {/* Center divider */}
          <div
            className="absolute"
            style={{
              left: '50%',
              top: '14%',
              bottom: '40%',
              width: 1,
              backgroundColor: 'rgba(48,54,61,0.8)'
            }}
          />

          {/* Right column — "after" (additions) */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-x-[3px]"
            style={{
              right: '8%',
              top: '14%',
              width: '38%',
              bottom: '38%'
            }}
          >
            <div className="space-y-[3px]">
              {/* Neutral */}
              <div className="flex items-center gap-1 rounded-sm px-1.5 py-[2px]">
                <span className="font-mono text-[6px]" style={{ color: 'rgba(139,148,158,0.45)' }}>
                  1
                </span>
                <div
                  className="h-[2px] w-16 rounded-full"
                  style={{ backgroundColor: 'rgba(139,148,158,0.2)' }}
                />
              </div>
              {/* Added lines */}
              {[18, 22, 12, 16, 20, 9].map((w, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 rounded-sm px-1.5 py-[2px]"
                  style={{ backgroundColor: 'rgba(63,185,80,0.15)' }}
                >
                  <span className="font-mono text-[6px]" style={{ color: 'rgba(63,185,80,0.7)' }}>
                    {i + 2}
                  </span>
                  <span className="font-mono text-[6px]" style={{ color: 'rgba(63,185,80,0.6)' }}>
                    +
                  </span>
                  <div
                    className="h-[2px] rounded-full"
                    style={{ backgroundColor: `rgba(63,185,80,${0.4 - i * 0.03})`, width: w * 4 }}
                  />
                </div>
              ))}
              {/* Neutral */}
              <div className="flex items-center gap-1 rounded-sm px-1.5 py-[2px]">
                <span className="font-mono text-[6px]" style={{ color: 'rgba(139,148,158,0.45)' }}>
                  8
                </span>
                <div
                  className="h-[2px] w-12 rounded-full"
                  style={{ backgroundColor: 'rgba(139,148,158,0.2)' }}
                />
              </div>
            </div>
          </div>

          {/* Floating version bump badge — bottom-right of diff area */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-2px]"
            style={{
              right: '10%',
              bottom: '38%',
              borderRadius: 5,
              border: '1px solid rgba(48,54,61,0.8)',
              backgroundColor: 'rgba(22,27,34,0.95)',
              padding: '3px 7px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            <div className="flex items-center gap-1.5 font-mono text-[6px]">
              <span style={{ color: 'rgba(139,148,158,0.7)' }}>bump</span>
              <span
                className="rounded px-1 py-[1px]"
                style={{
                  backgroundColor: 'rgba(248,81,73,0.2)',
                  color: 'rgba(248,81,73,0.85)',
                  fontSize: 5,
                  fontWeight: 600
                }}
              >
                major
              </span>
              <span style={{ color: 'rgba(139,148,158,0.5)' }}>·</span>
              <span style={{ color: 'rgba(248,81,73,0.7)', fontSize: 5 }}>-4</span>
              <span style={{ color: 'rgba(63,185,80,0.7)', fontSize: 5 }}>+6</span>
            </div>
          </div>
        </div>

        {/* Ambient glow — red left, green right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 30% 50% at 25% 30%, rgba(248,81,73,0.12) 0%, transparent 70%)'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 30% 50% at 75% 30%, rgba(63,185,80,0.12) 0%, transparent 70%)'
          }}
        />

        {/* Bottom gradient for text */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background:
              'linear-gradient(to top, #0d1117 0%, rgba(13,17,23,0.9) 45%, transparent 100%)'
          }}
        />

        <CardContent className="relative z-10 flex h-full w-full flex-col justify-end p-5">
          <div className="flex items-end justify-between">
            <div>
              <span className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest text-white/50">
                Open Source
              </span>
              <span
                className="text-xl font-bold tracking-tight text-white sm:text-2xl"
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                sigdiff
              </span>
            </div>
            <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/80" />
          </div>
        </CardContent>
      </Card>

      <ProjectModal
        open={open}
        onOpenChange={setOpen}
        closeClassName="text-white"
        className="max-h-[90vh] overflow-y-auto !border-[#30363d] !bg-[#0d1117] !text-[#e6edf3] sm:!max-w-2xl"
        previewClassName=""
        preview={
          <div className="relative h-full w-full p-5 pb-3" style={{ backgroundColor: '#0d1117' }}>
            <MockSigdiffTerminal />
          </div>
        }
        title="sigdiff"
        subtitle="Automated semver classification for TypeScript"
        link={{ label: 'npmjs.com/package/sigdiff', href: 'https://www.npmjs.com/package/sigdiff' }}
      >
        <p style={{ color: '#8b949e' }}>
          An automated API surface change detection tool for TypeScript projects. Compares public
          exports between two git refs and classifies every change as major, minor, or patch — zero
          configuration required.
        </p>
        <p style={{ color: '#8b949e' }}>
          Built with the TypeScript Compiler API for AST-level analysis. Features a composable
          pipeline (extract → diff → classify → format), multiple output formats including JSON and
          CI-friendly exit codes, and ships as a single dependency under 8 KB.
        </p>
      </ProjectModal>
    </>
  );
}

export default SigdiffCard;
