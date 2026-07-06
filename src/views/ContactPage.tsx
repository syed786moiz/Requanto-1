'use client';

import { useState, useEffect } from 'react';
import { useReveal } from '../lib/hooks';
import { useRoute } from '../lib/router';
import { CalendarClock, Play, MessageSquare, Mail, MapPin, Phone, CheckCircle2, Globe2, ArrowRight } from 'lucide-react';

type Intent = 'consultation' | 'demo' | 'expert';

const INTENTS: { key: Intent; title: string; desc: string; icon: React.ComponentType<{ className?: string }> }[] = [
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
  const { ref, visible } = useReveal(true);

  return (
    <div className="bg-white text-[#0B1633]">
      <section className="relative overflow-hidden border-b border-[#E7ECF3] pt-24 pb-10 md:pt-28 md:pb-12">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(82,98,125,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(82,98,125,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#ff6900]/10 blur-3xl" />
        <div className="container-rq relative">
          <div ref={ref} className={`reveal max-w-3xl ${visible ? 'is-visible' : ''}`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E7ECF3] bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#52627D]">
              <span className="h-2 w-2 rounded-full bg-[#ff6900]" />
              Contact
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#0B1633] md:text-5xl">
              Let&apos;s start your <span className="hero-accent-text">AI transformation.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#52627D] md:text-lg">
              Schedule a consultation, request a demo, or talk to an expert — choose the path that fits your enterprise goals.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FB] py-12 md:py-16">
        <div className="container-rq">
          <div className="overflow-hidden rounded-[20px] border border-[#E7ECF3] bg-white shadow-[0_16px_48px_rgba(11,22,51,0.08)]">
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-7 lg:border-r lg:border-[#E7ECF3]">
                <ContactForm />
              </div>
              <div className="border-t border-[#E7ECF3] bg-[linear-gradient(180deg,#FAFCFF_0%,#FFFFFF_100%)] lg:col-span-5 lg:border-t-0">
                <ContactSidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
      <div className="flex min-h-[520px] flex-col items-center justify-center p-8 text-center sm:p-10">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-[#ff6900]/20 bg-[#FFF4EB] text-[#ff6900]">
          <CheckCircle2 size={28} />
        </span>
        <h3 className="mt-4 text-2xl font-semibold text-[#0B1633]">Thank you{form.name ? `, ${form.name.split(' ')[0]}` : ''}.</h3>
        <p className="mt-2 max-w-md text-[#52627D]">
          Your <span className="font-semibold text-[#ff6900]">{INTENTS.find((i) => i.key === intent)?.title}</span> request is in. A Requanto representative will reach out within one business day.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', company: '', email: '', role: '', message: '' });
          }}
          className="mt-6 text-sm font-medium text-[#52627D] transition-colors hover:text-[#ff6900]"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div id="consultation" className="scroll-mt-24 p-6 sm:p-8 lg:p-9">
      <div className="border-b border-[#E7ECF3] pb-6">
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#52627D]">Get in touch</div>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0B1633]">Send us a message</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#52627D]">Choose how you&apos;d like to connect, then share a few details about your goals.</p>
      </div>

      <div className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#52627D]">Choose your path</div>
      <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
        {INTENTS.map((it) => {
          const Icon = it.icon;
          return (
            <button
              key={it.key}
              id={it.key}
              onClick={() => setIntent(it.key)}
              className={`flex flex-col items-start gap-1.5 rounded-xl border p-3.5 text-left transition-all scroll-mt-24 shadow-[0_1px_2px_rgba(11,22,51,0.03)] ${
                intent === it.key
                  ? 'border-[#ff6900]/50 bg-[#FFF4EB] ring-1 ring-[#ff6900]/15'
                  : 'border-[#E7ECF3] bg-[#FAFCFF] hover:border-[#ff6900]/30 hover:bg-[#FFF8F3]'
              }`}
            >
              <Icon className={`h-4 w-4 ${intent === it.key ? 'text-[#ff6900]' : 'text-[#52627D]'}`} />
              <span className="text-sm font-semibold text-[#0B1633]">{it.title}</span>
              <span className="text-[11px] leading-snug text-[#52627D]">{it.desc}</span>
            </button>
          );
        })}
      </div>

      <form onSubmit={submit} className="mt-7 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" required>
            <input value={form.name} onChange={(e) => update('name', e.target.value)} required className="contact-input" placeholder="Ada Lovelace" />
          </Field>
          <Field label="Company" required>
            <input value={form.company} onChange={(e) => update('company', e.target.value)} required className="contact-input" placeholder="Acme Enterprises" />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Work email" required>
            <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} required className="contact-input" placeholder="ada@acme.com" />
          </Field>
          <Field label="Role">
            <input value={form.role} onChange={(e) => update('role', e.target.value)} className="contact-input" placeholder="Chief Transformation Officer" />
          </Field>
        </div>
        <Field label="How can we help?" required>
          <textarea
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            required
            rows={4}
            className="contact-input resize-none"
            placeholder={`Tell us about your ${intent === 'demo' ? 'platform use case' : intent === 'expert' ? 'specific question' : 'transformation goals'}…`}
          />
        </Field>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-[#52627D]">Requanto respects your privacy. No spam, ever.</span>
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded-[10px] border border-[#ff6900] bg-[#ff6900] px-6 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(255,105,0,0.28)] transition-all hover:bg-[#e55d00]"
          >
            Submit request <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-[#0B1633]">
        {label}
        {required && <span className="text-[#ff6900]"> *</span>}
      </span>
      {children}
    </label>
  );
}

function ContactSidebar() {
  const { navigate } = useRoute();
  const { ref, visible } = useReveal(true);

  return (
    <div ref={ref} className={`reveal p-6 sm:p-8 lg:p-9 ${visible ? 'is-visible' : ''}`}>
      <div className="space-y-5">
        <div className="rounded-2xl border border-[#0B1633]/10 bg-[#0B1633] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C7D1E3]">
            <Mail className="h-3.5 w-3.5 text-[#ff6900]" />
            Direct line
          </div>
          <div className="mt-4 space-y-2.5">
            <a href="mailto:hello@requanto.com" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 transition-colors hover:border-[#ff6900]/40 hover:bg-white/10">
              <Mail size={16} className="text-[#ff6900]" />
              <span className="text-sm">hello@requanto.com</span>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-3">
              <Phone size={16} className="text-[#ff6900]" />
              <span className="text-sm">+1 (enterprise sales)</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-3">
              <Globe2 size={16} className="text-[#ff6900]" />
              <span className="text-sm">Follow-the-sun global support</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E7ECF3] bg-white p-5 shadow-[0_4px_16px_rgba(11,22,51,0.04)]">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#52627D]">Office locations</div>
          <div className="mt-4 space-y-2.5">
            {OFFICES.map((o) => (
              <div key={o.city} className="flex items-start gap-3 rounded-xl border border-[#E7ECF3] bg-[#FAFCFF] p-3.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#ff6900]" />
                <div>
                  <div className="text-sm font-semibold text-[#0B1633]">{o.city}</div>
                  <div className="text-xs text-[#52627D]">{o.region}</div>
                  <div className="mt-0.5 text-[11px] text-[#94A3B8]">{o.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-dashed border-[#D0DAEA] bg-white p-5 shadow-[0_2px_12px_rgba(11,22,51,0.03)]">
          <div className="text-sm font-semibold text-[#0B1633]">Prefer self-service?</div>
          <p className="mt-1 text-sm text-[#52627D]">Get an instant score without talking to anyone.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() => navigate('/assessment')}
              className="inline-flex h-10 items-center justify-center rounded-[10px] border border-[#E7ECF3] bg-[#FAFCFF] px-4 text-sm font-medium text-[#0B1633] transition-colors hover:border-[#ff6900]/40 hover:bg-[#FFF8F3]"
            >
              AI Readiness
            </button>
            <button
              onClick={() => navigate('/cyber-check')}
              className="inline-flex h-10 items-center justify-center rounded-[10px] border border-[#E7ECF3] bg-[#FAFCFF] px-4 text-sm font-medium text-[#0B1633] transition-colors hover:border-[#ff6900]/40 hover:bg-[#FFF8F3]"
            >
              Cyber Health
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
