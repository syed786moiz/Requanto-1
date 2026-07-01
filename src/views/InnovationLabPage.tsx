'use client';

import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useReveal } from '../lib/hooks';
import { Building2, Activity, Cpu, TrendingUp, Network, Beaker, Brain, ArrowRight, Zap } from 'lucide-react';
import { useRoute } from '../lib/router';

const TRACKS = [
  {
    industry: 'Real Estate',
    icon: Building2,
    color: 'brand',
    problems: ['Slow Sales Cycles', 'Manual Vendor Management', 'Poor Operational Visibility'],
    solutions: ['Lead Prediction', 'Vendor Intelligence', 'Service Automation', 'Resident AI Assistant'],
  },
  {
    industry: 'Healthcare',
    icon: Activity,
    color: 'success',
    problems: ['Administrative Burden', 'Compliance Complexity'],
    solutions: ['Document Intelligence', 'Workflow Automation', 'Compliance Monitoring'],
  },
  {
    industry: 'Manufacturing',
    icon: Cpu,
    color: 'brand',
    problems: ['Procurement Delays', 'Vendor Inefficiencies'],
    solutions: ['Predictive Procurement', 'Supplier Intelligence', 'Operational Analytics'],
  },
  {
    industry: 'Financial Services',
    icon: TrendingUp,
    color: 'accent',
    problems: ['Regulatory Complexity', 'Operational Risk'],
    solutions: ['Risk Intelligence', 'Audit Automation', 'Compliance Workflows'],
  },
  {
    industry: 'Smart Communities',
    icon: Network,
    color: 'brand',
    problems: ['Resident Complaints', 'Manual Service Management'],
    solutions: ['Resident Copilot', 'Visitor Intelligence', 'AI Maintenance Operations'],
  },
];

export default function InnovationLabPage() {
  const { navigate } = useRoute();
  return (
    <>
      <PageHero
        eyebrow="AI Innovation Lab"
        title="Solving real business"
        highlight="problems with AI."
        description="The Requanto Innovation Lab translates industry pain points into production-ready AI solutions — grounded in workflows, governed by design, measured by outcomes."
        ctas={[
          { label: 'Request Lab Briefing', to: '/contact#expert', variant: 'accent' },
          { label: 'Assess AI Readiness', to: '/assessment', variant: 'outline' },
        ]}
      />

      <section className="section">
        <div className="container-rq">
          <SectionHeading
            align="left"
            eyebrow="Innovation Tracks"
            title={<>Five labs. <span className="gradient-text">One AI methodology.</span></>}
            description="Each lab pairs industry practitioners with AI engineers to ship outcomes — not just experiments."
          />
          <div className="mt-14 space-y-8">
            {TRACKS.map((track, i) => (
              <LabTrack key={track.industry} track={track} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section">
        <div className="container-rq">
          <SectionHeading
            align="left"
            eyebrow="Lab Methodology"
            title={<>From hypothesis to <span className="gradient-text">production AI.</span></>}
            description="Our repeatable approach ensures every AI solution is grounded, governed and measured."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Beaker, title: 'Frame', desc: 'Translate pain points into a clear, measurable AI hypothesis.' },
              { icon: Brain, title: 'Model', desc: 'Rapid prototypes grounded in your workflows and data.' },
              { icon: Zap, title: 'Ship', desc: 'Move from prototype to governed, production AI on the platform.' },
              { icon: TrendingUp, title: 'Measure', desc: 'Track business outcomes and continuously improve.' },
            ].map((m, i) => {
              const { ref, visible } = useReveal();
              const Icon = m.icon;
              return (
                <div key={m.title} ref={ref} className={`reveal reveal-delay-${i + 1} ${visible ? 'is-visible' : ''}`}>
                  <div className="relative h-full rounded-2xl border border-ink-200/70 bg-white p-6 shadow-premium">
                    <span className="absolute right-5 top-5 text-3xl font-bold text-ink-100">{i + 1}</span>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-900 text-accent">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-ink-900">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{m.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-left">
            <button onClick={() => navigate('/contact#expert')} className="btn-primary">
              Request a lab briefing <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function LabTrack({ track, index }: { track: typeof TRACKS[number]; index: number }) {
  const { ref, visible } = useReveal();
  const Icon = track.icon;
  const accent = track.color === 'accent' ? 'bg-accent/20 text-ink-900' : track.color === 'success' ? 'bg-success/10 text-success' : 'bg-brand-50 text-brand-600';
  return (
    <div ref={ref} className={`reveal reveal-delay-${(index % 3) + 1} ${visible ? 'is-visible' : ''}`}>
      <div className="overflow-hidden rounded-2xl border border-ink-200/70 bg-white shadow-premiumLg">
        <div className="grid lg:grid-cols-12">
          <div className="border-b border-ink-100 bg-section/50 p-6 lg:col-span-3 lg:border-r lg:border-b-0">
            <span className={`grid h-12 w-12 place-items-center rounded-xl ${accent}`}>
              <Icon size={22} />
            </span>
            <h3 className="mt-4 text-lg font-bold text-ink-900">AI for {track.industry}</h3>
            <div className="mt-1 text-xs text-ink-500">Innovation track</div>
          </div>
          <div className="grid gap-6 p-6 sm:grid-cols-2 lg:col-span-9">
            <div>
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-danger">Problems</div>
              <ul className="space-y-2">
                {track.problems.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-ink-600">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-danger" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-success">AI Solutions</div>
              <ul className="space-y-2">
                {track.solutions.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm font-medium text-ink-800">
                    <Zap size={13} className="mt-0.5 text-success" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
