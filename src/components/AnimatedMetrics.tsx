'use client';

import { useInView, useCountUp } from '../lib/hooks';

type Metric = { value: number; suffix?: string; label: string; prefix?: string };

export function AnimatedMetrics({ metrics, theme = 'light' }: { metrics: Metric[]; theme?: 'light' | 'dark' }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`grid grid-cols-2 gap-px overflow-hidden rounded-2xl border ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-ink-200 bg-section'} sm:grid-cols-4`}>
      {metrics.map((m) => (
        <MetricCell key={m.label} metric={m} active={inView} theme={theme} />
      ))}
    </div>
  );
}

function MetricCell({ metric, active, theme }: { metric: Metric; active: boolean; theme: 'light' | 'dark' }) {
  const value = useCountUp(metric.value, active);
  return (
    <div className={`flex flex-col items-center justify-center px-4 py-7 text-center ${theme === 'dark' ? 'bg-white/[0.02]' : 'bg-white'}`}>
      <div className={`text-display-lg ${theme === 'dark' ? 'text-white' : 'text-ink-900'}`}>
        {metric.prefix}{Math.round(value)}{metric.suffix}
      </div>
      <div className={`mt-1 text-xs font-medium uppercase tracking-[0.12em] ${theme === 'dark' ? 'text-ink-400' : 'text-ink-500'}`}>
        {metric.label}
      </div>
    </div>
  );
}
