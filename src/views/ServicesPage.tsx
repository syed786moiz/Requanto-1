'use client';

import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useReveal } from '../lib/hooks';
import { SERVICES, type ServiceCard } from '../data/content';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useRoute } from '../lib/router';

const ENGAGE = [
  { phase: 'Assess', days: 'Week 1–2', desc: 'Deep-dive discovery, maturity assessment and value hypothesis.' },
  { phase: 'Architect', days: 'Week 3–5', desc: 'Target architecture, roadmap and platform selection.' },
  { phase: 'Build', days: 'Week 6–12', desc: 'AI platforms, workflows and agents deployed with governance.' },
  { phase: 'Run', days: 'Ongoing', desc: 'Managed services, optimization and continuous improvement.' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Executive advisory and"
        highlight="managed transformation."
        description="From Virtual CISO and Virtual CTO to managed IT, cloud and AI adoption — Requanto embeds senior leadership into your transformation."
        ctas={[
          { label: 'Schedule vCISO', to: '/services#vciso', variant: 'accent' },
          { label: 'Schedule vCTO', to: '/services#vcto', variant: 'outline' },
        ]}
      />

      <section className="section">
        <div className="container-rq">
          <SectionHeading
            eyebrow="Service Catalog"
            title={<>Senior leadership in <span className="gradient-text">every engagement.</span></>}
            description="A connected suite of services — security, technology, cloud and AI adoption."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <ServiceItem key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section">
        <div className="container-rq">
          <SectionHeading
            eyebrow="Engagement Model"
            title={<>Outcome-driven in <span className="gradient-text">four phases.</span></>}
            description="A predictable engagement that turns ambition into a shipped, measurable AI transformation."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {ENGAGE.map((e, i) => (
              <EngageStep key={e.phase} step={e} index={i} />
            ))}
          </div>
        </div>
      </section>

      {SERVICES.slice(0, 3).map((s, i) => (
        <ServiceDeepDive key={s.id} service={s} reversed={i % 2 === 1} />
      ))}
    </>
  );
}

function ServiceItem({ service, index }: { service: ServiceCard; index: number }) {
  const { ref, visible } = useReveal();
  const { navigate } = useRoute();
  const Icon = service.icon;
  return (
    <div ref={ref} className={`reveal reveal-delay-${(index % 4) + 1} ${visible ? 'is-visible' : ''}`}>
      <div
        id={service.id}
        className="group flex h-full scroll-mt-24 flex-col rounded-2xl border border-ink-200/70 bg-white p-5 shadow-premium transition-all hover:-translate-y-1.5 hover:shadow-premiumLg"
      >
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-900 text-accent transition-transform group-hover:scale-110">
          <Icon size={20} />
        </span>
        <h3 className="mt-4 text-base font-bold text-ink-900">{service.name}</h3>
        <p className="mt-1 text-xs text-ink-500">{service.desc}</p>
        <ul className="mt-4 space-y-1.5">
          {service.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-start gap-1.5 text-xs text-ink-600">
              <CheckCircle2 size={12} className="mt-0.5 shrink-0 text-success" />
              {f}
            </li>
          ))}
        </ul>
        <button
          onClick={() => navigate(`/services#${service.id}`)}
          className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand-600 transition-transform group-hover:translate-x-1"
        >
          Learn more <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}

function ServiceDeepDive({ service, reversed }: { service: ServiceCard; reversed: boolean }) {
  const { ref, visible } = useReveal();
  const { navigate } = useRoute();
  const Icon = service.icon;
  return (
    <section className="section">
      <div className="container-rq">
        <div id={service.id} ref={ref} className={`scroll-mt-24 grid items-center gap-8 lg:grid-cols-2 lg:gap-14 reveal ${visible ? 'is-visible' : ''}`}>
          <div className={reversed ? 'lg:order-2' : ''}>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon size={22} />
              </span>
              <span className="rounded-full bg-section px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                Service
              </span>
            </div>
            <h2 className="mt-5 text-display-lg text-ink-900">{service.name}</h2>
            <p className="mt-4 text-lg text-ink-600">{service.desc}</p>
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {service.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm font-medium text-ink-700">
                  <CheckCircle2 size={15} className="shrink-0 text-success" />
                  {f}
                </div>
              ))}
            </div>
            <button onClick={() => navigate('/contact#consultation')} className="btn-primary mt-7">
              Schedule a session <ArrowRight size={15} />
            </button>
          </div>
          <div className={reversed ? 'lg:order-1' : ''}>
            <ServiceVisual service={service} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceVisual({ service }: { service: ServiceCard }) {
  const Icon = service.icon;
  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-[1.5rem] bg-gradient-to-br from-brand-100/40 to-accent/10 blur-lg" />
      <div className="relative overflow-hidden rounded-2xl border border-ink-200/70 bg-white shadow-premiumLg">
        <div className="flex items-center justify-between border-b border-ink-100 bg-section/50 px-5 py-3">
          <div className="flex items-center gap-2">
            <Icon size={16} className="text-brand-600" />
            <span className="text-sm font-semibold text-ink-900">{service.name}</span>
          </div>
          <span className="rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-semibold text-success">Active</span>
        </div>
        <div className="p-5">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink-400">Capabilities</div>
          <div className="space-y-2.5">
            {service.features.map((f, i) => (
              <div key={f} className="flex items-center gap-3 rounded-lg border border-ink-100 bg-section/40 p-3">
                <span className="grid h-7 w-7 place-items-center rounded-md bg-ink-900 text-[10px] font-bold text-accent">{i + 1}</span>
                <span className="flex-1 text-xs font-medium text-ink-700">{f}</span>
                <span className="text-[10px] font-bold text-success">Ready</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-ink-100 bg-ink-900 px-5 py-3 text-white">
          <span className="text-[11px] text-ink-300">Maturity delivered</span>
          <span className="text-sm font-bold text-accent">Stage 4 · Optimized</span>
        </div>
      </div>
    </div>
  );
}

function EngageStep({ step, index }: { step: typeof ENGAGE[number]; index: number }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal reveal-delay-${index + 1} ${visible ? 'is-visible' : ''}`}>
      <div className="relative h-full rounded-2xl border border-ink-200/70 bg-white p-6 shadow-premium">
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-ink-100">{String(index + 1).padStart(2, '0')}</span>
          <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold text-brand-700">{step.days}</span>
        </div>
        <h3 className="mt-3 text-lg font-bold text-ink-900">{step.phase}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.desc}</p>
      </div>
    </div>
  );
}
