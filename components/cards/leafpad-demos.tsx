'use client';

import { useState, useRef, useCallback, useMemo, type ReactNode } from 'react';

/* ── Leafpad light theme colors ── */
const CARD = '#ffffff';
const FG = '#1a2820';
const FG_SECONDARY = '#5e6a62';
const FG_MUTED = '#8a9490';
const BORDER = '#e5e4dc';
const BORDER_SUBTLE = '#eceae3';
const PRIMARY = '#4BAE4F';
const PRIMARY_DARK = '#388E3C';

/* ── Syntax highlight colors ── */
const SYN_KEY = '#388E3C';
const SYN_STRING = '#b45309';
const SYN_NUMBER = '#2563eb';
const SYN_BOOL = '#7c3aed';

/* ═══════════════════════════════════════════════
   Demo 1 — Markdown Editor
   ═══════════════════════════════════════════════ */

const DEFAULT_MARKDOWN = `# Welcome to Leafpad

Write **bold** and *italic* text easily.

## Features
- Live preview
- [Links](https://leafpad.app)
- \`inline code\`

> Simple, clean editing.`;

function renderMarkdown(md: string): ReactNode[] {
  const lines = md.split('\n');
  const nodes: ReactNode[] = [];
  let inList = false;
  let listItems: ReactNode[] = [];

  const flushList = (): void => {
    if (inList) {
      nodes.push(
        <ul key={`ul-${nodes.length}`} style={{ paddingLeft: 16, margin: '4px 0' }}>
          {listItems}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  const inlineFormat = (text: string): ReactNode[] => {
    const parts: ReactNode[] = [];
    // Process inline patterns: bold, italic, code, links
    const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`|\[(.+?)\]\((.+?)\))/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      if (match[2]) {
        parts.push(
          <strong key={match.index} style={{ fontWeight: 600 }}>
            {match[2]}
          </strong>
        );
      } else if (match[3]) {
        parts.push(
          <em key={match.index} style={{ fontStyle: 'italic' }}>
            {match[3]}
          </em>
        );
      } else if (match[4]) {
        parts.push(
          <code
            key={match.index}
            style={{
              backgroundColor: BORDER_SUBTLE,
              padding: '1px 4px',
              borderRadius: 3,
              fontSize: '0.9em',
              fontFamily: 'ui-monospace, monospace'
            }}
          >
            {match[4]}
          </code>
        );
      } else if (match[5] && match[6]) {
        parts.push(
          <span key={match.index} style={{ color: PRIMARY_DARK, textDecoration: 'underline' }}>
            {match[5]}
          </span>
        );
      }
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    return parts;
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];

    // Heading
    const headingMatch = raw.match(/^(#{1,4})\s+(.+)/);
    if (headingMatch) {
      flushList();
      const level = headingMatch[1].length;
      const sizes = ['13px', '12px', '11px', '10px'];
      nodes.push(
        <div
          key={i}
          style={{
            fontSize: sizes[level - 1],
            fontWeight: 700,
            margin: '6px 0 2px',
            color: FG,
            borderBottom: level <= 2 ? `1px solid ${BORDER}` : undefined,
            paddingBottom: level <= 2 ? 2 : undefined
          }}
        >
          {inlineFormat(headingMatch[2])}
        </div>
      );
      continue;
    }

    // Blockquote
    if (raw.startsWith('> ')) {
      flushList();
      nodes.push(
        <div
          key={i}
          style={{
            borderLeft: `3px solid ${PRIMARY}`,
            paddingLeft: 8,
            margin: '4px 0',
            color: FG_SECONDARY,
            fontStyle: 'italic'
          }}
        >
          {inlineFormat(raw.slice(2))}
        </div>
      );
      continue;
    }

    // List item
    if (raw.startsWith('- ')) {
      inList = true;
      listItems.push(
        <li key={i} style={{ marginBottom: 1 }}>
          {inlineFormat(raw.slice(2))}
        </li>
      );
      continue;
    }

    flushList();

    // Empty line
    if (raw.trim() === '') {
      nodes.push(<div key={i} style={{ height: 4 }} />);
      continue;
    }

    // Regular paragraph
    nodes.push(
      <div key={i} style={{ margin: '2px 0' }}>
        {inlineFormat(raw)}
      </div>
    );
  }

  flushList();
  return nodes;
}

const TOOLBAR_BUTTONS = [
  { label: 'B', title: 'Bold', before: '**', after: '**', style: { fontWeight: 700 } },
  { label: 'I', title: 'Italic', before: '*', after: '*', style: { fontStyle: 'italic' } },
  { label: 'H', title: 'Heading', before: '## ', after: '', style: {} },
  { label: 'Link', title: 'Link', before: '[', after: '](url)', style: {} },
  {
    label: '</>',
    title: 'Code',
    before: '`',
    after: '`',
    style: { fontFamily: 'ui-monospace, monospace' }
  }
];

export function MockMarkdownEditor() {
  const [content, setContent] = useState(DEFAULT_MARKDOWN);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleToolbar = useCallback(
    (before: string, after: string) => {
      const ta = textareaRef.current;
      if (!ta) return;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const selected = content.slice(start, end);
      const replacement = `${before}${selected || 'text'}${after}`;
      const next = content.slice(0, start) + replacement + content.slice(end);
      setContent(next);
      requestAnimationFrame(() => {
        ta.focus();
        const cursorPos = start + before.length + (selected || 'text').length + after.length;
        ta.setSelectionRange(cursorPos, cursorPos);
      });
    },
    [content]
  );

  const stats = useMemo(() => {
    const words = content.split(/\s+/).filter(Boolean).length;
    const chars = content.length;
    const lines = content.split('\n').length;
    const readTime = Math.max(1, Math.ceil(words / 200));
    return `${words} words \u00b7 ${chars} chars \u00b7 ${lines} lines \u00b7 ${readTime} min read`;
  }, [content]);

  const preview = useMemo(() => renderMarkdown(content), [content]);

  return (
    <div
      className="w-full overflow-hidden rounded-xl border"
      style={{ borderColor: BORDER, backgroundColor: CARD }}
    >
      {/* Toolbar */}
      <div
        className="flex items-center gap-0.5 border-b px-3 py-1.5"
        style={{ borderColor: BORDER_SUBTLE }}
      >
        {TOOLBAR_BUTTONS.map((btn) => (
          <button
            key={btn.label}
            type="button"
            title={btn.title}
            className="rounded px-1.5 py-0.5 text-[9px] transition-colors duration-100"
            style={{ color: FG_MUTED, ...btn.style }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${PRIMARY}12`;
              e.currentTarget.style.color = PRIMARY_DARK;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '';
              e.currentTarget.style.color = FG_MUTED;
            }}
            onClick={() => handleToolbar(btn.before, btn.after)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Split pane */}
      <div className="flex" style={{ minHeight: 140 }}>
        {/* Editor */}
        <textarea
          ref={textareaRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          spellCheck={false}
          className="min-w-0 flex-1 resize-none bg-transparent p-3 text-[10px] leading-relaxed outline-none"
          style={{ color: FG, fontFamily: 'ui-monospace, monospace', caretColor: PRIMARY }}
        />

        {/* Divider */}
        <div className="w-px" style={{ backgroundColor: BORDER }} />

        {/* Preview */}
        <div
          className="min-w-0 flex-1 overflow-auto p-3 text-[10px] leading-relaxed"
          style={{ color: FG_SECONDARY }}
        >
          {preview}
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t px-3 py-1.5" style={{ borderColor: BORDER_SUBTLE }}>
        <p className="text-[8px]" style={{ color: FG_MUTED }}>
          {stats}
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   Demo 2 — JSON Formatter
   ═══════════════════════════════════════════════ */

const SAMPLE_JSON = {
  name: 'leafpad',
  version: '1.2.0',
  tools: ['markdown', 'json', 'notepad', 'uuid', 'base64'],
  config: { theme: 'light', autosave: true, fontSize: 14 },
  stats: { users: 2847, uptime: 99.9 }
};

const COMPACT_INPUT = JSON.stringify(SAMPLE_JSON);

function highlightJson(jsonStr: string): ReactNode[] {
  const parts: ReactNode[] = [];
  // tokenize JSON string for syntax coloring
  const tokenRegex =
    /("(?:[^"\\]|\\.)*")\s*:|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|(\btrue\b|\bfalse\b|\bnull\b)|([{}[\]:,])|(\s+)/g;
  let match;
  let idx = 0;

  while ((match = tokenRegex.exec(jsonStr)) !== null) {
    const [, key, str, num, bool, punct, ws] = match;
    if (key) {
      parts.push(
        <span key={idx} style={{ color: SYN_KEY }}>
          {key}
        </span>
      );
      parts.push(
        <span key={`${idx}c`} style={{ color: FG_MUTED }}>
          :
        </span>
      );
    } else if (str) {
      parts.push(
        <span key={idx} style={{ color: SYN_STRING }}>
          {str}
        </span>
      );
    } else if (num) {
      parts.push(
        <span key={idx} style={{ color: SYN_NUMBER }}>
          {num}
        </span>
      );
    } else if (bool) {
      parts.push(
        <span key={idx} style={{ color: SYN_BOOL }}>
          {bool}
        </span>
      );
    } else if (punct) {
      parts.push(
        <span key={idx} style={{ color: FG_MUTED }}>
          {punct}
        </span>
      );
    } else if (ws) {
      parts.push(<span key={idx}>{ws}</span>);
    }
    idx++;
  }
  return parts;
}

export function MockJsonFormatter() {
  const [mode, setMode] = useState<'pretty' | 'minified'>('pretty');
  const [indent, setIndent] = useState<2 | 4>(2);

  const output = mode === 'pretty' ? JSON.stringify(SAMPLE_JSON, null, indent) : COMPACT_INPUT;

  const lineCount = output.split('\n').length;
  const byteCount = new TextEncoder().encode(output).length;

  return (
    <div
      className="w-full overflow-hidden rounded-xl border"
      style={{ borderColor: BORDER, backgroundColor: CARD }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between border-b px-3 py-2"
        style={{ borderColor: BORDER_SUBTLE }}
      >
        <span className="text-[10px] font-medium" style={{ color: FG_SECONDARY }}>
          JSON Formatter
        </span>
        <div className="flex items-center gap-1">
          {(['pretty', 'minified'] as const).map((m) => (
            <button
              key={m}
              type="button"
              className="rounded-md px-2 py-0.5 text-[9px] font-medium capitalize transition-all duration-150"
              style={{
                backgroundColor: mode === m ? `${PRIMARY}15` : `${PRIMARY}04`,
                color: mode === m ? PRIMARY_DARK : FG_MUTED
              }}
              onClick={() => setMode(m)}
            >
              {m === 'pretty' ? 'Pretty' : 'Minify'}
            </button>
          ))}
          {mode === 'pretty' && (
            <>
              <div className="mx-0.5 h-3 w-px" style={{ backgroundColor: BORDER }} />
              {([2, 4] as const).map((n) => (
                <button
                  key={n}
                  type="button"
                  className="rounded-md px-1.5 py-0.5 text-[9px] font-medium transition-all duration-150"
                  style={{
                    backgroundColor: indent === n ? `${PRIMARY}15` : `${PRIMARY}04`,
                    color: indent === n ? PRIMARY_DARK : FG_MUTED
                  }}
                  onClick={() => setIndent(n)}
                >
                  {n}sp
                </button>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Input */}
      <div className="border-b px-3 py-2" style={{ borderColor: BORDER_SUBTLE }}>
        <p
          className="mb-1 text-[8px] font-medium uppercase tracking-wider"
          style={{ color: FG_MUTED }}
        >
          Input
        </p>
        <pre
          className="overflow-hidden text-ellipsis whitespace-nowrap text-[9px]"
          style={{ color: FG_MUTED, fontFamily: 'ui-monospace, monospace' }}
        >
          {COMPACT_INPUT}
        </pre>
      </div>

      {/* Output */}
      <div className="px-3 py-2">
        <p
          className="mb-1 text-[8px] font-medium uppercase tracking-wider"
          style={{ color: FG_MUTED }}
        >
          Output
        </p>
        <pre
          className="overflow-x-auto whitespace-pre text-[9px] leading-relaxed"
          style={{ fontFamily: 'ui-monospace, monospace', maxHeight: 160 }}
        >
          {highlightJson(output)}
        </pre>
      </div>

      {/* Footer */}
      <div className="border-t px-3 py-1.5" style={{ borderColor: BORDER_SUBTLE }}>
        <p className="text-[8px]" style={{ color: FG_MUTED }}>
          {byteCount} bytes &middot; {lineCount} lines
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   Demo 3 — Notepad
   ═══════════════════════════════════════════════ */

const NOTE_COLORS = ['#fef9c3', '#dbeafe', '#fce7f3', '#dcfce7'];

interface Note {
  title: string;
  body: string;
  color: string;
  time: string;
}

const DEFAULT_NOTES: Note[] = [
  {
    title: 'Meeting Notes',
    body: 'Discuss Q2 roadmap\nReview design system',
    color: NOTE_COLORS[0],
    time: '2:30 PM'
  },
  {
    title: 'API Ideas',
    body: 'WebSocket support\nRate limiting middleware',
    color: NOTE_COLORS[1],
    time: '11:15 AM'
  },
  {
    title: 'Reading List',
    body: 'DDIA ch.7\nRust async patterns',
    color: NOTE_COLORS[2],
    time: 'Yesterday'
  },
  {
    title: 'Deploy Checklist',
    body: 'Run migrations\nUpdate env vars\nSmoke test',
    color: NOTE_COLORS[3],
    time: 'Mar 28'
  }
];

export function MockNotepad() {
  const [selected, setSelected] = useState<number | null>(0);
  const [notes, setNotes] = useState<Note[]>(DEFAULT_NOTES);

  const handleBodyChange = useCallback((idx: number, body: string) => {
    setNotes((prev) => prev.map((n, i) => (i === idx ? { ...n, body } : n)));
  }, []);

  return (
    <div
      className="w-full overflow-hidden rounded-xl border"
      style={{ borderColor: BORDER, backgroundColor: CARD }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between border-b px-3 py-2"
        style={{ borderColor: BORDER_SUBTLE }}
      >
        <span className="text-[10px] font-medium" style={{ color: FG_SECONDARY }}>
          Notes
        </span>
        <span className="text-[9px]" style={{ color: FG_MUTED }}>
          {notes.length} notes
        </span>
      </div>

      {/* Notes grid */}
      <div className="grid grid-cols-2 gap-2 p-3">
        {notes.map((note, i) => {
          const isSelected = selected === i;
          return (
            <button
              key={i}
              type="button"
              className="cursor-pointer rounded-lg p-2 text-left transition-all duration-150"
              style={{
                backgroundColor: note.color,
                border: `2px solid ${isSelected ? PRIMARY : 'transparent'}`,
                boxShadow: isSelected ? `0 0 0 1px ${PRIMARY}40` : undefined
              }}
              onClick={() => setSelected(i)}
            >
              <div className="text-[10px] font-medium" style={{ color: FG }}>
                {note.title}
              </div>
              {isSelected ? (
                <textarea
                  value={note.body}
                  onChange={(e) => handleBodyChange(i, e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  spellCheck={false}
                  rows={3}
                  className="mt-1 w-full resize-none bg-transparent text-[9px] leading-snug outline-none"
                  style={{ color: FG_SECONDARY }}
                />
              ) : (
                <div
                  className="mt-1 line-clamp-3 whitespace-pre-line text-[9px] leading-snug"
                  style={{ color: FG_SECONDARY }}
                >
                  {note.body}
                </div>
              )}
              <div className="mt-1 text-[8px]" style={{ color: FG_MUTED }}>
                {note.time}
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="border-t px-3 py-1.5" style={{ borderColor: BORDER_SUBTLE }}>
        <p className="text-[8px]" style={{ color: FG_MUTED }}>
          Click a note to edit
        </p>
      </div>
    </div>
  );
}
