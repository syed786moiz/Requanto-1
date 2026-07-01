'use client';

import { useState, useEffect } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { useReveal } from '../lib/hooks';
import { CalendarClock, Play, MessageSquare, Mail, MapPin, Phone, CheckCircle2, Globe2 } from 'lucide-react';

type Intent = 'consultation' | 'demo' | 'expert';

const INTENTS: { key: Intent; title: string; desc: string; icon: any }[] = [
  { key: 'consultation', title: 'Schedule Consultation', desc: 'A strategy session with Requanto leadership.', icon: CalendarClock },
  { key: 'demo', title: 'Request Demo', desc: 'See our AI platforms in action.', icon: Play },
  { key: 'expert', title: 'Talk to an Expert', desc: 'Get answers from a domain specialist.', icon: MessageSquare },
];

const OFFICES = [
  { city: 'North America', region: 'United States', note: 'Enterprise strategy hub' },
  { city: 'EMEA', region: 'United Kingdom · UAE', note: 'Financial services & GRC' },
  { city: 'APAC', region: 'India · Singapore', note: 'Global delivery & engineering' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start your"
        highlight="AI transformation."
        description="Schedule a consultation, request a demo, or talk to an expert — choose the path that fits."
      />

      <section className="section">
        <div className="container-rq grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <ContactSidebar />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const hash = typeof window !== 'undefined' ? window.location.hash : '';
  const initial: Intent = hash.includes('demo') ? 'demo' : hash.includes('expert') ? 'expert' : 'consultation';
  const [intent, setIntent] = useState<Intent>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', role: '', message: '' });

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash;
      if (h.includes('demo')) setIntent('demo');
      else if (h.includes('expert')) setIntent('expert');
      else if (h.includes('consultation')) setIntent('consultation');
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const update = (k: string, v: string) => setForm({ ...form, [k]: v });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-ink-200/70 bg-white p-8 text-center shadow-premiumLg">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-success/10 text-success">
          <CheckCircle2 size={28} />
        </span>
        <h3 className="mt-4 text-2xl font-bold text-ink-900">Thank you{form.name ? `, ${form.name.split(' ')[0]}` : ''}.</h3>
        <p className="mt-2 text-ink-600">
          Your <span className="font-semibold text-brand-700">{INTENTS.find((i) => i.key === intent)?.title}</span> request is in. A Requanto representative will reach out within one business day.
        </p>
        <button onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', role: '', message: '' }); }} className="btn-ghost mt-6">
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div id="consultation" className="scroll-mt-24 rounded-2xl border border-ink-200/70 bg-white p-6 shadow-premiumLg sm:p-8">
      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Choose your path</div>
      <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
        {INTENTS.map((it) => (
          <button
            key={it.key}
            id={it.key}
            onClick={() => setIntent(it.key)}
            className={`flex flex-col items-start gap-1 rounded-xl border p-3 text-left transition-all scroll-mt-24 ${
              intent === it.key
                ? 'border-brand-400 bg-brand-50/50'
                : 'border-ink-200 bg-white hover:border-brand-300 hover:bg-brand-50/30'
            }`}
          >
            <it.icon size={16} className={intent === it.key ? 'text-brand-600' : 'text-ink-500'} />
            <span className="text-sm font-semibold text-ink-900">{it.title}</span>
            <span className="text-[11px] text-ink-500">{it.desc}</span>
          </button>
        ))}
      </div>

      <form onSubmit={submit} className="mt-7 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" required>
            <input value={form.name} onChange={(e) => update('name', e.target.value)} required className="rq-input" placeholder="Ada Lovelace" />
          </Field>
          <Field label="Company" required>
            <input value={form.company} onChange={(e) => update('company', e.target.value)} required className="rq-input" placeholder="Acme Enterprises" />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Work email" required>
            <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} required className="rq-input" placeholder="ada@acme.com" />
          </Field>
          <Field label="Role">
            <input value={form.role} onChange={(e) => update('role', e.target.value)} className="rq-input" placeholder="Chief Transformation Officer" />
          </Field>
        </div>
        <Field label="How can we help?" required>
          <textarea value={form.message} onChange={(e) => update('message', e.target.value)} required rows={4} className="rq-input resize-none" placeholder={`Tell us about your ${intent === 'demo' ? 'platform use case' : intent === 'expert' ? 'specific question' : 'transformation goals'}…`} />
        </Field>
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs text-ink-500">Requanto respects your privacy. No spam, ever.</span>
          <button type="submit" className="btn-primary">
            Submit request
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-ink-700">{label}{required && <span className="text-danger"> *</span>}</span>
      {children}
    </label>
  );
}

function ContactSidebar() {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
      <div className="space-y-5">
        <div className="rounded-2xl border border-ink-200/70 bg-ink-950 p-6 text-white shadow-premiumLg">
          <span className="eyebrow-light">
            <Mail size={12} className="text-accent" /> Direct line
          </span>
          <div className="mt-4 space-y-3">
            <a href="mailto:hello@requanto.com" className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 transition-colors hover:bg-white/10">
              <Mail size={16} className="text-accent" />
              <span className="text-sm">hello@requanto.com</span>
            </a>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5">
              <Phone size={16} className="text-accent" />
              <span className="text-sm">+1 (enterprise sales)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5">
              <Globe2 size={16} className="text-accent" />
              <span className="text-sm">Follow-the-sun global support</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-ink-200/70 bg-white p-6 shadow-premium">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Office locations</div>
          <div className="mt-4 space-y-3">
            {OFFICES.map((o) => (
              <div key={o.city} className="flex items-start gap-3 rounded-xl border border-ink-100 bg-section/40 p-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-600" />
                <div>
                  <div className="text-sm font-semibold text-ink-900">{o.city}</div>
                  <div className="text-xs text-ink-500">{o.region}</div>
                  <div className="mt-0.5 text-[11px] text-ink-400">{o.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border-2 border-dashed border-ink-200 p-6">
          <div className="text-sm font-semibold text-ink-900">Prefer self-service?</div>
          <p className="mt-1 text-sm text-ink-600">Get an instant score without talking to anyone.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a href="#/assessment" className="btn-outline">AI Readiness</a>
            <a href="#/cyber-check" className="btn-outline">Cyber Health</a>
          </div>
        </div>
      </div>
    </div>
  );
}
