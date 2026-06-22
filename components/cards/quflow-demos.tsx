'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronRight, Play, Pause, RotateCcw } from 'lucide-react';

/* ── Event Loop Visualizer dark-theme tokens ── */
const BG = '#0a0a0a';
const CARD = '#161616';
const BORDER = '#262626';
const ITEM_BG = '#1c1c1c';
const ITEM_BORDER = '#2a2a2a';
const FG = '#fafafa';
const MUTED = '#a1a1aa';
const BLUE = '#60a5fa';
const PURPLE = '#a78bfa';
const AMBER = '#fbbf24';
const EMERALD = '#34d399';

type Lane = 'stack' | 'micro' | 'task';

interface Step {
  stack: string[];
  micro: string[];
  task: string[];
  log: string[];
  caption: string;
  active: Lane | null;
}

const STEPS: Step[] = [
  {
    stack: ['main()'],
    micro: [],
    task: [],
    log: [],
    caption: 'main() enters the call stack',
    active: 'stack'
  },
  {
    stack: ['main()', 'log("start")'],
    micro: [],
    task: [],
    log: [],
    caption: 'console.log("start") is called',
    active: 'stack'
  },
  {
    stack: ['main()'],
    micro: [],
    task: [],
    log: ['start'],
    caption: '"start" printed to the console',
    active: 'stack'
  },
  {
    stack: ['main()', 'setTimeout'],
    micro: [],
    task: [],
    log: ['start'],
    caption: 'setTimeout schedules a callback',
    active: 'stack'
  },
  {
    stack: ['main()'],
    micro: [],
    task: ['cb'],
    log: ['start'],
    caption: 'cb is queued in the Task Queue',
    active: 'task'
  },
  {
    stack: ['main()', 'Promise.then'],
    micro: [],
    task: ['cb'],
    log: ['start'],
    caption: 'Promise.resolve().then(fn)',
    active: 'stack'
  },
  {
    stack: ['main()'],
    micro: ['fn'],
    task: ['cb'],
    log: ['start'],
    caption: 'fn is queued in the Microtask Queue',
    active: 'micro'
  },
  {
    stack: ['main()', 'log("end")'],
    micro: ['fn'],
    task: ['cb'],
    log: ['start'],
    caption: 'console.log("end") is called',
    active: 'stack'
  },
  {
    stack: ['main()'],
    micro: ['fn'],
    task: ['cb'],
    log: ['start', 'end'],
    caption: '"end" printed to the console',
    active: 'stack'
  },
  {
    stack: [],
    micro: ['fn'],
    task: ['cb'],
    log: ['start', 'end'],
    caption: 'main() returns — call stack is empty',
    active: null
  },
  {
    stack: ['fn'],
    micro: [],
    task: ['cb'],
    log: ['start', 'end'],
    caption: 'Microtasks drain first — fn runs',
    active: 'micro'
  },
  {
    stack: [],
    micro: [],
    task: ['cb'],
    log: ['start', 'end', 'fn'],
    caption: '"fn" printed — microtasks empty',
    active: 'task'
  },
  {
    stack: ['cb'],
    micro: [],
    task: [],
    log: ['start', 'end', 'fn'],
    caption: 'Only now does the task cb run',
    active: 'task'
  },
  {
    stack: [],
    micro: [],
    task: [],
    log: ['start', 'end', 'fn', 'cb'],
    caption: '"cb" printed — everything drained',
    active: null
  }
];

const LANES: { key: Lane; label: string; color: string }[] = [
  { key: 'stack', label: 'Call Stack', color: BLUE },
  { key: 'micro', label: 'Microtask', color: PURPLE },
  { key: 'task', label: 'Task', color: AMBER }
];

const CODE: { n: number; tokens: { t: string; c: string }[] }[] = [
  {
    n: 1,
    tokens: [
      { t: 'console', c: BLUE },
      { t: '.', c: MUTED },
      { t: 'log', c: AMBER },
      { t: '(', c: MUTED },
      { t: '"start"', c: EMERALD },
      { t: ')', c: MUTED }
    ]
  },
  {
    n: 2,
    tokens: [
      { t: 'setTimeout', c: PURPLE },
      { t: '(cb, ', c: MUTED },
      { t: '0', c: AMBER },
      { t: ')', c: MUTED }
    ]
  },
  {
    n: 3,
    tokens: [
      { t: 'Promise', c: BLUE },
      { t: '.', c: MUTED },
      { t: 'resolve', c: AMBER },
      { t: '().', c: MUTED },
      { t: 'then', c: AMBER },
      { t: '(fn)', c: MUTED }
    ]
  },
  {
    n: 4,
    tokens: [
      { t: 'console', c: BLUE },
      { t: '.', c: MUTED },
      { t: 'log', c: AMBER },
      { t: '(', c: MUTED },
      { t: '"end"', c: EMERALD },
      { t: ')', c: MUTED }
    ]
  }
];

/* Which source line (1-indexed) lights up at each step, if any */
const STEP_LINE = [null, 1, 1, 2, 2, 3, 3, 4, 4, null, null, null, null, null];

