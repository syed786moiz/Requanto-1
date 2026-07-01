'use client';

import { ArrowRight } from 'lucide-react';
import { useReveal } from '../../lib/hooks';
import { useRoute } from '../../lib/router';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'light',
  cta,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'center' | 'left';
  theme?: 'light' | 'dark';
  cta?: { label: string; to: string };
}) {
  const { ref, visible } = useReveal();
  const { navigate } = useRoute();
  const isDark = theme === 'dark';
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <div ref={ref} className={`flex max-w-3xl flex-col ${alignCls} gap-3 ${visible ? 'is-visible' : ''} reveal`}>
      {eyebrow && (
        <span className={isDark ? 'eyebrow-light' : 'eyebrow'}>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-display-lg text-balance ${
          isDark ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed text-balance ${isDark ? 'text-ink-300' : 'text-ink-600'}`}>
          {description}
        </p>
      )}
      {cta && (
        <button onClick={() => navigate(cta.to)} className="btn-primary mt-2">
          {cta.label}
          <ArrowRight size={16} />
        </button>
      )}
    </div>
  );
}
