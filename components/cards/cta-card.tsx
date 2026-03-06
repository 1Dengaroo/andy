'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { socialLinks } from '@/lib/data';
import { Mail, Send, MessageSquare, CircleCheck } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required')
});

type ContactForm = z.infer<typeof contactSchema>;

function CTACard() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/mvzworyr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setStatus('sent');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Card className="flex h-full w-full flex-col items-center justify-between gap-3 px-6 py-4 sm:flex-row sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <p className="text-sm text-foreground">Interested in working together?</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="shrink-0 bg-accent-primary text-white hover:bg-accent-primary/90">
                <Mail className="h-4 w-4" />
                Get in Touch
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <a href="mailto:andydeng0224@gmail.com?subject=Let's%20Work%20Together">
                  <Mail className="h-4 w-4" />
                  Send Email
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setDialogOpen(true)}>
                <MessageSquare className="h-4 w-4" />
                Message Directly
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex gap-1">
          <TooltipProvider>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Tooltip key={link.label}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:text-accent-primary"
                    >
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <Icon className="h-4 w-4" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </div>
      </Card>

      <Dialog
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open)
            setTimeout(() => {
              setStatus('idle');
              reset();
            }, 200);
        }}
      >
        <DialogContent className="rounded-xl border-0 bg-card text-card-foreground shadow-lg sm:max-w-lg">
          {status === 'sent' ? (
            <div className="flex flex-col items-center gap-4 py-6">
              <VisuallyHidden.Root>
                <DialogTitle>Message Sent</DialogTitle>
              </VisuallyHidden.Root>
              <CircleCheck className="h-10 w-10 text-accent-primary" />
              <div className="text-center">
                <p className="text-sm font-medium text-card-foreground">Message sent!</p>
                <p className="mt-1 text-xs text-muted-foreground">I&apos;ll be in touch soon.</p>
              </div>
              <Button variant="outline" size="sm" autoFocus onClick={() => setDialogOpen(false)}>
                Close
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-card-foreground">Send a Message</DialogTitle>
                <DialogDescription>I&apos;ll get back to you as soon as I can.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2.5">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <Input placeholder="Name" {...register('name')} />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <Input type="email" placeholder="Email" {...register('email')} />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={3}
                    {...register('message')}
                    className="flex w-full resize-y rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-1 w-full bg-accent-primary text-white hover:bg-accent-primary/90"
                >
                  <Send className="h-3.5 w-3.5" />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </Button>
                {status === 'error' && (
                  <p className="text-center text-sm text-destructive">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CTACard;
