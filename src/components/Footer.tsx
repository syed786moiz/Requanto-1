'use client';

import { Logo } from './Logo';
import { useRoute } from '../lib/router';
import { PRODUCTS, SERVICES, INDUSTRIES } from '../data/content';
import { Linkedin, Youtube, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const { navigate } = useRoute();
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#1a4a3e] via-[#163F35] to-[#0f2d26] text-white/80">
      <div className="absolute inset-0 dot-bg opacity-[0.06]" />
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#FF6B00]/12 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#3DD68C]/8 blur-3xl" />

      <div className="container-rq relative py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              An Enterprise AI Transformation Company helping organizations modernize operations through AI-powered platforms, workflow automation, cybersecurity, and executive advisory.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-white/75 ring-1 ring-white/15 transition-colors hover:bg-white/15 hover:text-white">
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-white/75 ring-1 ring-white/15 transition-colors hover:bg-white/15 hover:text-white">
                <Youtube size={16} />
              </a>
              <button onClick={() => navigate('/contact')} aria-label="Email" className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-white/75 ring-1 ring-white/15 transition-colors hover:bg-white/15 hover:text-white">
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

        <div className="mt-12 grid gap-4 border-t border-white/15 pt-8 sm:grid-cols-3">
          <div className="flex items-start gap-2 text-sm text-white/60">
            <MapPin size={15} className="mt-0.5 text-[#FF6B00]" />
            <span>Global delivery · North America · EMEA · APAC</span>
          </div>
          <div className="text-center text-xs text-white/50">© {new Date().getFullYear()} Requanto Technologies. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-start gap-4 text-xs text-white/60 sm:justify-end">
            <button onClick={() => navigate('/about#legal')} className="transition-colors hover:text-white">Legal</button>
            <button onClick={() => navigate('/about#privacy')} className="transition-colors hover:text-white">Privacy</button>
            <button onClick={() => navigate('/about#terms')} className="transition-colors hover:text-white">Terms</button>
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
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">{title}</h4>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <button
              onClick={() => onNav(l.to)}
              className="text-left text-sm text-white/75 transition-colors hover:text-white"
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
