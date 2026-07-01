'use client';

import { useState, useEffect } from 'react';
import { Sparkles, X, Send, CalendarClock, Play, ShieldCheck, Brain, Boxes, MessageSquare, ArrowRight } from 'lucide-react';
import { useRoute } from '../lib/router';

const SUGGESTIONS = [
  { label: 'Find AI Solutions', to: '/solutions', icon: Boxes },
  { label: 'Book a Consultation', to: '/contact#consultation', icon: CalendarClock },
  { label: 'Request a Demo', to: '/contact#demo', icon: Play },
  { label: 'Explore Platforms', to: '/products', icon: Boxes },
  { label: 'Evaluate Cybersecurity', to: '/cyber-check', icon: ShieldCheck },
  { label: 'Assess AI Readiness', to: '/assessment', icon: Brain },
  { label: 'Talk to an Expert', to: '/contact#expert', icon: MessageSquare },
  { label: 'Schedule vCISO', to: '/services#vciso', icon: ShieldCheck },
  { label: 'Schedule vCTO', to: '/services#vcto', icon: Brain },
  { label: 'Product Recommendations', to: '/products', icon: Sparkles },
];

export function FloatingAssistant() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<'home' | 'recommend'>('home');

  useEffect(() => {
    if (!open) setStep('home');
  }, [open]);

  return (
    <>
      <button
        id="raq-fab"
        onClick={() => setOpen(true)}
        className="group fixed bottom-5 right-5 z-[90] flex items-center gap-2 rounded-full bg-ink-900 px-4 py-3 text-sm font-semibold text-white shadow-premiumLg transition-all hover:-translate-y-0.5 hover:bg-ink-800"
        aria-label="Open Requanto AI Assistant"
      >
        <span className="relative grid h-6 w-6 place-items-center">
          <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
          <Sparkles size={18} className="relative text-accent" />
        </span>
        <span className="hidden sm:inline">Requanto AI</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[110] flex items-end justify-end p-4 sm:p-6">
          <div className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm animate-fade-in" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-md animate-scale-in">
            <AssistantPanel
              step={step}
              onClose={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

function AssistantPanel({
  step,
  onClose,
}: {
  step: 'home' | 'recommend';
  onClose: () => void;
}) {
  const { navigate } = useRoute();
  const [input, setInput] = useState('');

  const go = (to: string) => {
    onClose();
    navigate(to);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200/80 bg-white shadow-premiumLg">
      <div className="relative bg-ink-900 px-5 py-4 text-white">
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
              <Sparkles size={18} className="text-accent" />
            </span>
            <div>
              <div className="text-sm font-semibold">Requanto AI Assistant</div>
              <div className="flex items-center gap-1.5 text-[11px] text-ink-300">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulseGlow" />
                Online · Enterprise AI guide
              </div>
            </div>
          </div>
          <button onClick={onClose} className="grid h-8 w-8 place-items-center rounded-full text-ink-300 hover:bg-white/10 hover:text-white" aria-label="Close">
            <X size={16} />
          </button>
        </div>
      </div>

      <div className="max-h-[60vh] overflow-y-auto p-4 no-scrollbar">
        {step === 'home' && (
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                <Sparkles size={14} />
              </span>
              <p className="rounded-2xl rounded-tl-sm bg-section px-3.5 py-2.5 text-sm text-ink-700">
                Hi — I'm your Requanto AI assistant. I can help you find the right AI solutions, schedule a strategy session, or get a product demo. What would you like to do?
              </p>
            </div>
            <div className="grid gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s.label}
                  onClick={() => go(s.to)}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-ink-200/70 bg-white px-3.5 py-2.5 text-left text-sm font-medium text-ink-800 transition-all hover:border-brand-300 hover:bg-brand-50/40"
                >
                  <span className="flex items-center gap-2.5">
                    <s.icon size={16} className="text-brand-500" />
                    {s.label}
                  </span>
                  <ArrowRight size={14} className="text-ink-300 transition-colors group-hover:text-brand-600" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-ink-100 p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) {
              go('/contact#expert');
            }
          }}
          className="flex items-center gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about our AI platforms…"
            className="flex-1 rounded-full border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
          <button type="submit" className="grid h-10 w-10 place-items-center rounded-full bg-ink-900 text-white hover:bg-ink-800 transition-colors" aria-label="Send">
            <Send size={16} />
          </button>
        </form>
        <p className="mt-2 px-1 text-[11px] text-ink-400">
          Powered by Requanto AI · Your strategic enterprise transformation partner
        </p>
      </div>
    </div>
  );
}
