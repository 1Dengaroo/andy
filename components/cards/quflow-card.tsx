'use client';

import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import { ProjectModal, useHashModal } from './project-modal';

function QuFlowCard() {
  const [open, setOpen] = useHashModal('quflow');

  return (
    <>
      <Card
        id="quflow"
        className="group relative h-full cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
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
          src="/quflow.mov"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <CardContent className="relative z-10 w-full pt-6">
          <div className="flex items-center justify-between px-2">
            <h1
              className="text-2xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              Qu<span style={{ color: '#3b82f6' }}>Flow</span>
            </h1>
            <Button variant="ghost" size="icon" className="text-white" tabIndex={-1}>
              <ArrowUpRight className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <ProjectModal
        open={open}
        onOpenChange={setOpen}
        preview={
          <video
            src="/quflow.mov"
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
