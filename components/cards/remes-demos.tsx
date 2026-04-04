'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

/* ── Light theme colors from remes light.css ── */
const CARD = '#ffffff';
const FG = '#1c1a30';
const FG_SECONDARY = '#5e5c78';
const FG_MUTED = '#7e7c9a';
const BORDER = '#ddd8ed';
const BORDER_SUBTLE = '#e4e2f2';
const PRIMARY = '#6366f1';

const SIGNAL_COLORS: Record<string, string> = {
  job_posting: `bg-[hsl(250_40%_55%/0.08)] text-[hsl(250_35%_42%)]`,
  funding: `bg-[hsl(170_36%_44%/0.08)] text-[hsl(170_30%_34%)]`
};

const SIGNAL_LABELS: Record<string, string> = {
  job_posting: 'Job Posting',
  funding: 'Funding'
};

const COMPANIES = [
  {
    name: 'Ashby',
    industry: 'Recruiting',
    funding: '$30M Series C',
    score: 9,
    matchReason: 'Building out data infrastructure, posted Snowflake roles',
    signals: [
      {
        type: 'job_posting',
        title: 'Data Engineer role mentions Snowflake, dbt',
        phrases: ['Snowflake', 'dbt', 'Data Engineer']
      },
      {
        type: 'funding',
        title: 'Closed Series C with Benchmark',
        phrases: ['Series C', 'Benchmark', '$30M']
      }
    ]
  },
  {
    name: 'Ramp',
    industry: 'Fintech',
    funding: '$300M Series D',
    score: 9,
    matchReason: 'Tripled headcount in 6 months, retooling outbound stack',
    signals: [
      {
        type: 'job_posting',
        title: 'Posted 6 BDR roles in the last 2 weeks',
        phrases: ['BDR', 'outbound', 'rapid hiring']
      },
      {
        type: 'funding',
        title: 'Raised $300M at $16B valuation',
        phrases: ['Series D', '$300M', 'growth']
      }
    ]
  }
];

/* ── Signal Dashboard ── */

