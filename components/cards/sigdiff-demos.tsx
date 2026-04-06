'use client';

import { useState, useEffect, useRef } from 'react';

/* ── sigdiff terminal theme colors ── */
const BG = '#0d1117';
const CARD = '#161b22';
const FG = '#e6edf3';
const FG_SECONDARY = '#8b949e';
const FG_MUTED = '#484f58';
const BORDER = '#30363d';
const GREEN = '#3fb950';
const RED = '#f85149';
const YELLOW = '#d29922';
const CYAN = '#58a6ff';

const CHANGELOG_LINES = [
  { type: 'header', text: '## Breaking Changes' },
  { type: 'major', text: '- Removed function `fetchLegacyData`' },
  {
    type: 'major',
    text: '- `createUser` signature changed: `(name: string, email: string)` → `(opts: CreateUserOpts)`'
  },
  { type: 'major', text: '- Removed property `User.legacyId`' },
  { type: 'blank', text: '' },
  { type: 'header', text: '## New' },
  { type: 'minor', text: '- Added function `updateUser`' },
  { type: 'minor', text: '- Added interface `CreateUserOpts`' },
  { type: 'minor', text: '- Added optional property `User.metadata`' },
  { type: 'blank', text: '' },
  { type: 'header', text: '## Patch' },
  { type: 'patch', text: '- `formatDate` implementation changed (signature identical)' },
  { type: 'blank', text: '' },
  { type: 'bump', text: 'Suggested version bump: major' }
] as const;

const REFS = ['v1.2.0..v2.0.0', 'main..feature-branch', 'HEAD~5..HEAD'] as const;

export function MockSigdiffTerminal() {
  const [phase, setPhase] = useState<'idle' | 'running' | 'output'>('idle');
  const [selectedRef, setSelectedRef] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    if (phase !== 'output') return;

    setVisibleLines(0);
    intervalRef.current = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= CHANGELOG_LINES.length - 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return prev;
        }
        return prev + 1;
      });
    }, 120);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [phase]);

  const handleRun = () => {
    setPhase('running');
    setTimeout(() => setPhase('output'), 900);
  };

  const handleReset = () => {
    setPhase('idle');
    setVisibleLines(0);
  };

  const lineColor = (type: string) => {
    switch (type) {
      case 'header':
        return FG;
      case 'major':
        return RED;
      case 'minor':
        return GREEN;
      case 'patch':
        return YELLOW;
      case 'bump':
        return CYAN;
      default:
        return FG_SECONDARY;
    }
  };

  return (
    <div
      className="w-full overflow-hidden rounded-xl border"
      style={{ borderColor: BORDER, backgroundColor: CARD }}
    >
      {/* Terminal title bar */}
      <div
        className="flex items-center justify-between border-b px-4 py-2.5"
        style={{ borderColor: BORDER }}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="size-2.5 rounded-full" style={{ backgroundColor: '#f85149' }} />
            <div className="size-2.5 rounded-full" style={{ backgroundColor: '#d29922' }} />
            <div className="size-2.5 rounded-full" style={{ backgroundColor: '#3fb950' }} />
          </div>
          <span className="text-[10px] font-medium" style={{ color: FG_SECONDARY }}>
            terminal
          </span>
        </div>
        {phase === 'output' && (
          <button
            type="button"
            className="cursor-pointer text-[9px] font-medium transition-colors duration-150"
            style={{ color: CYAN }}
            onClick={handleReset}
          >
            Run again
          </button>
        )}
      </div>

      <div className="p-4" style={{ backgroundColor: BG }}>
        {phase === 'idle' && (
          <div className="space-y-3">
            {/* Ref selector */}
            <div className="flex flex-wrap gap-1.5">
              {REFS.map((ref, i) => (
                <button
                  key={ref}
                  type="button"
                  className="cursor-pointer rounded-md border px-2 py-1 font-mono text-[9px] transition-all duration-150"
                  style={{
                    borderColor: selectedRef === i ? GREEN : BORDER,
                    color: selectedRef === i ? GREEN : FG_MUTED,
                    backgroundColor: selectedRef === i ? `${GREEN}10` : 'transparent'
                  }}
                  onClick={() => setSelectedRef(i)}
                >
                  {ref}
                </button>
              ))}
            </div>

            {/* Command preview */}
            <div
              className="rounded-lg border px-3 py-2 font-mono text-[10px]"
              style={{ borderColor: BORDER, backgroundColor: CARD }}
            >
              <span style={{ color: FG_MUTED }}>$</span> <span style={{ color: GREEN }}>npx</span>{' '}
              <span style={{ color: FG }}>sigdiff</span>{' '}
              <span style={{ color: CYAN }}>{REFS[selectedRef]}</span>
            </div>

            <button
              type="button"
              className="w-full cursor-pointer rounded-lg py-2 font-mono text-[10px] font-medium text-white transition-all duration-150"
              style={{ backgroundColor: GREEN, color: BG }}
              onClick={handleRun}
            >
              Run
            </button>
          </div>
        )}

        {phase === 'running' && (
          <div className="flex flex-col items-center gap-3 py-6">
            <div
              className="size-5 animate-spin rounded-full border-2 border-t-transparent"
              style={{ borderColor: `${GREEN}30`, borderTopColor: GREEN }}
            />
            <div className="space-y-1 text-center">
              <div className="font-mono text-[10px] font-medium" style={{ color: FG }}>
                Analyzing API surface...
              </div>
              <div className="font-mono text-[8px]" style={{ color: FG_MUTED }}>
                extract → diff → classify → format
              </div>
            </div>
          </div>
        )}

        {phase === 'output' && (
          <div className="space-y-0.5 font-mono text-[10px]">
            {/* Command echo */}
            <div className="mb-2 opacity-50" style={{ color: FG_MUTED }}>
              <span>$</span> npx sigdiff {REFS[selectedRef]}
            </div>

            {/* Changelog output */}
            {CHANGELOG_LINES.slice(0, visibleLines + 1).map((line, i) => (
              <div
                key={i}
                className="leading-relaxed"
                style={{
                  color: lineColor(line.type),
                  fontWeight: line.type === 'header' || line.type === 'bump' ? 600 : 400,
                  minHeight: line.type === 'blank' ? '0.75rem' : undefined
                }}
              >
                {line.text}
              </div>
            ))}

            {/* Blinking cursor */}
            {visibleLines < CHANGELOG_LINES.length - 1 && (
              <span className="inline-block animate-pulse" style={{ color: GREEN }}>
                _
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
