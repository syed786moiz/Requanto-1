'use client';

import { Logo } from './Logo';
import { useRoute } from '../lib/router';
import { PRODUCTS, SERVICES, INDUSTRIES } from '../data/content';
import { Linkedin, Youtube, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const { navigate } = useRoute();
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div className="absolute inset-0 dot-bg opacity-[0.07]" />
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-600/15 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-rq relative py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
              An Enterprise AI Transformation Company helping organizations modernize operations through AI-powered platforms, workflow automation, cybersecurity, and executive advisory.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-ink-300 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-ink-300 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition-colors">
                <Youtube size={16} />
              </a>
              <button onClick={() => navigate('/contact')} aria-label="Email" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-ink-300 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition-colors">
                <Mail size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <FooterCol title="Products" links={PRODUCTS.slice(0, 6).map((p) => ({ label: p.name, to: `/products#${p.id}` }))} onNav={navigate} />
            <FooterCol title="Services" links={SERVICES.slice(0, 6).map((s) => ({ label: s.name, to: `/services#${s.id}` }))} onNav={navigate} />
            <FooterCol title="Industries" links={INDUSTRIES.slice(0, 6).map((i) => ({ label: i.name, to: `/industries#${i.id}` }))} onNav={navigate} />
            <FooterCol
              title="Company"
              links={[
                { label: 'AI Innovation Lab', to: '/innovation-lab' },
                { label: 'AI Agents', to: '/agents' },
                { label: 'Resources', to: '/resources' },
                { label: 'About', to: '/about' },
                { label: 'Contact', to: '/contact' },
                { label: 'AI Readiness Assessment', to: '/assessment' },
              ]}
              onNav={navigate}
            />
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
          <div className="flex items-start gap-2 text-sm text-ink-400">
            <MapPin size={15} className="mt-0.5 text-ink-500" />
            <span>Global delivery · North America · EMEA · APAC</span>
          </div>
          <div className="text-center text-xs text-ink-500">© {new Date().getFullYear()} Requanto Technologies. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-start gap-4 sm:justify-end text-xs text-ink-400">
            <button onClick={() => navigate('/about#legal')} className="hover:text-white transition-colors">Legal</button>
            <button onClick={() => navigate('/about#privacy')} className="hover:text-white transition-colors">Privacy</button>
            <button onClick={() => navigate('/about#terms')} className="hover:text-white transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  onNav,
}: {
  title: string;
  links: { label: string; to: string }[];
  onNav: (to: string) => void;
}) {
  return (
    <div>
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">{title}</h4>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <button
              onClick={() => onNav(l.to)}
              className="text-left text-sm text-ink-300 transition-colors hover:text-white"
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
