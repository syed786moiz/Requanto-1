'use client';

import { Bot, Sparkles, ShieldCheck, Workflow, ArrowUpRight } from 'lucide-react';

const INSIGHTS = [
  { icon: Workflow, label: 'Workflows live', value: '1,284' },
  { icon: Bot, label: 'AI agents', value: '37 active' },
  { icon: ShieldCheck, label: 'Security score', value: '92 A+' },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
      <div className="absolute -inset-6 rounded-3xl bg-accent/10 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-ink-200/80 bg-white shadow-premiumLg">
        <div className="flex items-center justify-between border-b border-ink-100 bg-ink-950 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent text-ink-900">
              <Sparkles size={14} />
            </span>
            <span className="text-sm font-semibold text-white">Requanto AI</span>
          </div>
          <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulseGlow" />
            Online
          </span>
        </div>

        <div className="space-y-3 p-4 sm:p-5">
          <p className="text-sm leading-relaxed text-ink-600">
            Enterprise intelligence across platforms, security, and operations — unified in one layer.
          </p>

          <div className="space-y-2">
            {INSIGHTS.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-xl border border-ink-100 bg-section/80 px-3.5 py-2.5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-brand-600 shadow-sm">
                    <item.icon size={15} />
                  </span>
                  <span className="text-sm text-ink-600">{item.label}</span>
                </div>
                <span className="text-sm font-bold text-ink-900">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between rounded-xl bg-ink-950 px-3.5 py-3 text-white">
            <span className="text-xs text-ink-400">Platform accuracy</span>
            <span className="flex items-center gap-1 text-sm font-bold text-accent">
              98.4% <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
