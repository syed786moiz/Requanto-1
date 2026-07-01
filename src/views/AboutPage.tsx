'use client';

import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useReveal } from '../lib/hooks';
import { VALUES, LEADERSHIP } from '../data/content';
import { Target, Eye, Globe2, Heart, Lightbulb, Cpu, Network, CheckCircle2, ArrowRight } from 'lucide-react';
import { useRoute } from '../lib/router';

const WHY = [
  { icon: Network, title: 'One connected ecosystem', desc: 'Platforms, automation, security and advisory — sharing one AI backbone.' },
  { icon: Cpu, title: 'AI-native by design', desc: 'Every solution is built with intelligence at the core, never bolted on.' },
  { icon: Target, title: 'Outcome-driven engagements', desc: 'We measure success in cycle time, risk reduction and revenue.' },
  { icon: Globe2, title: 'Global delivery', desc: 'Follow-the-sun delivery with senior leadership embedded locally.' },
];

export default function AboutPage() {
  const { navigate } = useRoute();
  return (
    <>
      <PageHero
        eyebrow="About Requanto"
        title="An enterprise AI"
        highlight="transformation company."
        description="Requanto Technologies helps organizations modernize operations through AI-powered platforms, workflow automation, cybersecurity, executive advisory and intelligent business solutions."
        ctas={[{ label: 'Schedule Strategy Session', to: '/contact#consultation', variant: 'accent' }]}
      />

      <section className="section">
        <div className="container-rq grid gap-6 md:grid-cols-2">
          <MissionVision
            icon={Target}
            tag="Mission"
            text="Empowering enterprises with intelligent software, AI automation, and cybersecurity expertise."
          />
          <MissionVision
            icon={Eye}
            tag="Vision"
            text="To build the next generation of AI-native enterprise platforms that transform how organizations operate, secure, and scale."
          />
        </div>
      </section>

      <section className="section bg-section">
        <div className="container-rq">
          <SectionHeading
            eyebrow="Why Requanto"
            title={<>A strategic partner, <span className="gradient-text">powered by AI.</span></>}
            description="Never a software development shop — always a transformation partner."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => {
              const { ref, visible } = useReveal();
              const Icon = w.icon;
              return (
                <div key={w.title} ref={ref} className={`reveal reveal-delay-${i + 1} ${visible ? 'is-visible' : ''}`}>
                  <div className="h-full rounded-2xl border border-ink-200/70 bg-white p-6 shadow-premium">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink-900 text-accent">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-ink-900">{w.title}</h3>
                    <p className="mt-2 text-sm text-ink-600">{w.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-rq">
          <SectionHeading
            eyebrow="Our Values"
            title={<>Principles that <span className="gradient-text">guide every engagement.</span></>}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const { ref, visible } = useReveal();
              const Icon = v.icon;
              return (
                <div key={v.title} ref={ref} className={`reveal reveal-delay-${i + 1} ${visible ? 'is-visible' : ''}`}>
                  <div className="group h-full rounded-2xl border border-ink-200/70 bg-white p-6 shadow-premium transition-all hover:-translate-y-1 hover:shadow-premiumLg">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-transform group-hover:scale-110">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-ink-900">{v.title}</h3>
                    <p className="mt-2 text-sm text-ink-600">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-section">
        <div className="container-rq">
          <SectionHeading
            eyebrow="Leadership"
            title={<>Senior leadership <span className="gradient-text">in every engagement.</span></>}
            description="A leadership bench with enterprise, security and AI engineering depth."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP.map((p, i) => {
              const { ref, visible } = useReveal();
              const initials = p.name.split(' ').map((n) => n[0]).join('');
              return (
                <div key={p.name} ref={ref} className={`reveal reveal-delay-${(i % 3) + 1} ${visible ? 'is-visible' : ''}`}>
                  <div className="flex items-start gap-4 rounded-2xl border border-ink-200/70 bg-white p-5 shadow-premium">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-ink-900 to-ink-700 text-lg font-bold text-accent">
                      {initials}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-ink-900">{p.name}</h3>
                      <div className="text-sm font-medium text-brand-600">{p.role}</div>
                      <div className="mt-1 text-xs text-ink-500">{p.focus}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-rq">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Heart, title: 'Culture', desc: 'Senior practitioners, ownership and curiosity — built for transformation.' },
              { icon: Lightbulb, title: 'Innovation', desc: 'A lab translating industry problems into production AI.' },
              { icon: Globe2, title: 'Global Delivery', desc: 'Follow-the-sun, locally embedded leadership model.' },
              { icon: Network, title: 'Connected Platforms', desc: 'Ten platforms sharing one intelligence layer.' },
            ].map((c, i) => {
              const { ref, visible } = useReveal();
              const Icon = c.icon;
              return (
                <div key={c.title} ref={ref} className={`reveal reveal-delay-${i + 1} ${visible ? 'is-visible' : ''}`}>
                  <div className="rounded-2xl border border-ink-200/70 bg-section/50 p-6">
                    <Icon size={20} className="text-brand-600" />
                    <h3 className="mt-3 text-base font-bold text-ink-900">{c.title}</h3>
                    <p className="mt-1 text-sm text-ink-600">{c.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="legal">
        <div className="container-rq">
          <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-12 text-white sm:px-12 sm:py-16">
            <div className="absolute inset-0 dot-bg opacity-[0.07]" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-display-lg text-balance">
                Become an <span className="gradient-text-accent">AI-native enterprise.</span>
              </h2>
              <p className="mt-4 text-ink-300">Partner with Requanto — platforms, automation, security and advisory under one roof.</p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <button onClick={() => navigate('/contact#consultation')} className="btn-accent">
                  Get started <ArrowRight size={15} />
                </button>
                <button onClick={() => navigate('/assessment')} className="btn-outline border-white/20 bg-white/5 text-white hover:bg-white/10">
                  Assess your AI readiness
                </button>
              </div>
              <div id="privacy" className="mt-10 grid gap-2 border-t border-white/10 pt-6 text-left text-xs text-ink-400 sm:grid-cols-3 scroll-mt-24">
                <div id="terms" className="scroll-mt-24">
                  <div className="font-semibold text-ink-200">Legal</div>
                  <p className="mt-1">Requanto Technologies operates globally with industry-standard data and engagement terms.</p>
                </div>
                <div>
                  <div className="font-semibold text-ink-200">Privacy</div>
                  <p className="mt-1">Enterprise-grade privacy and responsible AI principles across every engagement.</p>
                </div>
                <div>
                  <div className="font-semibold text-ink-200">Terms</div>
                  <p className="mt-1">Transparent engagement, governance and service-level terms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function MissionVision({ icon: Icon, tag, text }: { icon: any; tag: string; text: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
      <div className="h-full rounded-2xl border border-ink-200/70 bg-white p-8 shadow-premium">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink-900 text-accent">
            <Icon size={22} />
          </span>
          <span className="rounded-full bg-section px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">{tag}</span>
        </div>
        <p className="mt-5 text-xl font-semibold leading-relaxed text-ink-900 text-balance">{text}</p>
      </div>
    </div>
  );
}

void CheckCircle2;
