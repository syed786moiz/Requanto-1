'use client';

import { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useReveal } from '../lib/hooks';
import { CASE_STUDIES } from '../data/content';
import { ArrowRight, FileText, Video, BookOpen, Newspaper, Play, Download, TrendingUp, Sparkles } from 'lucide-react';
import { useRoute } from '../lib/router';

const TABS = [
  { id: 'blog', label: 'Blogs & Guides', icon: BookOpen },
  { id: 'cases', label: 'Case Studies', icon: FileText },
  { id: 'whitepapers', label: 'Whitepapers', icon: Newspaper },
  { id: 'reports', label: 'Industry Reports', icon: TrendingUp },
  { id: 'videos', label: 'Videos', icon: Video },
  { id: 'webinars', label: 'Webinars', icon: Play },
  { id: 'research', label: 'Research', icon: Sparkles },
];

const RESOURCES = [
  { type: 'Blog', category: 'AI Strategy', title: 'The AI-Native Enterprise Playbook', excerpt: 'How leading organizations rewire operations around AI — not bolt it on.', read: '8 min', icon: BookOpen },
  { type: 'Guide', category: 'Automation', title: 'Low-Code Workflow Automation for Enterprises', excerpt: 'A practical guide to orchestrating processes without engineering debt.', read: '12 min', icon: BookOpen },
  { type: 'Whitepaper', category: 'Cybersecurity', title: 'The Virtual CISO Reference Architecture', excerpt: 'Building a modern, board-ready security operating model.', read: '20 min', icon: Newspaper },
  { type: 'Report', category: 'Finance', title: 'AI in Financial Services: 2026 Outlook', excerpt: 'Trends in risk, AML, KYC and audit automation across banking.', read: '15 min', icon: TrendingUp },
  { type: 'Video', category: 'Platform', title: 'Inside the Requanto Platform Ecosystem', excerpt: 'A walkthrough of the connected AI platform architecture.', read: '6 min', icon: Play },
  { type: 'Webinar', category: 'AI Readiness', title: 'From Pilot to Production AI', excerpt: 'On-demand webinar on scaling AI with governance.', read: '45 min', icon: Video },
];

export default function ResourcesPage() {
  const [tab, setTab] = useState('blog');
  const { navigate } = useRoute();
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Insights, playbooks and"
        highlight="field research."
        description="Blogs, guides, whitepapers, industry reports, videos, webinars, case studies and research — grounded in real enterprise transformation."
        ctas={[{ label: 'Talk to an Expert', to: '/contact#expert', variant: 'outline' }]}
      />

      <section className="section">
        <div className="container-rq">
          <div className="flex flex-wrap justify-start gap-2" id="blog">
            {TABS.map((t) => (
              <button
                key={t.id}
                id={t.id}
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all scroll-mt-24 ${
                  tab === t.id
                    ? 'bg-ink-900 text-white shadow-premium'
                    : 'border border-ink-200 bg-white text-ink-600 hover:border-ink-300 hover:text-ink-900'
                }`}
              >
                <t.icon size={14} /> {t.label}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((r, i) => (
              <ResourceCard key={r.title} resource={r} index={i} onAction={() => navigate('/contact#expert')} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section" id="cases">
        <div className="container-rq">
          <SectionHeading
            align="left"
            eyebrow="Case Studies"
            title={<>Outcomes across <span className="gradient-text">six industries.</span></>}
            description="Real transformation results from real Requanto engagements."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((c, i) => (
              <CaseStudyCard key={c.title} cs={c} index={i} onAction={() => navigate('/contact#consultation')} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ResourceCard({ resource, index, onAction }: { resource: typeof RESOURCES[number]; index: number; onAction: () => void }) {
  const { ref, visible } = useReveal();
  const Icon = resource.icon;
  return (
    <div ref={ref} className={`reveal reveal-delay-${(index % 3) + 1} ${visible ? 'is-visible' : ''}`}>
      <button
        onClick={onAction}
        className="group flex h-full w-full flex-col items-start rounded-2xl border border-ink-200/70 bg-white p-5 text-left shadow-premium transition-all hover:-translate-y-1.5 hover:shadow-premiumLg"
      >
        <div className="flex w-full items-center justify-between">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-transform group-hover:scale-110">
            <Icon size={20} />
          </span>
          <span className="rounded-full bg-section px-2.5 py-1 text-[10px] font-semibold text-ink-500">{resource.type}</span>
        </div>
        <div className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-brand-600">{resource.category}</div>
        <h3 className="mt-1 text-base font-bold text-ink-900 leading-snug">{resource.title}</h3>
        <p className="mt-2 text-sm text-ink-600">{resource.excerpt}</p>
        <div className="mt-5 flex w-full items-center justify-between">
          <span className="text-xs text-ink-500">{resource.read} read</span>
          <span className="flex items-center gap-1 text-xs font-semibold text-brand-600 transition-transform group-hover:translate-x-1">
            {resource.type === 'Video' || resource.type === 'Webinar' ? <Play size={12} /> : <Download size={12} />}
            {resource.type === 'Video' || resource.type === 'Webinar' ? 'Watch' : 'Read'}
          </span>
        </div>
      </button>
    </div>
  );
}

function CaseStudyCard({ cs, index, onAction }: { cs: typeof CASE_STUDIES[number]; index: number; onAction: () => void }) {
  const { ref, visible } = useReveal();
  const Icon = cs.icon;
  return (
    <div ref={ref} className={`reveal reveal-delay-${(index % 3) + 1} ${visible ? 'is-visible' : ''}`}>
      <button
        onClick={onAction}
        className="group flex h-full w-full flex-col items-start rounded-2xl border border-ink-200/70 bg-white p-5 text-left shadow-premium transition-all hover:-translate-y-1.5 hover:shadow-premiumLg"
      >
        <div className="flex w-full items-center justify-between">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-900 text-accent">
            <Icon size={20} />
          </span>
          <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold text-brand-700">{cs.industry}</span>
        </div>
        <h3 className="mt-4 text-base font-bold text-ink-900 leading-snug">{cs.title}</h3>
        <p className="mt-2 text-sm text-ink-600">{cs.outcome}</p>
        <div className="mt-4 grid w-full grid-cols-3 gap-2 border-t border-ink-100 pt-4">
          {cs.metrics.map((m) => (
            <div key={m.label} className="text-left">
              <div className="text-base font-bold gradient-text">{m.value}</div>
              <div className="mt-0.5 text-[10px] text-ink-500">{m.label}</div>
            </div>
          ))}
        </div>
        <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-600 transition-transform group-hover:translate-x-1">
          Read case study <ArrowRight size={14} />
        </span>
      </button>
    </div>
  );
}
