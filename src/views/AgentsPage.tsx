'use client';

import { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useReveal } from '../lib/hooks';
import { AGENTS, type Agent } from '../data/content';
import { ArrowRight, Sparkles, CheckCircle2, Bot, MessageSquare } from 'lucide-react';
import { useRoute } from '../lib/router';

const CATEGORIES = ['All', 'Revenue', 'Operations', 'GRC', 'IT', 'Real Estate', 'Security', 'Productivity', 'Finance'];

export default function AgentsPage() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState<Agent | null>(null);
  const { navigate } = useRoute();

  const filtered = active === 'All' ? AGENTS : AGENTS.filter((a) => a.category === active);

  return (
    <>
      <PageHero
        eyebrow="AI Agents Marketplace"
        title="Specialized agents for"
        highlight="every workflow."
        description="Deploy pre-built AI agents for sales, compliance, procurement, security, finance and operations — or compose your own with Requanto Studio."
        ctas={[
          { label: 'Request Demo', to: '/contact#demo', variant: 'accent' },
          { label: 'Build with Studio', to: '/products#studio', variant: 'outline' },
        ]}
      />

      <section className="section">
        <div className="container-rq">
          <SectionHeading
            align="left"
            eyebrow="Agent Catalog"
            title={<>Twelve agents. <span className="gradient-text">One platform.</span></>}
            description="Filter by function and click any agent to explore its tasks, integrations and outcomes."
          />

          <div className="mt-8 flex flex-wrap justify-start gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  active === c
                    ? 'bg-ink-900 text-white shadow-premium'
                    : 'border border-ink-200 bg-white text-ink-600 hover:border-ink-300 hover:text-ink-900'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((a, i) => (
              <AgentCard key={a.name} agent={a} index={i} onSelect={() => setSelected(a)} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 text-left text-ink-500">No agents in this category.</div>
          )}
        </div>
      </section>

      <section className="section bg-section">
        <div className="container-rq">
          <div className="relative overflow-hidden rounded-3xl border border-ink-200/70 bg-white p-6 shadow-premiumLg sm:p-10">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="eyebrow">
                  <Sparkles size={12} className="text-accent-dark" /> Compose your own
                </span>
                <h2 className="mt-4 text-display-lg text-balance text-ink-900">
                  Build custom agents with <span className="gradient-text">Requanto Studio.</span>
                </h2>
                <p className="mt-4 text-ink-600">
                  Don't see your agent? Compose one visually — define triggers, tools, guardrails and approvals with the low-code studio.
                </p>
                <button onClick={() => navigate('/products#studio')} className="btn-primary mt-6">
                  Open Requanto Studio <ArrowRight size={15} />
                </button>
              </div>
              <div className="rounded-2xl border border-ink-200/70 bg-ink-950 p-5 text-white shadow-premiumLg">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                  <Bot size={16} className="text-accent" />
                  <span className="text-sm font-semibold">Agent Builder</span>
                  <span className="ml-auto rounded-full bg-success/20 px-2 py-0.5 text-[10px] font-semibold text-success">Live</span>
                </div>
                <div className="mt-4 space-y-2.5">
                  {['Define trigger', 'Select tools & data', 'Set guardrails', 'Approval routing', 'Deploy & monitor'].map((s, i) => (
                    <div key={s} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5">
                      <span className="grid h-6 w-6 place-items-center rounded-md bg-accent/20 text-[10px] font-bold text-accent">{i + 1}</span>
                      <span className="flex-1 text-xs text-ink-200">{s}</span>
                      <CheckCircle2 size={13} className="text-success" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selected && <AgentDetail agent={selected} onClose={() => setSelected(null)} onAction={() => navigate('/contact#demo')} />}
    </>
  );
}

function AgentCard({ agent, index, onSelect }: { agent: Agent; index: number; onSelect: () => void }) {
  const { ref, visible } = useReveal();
  const Icon = agent.icon;
  return (
    <div ref={ref} className={`reveal reveal-delay-${(index % 4) + 1} ${visible ? 'is-visible' : ''}`}>
      <button
        onClick={onSelect}
        className="group flex h-full w-full flex-col items-start rounded-2xl border border-ink-200/70 bg-white p-5 text-left shadow-premium transition-all hover:-translate-y-1.5 hover:shadow-premiumLg hover:border-brand-200"
      >
        <div className="flex w-full items-center justify-between">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-900 text-accent transition-transform group-hover:scale-110">
            <Icon size={20} />
          </span>
          <span className="rounded-full bg-section px-2.5 py-1 text-[10px] font-semibold text-ink-500">{agent.category}</span>
        </div>
        <h3 className="mt-4 text-base font-bold text-ink-900">{agent.name}</h3>
        <p className="mt-1 text-sm text-ink-600">{agent.role}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {agent.tasks.map((t) => (
            <span key={t} className="rounded-md bg-brand-50/60 px-2 py-0.5 text-[11px] font-medium text-brand-700">{t}</span>
          ))}
        </div>
        <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-transform group-hover:translate-x-1">
          View details <ArrowRight size={14} />
        </span>
      </button>
    </div>
  );
}

function AgentDetail({ agent, onClose, onAction }: { agent: Agent; onClose: () => void; onAction: () => void }) {
  const Icon = agent.icon;
  return (
    <div className="fixed inset-0 z-[110] flex items-end justify-center p-4 sm:items-center sm:p-6">
      <div className="absolute inset-0 bg-ink-950/50 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="relative w-full max-w-lg animate-scale-in rounded-2xl border border-ink-200/80 bg-white shadow-premiumLg">
        <div className="relative overflow-hidden rounded-t-2xl bg-ink-950 px-6 py-5 text-white">
          <div className="absolute inset-0 dot-bg opacity-[0.07]" />
          <div className="relative flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
              <Icon size={22} className="text-accent" />
            </span>
            <div>
              <h3 className="text-lg font-bold">{agent.name}</h3>
              <p className="text-xs text-ink-300">{agent.role}</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-500">Capabilities</div>
          <div className="grid gap-2">
            {agent.tasks.map((t) => (
              <div key={t} className="flex items-center gap-2 rounded-lg border border-ink-100 bg-section/50 px-3 py-2.5">
                <CheckCircle2 size={14} className="text-success" />
                <span className="text-sm font-medium text-ink-700">{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-2 rounded-xl border border-ink-200/70 bg-accent/10 p-4">
            <div className="flex items-center justify-between text-xs">
              <span className="text-ink-500">Category</span>
              <span className="font-semibold text-ink-900">{agent.category}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-ink-500">Deployment</span>
              <span className="font-semibold text-ink-900">Cloud · Private</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-ink-500">Governance</span>
              <span className="font-semibold text-success">Built-in</span>
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            <button onClick={onAction} className="btn-accent flex-1">
              <MessageSquare size={15} /> Request this agent
            </button>
            <button onClick={onClose} className="btn-outline">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
