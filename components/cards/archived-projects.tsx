'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import LeafpadCard from './leafpad-card';
import OoeyCard from './ooey-card';
import QuFlowCard from './quflow-card';
import ReadAloudCard from './readaloud-card';

const ARCHIVED = [
  { hash: '#readaloud', Card: ReadAloudCard },
  { hash: '#toolbench', Card: LeafpadCard },
  { hash: '#ooey', Card: OoeyCard },
  { hash: '#quflow', Card: QuFlowCard }
] as const;

const STAGGER = 60;

function ArchivedProjects() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const expandIfArchivedHash = () => {
      if (ARCHIVED.some((project) => project.hash === window.location.hash)) {
        setOpen(true);
      }
    };
    expandIfArchivedHash();
    window.addEventListener('hashchange', expandIfArchivedHash);
    return () => window.removeEventListener('hashchange', expandIfArchivedHash);
  }, []);

  return (
    <section className="w-full">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="archived-projects"
        className="card-editorial flex w-full items-center gap-2 bg-card px-5 py-3 text-card-foreground"
      >
        <span className="section-label whitespace-nowrap !text-sm">Archived Projects</span>
        <span className="font-mono text-xs text-muted-foreground">{ARCHIVED.length}</span>
        <ChevronDown
          aria-hidden
          className={`ml-auto h-3.5 w-3.5 shrink-0 text-accent-primary transition-transform duration-300 motion-reduce:transition-none ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        id="archived-projects"
        className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        {/*
         * -mx-2 px-2 keeps cards aligned while giving focus outlines room inside the clip.
         * Vertical padding lives on the inner grid, not here — padding on the clipping box
         * itself survives the 0fr collapse and would leave a gap under the trigger.
         */}
        <div className="-mx-2 overflow-hidden px-2" inert={!open}>
          <div className="grid grid-cols-1 gap-3 pb-2 pt-3 sm:grid-cols-2 lg:grid-cols-3">
            {ARCHIVED.map((project, index) => (
              <div
                key={project.hash}
                className={`transition-all duration-500 ease-out motion-reduce:transition-none ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${100 + index * STAGGER}ms` : '0ms' }}
              >
                <project.Card />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArchivedProjects;