export function MockEventLoop() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval>>(null);

  const atEnd = step >= STEPS.length - 1;
  const current = STEPS[step];

  useEffect(() => {
    if (!playing) return;
    timer.current = setInterval(() => {
      setStep((prev) => {
        if (prev >= STEPS.length - 1) {
          setPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 950);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing]);

  const reset = () => {
    setPlaying(false);
    setStep(0);
  };

  const stepForward = () => {
    setPlaying(false);
    setStep((p) => Math.min(p + 1, STEPS.length - 1));
  };

  const items = (lane: Lane) => current[lane];

  return (
    <div
      className="w-full overflow-hidden rounded-xl border"
      style={{ borderColor: BORDER, backgroundColor: CARD }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between border-b px-4 py-2.5"
        style={{ borderColor: BORDER }}
      >
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full" style={{ backgroundColor: BLUE }} />
          <span className="text-[11px] font-semibold" style={{ color: FG }}>
            Event Loop Visualizer
          </span>
        </div>
        <div className="flex items-center gap-1">
          <CtrlButton label="Step" onClick={stepForward} disabled={atEnd}>
            <ChevronRight className="size-3.5" />
          </CtrlButton>
          <CtrlButton
            label={playing ? 'Pause' : 'Run'}
            primary
            onClick={() => (atEnd ? reset() : setPlaying((p) => !p))}
          >
            {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
          </CtrlButton>
          <CtrlButton label="Reset" onClick={reset}>
            <RotateCcw className="size-3.5" />
          </CtrlButton>
        </div>
      </div>

      <div className="p-4" style={{ backgroundColor: BG }}>
        <div className="grid gap-3 sm:grid-cols-[0.9fr_1.4fr]">
          {/* Code */}
          <div
            className="overflow-hidden rounded-lg border"
            style={{ borderColor: BORDER, backgroundColor: CARD }}
          >
            <div
              className="border-b px-3 py-1.5 font-mono text-[10px]"
              style={{ borderColor: BORDER, color: MUTED }}
            >
              script.js
            </div>
            <div className="space-y-0.5 p-3 font-mono text-[11px] leading-relaxed">
              {CODE.map((line) => {
                const lit = STEP_LINE[step] === line.n;
                return (
                  <div
                    key={line.n}
                    className="-mx-1 flex gap-2 rounded px-1 transition-colors duration-200"
                    style={{ backgroundColor: lit ? 'rgba(59,130,246,0.18)' : 'transparent' }}
                  >
                    <span style={{ color: MUTED, opacity: 0.5 }}>{line.n}</span>
                    <span className="truncate">
                      {line.tokens.map((tk, i) => (
                        <span key={i} style={{ color: tk.c }}>
                          {tk.t}
                        </span>
                      ))}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Queues */}
          <div className="grid grid-cols-3 gap-2">
            {LANES.map((lane) => {
              const list = items(lane.key);
              const isActive = current.active === lane.key;
              return (
                <div
                  key={lane.key}
                  className="flex flex-col rounded-lg border transition-colors duration-300"
                  style={{
                    borderColor: isActive ? lane.color : BORDER,
                    backgroundColor: CARD,
                    boxShadow: isActive ? `0 0 0 1px ${lane.color}40` : 'none'
                  }}
                >
                  <div className="flex items-center gap-1.5 px-2 py-1.5">
                    <span
                      className="size-1.5 rounded-full"
                      style={{ backgroundColor: lane.color }}
                    />
                    <span className="truncate text-[9px] font-semibold" style={{ color: FG }}>
                      {lane.label}
                    </span>
                    <span
                      className="ml-auto text-[9px] font-medium tabular-nums"
                      style={{ color: list.length ? lane.color : MUTED }}
                    >
                      {list.length}
                    </span>
                  </div>
                  <div className="flex min-h-[78px] flex-1 flex-col-reverse gap-1 p-1.5">
                    {list.map((item, i) => (
                      <div
                        key={`${item}-${i}`}
                        className="rounded-md border px-1.5 py-1 text-center font-mono text-[9px]"
                        style={{
                          backgroundColor: ITEM_BG,
                          borderColor: ITEM_BORDER,
                          color: FG
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Console */}
        <div
          className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border px-3 py-2 font-mono text-[11px]"
          style={{ borderColor: BORDER, backgroundColor: CARD }}
        >
          <span
            className="text-[9px] font-semibold uppercase tracking-wider"
            style={{ color: MUTED }}
          >
            console
          </span>
          {current.log.length === 0 ? (
            <span style={{ color: MUTED, opacity: 0.5 }}>{'// output appears here…'}</span>
          ) : (
            current.log.map((line, i) => (
              <span key={i} className="flex items-center gap-1">
                <span style={{ color: EMERALD }}>›</span>
                <span style={{ color: FG }}>{line}</span>
              </span>
            ))
          )}
        </div>

        {/* Caption + progress */}
        <div className="mt-3 flex items-center gap-3">
          <div
            className="h-1 flex-1 overflow-hidden rounded-full"
            style={{ backgroundColor: BORDER }}
          >
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${(step / (STEPS.length - 1)) * 100}%`,
                backgroundColor: BLUE
              }}
            />
          </div>
          <span className="shrink-0 font-mono text-[10px] tabular-nums" style={{ color: MUTED }}>
            {step + 1}/{STEPS.length}
          </span>
        </div>
        <p className="mt-2 text-[11px]" style={{ color: MUTED }}>
          {current.caption}
        </p>
      </div>
    </div>
  );
}

function CtrlButton({
  children,
  label,
  onClick,
  disabled,
  primary
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  primary?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="flex size-6 items-center justify-center rounded-md border transition-colors duration-150 disabled:opacity-40"
      style={{
        borderColor: primary ? '#3b82f6' : BORDER,
        backgroundColor: primary ? '#3b82f6' : 'transparent',
        color: primary ? '#ffffff' : MUTED
      }}
    >
      {children}
    </button>
  );
}
