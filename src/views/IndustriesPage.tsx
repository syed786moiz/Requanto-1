'use client';

import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useReveal } from '../lib/hooks';
import { INDUSTRIES, type IndustryCard } from '../data/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useRoute } from '../lib/router';

export default function IndustriesPage() {
  const { navigate } = useRoute();
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industry intelligence,"
        highlight="AI-native."
        description="Requanto ships deep, industry-specific AI across real estate, financial services, healthcare, manufacturing, government and smart communities."
        ctas={[
          { label: 'Financial Services', to: '/financial-services', variant: 'accent' },
          { label: 'Assess AI Readiness', to: '/assessment', variant: 'outline' },
        ]}
      />

      <section className="section pb-0 sm:pb-0 lg:pb-6">
        <div className="container-rq">
          <SectionHeading
            align="left"
            eyebrow="Industry Cards"
            title={<>Vertical depth with <span className="gradient-text">horizontal reach.</span></>}
            description="Each industry gets purpose-built AI solutions — connected by one platform backbone."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <IndustryCardItem key={ind.id} industry={ind} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section pt-0 sm:pt-0 lg:pt-6">
        <div className="container-rq">
          <div className="max-w-3xl">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Build With Requanto
            </span>
            <h2 className="mt-3 text-display-lg text-balance text-ink-900">
              Start with your <span className="gradient-text">industry.</span>
            </h2>
            <p className="rq-card-body mt-5 max-w-2xl text-base leading-relaxed sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">
              Tell us your industry and outcomes — we&apos;ll bring the AI platforms, automation and advisory.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-start gap-3">
            <button onClick={() => navigate('/contact#expert')} className="btn-accent">
              Talk to an industry expert <ArrowRight size={15} />
            </button>
            <button onClick={() => navigate('/assessment')} className="btn-outline">
              Get an AI readiness score <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function IndustryCardItem({ industry, index }: { industry: IndustryCard; index: number }) {
  const { ref, visible } = useReveal();
  const { navigate } = useRoute();
  const Icon = industry.icon;
  return (
    <div ref={ref} className={`reveal reveal-delay-${(index % 3) + 1} ${visible ? 'is-visible' : ''}`}>
      <button
        onClick={() => navigate(industry.id === 'financialservices' ? '/financial-services' : `/industries#${industry.id}`)}
        className="group flex h-full w-full flex-col items-start rounded-2xl border border-ink-200/70 bg-white p-6 text-left shadow-premium transition-all hover:-translate-y-1.5 hover:shadow-premiumLg"
      >
        <div className="flex w-full items-center justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink-900 text-accent transition-transform group-hover:scale-110">
            <Icon size={22} />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-400">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h3 className="mt-5 text-lg font-bold text-ink-900">{industry.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{industry.blurb}</p>
        <div id={industry.id} className="mt-4 flex flex-wrap gap-1.5 scroll-mt-24">
          {industry.solutions.map((s) => (
            <span key={s} className="flex items-center gap-1 rounded-md bg-brand-50/60 px-2 py-0.5 text-[11px] font-medium text-brand-700">
              <CheckCircle2 size={10} className="text-success" />
              {s}
            </span>
          ))}
        </div>
        <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-transform group-hover:translate-x-1">
          Explore solutions <ArrowRight size={14} />
        </span>
      </button>
    </div>
  );
}
