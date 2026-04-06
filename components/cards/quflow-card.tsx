'use client';

import { Card, CardContent } from '../ui/card';
import { ArrowUpRight } from 'lucide-react';
import { ProjectModal, useHashModal } from './project-modal';

function QuFlowCard() {
  const [open, setOpen] = useHashModal('quflow');

  return (
    <>
      <Card
        id="quflow"
        className="group relative aspect-[7/2] cursor-pointer overflow-hidden !border-0"
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
        <div className="absolute inset-0" style={{ backgroundColor: '#0c1222' }} />

        {/* Ambient blue glow */}
        <div
          className="absolute inset-0 opacity-60 transition-opacity duration-700 group-hover:opacity-80"
          style={{
            background:
              'radial-gradient(ellipse 50% 60% at 60% 25%, rgba(56,130,246,0.15) 0%, transparent 70%)'
          }}
        />

        {/* Floating app window */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-4px]"
            style={{
              right: '6%',
              top: '8%',
              width: '55%',
              bottom: '40%',
              borderRadius: 6,
              border: '1px solid rgba(48,54,61,0.8)',
              backgroundColor: 'rgba(22,27,34,0.95)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              overflow: 'hidden'
            }}
          >
            {/* Window toolbar */}
            <div
              className="flex items-center gap-1 px-2 py-1"
              style={{ borderBottom: '1px solid rgba(48,54,61,0.6)' }}
            >
              <div className="size-1 rounded-full" style={{ backgroundColor: '#f85149' }} />
              <div className="size-1 rounded-full" style={{ backgroundColor: '#d29922' }} />
              <div className="size-1 rounded-full" style={{ backgroundColor: '#3fb950' }} />
              <span
                className="ml-1.5 font-mono text-[5px]"
                style={{ color: 'rgba(139,148,158,0.6)' }}
              >
                event-loop.js
              </span>
            </div>

            {/* Three queue columns inside the window */}
            <div className="flex h-full gap-px" style={{ backgroundColor: 'rgba(48,54,61,0.3)' }}>
              {/* Call Stack */}
              <div
                className="flex flex-1 flex-col"
                style={{ backgroundColor: 'rgba(22,27,34,0.95)' }}
              >
                <div
                  className="px-1.5 py-1 text-center font-mono text-[4px] uppercase tracking-widest"
                  style={{
                    color: 'rgba(56,130,246,0.6)',
                    borderBottom: '1px solid rgba(48,54,61,0.4)'
                  }}
                >
                  Call Stack
                </div>
                <div className="flex flex-1 flex-col-reverse gap-[2px] p-1">
                  <div
                    className="rounded-sm px-1 py-[2px] text-center font-mono text-[5px] font-medium transition-transform duration-700 group-hover:translate-y-[-2px]"
                    style={{
                      backgroundColor: 'rgba(56,130,246,0.15)',
                      color: 'rgba(56,130,246,0.9)',
                      border: '1px solid rgba(56,130,246,0.2)'
                    }}
                  >
                    log()
                  </div>
                  <div
                    className="rounded-sm px-1 py-[2px] text-center font-mono text-[5px] font-medium transition-transform duration-700 group-hover:translate-y-[-1px]"
                    style={{
                      backgroundColor: 'rgba(56,130,246,0.1)',
                      color: 'rgba(56,130,246,0.6)',
                      border: '1px solid rgba(56,130,246,0.15)'
                    }}
                  >
                    resolve()
                  </div>
                  <div
                    className="rounded-sm px-1 py-[2px] text-center font-mono text-[5px] font-medium"
                    style={{
                      backgroundColor: 'rgba(56,130,246,0.06)',
                      color: 'rgba(56,130,246,0.4)',
                      border: '1px solid rgba(56,130,246,0.08)'
                    }}
                  >
                    main()
                  </div>
                </div>
              </div>

              {/* Microtask Queue */}
              <div
                className="flex flex-1 flex-col"
                style={{ backgroundColor: 'rgba(22,27,34,0.95)' }}
              >
                <div
                  className="px-1.5 py-1 text-center font-mono text-[4px] uppercase tracking-widest"
                  style={{
                    color: 'rgba(52,211,153,0.6)',
                    borderBottom: '1px solid rgba(48,54,61,0.4)'
                  }}
                >
                  Microtask
                </div>
                <div className="flex flex-1 flex-col-reverse gap-[2px] p-1">
                  <div
                    className="rounded-sm px-1 py-[2px] text-center font-mono text-[5px] font-medium transition-transform duration-700 group-hover:translate-y-[-3px]"
                    style={{
                      backgroundColor: 'rgba(52,211,153,0.15)',
                      color: 'rgba(52,211,153,0.9)',
                      border: '1px solid rgba(52,211,153,0.2)'
                    }}
                  >
                    .then(fn)
                  </div>
                  <div
                    className="rounded-sm px-1 py-[2px] text-center font-mono text-[5px] font-medium transition-transform duration-700 group-hover:translate-y-[-2px]"
                    style={{
                      backgroundColor: 'rgba(52,211,153,0.08)',
                      color: 'rgba(52,211,153,0.5)',
                      border: '1px solid rgba(52,211,153,0.12)'
                    }}
                  >
                    .catch(e)
                  </div>
                </div>
              </div>

              {/* Macrotask Queue */}
              <div
                className="flex flex-1 flex-col"
                style={{ backgroundColor: 'rgba(22,27,34,0.95)' }}
              >
                <div
                  className="px-1.5 py-1 text-center font-mono text-[4px] uppercase tracking-widest"
                  style={{
                    color: 'rgba(251,191,36,0.6)',
                    borderBottom: '1px solid rgba(48,54,61,0.4)'
                  }}
                >
                  Macrotask
                </div>
                <div className="flex flex-1 flex-col-reverse gap-[2px] p-1">
                  <div
                    className="rounded-sm px-1 py-[2px] text-center font-mono text-[5px] font-medium transition-transform duration-700 group-hover:translate-y-[-4px]"
                    style={{
                      backgroundColor: 'rgba(251,191,36,0.15)',
                      color: 'rgba(251,191,36,0.9)',
                      border: '1px solid rgba(251,191,36,0.2)'
                    }}
                  >
                    setTimeout
                  </div>
                  <div
                    className="rounded-sm px-1 py-[2px] text-center font-mono text-[5px] font-medium transition-transform duration-700 group-hover:translate-y-[-3px]"
                    style={{
                      backgroundColor: 'rgba(251,191,36,0.08)',
                      color: 'rgba(251,191,36,0.5)',
                      border: '1px solid rgba(251,191,36,0.12)'
                    }}
                  >
                    setInterval
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating code snippet — left, slightly behind */}
          <div
            className="absolute transition-transform duration-700 group-hover:translate-y-[-2px] group-hover:rotate-[-0.5deg]"
            style={{
              left: '6%',
              top: '12%',
              bottom: '44%',
              width: '32%',
              borderRadius: 6,
              border: '1px solid rgba(48,54,61,0.6)',
              backgroundColor: 'rgba(22,27,34,0.85)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
              padding: '6px 8px',
              overflow: 'hidden'
            }}
          >
            <div className="font-mono text-[5px] leading-[1.6]">
              <div>
                <span style={{ color: 'rgba(139,148,158,0.4)' }}>1 </span>
                <span style={{ color: 'rgba(56,130,246,0.8)' }}>console</span>
                <span style={{ color: 'rgba(139,148,158,0.5)' }}>.</span>
                <span style={{ color: 'rgba(210,153,34,0.8)' }}>log</span>
                <span style={{ color: 'rgba(139,148,158,0.4)' }}>(</span>
                <span style={{ color: 'rgba(63,185,80,0.8)' }}>&quot;start&quot;</span>
                <span style={{ color: 'rgba(139,148,158,0.4)' }}>)</span>
              </div>
              <div>
                <span style={{ color: 'rgba(139,148,158,0.4)' }}>2 </span>
                <span style={{ color: 'rgba(175,135,255,0.8)' }}>setTimeout</span>
                <span style={{ color: 'rgba(139,148,158,0.4)' }}>(cb, 0)</span>
              </div>
              <div>
                <span style={{ color: 'rgba(139,148,158,0.4)' }}>3 </span>
                <span style={{ color: 'rgba(56,130,246,0.8)' }}>Promise</span>
                <span style={{ color: 'rgba(139,148,158,0.5)' }}>.</span>
                <span style={{ color: 'rgba(210,153,34,0.8)' }}>resolve</span>
                <span style={{ color: 'rgba(139,148,158,0.4)' }}>()</span>
              </div>
              <div>
                <span style={{ color: 'rgba(139,148,158,0.4)' }}>4 </span>
                <span style={{ color: 'rgba(139,148,158,0.4)' }}> .</span>
                <span style={{ color: 'rgba(210,153,34,0.8)' }}>then</span>
                <span style={{ color: 'rgba(139,148,158,0.4)' }}>(fn)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient for text */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background:
              'linear-gradient(to top, #0c1222 0%, rgba(12,18,34,0.9) 45%, transparent 100%)'
          }}
        />

        <CardContent className="relative z-10 flex h-full w-full flex-col justify-end p-5">
          <div className="flex items-end justify-between">
            <div>
              <span className="mb-1 block font-mono text-[0.6rem] uppercase tracking-widest text-white/50">
                Project
              </span>
              <h3
                className="text-xl font-extrabold tracking-tight text-white sm:text-2xl"
                style={{ fontFamily: 'var(--font-bricolage)' }}
              >
                Qu<span className="text-blue-400">Flow</span>
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
        preview={
          <video
            src="/videos/quflow.mov"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        }
        title="QuFlow"
        subtitle="JavaScript event loop visualizer"
        link={{ label: 'quflow.vercel.app', href: 'https://quflow.vercel.app/' }}
      >
        <p>
          A JavaScript event loop visualizer. Step through code and watch how the call stack,
          microtask queue, and macrotask queue interact in real time.
        </p>
      </ProjectModal>
    </>
  );
}

export default QuFlowCard;
