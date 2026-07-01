'use client';

import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useReveal } from '../lib/hooks';
import { FINANCIAL_SOLUTIONS } from '../data/content';
import { ArrowRight, ShieldCheck, TrendingUp, Banknote } from 'lucide-react';
import { useRoute } from '../lib/router';

const IMPACT = [
  { metric: '-48%', label: 'AML false positives', icon: ShieldCheck },
  { metric: '-63%', label: 'KYC onboarding time', icon: TrendingUp },
  { metric: '2x', label: 'Faster audit cycles', icon: Banknote },
  { metric: '92', label: 'Compliance posture', icon: ShieldCheck },
];

export default function FinancialServicesPage() {
  const { navigate } = useRoute();
  return (
    <>
      <PageHero
        eyebrow="Financial Services"
        title="AI for risk, compliance"
        highlight="and operations."
        description="An end-to-end AI suite for banking, NBFC and financial services — risk, AML, fraud, KYC, loan origination, AP, treasury and internal audit."
        ctas={[
          { label: 'Request Demo', to: '/contact#demo', variant: 'accent' },
          { label: 'Talk to Expert', to: '/contact#expert', variant: 'outline' },
        ]}
      />

      <section className="section">
        <div className="container-rq">
          <SectionHeading
            eyebrow="Solutions"
            title={<>Ten AI solutions for <span className="gradient-text">modern finance.</span></>}
            description="Each solution is production-ready and governed — built on Requanto's connected intelligence layer."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {FINANCIAL_SOLUTIONS.map((s, i) => (
              <SolutionRow key={s.name} solution={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section">
        <div className="container-rq">
          <SectionHeading
            eyebrow="Impact"
            title={<>Measured in <span className="gradient-text">financial outcomes.</span></>}
            description="How Requanto moves the needle for financial services customers."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT.map((im, i) => {
              const { ref, visible } = useReveal();
              const Icon = im.icon;
              return (
                <div key={im.label} ref={ref} className={`reveal reveal-delay-${i + 1} ${visible ? 'is-visible' : ''}`}>
                  <div className="rounded-2xl border border-ink-200/70 bg-white p-6 text-center shadow-premium">
                    <span className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon size={18} />
                    </span>
                    <div className="mt-3 text-display-lg gradient-text">{im.metric}</div>
                    <div className="mt-1 text-sm text-ink-600">{im.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-rq">
          <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-12 text-white sm:px-12 sm:py-16">
            <div className="absolute inset-0 dot-bg opacity-[0.07]" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="eyebrow-light">
                  <Banknote size={12} className="text-accent" /> Connected financial stack
                </span>
                <h2 className="mt-4 text-display-lg text-balance">
                  One platform for <span className="gradient-text-accent">risk, audit, fraud & KYC.</span>
                </h2>
                <p className="mt-4 text-ink-300">
                  Requanto Risk AI, Audit AI, Fraud AI and KYC AI share one intelligence layer — giving your risk organization a single source of truth.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {['Risk & Compliance', 'AML & Fraud Detection', 'KYC & Onboarding', 'Internal Audit', 'Third-Party Risk'].map((t, i) => (
                  <div key={t} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/20 text-accent text-xs font-bold">{i + 1}</span>
                    <span className="flex-1 text-sm font-medium text-white">{t}</span>
                    <span className="text-[10px] font-semibold text-success">Connected</span>
                  </div>
                ))}
                <button onClick={() => navigate('/contact#demo')} className="btn-accent mt-2 self-start">
                  Request a demo <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SolutionRow({ solution, index }: { solution: typeof FINANCIAL_SOLUTIONS[number]; index: number }) {
  const { ref, visible } = useReveal();
  const { navigate } = useRoute();
  const Icon = solution.icon;
  return (
    <div ref={ref} className={`reveal reveal-delay-${(index % 3) + 1} ${visible ? 'is-visible' : ''}`}>
      <button
        onClick={() => navigate('/contact#demo')}
        className="group flex h-full w-full flex-col items-start rounded-2xl border border-ink-200/70 bg-white p-5 text-left shadow-premium transition-all hover:-translate-y-1 hover:shadow-premiumLg"
      >
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-transform group-hover:scale-110">
          <Icon size={20} />
        </span>
        <h3 className="mt-4 text-base font-bold text-ink-900">{solution.name}</h3>
        <p className="mt-1 text-sm text-ink-600">{solution.desc}</p>
        <span className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand-600 transition-transform group-hover:translate-x-1">
          Learn more <ArrowRight size={12} />
        </span>
      </button>
    </div>
  );
}
