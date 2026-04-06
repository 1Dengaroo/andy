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
        className="group relative aspect-[7/2] cursor-pointer overflow-hidden !border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        <video
          src="/videos/quflow.mov"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover brightness-[0.55] transition-all duration-700 group-hover:scale-105 group-hover:brightness-[0.7]"
        />
        <div className="bg-linear-to-t absolute inset-0 from-black/70 via-black/20 to-transparent" />
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
