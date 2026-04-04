'use client';

import { useState, useEffect, useRef } from 'react';

/* ── r/Shorts dark theme colors ── */
const BG = '#1A1410';
const CARD = '#1F1915';
const FG = '#EDE5DA';
const FG_SECONDARY = '#B0A89C';
const FG_MUTED = '#6B635A';
const BORDER = '#332D26';
const PRIMARY = '#E63757';

const EXAMPLE_PROMPTS = [
  'My boss fired me for being 2 minutes late so I reported his $200k tax fraud to the IRS',
  "Found my wife's secret phone — she had a whole other family in another state",
  'Neighbor kept stealing my packages so I shipped myself a box of glitter bombs',
  "My daughter's imaginary friend left her a voicemail"
];

const STORY_TEXT =
  "I still remember the exact moment everything changed. It was a Tuesday morning, and I was running late. Not by hours — just two measly minutes. I walked through the door at 9:02, coffee in hand, ready to start my day. But my boss was already standing there, arms crossed, with HR beside him. 'You're done,' he said. Two minutes late. That's all it took.";

const WORDS = STORY_TEXT.split(' ');

export function MockVideoGenerator() {
  const [prompt, setPrompt] = useState('');
  const [phase, setPhase] = useState<'input' | 'generating' | 'preview'>('input');
  const [wordIndex, setWordIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    if (phase !== 'preview') return;

    setWordIndex(0);
    intervalRef.current = setInterval(() => {
      setWordIndex((prev) => {
        if (prev >= WORDS.length - 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return prev;
        }
        return prev + 1;
      });
    }, 700);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [phase]);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setPhase('generating');
    setTimeout(() => setPhase('preview'), 1200);
  };

  const handleReset = () => {
    setPhase('input');
    setPrompt('');
    setWordIndex(0);
  };

  /* Show a window of ~5 words centered on the current word */
  const windowSize = 5;
  const start = Math.max(0, wordIndex - Math.floor(windowSize / 2));
  const end = Math.min(WORDS.length, start + windowSize);
  const visibleWords = WORDS.slice(start, end);

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
        <span className="text-[10px] font-medium" style={{ color: FG_SECONDARY }}>
          Prompt → Video
        </span>
        {phase === 'preview' && (
          <button
            type="button"
            className="cursor-pointer text-[9px] font-medium transition-colors duration-150"
            style={{ color: PRIMARY }}
            onClick={handleReset}
          >
            Try another
          </button>
        )}
      </div>

      <div className="p-4">
        {phase === 'input' && (
          <div className="space-y-3">
            <div>
              <textarea
                className="w-full resize-none rounded-lg border px-3 py-2 text-[10px] outline-none transition-colors placeholder:text-[10px]"
                style={{
                  borderColor: prompt ? PRIMARY : BORDER,
                  backgroundColor: BG,
                  color: FG
                }}
                rows={2}
                placeholder="Describe your story..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-1">
              {EXAMPLE_PROMPTS.map((p, i) => (
                <button
                  key={i}
                  type="button"
                  className="cursor-pointer rounded-full border px-2 py-0.5 text-[8px] transition-all duration-150"
                  style={{ borderColor: BORDER, color: FG_MUTED }}
                  onClick={() => setPrompt(p)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${PRIMARY}60`;
                    e.currentTarget.style.color = FG_SECONDARY;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = BORDER;
                    e.currentTarget.style.color = FG_MUTED;
                  }}
                >
                  {p.length > 45 ? p.slice(0, 45) + '…' : p}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="w-full cursor-pointer rounded-lg py-2 text-[10px] font-medium text-white transition-all duration-150"
              style={{
                backgroundColor: prompt.trim() ? PRIMARY : `${PRIMARY}40`,
                opacity: prompt.trim() ? 1 : 0.6
              }}
              onClick={handleGenerate}
            >
              Generate Video
            </button>
          </div>
        )}

        {phase === 'generating' && (
          <div className="flex flex-col items-center gap-3 py-6">
            <div
              className="size-6 animate-spin rounded-full border-2 border-t-transparent"
              style={{ borderColor: `${PRIMARY}30`, borderTopColor: PRIMARY }}
            />
            <div className="space-y-1 text-center">
              <div className="text-[10px] font-medium" style={{ color: FG }}>
                Generating story & narration...
              </div>
              <div className="text-[8px]" style={{ color: FG_MUTED }}>
                AI writes → TTS narrates → captions sync
              </div>
            </div>
          </div>
        )}

        {phase === 'preview' && (
          <div className="flex gap-4">
            {/* Mini phone frame */}
            <div
              className="relative shrink-0 overflow-hidden rounded-2xl border-2"
              style={{
                width: '130px',
                aspectRatio: '9/16',
                borderColor: `${BORDER}`,
                background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)'
              }}
            >
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-[30%] flex justify-center px-2">
                <div className="text-center text-[9px] font-bold leading-snug text-white">
                  {visibleWords.map((word, i) => (
                    <span key={start + i}>{word} </span>
                  ))}
                </div>
              </div>

              {/* Progress bar */}
              <div
                className="absolute inset-x-0 bottom-0 h-0.5"
                style={{ backgroundColor: BORDER }}
              >
                <div
                  className="h-full transition-all duration-300"
                  style={{
                    backgroundColor: PRIMARY,
                    width: `${(wordIndex / (WORDS.length - 1)) * 100}%`
                  }}
                />
              </div>
            </div>

            {/* Right side info */}
            <div className="flex flex-1 flex-col justify-between py-1">
              <div className="space-y-2">
                <div>
                  <div className="text-[8px] uppercase tracking-wider" style={{ color: FG_MUTED }}>
                    Story
                  </div>
                  <div
                    className="mt-0.5 text-[10px] font-medium leading-snug"
                    style={{ color: FG }}
                  >
                    {prompt.length > 70 ? prompt.slice(0, 70) + '…' : prompt}
                  </div>
                </div>

                <div className="flex gap-3">
                  <div>
                    <div
                      className="text-[8px] uppercase tracking-wider"
                      style={{ color: FG_MUTED }}
                    >
                      Voice
                    </div>
                    <div className="mt-0.5 text-[9px] font-medium" style={{ color: FG_SECONDARY }}>
                      Nova
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-[8px] uppercase tracking-wider"
                      style={{ color: FG_MUTED }}
                    >
                      Duration
                    </div>
                    <div className="mt-0.5 text-[9px] font-medium" style={{ color: FG_SECONDARY }}>
                      0:42
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-[8px] uppercase tracking-wider"
                      style={{ color: FG_MUTED }}
                    >
                      Captions
                    </div>
                    <div className="mt-0.5 text-[9px] font-medium" style={{ color: FG_SECONDARY }}>
                      {WORDS.length} words
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="w-full cursor-pointer rounded-lg py-1.5 text-center text-[9px] font-medium text-white"
                style={{ backgroundColor: PRIMARY }}
              >
                Render & Download
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