export function MockSignalDashboard() {
  const [selected, setSelected] = useState(0);

  return (
    <div
      className="w-full overflow-hidden rounded-xl border"
      style={{ borderColor: BORDER, backgroundColor: CARD }}
    >
      <div
        className="flex items-center justify-between border-b px-4 py-2.5"
        style={{ borderColor: BORDER_SUBTLE }}
      >
        <div className="flex items-center gap-2">
          <div
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: '#22c55e', boxShadow: '0 0 4px rgba(34,197,94,0.4)' }}
          />
          <span className="text-[10px] font-medium" style={{ color: FG_SECONDARY }}>
            {COMPANIES.length} companies matched
          </span>
        </div>
        <div
          className="rounded-md px-2 py-0.5 text-[9px]"
          style={{ backgroundColor: `${PRIMARY}08`, color: FG_MUTED }}
        >
          B2B SaaS · 50–500 employees
        </div>
      </div>

      <div>
        {COMPANIES.map((c, i) => {
          const isSelected = selected === i;
          return (
            <button
              key={i}
              type="button"
              className="w-full border-b px-4 py-3 text-left transition-colors duration-150 last:border-b-0"
              style={{
                borderColor: BORDER_SUBTLE,
                backgroundColor: isSelected ? `${PRIMARY}06` : undefined
              }}
              onMouseEnter={(e) => {
                if (!isSelected) e.currentTarget.style.backgroundColor = `${PRIMARY}04`;
              }}
              onMouseLeave={(e) => {
                if (!isSelected) e.currentTarget.style.backgroundColor = '';
              }}
              onClick={() => setSelected(i)}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="flex size-6 shrink-0 items-center justify-center rounded-md text-[9px] font-semibold transition-colors duration-150"
                  style={{
                    backgroundColor: isSelected ? `${PRIMARY}15` : `${PRIMARY}08`,
                    color: isSelected ? PRIMARY : FG_MUTED
                  }}
                >
                  {c.name.slice(0, 2)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-medium" style={{ color: FG }}>
                      {c.name}
                    </span>
                    <span className="text-[9px]" style={{ color: FG_MUTED }}>
                      {c.industry}
                    </span>
                  </div>
                  <div className="mt-0.5 text-[9px]" style={{ color: FG_MUTED }}>
                    {c.funding}
                  </div>
                </div>
                <div
                  className="flex size-5 shrink-0 items-center justify-center rounded text-[9px] font-semibold"
                  style={{
                    backgroundColor: c.score >= 9 ? 'rgba(34,197,94,0.1)' : 'rgba(99,102,241,0.1)',
                    color: c.score >= 9 ? '#16a34a' : PRIMARY
                  }}
                >
                  {c.score}
                </div>
              </div>

              <div className="mt-2 space-y-1.5">
                {c.signals.map((s, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <span
                      className={`mt-0.5 shrink-0 rounded-full px-1.5 py-px text-[8px] font-medium ${SIGNAL_COLORS[s.type]}`}
                    >
                      {SIGNAL_LABELS[s.type]}
                    </span>
                    <div className="min-w-0">
                      <div className="truncate text-[10px]" style={{ color: FG_SECONDARY }}>
                        {s.title}
                      </div>
                      <div className="mt-0.5 flex flex-wrap gap-0.5">
                        {s.phrases.map((p) => (
                          <span
                            key={p}
                            className="rounded-full px-1.5 py-px text-[8px]"
                            style={{ backgroundColor: `${PRIMARY}06`, color: FG_MUTED }}
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-1.5 text-[9px] italic leading-snug" style={{ color: FG_MUTED }}>
                {c.matchReason}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Contact List ── */

const CONTACTS = [
  {
    name: 'David Kim',
    title: 'VP of Sales',
    company: 'Ashby',
    email: 'david.k@ashby.com',
    enriched: true,
    hasLinkedIn: true
  },
  {
    name: 'Sarah Chen',
    title: 'Head of Growth',
    company: 'Lattice',
    email: 'sarah.c@lattice.com',
    enriched: true,
    hasLinkedIn: true
  },
  {
    name: 'James Park',
    title: 'VP of Sales',
    company: 'Ramp',
    email: 'james.p@ramp.com',
    enriched: false,
    hasLinkedIn: false
  },
  {
    name: 'Nina Patel',
    title: 'Director of Revenue Ops',
    company: 'Ashby',
    email: 'nina.p@ashby.com',
    enriched: false,
    hasLinkedIn: false
  },
  {
    name: 'Alex Rivera',
    title: 'Head of Partnerships',
    company: 'Ramp',
    email: 'alex.r@ramp.com',
    enriched: true,
    hasLinkedIn: true
  },
  {
    name: 'Tom Zhang',
    title: 'SDR Manager',
    company: 'Lattice',
    email: 'tom.z@lattice.com',
    enriched: false,
    hasLinkedIn: false
  }
];

export function MockContactList() {
  const [enriched, setEnriched] = useState<Set<number>>(
    new Set(CONTACTS.map((c, i) => (c.enriched ? i : -1)).filter((i) => i >= 0))
  );

  const handleEnrich = (idx: number): void => {
    setEnriched((prev) => new Set([...prev, idx]));
  };

  return (
    <div
      className="w-full overflow-hidden rounded-xl border"
      style={{ borderColor: BORDER, backgroundColor: CARD }}
    >
      <div
        className="flex items-center justify-between border-b px-4 py-2.5"
        style={{ borderColor: BORDER_SUBTLE }}
      >
        <span className="text-[10px] font-medium" style={{ color: FG_SECONDARY }}>
          Contacts
        </span>
        <span className="text-[9px]" style={{ color: FG_MUTED }}>
          {enriched.size} of {CONTACTS.length} enriched
        </span>
      </div>

      <div>
        {CONTACTS.map((c, i) => {
          const isEnriched = enriched.has(i);
          const wasOriginallyHidden = !c.enriched;
          const justRevealed = wasOriginallyHidden && isEnriched;

          return (
            <div
              key={i}
              className="flex items-center gap-3 border-b px-4 py-2.5 transition-colors duration-150 last:border-b-0 hover:bg-[#6366f104]"
              style={{ borderColor: BORDER_SUBTLE }}
            >
              <div
                className="flex size-7 shrink-0 items-center justify-center rounded-full text-[9px] font-medium"
                style={{ backgroundColor: `${PRIMARY}08`, color: FG_MUTED }}
              >
                {c.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span
                    className="text-[11px] font-medium"
                    style={{ color: isEnriched ? FG : FG_MUTED }}
                  >
                    {isEnriched ? c.name : c.name.replace(/(\s\w)\w+$/, '$1***')}
                  </span>
                  {isEnriched && c.hasLinkedIn && (
                    <svg className="size-2.5" viewBox="0 0 24 24" fill={FG_MUTED}>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {justRevealed && (
                    <span
                      className="rounded-full px-1 py-px text-[8px] font-medium"
                      style={{ backgroundColor: 'rgba(34,197,94,0.1)', color: '#16a34a' }}
                    >
                      New
                    </span>
                  )}
                </div>
                <div className="mt-0.5 text-[9px]" style={{ color: FG_MUTED }}>
                  {c.title} at {c.company}
                </div>
              </div>

              {isEnriched ? (
                <span className="hidden shrink-0 text-[9px] sm:block" style={{ color: FG_MUTED }}>
                  {c.email}
                </span>
              ) : (
                <button
                  type="button"
                  className="shrink-0 cursor-pointer rounded-full border px-2 py-0.5 text-[9px] font-medium transition-all duration-150"
                  style={{
                    borderColor: BORDER,
                    color: FG_SECONDARY,
                    backgroundColor: CARD
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${PRIMARY}08`;
                    e.currentTarget.style.borderColor = PRIMARY;
                    e.currentTarget.style.color = PRIMARY;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = CARD;
                    e.currentTarget.style.borderColor = BORDER;
                    e.currentTarget.style.color = FG_SECONDARY;
                  }}
                  onClick={() => handleEnrich(i)}
                >
                  Get Contact
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Email Preview ── */

const EMAILS = [
  {
    subject: "ramp's bdr hiring spree",
    body: 'Hi James,\n\nSaw Ramp posted 6 BDR roles in the last two weeks. Tripling outbound headcount after a $300M raise usually means pipeline targets just got aggressive.\n\nWe built Remes to detect signals like yours and write the first email automatically. One customer went from 0 to 47 qualified meetings in their first month.\n\nWorth a quick look?\n\nKenny'
  },
  {
    subject: "Re: ramp's bdr hiring spree",
    body: 'Hi James,\n\nQuick follow-up. Teams like Ashby and Lattice use Remes to cut their prospecting time by 80%. Figured it might be relevant as you scale the BDR org.\n\nKenny'
  },
  {
    subject: "Re: ramp's bdr hiring spree",
    body: 'Hi James,\n\nDifferent angle: most BDR teams spend 60% of their day researching accounts instead of selling. Remes handles the research and writes the first touch so reps can focus on conversations from day one.\n\nWould it help to see how the signal detection works?\n\nKenny'
  }
];

const REGEN_EMAILS = [
  {
    subject: "ramp's outbound overhaul",
    body: 'Hi James,\n\nNoticed Ramp just posted 6 BDR roles back to back. When teams scale that fast, the bottleneck usually shifts from hiring to pipeline quality.\n\nRemes catches buying signals like yours and drafts the first email so reps can start selling on day one instead of researching. Happy to show you how it works in 15 min.\n\nKenny'
  },
  {
    subject: 'scaling bdrs at ramp',
    body: 'Hi James,\n\nRamp tripling its BDR team caught my eye. Most orgs at that stage find their reps spend more time researching than actually reaching out.\n\nWe automate the research and first-touch for teams exactly like yours. One customer booked 47 meetings in month one. Worth a look?\n\nKenny'
  },
  {
    subject: 'a faster ramp-up for ramp',
    body: 'Hi James,\n\nWhen a team goes from 2 to 6 BDRs overnight, onboarding speed becomes the real constraint. Remes gives new reps qualified accounts and ready-to-send emails from their first day.\n\nWould it be useful to see how signal detection works for a fintech ICP?\n\nKenny'
  },
  {
    subject: 're: outbound at scale',
    body: 'Hi James,\n\nQuick thought: the biggest risk with rapid BDR hiring is inconsistent messaging. Remes keeps every first touch on-brand and signal-relevant so quality stays high even as you scale.\n\n15 min walkthrough work this week?\n\nKenny'
  }
];

const STREAM_SPEED_MS = 12;

export function MockEmailPreview() {
  const [activeEmail, setActiveEmail] = useState(0);
  const [streamingBody, setStreamingBody] = useState<string | null>(null);
  const [streamingSubject, setStreamingSubject] = useState<string | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const regenIndexRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleRegenerate = useCallback(() => {
    if (isStreaming) return;

    const target = REGEN_EMAILS[regenIndexRef.current % REGEN_EMAILS.length];
    regenIndexRef.current += 1;

    setIsStreaming(true);
    setStreamingBody('');
    setStreamingSubject(target.subject);

    let charIndex = 0;
    let lastTime = 0;

    const tick = (time: number): void => {
      if (time - lastTime < STREAM_SPEED_MS) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      lastTime = time;

      const chunkSize = target.body[charIndex] === '\n' ? 1 : Math.random() > 0.7 ? 2 : 1;
      charIndex += chunkSize;

      if (charIndex >= target.body.length) {
        setStreamingBody(target.body);
        setIsStreaming(false);
        return;
      }

      setStreamingBody(target.body.slice(0, charIndex));
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [isStreaming]);

  const email = EMAILS[activeEmail];
  const displaySubject = streamingSubject ?? email.subject;
  const displayBody = streamingBody ?? email.body;

  return (
    <div
      className="w-full overflow-hidden rounded-xl border"
      style={{ borderColor: BORDER, backgroundColor: CARD }}
    >
      <div
        className="flex items-center justify-between border-b px-4 py-2.5"
        style={{ borderColor: BORDER_SUBTLE }}
      >
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-medium" style={{ color: FG_SECONDARY }}>
            Ramp
          </span>
          <span className="text-[9px]" style={{ color: FG_MUTED }}>
            James Park · VP of Sales
          </span>
        </div>
        <div className="flex items-center gap-0.5">
          {EMAILS.map((_, i) => (
            <button
              key={i}
              type="button"
              className="cursor-pointer rounded-md px-1.5 py-0.5 text-[9px] font-medium transition-all duration-150"
              style={{
                backgroundColor:
                  activeEmail === i && streamingBody === null ? `${PRIMARY}10` : `${PRIMARY}04`,
                color: activeEmail === i && streamingBody === null ? PRIMARY : FG_MUTED
              }}
              onClick={() => {
                if (isStreaming) return;
                setStreamingBody(null);
                setStreamingSubject(null);
                setActiveEmail(i);
              }}
            >
              Email {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div style={{ borderColor: BORDER_SUBTLE }}>
        <div
          className="flex items-center gap-2 border-b px-4 py-2"
          style={{ borderColor: BORDER_SUBTLE }}
        >
          <span className="text-[9px]" style={{ color: FG_MUTED }}>
            To
          </span>
          <span className="text-[10px]" style={{ color: FG_SECONDARY }}>
            james.p@ramp.com
          </span>
        </div>
        <div
          className="flex items-center gap-2 border-b px-4 py-2"
          style={{ borderColor: BORDER_SUBTLE }}
        >
          <span className="text-[9px]" style={{ color: FG_MUTED }}>
            Subject
          </span>
          <span className="text-[10px]" style={{ color: FG_SECONDARY }}>
            {displaySubject}
          </span>
        </div>
      </div>

      <div className="grid px-4 py-3">
        {EMAILS.map((e, i) => (
          <div
            key={i}
            className="invisible col-start-1 row-start-1 whitespace-pre-line text-[10px] leading-relaxed"
            style={{ color: FG_SECONDARY }}
          >
            {e.body}
          </div>
        ))}
        <div
          className="col-start-1 row-start-1 whitespace-pre-line text-[10px] leading-relaxed"
          style={{ color: FG_SECONDARY }}
        >
          {displayBody}
          {isStreaming && (
            <span
              className="ml-0.5 inline-block h-3 w-[1.5px] animate-pulse align-middle"
              style={{ backgroundColor: PRIMARY }}
            />
          )}
        </div>
      </div>

      <div className="border-t px-4 py-1.5" style={{ borderColor: BORDER_SUBTLE }}>
        <p className="text-[8px] leading-relaxed" style={{ color: FG_MUTED }}>
          Plain text · Under 80 words · Signal-led opener · One clear CTA
        </p>
      </div>

      <div
        className="flex items-center justify-between border-t px-4 py-2.5"
        style={{ borderColor: BORDER_SUBTLE }}
      >
        <button
          type="button"
          className="cursor-pointer rounded-full border px-2.5 py-1 text-[9px] transition-colors duration-150"
          style={{
            borderColor: isStreaming ? BORDER_SUBTLE : BORDER,
            color: isStreaming ? FG_MUTED : FG_SECONDARY,
            opacity: isStreaming ? 0.5 : 1
          }}
          onClick={handleRegenerate}
          disabled={isStreaming}
        >
          {isStreaming ? 'Generating...' : 'Regenerate'}
        </button>
        <button
          type="button"
          className="cursor-pointer rounded-full px-2.5 py-1 text-[9px] font-medium text-white transition-colors duration-150"
          style={{ backgroundColor: PRIMARY }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
