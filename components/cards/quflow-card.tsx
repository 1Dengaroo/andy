'use client';

import { Card, CardContent } from '../ui/card';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { ProjectModal, useHashModal } from './project-modal';
import { MockEventLoop } from './quflow-demos';

/* Event Loop Visualizer dark-theme tokens */
const CARD_BG = '#161616';
const BORDER = '#262626';
const ITEM_BG = '#1c1c1c';
const ITEM_BORDER = '#2a2a2a';
const MUTED = 'rgba(161,161,170,0.7)';
const BLUE = '#60a5fa';
const PURPLE = '#a78bfa';
const EMERALD = '#34d399';

const STAGES = ['Stack', 'Micro', 'Task', 'Render'];

function QuFlowCard() {
  const [open, setOpen] = useHashModal('quflow');

  return (
    <>
      <Card
        id="quflow"
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
        {/* Dark base — the app's dark-theme background */}
        <div className="absolute inset-0" style={{ backgroundColor: '#0a0a0a' }} />

        {/* Ambient blue glow */}
        <div
          className="absolute inset-0 opacity-60 transition-opacity duration-700 group-hover:opacity-90"
          style={{
            background:
              'radial-gradient(ellipse 50% 60% at 62% 24%, rgba(59,130,246,0.16) 0%, transparent 70%)'
          }}
        />

        <div className="absolute inset-0 overflow-hidden">
          {/* Floating app window — right */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-4px]"
            style={{
              right: '6%',
              top: '8%',
              width: '56%',
              bottom: '34%',
              borderRadius: 7,
              border: `1px solid ${BORDER}`,
              backgroundColor: CARD_BG,
              boxShadow: '0 10px 34px rgba(0,0,0,0.45)',
              overflow: 'hidden'
            }}
          >
            {/* Window header */}
            <div
              className="flex items-center gap-1.5 px-2 py-1"
              style={{ borderBottom: `1px solid ${BORDER}` }}
            >
              <div className="size-[5px] rounded-full" style={{ backgroundColor: BLUE }} />
              <span
                className="font-mono text-[5px] font-semibold"
                style={{ color: 'rgba(250,250,250,0.85)' }}
              >
                Event Loop Visualizer
              </span>
            </div>

            <div className="flex flex-col gap-1.5 p-1.5">
              {/* Event-loop stage strip */}
              <div className="flex items-center justify-between">
                {STAGES.map((label, i) => (
                  <div key={label} className="flex flex-1 items-center">
                    <div className="flex flex-col items-center gap-[2px]">
                      <div
                        className="flex size-[11px] items-center justify-center rounded-[3px] font-mono text-[5px] font-semibold transition-transform duration-700 group-hover:scale-105"
                        style={{
                          backgroundColor: i === 0 ? 'rgba(59,130,246,0.2)' : ITEM_BG,
                          color: i === 0 ? BLUE : MUTED,
                          border: `1px solid ${i === 0 ? 'rgba(59,130,246,0.4)' : ITEM_BORDER}`
                        }}
                      >
                        {i + 1}
                      </div>
                      <span
                        className="font-mono text-[3.5px]"
                        style={{ color: i === 0 ? BLUE : MUTED }}
                      >
                        {label}
                      </span>
                    </div>
                    {i < STAGES.length - 1 && (
                      <ChevronRight
                        className="mx-[1px] size-[5px] flex-1"
                        style={{ color: 'rgba(161,161,170,0.35)' }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Two mini queue cards */}
              <div className="grid grid-cols-2 gap-1.5">
                <MiniQueue label="Call Stack" color={BLUE} items={['log()', 'main()']} />
                <MiniQueue label="Microtask" color={PURPLE} items={['.then(fn)']} />
              </div>
            </div>
          </div>

          {/* Floating console panel — left */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-2px] group-hover:rotate-[-0.5deg]"
            style={{
              left: '6%',
              top: '14%',
              bottom: '40%',
              width: '30%',
              borderRadius: 7,
              border: `1px solid ${BORDER}`,
              backgroundColor: 'rgba(22,22,22,0.92)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
              padding: '5px 7px',
              overflow: 'hidden'
            }}
          >
            <span
              className="font-mono text-[3.5px] uppercase tracking-widest"
              style={{ color: MUTED }}
            >
              console
            </span>
            <div className="mt-[3px] space-y-[2px] font-mono text-[5px] leading-none">
              {['start', 'end', 'fn', 'cb'].map((line) => (
                <div key={line} className="flex items-center gap-1">
                  <span style={{ color: EMERALD }}>›</span>
                  <span style={{ color: 'rgba(228,228,231,0.85)' }}>{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient for text */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background:
              'linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.9) 45%, transparent 100%)'
          }}
        />

        <CardContent className="relative z-10 flex h-full w-full flex-col justify-end p-5">
          <div className="flex items-end justify-between">
            <div>
              <span className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest text-white/50">
                Project
              </span>
              <h3
                className="text-lg font-extrabold tracking-tight text-white sm:text-2xl"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Event Loop <span className="text-blue-400">Visualizer</span>
              </h3>
            </div>
            <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/80" />
          </div>
        </CardContent>
      </Card>

      <ProjectModal
        open={open}
        onOpenChange={setOpen}
        triggerId="quflow"
        closeClassName="text-white"
        className="sm:max-w-xl"
        previewClassName=""
        preview={
          <div className="p-4" style={{ backgroundColor: '#0a0a0a' }}>
            <MockEventLoop />
          </div>
        }
        title="Event Loop Visualizer"
        subtitle="Step through JavaScript, one task at a time"
        link={{ label: 'quflow.vercel.app', href: 'https://quflow.vercel.app/' }}
      >
        <p>
          An interactive visualizer for the JavaScript event loop. Paste in a snippet and step
          through execution to watch how the call stack, microtask queue, task queue, and render
          phase hand work back and forth.
        </p>
        <p>
          It statically parses code into an AST and simulates the runtime, so concurrency gotchas —
          like why a <code>setTimeout(…, 0)</code> still runs after an already-resolved promise —
          become something you can see rather than memorize.
        </p>
      </ProjectModal>
    </>
  );
}

function MiniQueue({ label, color, items }: { label: string; color: string; items: string[] }) {
  return (
    <div
      className="flex flex-col rounded-[4px]"
      style={{ border: `1px solid ${BORDER}`, backgroundColor: ITEM_BG }}
    >
      <div className="flex items-center gap-1 px-1 py-[2px]">
        <span className="size-[3px] rounded-full" style={{ backgroundColor: color }} />
        <span
          className="font-mono text-[4px] font-semibold"
          style={{ color: 'rgba(250,250,250,0.8)' }}
        >
          {label}
        </span>
        <span className="ml-auto font-mono text-[4px]" style={{ color }}>
          {items.length}
        </span>
      </div>
      <div className="flex flex-col gap-[2px] p-1">
        {items.map((item, i) => (
          <div
            key={item}
            className="rounded-[2px] px-1 py-[1.5px] text-center font-mono text-[4.5px]"
            style={{
              backgroundColor: CARD_BG,
              border: `1px solid ${ITEM_BORDER}`,
              color: i === 0 ? color : MUTED
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuFlowCard;
