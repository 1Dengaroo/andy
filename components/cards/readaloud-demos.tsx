'use client';

import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';

/* ── ReadAloud light theme — ultramarine on daylight white, lemon highlight ── */
const BG = '#f7f8fc';
const CARD = '#ffffff';
const FG = '#14142b';
const FG_SECONDARY = '#6b6f8d';
const FG_MUTED = '#9a9db5';
const BORDER = '#dcdfef';
const BORDER_SUBTLE = '#eceffd';
const PRIMARY = '#2f43fa';
const ON_PRIMARY = '#ffffff';

/* The spoken-word pill and its sentence tint — oklch(0.9 0.17 100) in the app */
const HIGHLIGHT = '#f9e03f';
const HIGHLIGHT_FG = '#1b1707';
const SENTENCE_TINT = 'rgba(249,224,63,0.16)';

const SHADOW = '0 6px 22px rgba(20,20,43,0.08), 0 2px 6px rgba(20,20,43,0.04)';

const SENTENCES = [
  'Paste any text and hear it spoken in a natural voice.',
  'Every word lights up the moment it is read, so your eyes never lose the line.',
  'Click any word to jump straight to it.'
];

const WORDS = SENTENCES.flatMap((sentence, sentenceIndex) =>
  sentence.split(' ').map((word) => ({ word, sentenceIndex }))
);

const RATES = [1, 1.25, 1.5, 2] as const;
const MS_PER_WORD = 260;
const SECONDS_PER_WORD = MS_PER_WORD / 1000;
const DURATION = WORDS.length * SECONDS_PER_WORD;

function formatClock(seconds: number): string {
  const total = Math.floor(seconds);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
}

interface Pill {
  x: number;
  y: number;
  w: number;
  h: number;
}

export function MockReadAloud() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [rateIndex, setRateIndex] = useState(0);

  const surfaceRef = useRef<HTMLParagraphElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [pill, setPill] = useState<Pill | null>(null);
  /* The pill only slides along a line — a line change snaps it, never a diagonal sweep. */
  const [instant, setInstant] = useState(true);
  const lastY = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) return;

    const id = setInterval(() => {
      setIndex((prev) => {
        if (prev >= WORDS.length - 1) {
          setPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, MS_PER_WORD / RATES[rateIndex]);

    return () => clearInterval(id);
  }, [playing, rateIndex]);

  useLayoutEffect(() => {
    const word = wordRefs.current[index];
    const surface = surfaceRef.current;
    if (!word || !surface) return;

    const wordBox = word.getBoundingClientRect();
    const surfaceBox = surface.getBoundingClientRect();
    const y = wordBox.top - surfaceBox.top;

    setInstant(lastY.current === null || Math.abs(y - lastY.current) > 1);
    lastY.current = y;
    setPill({
      x: wordBox.left - surfaceBox.left - 2,
      y: y - 1,
      w: wordBox.width + 4,
      h: wordBox.height + 2
    });
  }, [index]);

  const atEnd = index >= WORDS.length - 1;
  const elapsed = Math.min(index * SECONDS_PER_WORD, DURATION);
  const activeSentence = WORDS[index].sentenceIndex;

  const handleTransport = () => {
    if (atEnd) {
      setIndex(0);
      setPlaying(true);
      return;
    }
    setPlaying((prev) => !prev);
  };

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    const track = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - track.left) / track.width;
    setIndex(Math.min(WORDS.length - 1, Math.max(0, Math.round(ratio * (WORDS.length - 1)))));
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border"
      style={{ borderColor: BORDER, backgroundColor: BG }}
    >
      {/* Ultramarine glow — the app's accent, softened */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(47,67,250,0.10) 0%, transparent 70%)' }}
      />

      {/* Header */}
      <div
        className="relative z-10 flex items-center justify-between border-b px-4 py-2.5"
        style={{ borderColor: BORDER_SUBTLE }}
      >
        <span className="text-[10px] font-medium" style={{ color: FG_SECONDARY }}>
          Text → Speech, word by word
        </span>
        <span className="text-[9px] font-medium" style={{ color: FG_MUTED }}>
          Matthew · Amazon Polly
        </span>
      </div>

      <div className="relative z-10 p-4">
        {/* Reading surface */}
        <div
          className="rounded-xl border px-4 py-3.5"
          style={{ borderColor: BORDER, backgroundColor: CARD, boxShadow: SHADOW }}
        >
          <p ref={surfaceRef} className="relative text-[13px] leading-[1.85]" style={{ color: FG }}>
            {/* The sliding pill, behind the words */}
            {pill && (
              <span
                aria-hidden
                className="absolute left-0 top-0 rounded-[3px]"
                style={{
                  backgroundColor: HIGHLIGHT,
                  transform: `translate(${pill.x}px, ${pill.y}px)`,
                  width: pill.w,
                  height: pill.h,
                  transition: instant
                    ? 'none'
                    : 'transform 160ms ease-out, width 160ms ease-out, height 160ms ease-out'
                }}
              />
            )}

            {WORDS.map(({ word, sentenceIndex }, i) => (
              <span key={i}>
                <span
                  ref={(node) => {
                    wordRefs.current[i] = node;
                  }}
                  className="relative cursor-pointer whitespace-nowrap rounded-[2px] px-px"
                  style={{
                    color: i === index ? HIGHLIGHT_FG : FG,
                    backgroundColor:
                      i !== index && sentenceIndex === activeSentence
                        ? SENTENCE_TINT
                        : 'transparent'
                  }}
                  onClick={() => setIndex(i)}
                >
                  {word}
                </span>{' '}
              </span>
            ))}
          </p>
        </div>

        {/* Floating player dock */}
        <div className="mt-4 flex justify-center">
          <div
            className="flex items-center gap-2 rounded-full border p-1.5"
            style={{ borderColor: BORDER, backgroundColor: CARD, boxShadow: SHADOW }}
          >
            <button
              type="button"
              className="flex size-7 cursor-pointer items-center justify-center rounded-full transition-transform duration-150 active:scale-95"
              style={{ backgroundColor: PRIMARY, color: ON_PRIMARY }}
              aria-label={atEnd ? 'Replay' : playing ? 'Pause' : 'Play'}
              onClick={handleTransport}
            >
              {atEnd ? (
                <RotateCcw className="size-3" />
              ) : playing ? (
                <Pause className="size-3" fill="currentColor" />
              ) : (
                <Play className="size-3" fill="currentColor" />
              )}
            </button>

            <span className="pl-0.5 text-[10px] tabular-nums" style={{ color: FG_SECONDARY }}>
              {formatClock(elapsed)}
            </span>

            <div
              className="h-1 w-24 cursor-pointer rounded-full sm:w-40"
              style={{ backgroundColor: BORDER_SUBTLE }}
              onClick={handleScrub}
            >
              <div
                className="h-full rounded-full"
                style={{
                  backgroundColor: PRIMARY,
                  width: `${(index / (WORDS.length - 1)) * 100}%`
                }}
              />
            </div>

            <span className="text-[10px] tabular-nums" style={{ color: FG_MUTED }}>
              {formatClock(DURATION)}
            </span>

            <button
              type="button"
              className="w-9 cursor-pointer rounded-full py-1 text-[10px] font-medium tabular-nums"
              style={{ color: FG_SECONDARY }}
              aria-label={`Playback speed ${RATES[rateIndex]}×, click to change`}
              onClick={() => setRateIndex((prev) => (prev + 1) % RATES.length)}
            >
              {RATES[rateIndex]}×
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
