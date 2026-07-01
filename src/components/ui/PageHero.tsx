'use client';

import { useReveal } from '../../lib/hooks';
import { ArrowRight } from 'lucide-react';
import { useRoute } from '../../lib/router';

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  ctas,
  theme = 'light',
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  ctas?: { label: string; to: string; variant?: 'accent' | 'outline' | 'ghot' }[];
  theme?: 'light' | 'dark';
}) {
  const { ref, visible } = useReveal();
  const { navigate } = useRoute();
  const isDark = theme === 'dark';

  return (
    <section className={`relative overflow-hidden ${isDark ? 'bg-ink-950 text-white' : 'bg-white'} pt-24 sm:pt-12 pb-12 sm:pb-12`}>
      {isDark ? (
        <>
          <div className="absolute inset-0 dot-bg opacity-[0.06]" />
          <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute inset-x-0 top-0 h-[420px] bg-accent/5" />
          <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        </>
      )}
      <div className="container-rq relative">
        <div ref={ref} className={`max-w-3xl ${visible ? 'is-visible' : ''} reveal`}>
          <span className={isDark ? 'eyebrow-light' : 'eyebrow'}>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
          <h1 className={`mt-5 text-display-xl text-balance ${isDark ? 'text-white' : 'text-ink-900'}`}>
            {title}{' '}
            {highlight && <span className={isDark ? 'gradient-text-accent' : 'text-ink-900'}>{highlight}</span>}
          </h1>
          {description && (
            <p className={`mt-5 max-w-2xl text-lg leading-relaxed text-balance ${isDark ? 'text-ink-300' : 'text-ink-600'}`}>
              {description}
            </p>
          )}
          {ctas && (
            <div className="mt-8 flex flex-wrap gap-3">
              {ctas.map((c) => (
                <button
                  key={c.label}
                  onClick={() => navigate(c.to)}
                  className={
                    c.variant === 'outline' || (isDark && c.variant !== 'accent')
                      ? isDark
                        ? 'btn-outline border-white/20 bg-white/5 text-white hover:bg-white/10'
                        : 'btn-outline'
                      : 'btn-accent'
                  }
                >
                  {c.label}
                  <ArrowRight size={15} />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
