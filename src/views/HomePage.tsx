'use client';

import { ArrowRight, CalendarClock, Sparkles, ShieldCheck, Boxes, Briefcase, Workflow, Network, Cpu, Activity, Building2, Brain, CheckCircle2, TrendingUp, Zap } from 'lucide-react';
import { useRoute } from '../lib/router';
import { useReveal } from '../lib/hooks';
import { HeroVisual } from '../components/HeroVisual';
import { AnimatedMetrics } from '../components/AnimatedMetrics';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PLATFORMS, INDUSTRIES_PLATFORM, AGENTS } from '../data/content';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <WhatWeDo />
      <BusinessAreas />
      <PlatformEcosystem />
      <InnovationLab />
      <AgentsPreview />
      <FinalCTA />
    </>
  );
}

function Hero() {
  const { navigate } = useRoute();
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="hero-mesh pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="container-rq relative py-5 lg:py-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-50/60 px-3 py-1 text-xs font-semibold text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulseGlow" />
              Enterprise AI Platform
            </span>

            <h1 className="mt-5 max-w-lg text-4xl font-bold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.25rem]">
              Build <span className="hero-gradient-text">AI-native</span> enterprises that scale.
            </h1>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button onClick={() => navigate('/contact#consultation')} className="btn-accent px-6 py-2.5">
                <CalendarClock size={16} /> Get Started
              </button>
              <button onClick={() => navigate('/solutions')} className="btn-outline px-6 py-2.5">
                Explore Solutions <ArrowRight size={16} />
              </button>
            </div>

            <div className="mt-8 flex gap-8 border-t border-ink-100 pt-6">
              {[
                { value: '100+', label: 'Workflows' },
                { value: '50+', label: 'AI use cases' },
                { value: '24/7', label: 'Support' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-bold text-ink-900">{s.value}</div>
                  <div className="mt-0.5 text-xs text-ink-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end lg:pl-6">
            <HeroVisual />
          </div>
        </div>
      </div>

      <div className="border-t border-ink-100 bg-section/50 py-4">
        <div className="container-rq">
          <div className="mask-fade-r overflow-hidden">
            <div className="flex w-max gap-10 animate-marquee">
              {[...PLATFORMS, ...PLATFORMS].map((p, i) => (
                <span key={`${p}-${i}`} className="whitespace-nowrap text-sm font-medium text-ink-400">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const { ref, visible } = useReveal();
  return (
    <section className="section-home">
      <div className="container-rq">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="text-left">
            <span className="eyebrow">
              <CheckCircle2 size={12} className="text-success" />
              Trusted Enterprise Transformation Partner
            </span>
          </div>
          <div className="mt-6">
            <AnimatedMetrics
              metrics={[
                { value: 100, suffix: '+', label: 'Enterprise Workflows' },
                { value: 50, suffix: '+', label: 'AI Use Cases' },
                { value: 10, suffix: '+', label: 'Industry Solutions' },
                { value: 24, suffix: '/7', label: 'Global Delivery' },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const cards = [
    { icon: Boxes, title: 'AI Enterprise SaaS Platforms', desc: 'Vertical AI platforms for real estate, operations, finance and GRC — designed for scale and outcome.', to: '/products', accent: 'brand' },
    { icon: Workflow, title: 'AI Low-Code / No-Code Platform', desc: 'Drag-and-drop workflows, dynamic forms, rule engines and AI automation — without engineering debt.', to: '/products#studio', accent: 'accent' },
    { icon: ShieldCheck, title: 'Cybersecurity & GRC', desc: 'Assessments, architecture, compliance and third-party risk — guided by a virtual CISO.', to: '/services#vciso', accent: 'brand' },
    { icon: Briefcase, title: 'Technology Advisory Services', desc: 'Virtual CISO, Virtual CTO, managed IT, cloud and AI adoption — outcome-driven leadership.', to: '/services', accent: 'accent' },
  ];

  return (
    <section className="section-home bg-section">
      <div className="container-rq">
        <SectionHeading
          align="left"
          eyebrow="What We Do"
          title={<>One Partner. <span className="gradient-text">Multiple AI Solutions.</span></>}
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((c, i) => (
            <PillarCard key={c.title} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({ icon: Icon, title, desc, to, accent, index }: any) {
  const { ref, visible } = useReveal();
  const { navigate } = useRoute();
  return (
    <div
      ref={ref}
      className={`group reveal reveal-delay-${index + 1} ${visible ? 'is-visible' : ''}`}
    >
      <button
        onClick={() => navigate(to)}
        className="flex h-full w-full flex-col items-start rounded-2xl border border-ink-200/70 bg-white p-6 text-left shadow-premium transition-all duration-300 hover:-translate-y-1.5 hover:shadow-premiumLg hover:border-brand-200"
      >
        <span className={`grid h-12 w-12 place-items-center rounded-xl ${accent === 'brand' ? 'bg-brand-50 text-brand-600' : 'bg-accent/20 text-ink-900'} transition-transform group-hover:scale-110`}>
          <Icon size={22} />
        </span>
        <h3 className="mt-5 text-lg font-bold text-ink-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">{desc}</p>
        <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-transform group-hover:translate-x-1">
          Explore <ArrowRight size={14} />
        </span>
      </button>
    </div>
  );
}

function BusinessAreas() {
  const areas = [
    {
      icon: Boxes, title: 'AI Enterprise SaaS Platforms', tag: 'Platforms',
      items: ['AI Real Estate Platforms', 'Enterprise Workflow Platforms', 'Community Operations', 'Vendor Intelligence', 'Procurement Automation', 'Operational Analytics'],
    },
    {
      icon: Workflow, title: 'AI Low-Code Platform', tag: 'Automation',
      items: ['Drag and Drop Workflows', 'Dynamic Forms', 'Business Rules Engine', 'AI Workflow Automation', 'Approval Management', 'Process Orchestration'],
    },
    {
      icon: ShieldCheck, title: 'Cybersecurity & GRC', tag: 'Security',
      items: ['Cybersecurity Assessments', 'Governance Risk & Compliance', 'Security Architecture Reviews', 'Security Program Development', 'Third Party Risk Management', 'Compliance Readiness'],
    },
    {
      icon: Briefcase, title: 'Virtual CISO', tag: 'Advisory',
      items: ['Security Strategy', 'Roadmaps', 'Board Reporting', 'Compliance Programs', 'Vendor Risk Reviews', 'Incident Readiness'],
    },
    {
      icon: Cpu, title: 'Virtual CTO', tag: 'Advisory',
      items: ['Technology Strategy', 'Cloud Transformation', 'AI Adoption Roadmap', 'Product Architecture', 'Enterprise Modernization', 'Engineering Governance'],
    },
    {
      icon: Network, title: 'Managed IT Services', tag: 'Operations',
      items: ['IT Strategy', 'Cloud Consulting', 'Process Automation', 'Technology Assessments', 'Application Modernization', 'Digital Transformation'],
    },
  ];

  return (
    <section className="section-home">
      <div className="container-rq">
        <SectionHeading
          align="left"
          eyebrow="Business Areas"
          title={<>Connected business areas, <span className="gradient-text">one AI backbone.</span></>}
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {areas.map((a, i) => (
            <BusinessAreaCard key={a.title} {...a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessAreaCard({ icon: Icon, title, tag, items, index }: any) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal reveal-delay-${index % 3 + 1} ${visible ? 'is-visible' : ''}`}>
      <div className="group h-full rounded-2xl border border-ink-200/70 bg-white p-6 shadow-premium transition-all hover:shadow-premiumLg hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-900 text-accent transition-transform group-hover:scale-110">
            <Icon size={20} />
          </span>
          <span className="rounded-full bg-section px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">{tag}</span>
        </div>
        <h3 className="mt-5 text-base font-bold text-ink-900">{title}</h3>
        <ul className="mt-4 space-y-2">
          {items.map((item: string) => (
            <li key={item} className="flex items-start gap-2 text-sm text-ink-600">
              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-success" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PlatformEcosystem() {
  const { ref, visible } = useReveal();
  return (
    <section className="section-home relative overflow-hidden bg-[#2E2E38] text-white">
      <div className="absolute inset-0 dot-bg opacity-[0.06]" />
      <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="container-rq relative">
        <SectionHeading
          align="left"
          theme="dark"
          eyebrow="Platform Ecosystem"
          title={<>A connected <span className="gradient-text-accent">architecture</span> across industries.</>}
        />

        <div ref={ref} className={`reveal mt-8 ${visible ? 'is-visible' : ''}`}>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-premiumLg backdrop-blur sm:p-6">
            <div className="grid gap-5">
              <div className="grid place-items-center">
                <EcosystemDiagram />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">Core Layer</div>
                  <div className="mt-2 text-sm font-semibold text-white">Requanto Platform Hub</div>
                  <p className="mt-1 text-sm text-white/70">Central governance, AI orchestration, and operational visibility.</p>
                </div>
                <div className="rounded-2xl border border-accent/30 bg-accent/10 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">Connected Outcomes</div>
                  <div className="mt-2 text-sm font-semibold text-white">Industry + Platform Synchronization</div>
                  <p className="mt-1 text-sm text-white/75">Signals flow across products and industries for faster decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcosystemDiagram() {
  const platformCount = PLATFORMS.length;
  return (
    <div className="relative aspect-square w-full max-w-[min(640px,90vw)]">
      <div className="absolute inset-0 grid place-items-center">
        <div className="absolute h-full w-full rounded-full border border-white/10" />
        <div className="absolute h-[72%] w-[72%] rounded-full border border-white/10" />
        <div className="absolute h-[44%] w-[44%] rounded-full border border-white/10" />
        <div className="absolute h-[72%] w-[72%] rounded-full border border-dashed border-accent/30 animate-[orbit-slow_70s_linear_infinite]" />
      </div>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none" aria-hidden>
        {PLATFORMS.map((_, i) => {
          const radius = 50;
          const angle = (i / platformCount) * 360;
          const x = 50 + (radius * 0.5) * Math.cos((angle * Math.PI) / 180);
          const y = 50 + (radius * 0.5) * Math.sin((angle * Math.PI) / 180);
          return <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="rgba(255,230,0,0.18)" strokeWidth="0.3" strokeDasharray="1 1.5" />;
        })}
        {INDUSTRIES_PLATFORM.map((_, i) => {
          const radius = 50;
          const angle = (i / INDUSTRIES_PLATFORM.length) * 360;
          const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
          const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
          return <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="rgba(255,230,0,0.12)" strokeWidth="0.3" />;
        })}
      </svg>

      {/* center hub */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative grid h-28 w-28 place-items-center rounded-full bg-ink-900 text-white shadow-premiumLg ring-1 ring-accent/30">
          <div className="absolute -inset-3 rounded-full bg-accent/20 blur-xl animate-pulseGlow" />
          <div className="relative flex flex-col items-center">
            <Network size={22} className="text-accent" />
            <span className="mt-1 text-xs font-bold">Requanto</span>
            <span className="text-[9px] uppercase tracking-[0.16em] text-ink-400">Technologies</span>
          </div>
        </div>
      </div>

      {/* platforms ring */}
      {PLATFORMS.map((p, i) => {
        const radius = 50;
        const angle = (i / platformCount) * 360 - 90;
        const x = 50 + (radius * 0.5) * Math.cos((angle * Math.PI) / 180);
        const y = 50 + (radius * 0.5) * Math.sin((angle * Math.PI) / 180);
        return (
          <div key={p} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
            <div className="flex max-w-[5.5rem] items-center gap-1 rounded-lg border border-white/15 bg-white/[0.06] px-1.5 py-1 text-[8px] font-medium leading-tight text-white backdrop-blur-sm sm:max-w-none sm:gap-1.5 sm:px-2.5 sm:py-1.5 sm:text-[10px]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="truncate">{p}</span>
            </div>
          </div>
        );
      })}

      {/* industries ring */}
      {INDUSTRIES_PLATFORM.map((ind, i) => {
        const angle = (i / INDUSTRIES_PLATFORM.length) * 360 - 90;
        const x = 50 + 50 * Math.cos((angle * Math.PI) / 180);
        const y = 50 + 50 * Math.sin((angle * Math.PI) / 180);
        return (
          <div key={ind} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
            <div className="rounded-full border border-accent/30 bg-ink-900/60 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-accent backdrop-blur-sm">
              {ind}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function InnovationLab() {
  const labs = [
    { industry: 'Real Estate', icon: Building2, problems: ['Slow Sales Cycles', 'Manual Vendor Management', 'Poor Operational Visibility'], solutions: ['Lead Prediction', 'Vendor Intelligence', 'Service Automation', 'Resident AI Assistant'] },
    { industry: 'Healthcare', icon: Activity, problems: ['Administrative Burden', 'Compliance Complexity'], solutions: ['Document Intelligence', 'Workflow Automation', 'Compliance Monitoring'] },
    { industry: 'Manufacturing', icon: Cpu, problems: ['Procurement Delays', 'Vendor Inefficiencies'], solutions: ['Predictive Procurement', 'Supplier Intelligence', 'Operational Analytics'] },
    { industry: 'Financial Services', icon: TrendingUp, problems: ['Regulatory Complexity', 'Operational Risk'], solutions: ['Risk Intelligence', 'Audit Automation', 'Compliance Workflows'] },
    { industry: 'Smart Communities', icon: Network, problems: ['Resident Complaints', 'Manual Service Management'], solutions: ['Resident Copilot', 'Visitor Intelligence', 'AI Maintenance Ops'] },
  ];

  const { navigate } = useRoute();

  return (
    <section className="section-home bg-section">
      <div className="container-rq">
        <SectionHeading
          align="left"
          eyebrow="AI Innovation Lab"
          title={<>Solving real <span className="gradient-text">business problems</span> with AI.</>}
          cta={{ label: 'Explore the Lab', to: '/innovation-lab' }}
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {labs.map((l, i) => (
            <InnovationCard key={l.industry} {...l} index={i} />
          ))}
          <button
            onClick={() => navigate('/innovation-lab')}
            className="group flex flex-col items-start justify-center rounded-2xl border-2 border-dashed border-ink-300 bg-white/50 p-6 text-left transition-all hover:border-brand-300 hover:bg-white"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-900 text-accent">
              <Sparkles size={20} />
            </span>
            <h3 className="mt-4 text-lg font-bold text-ink-900">See all innovation tracks</h3>
            <p className="mt-1 text-sm text-ink-600">Explore every industry AI solution from our lab.</p>
            <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-600">
              Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function InnovationCard({ industry, icon: Icon, problems, solutions, index }: any) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal reveal-delay-${index % 2 + 1} ${visible ? 'is-visible' : ''}`}>
      <div className="group h-full rounded-2xl border border-ink-200/70 bg-white p-6 shadow-premium transition-all hover:shadow-premiumLg">
        <div className="flex items-center gap-3 border-b border-ink-100 pb-4">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
            <Icon size={20} />
          </span>
          <h3 className="text-lg font-bold text-ink-900">AI for {industry}</h3>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-danger">Problems</div>
            <ul className="space-y-1.5">
              {problems.map((p: string) => (
                <li key={p} className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-danger" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-success">AI Solutions</div>
            <ul className="space-y-1.5">
              {solutions.map((s: string) => (
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
  );
}

function AgentsPreview() {
  const preview = AGENTS.slice(0, 6);
  const { navigate } = useRoute();
  return (
    <section className="section-home">
      <div className="container-rq">
        <SectionHeading
          align="left"
          eyebrow="AI Agents Marketplace"
          title={<>A marketplace of <span className="gradient-text">specialized AI agents.</span></>}
          cta={{ label: 'Browse all agents', to: '/agents' }}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((a, i) => (
            <AgentPreviewCard key={a.name} agent={a} index={i} onSelect={() => navigate('/agents')} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AgentPreviewCard({
  agent,
  index,
  onSelect,
}: {
  agent: (typeof AGENTS)[number];
  index: number;
  onSelect: () => void;
}) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal reveal-delay-${index % 3 + 1} ${visible ? 'is-visible' : ''}`}>
      <button onClick={onSelect} className="group flex h-full w-full flex-col items-start rounded-2xl border border-ink-200/70 bg-white p-5 text-left shadow-premium transition-all hover:-translate-y-1 hover:shadow-premiumLg">
        <div className="flex w-full items-center justify-between">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink-900 text-accent">
            <agent.icon size={18} />
          </span>
          <span className="rounded-full bg-section px-2.5 py-1 text-[10px] font-semibold text-ink-500">{agent.category}</span>
        </div>
        <h3 className="mt-4 text-base font-bold text-ink-900">{agent.name}</h3>
        <p className="mt-1 text-sm text-ink-600">{agent.role}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {agent.tasks.slice(0, 2).map((t) => (
            <span key={t} className="rounded-md bg-brand-50 px-2 py-0.5 text-[11px] font-medium text-brand-700">{t}</span>
          ))}
        </div>
      </button>
    </div>
  );
}

function FinalCTA() {
  const { navigate } = useRoute();
  const { ref, visible } = useReveal();
  return (
    <section className="section-home">
      <div className="container-rq">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <div className="absolute inset-0 dot-bg opacity-[0.07]" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative max-w-2xl text-left">
              <span className="eyebrow-light">
                <Sparkles size={12} className="text-accent" /> Start your AI transformation
              </span>
              <h2 className="mt-4 text-display-lg text-balance">
                Become an <span className="gradient-text-accent">AI-native enterprise.</span>
              </h2>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button onClick={() => navigate('/contact#consultation')} className="btn-accent">
                  <CalendarClock size={16} /> Schedule Strategy Session
                </button>
                <button onClick={() => navigate('/assessment')} className="btn-outline border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40">
                  <Brain size={16} /> Assess Your AI Readiness
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
