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
        {/* Dark base */}
        <div className="absolute inset-0" style={{ backgroundColor: '#0A0C10' }} />

        {/* Faint dot-grid texture, fading toward the bottom */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 85%)'
          }}
        />

        {/* Soft ambient glow behind the diff cluster */}
        <div
          aria-hidden
          className="absolute -right-8 top-1/2 h-56 w-96 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-700"
          style={{
            background: 'radial-gradient(circle, rgba(63,185,80,0.08) 0%, transparent 70%)'
          }}
        />

        {/* One signature change → one version bump */}
        <div className="absolute right-[7%] top-1/2 hidden -translate-y-1/2 font-mono sm:block">
          <div className="space-y-1.5 text-[10px] leading-none">
            <div
              className="flex items-center gap-2 transition-opacity duration-500 group-hover:opacity-60"
              style={{ color: 'rgba(248,81,73,0.75)' }}
            >
              <span className="select-none" style={{ color: 'rgba(248,81,73,0.5)' }}>
                -
              </span>
              <span>diff(a: string, b: string)</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: 'rgba(63,185,80,0.9)' }}>
              <span className="select-none" style={{ color: 'rgba(63,185,80,0.55)' }}>
                +
              </span>
              <span>diff(a: Ref, b: Ref, opts?)</span>
            </div>
          </div>

          <div className="my-2.5 h-px w-full" style={{ backgroundColor: 'rgba(48,54,61,0.7)' }} />

          <div className="flex items-center gap-2 text-[11px] leading-none">
            <span style={{ color: 'rgba(139,148,158,0.7)' }}>1.8.3</span>
            <span
              className="transition-transform duration-500 group-hover:translate-x-0.5"
              style={{ color: 'rgba(139,148,158,0.5)' }}
            >
              →
            </span>
            <span className="font-semibold" style={{ color: '#E6EDF3' }}>
              2.0.0
            </span>
            <span
              className="rounded-full px-1.5 py-0.5 text-[8px] font-semibold"
              style={{ backgroundColor: 'rgba(248,81,73,0.15)', color: 'rgba(248,81,73,0.9)' }}
            >
              major
            </span>
          </div>
        </div>

        {/* Bottom gradient for text */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background:
              'linear-gradient(to top, #0A0C10 0%, rgba(10,12,16,0.85) 40%, transparent 100%)'
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
                style={{ fontFamily: 'monospace' }}
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
        triggerId="sigdiff"
        closeClassName="text-white"
        className="!border-[#30363d] !bg-[#0d1117] !text-[#e6edf3] sm:!max-w-2xl"
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
