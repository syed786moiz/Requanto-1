'use client';

import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useReveal } from '../lib/hooks';
import { Boxes, Workflow, ShieldCheck, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { useRoute } from '../lib/router';

const SOLUTION_AREAS = [
  {
    id: 'enterprise-saas',
    icon: Boxes,
    title: 'AI Enterprise SaaS Platforms',
    tag: 'Vertical AI',
    desc: 'Production-ready AI platforms purpose-built for real estate, communities, finance and operations. Turnkey deployment, enterprise-grade governance.',
    solutions: ['AI Real Estate Platforms', 'Enterprise Workflow Platforms', 'Community Operations', 'Vendor Intelligence', 'Procurement Automation', 'Operational Analytics'],
    to: '/products',
  },
  {
    id: 'low-code',
    icon: Workflow,
    title: 'AI Low-Code / No-Code Platform',
    tag: 'Automation',
    desc: 'Empower business teams to build AI-powered workflows without engineering debt — drag and drop, automate and orchestrate end-to-end.',
    solutions: ['Drag and Drop Workflows', 'Dynamic Forms', 'Business Rules Engine', 'AI Workflow Automation', 'Approval Management', 'Process Orchestration'],
    to: '/products#studio',
  },
  {
    id: 'security-grc',
    icon: ShieldCheck,
    title: 'Cybersecurity & GRC',
    tag: 'Security',
    desc: 'From assessments to architecture to ongoing compliance — Requanto secures your enterprise and de-risks your AI adoption.',
    solutions: ['Cybersecurity Assessments', 'Governance Risk & Compliance', 'Security Architecture Reviews', 'Security Program Development', 'Third Party Risk Management', 'Compliance Readiness'],
    to: '/services#vciso',
  },
  {
    id: 'advisory',
    icon: Briefcase,
    title: 'Executive Advisory',
    tag: 'Strategy',
    desc: 'Virtual CISO and Virtual CTO leadership on demand — strategy, roadmaps, board-ready reporting and transformation leadership.',
    solutions: ['Security Strategy & Roadmaps', 'AI Adoption Roadmap', 'Board Reporting', 'Technology Strategy', 'Engineering Governance', 'Incident Readiness'],
    to: '/services',
  },
];

const TRANSFORM_STEPS = [
  { step: '01', title: 'Discover', desc: 'Assess current operations, data maturity and AI readiness across the enterprise.' },
  { step: '02', title: 'Design', desc: 'Co-design the target architecture, platform and automation blueprint.' },
  { step: '03', title: 'Deploy', desc: 'Roll out AI platforms and agents with low-code orchestration and governance.' },
  { step: '04', title: 'Operate', desc: 'Run managed services and continuous improvement with measurable outcomes.' },
];

export default function SolutionsPage() {
  const { navigate } = useRoute();
  return (
    <>
      <PageHero
        eyebrow="AI Solutions"
        title="One partner."
        highlight="Multiple AI solutions."
        description="Requanto unifies enterprise SaaS platforms, low-code automation, cybersecurity and executive advisory into a single AI transformation engine."
        ctas={[
          { label: 'Schedule Strategy Session', to: '/contact#consultation', variant: 'accent' },
          { label: 'Explore Products', to: '/products', variant: 'outline' },
        ]}
      />

      <section className="section">
        <div className="container-rq space-y-24">
          {SOLUTION_AREAS.map((area, idx) => (
            <SolutionArea key={area.id} area={area} reversed={idx % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="section bg-section">
        <div className="container-rq">
          <SectionHeading
            align="left"
            eyebrow="How We Transform"
            title={<>A proven path from <span className="gradient-text">pilot to enterprise AI.</span></>}
            description="Four phases. One outcome-driven engagement model."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {TRANSFORM_STEPS.map((s, i) => (
              <TransformStep key={s.step} step={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-rq">
          <SectionHeading
            align="left"
            eyebrow="Outcome Promise"
            title={<>Built for measurable <span className="gradient-text">business outcomes.</span></>}
            description="Every engagement is measured by real enterprise metrics — not vanity activity."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { metric: '62%', label: 'Faster service turnaround' },
              { metric: '-48%', label: 'AML false positives' },
              { metric: '2x', label: 'Faster audit cycles' },
              { metric: '$3.1M', label: 'Vendor spend savings' },
            ].map((o) => (
              <OutcomeCard key={o.label} {...o} />
            ))}
          </div>
          <div className="mt-12 text-left">
            <button onClick={() => navigate('/resources#cases')} className="btn-primary">
              See case studies <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function SolutionArea({ area, reversed }: { area: typeof SOLUTION_AREAS[number]; reversed: boolean }) {
  const { ref, visible } = useReveal();
  const { navigate } = useRoute();
  const Icon = area.icon;
  return (
    <div id={area.id} ref={ref} className={`scroll-mt-24 grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${visible ? 'is-visible' : ''} reveal`}>
      <div className={reversed ? 'lg:order-2' : ''}>
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink-900 text-accent shadow-premium">
            <Icon size={22} />
          </span>
          <span className="rounded-full bg-section px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">{area.tag}</span>
        </div>
        <h2 className="mt-5 text-display-lg text-ink-900">{area.title}</h2>
        <p className="mt-4 text-lg text-ink-600">{area.desc}</p>
        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {area.solutions.map((s) => (
            <li key={s} className="flex items-start gap-2 text-sm font-medium text-ink-700">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-success" />
              {s}
            </li>
          ))}
        </ul>
        <button onClick={() => navigate(area.to)} className="btn-primary mt-7">
          Explore <ArrowRight size={15} />
        </button>
      </div>
      <div className={reversed ? 'lg:order-1' : ''}>
        <SolutionVisual area={area} />
      </div>
    </div>
  );
}

function SolutionVisual({ area }: { area: typeof SOLUTION_AREAS[number] }) {
  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-[1.5rem] bg-accent/10 blur-lg" />
      <div className="relative overflow-hidden rounded-2xl border border-ink-200/70 bg-white p-6 shadow-premiumLg">
        <div className="flex items-center justify-between border-b border-ink-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          </div>
          <span className="text-[11px] font-medium text-ink-400">{area.title}</span>
        </div>

        <div className="mt-5 space-y-3">
          {area.solutions.slice(0, 4).map((s, i) => (
            <div key={s} className="flex items-center gap-3 rounded-xl border border-ink-100 bg-section/60 p-3">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50 text-brand-600 text-[11px] font-bold">{i + 1}</span>
              <div className="flex-1">
                <div className="text-sm font-semibold text-ink-900">{s}</div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${65 + i * 10}%` }} />
                </div>
              </div>
              <span className="text-xs font-bold text-success">{65 + i * 10}%</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-ink-900 px-4 py-3 text-white">
          <span className="text-xs font-medium text-ink-300">Automation rate</span>
          <span className="text-sm font-bold text-accent">84% · AI-driven</span>
        </div>
      </div>
    </div>
  );
}

function TransformStep({ step, index }: { step: typeof TRANSFORM_STEPS[number]; index: number }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal reveal-delay-${index + 1} ${visible ? 'is-visible' : ''}`}>
      <div className="relative h-full rounded-2xl border border-ink-200/70 bg-white p-6 shadow-premium">
        <span className="text-4xl font-bold text-ink-100">{step.step}</span>
        <h3 className="mt-2 text-lg font-bold text-ink-900">{step.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.desc}</p>
        {index < 3 && (
          <div className="absolute right-4 top-6 hidden lg:block">
            <ArrowRight size={16} className="text-ink-300" />
          </div>
        )}
      </div>
    </div>
  );
}

function OutcomeCard({ metric, label }: { metric: string; label: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
      <div className="rounded-2xl border border-ink-200/70 bg-white p-6 text-center shadow-premium">
        <div className="text-display-lg gradient-text">{metric}</div>
        <div className="mt-1 text-sm text-ink-600">{label}</div>
      </div>
    </div>
  );
}
