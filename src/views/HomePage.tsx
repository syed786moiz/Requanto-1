'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Play,
  Layers3,
  Workflow,
  ShieldCheck,
  Building2,
  Factory,
  Activity,
  Banknote,
  Network,
  Sparkles,
  BarChart3,
  Users,
  ChevronDown,
  ChevronRight,
  Cloud,
  User,
  Boxes,
  Target,
  Brain,
  ShoppingCart,
  Headphones,
  TrendingUp,
  Calendar,
  Lock,
  Lightbulb,
  Shield,
} from 'lucide-react';
import { useRoute } from '../lib/router';
import { useInView } from '../lib/hooks';

export default function HomePage() {
  return (
    <div className="bg-white text-[#0B1633]">
      <HeroSection />
      <WhatWeDoSection />
      <InnovationLabSection />
      <AgentsSection />
      <FinalCtaSection />
    </div>
  );
}

/* ─── HERO ─── */

const HERO_FEATURES = [
  { title: 'Enterprise Grade', desc: 'Secure. Scalable. Reliable.', icon: ShieldCheck },
  { title: 'AI-Driven Innovation', desc: 'Smarter Outcomes, Faster', icon: BarChart3 },
  { title: 'Trusted by Leaders', desc: 'Across Industries', icon: Users },
] as const;

const HERO_MARQUEE_PLATFORMS = [
  'Requanto Audit AI',
  'Requanto Vendor AI',
  'Requanto Finance AI',
  'Requanto Fraud AI',
  'Requanto KYC AI',
  'mySFT AI',
  'Requanto Studio',
  'Requanto Shield',
  'Requanto Command',
  'Requanto Risk AI',
] as const;

function HeroSection() {
  const { navigate } = useRoute();

  return (
    <section className="relative overflow-hidden bg-gray-100">
      <HeroDecorations />

      <div className="container-rq relative z-10 pt-8 pb-0 md:pt-10 lg:pt-12">
        <div className="grid items-start gap-x-10 gap-y-0 lg:grid-cols-[50%_50%] xl:gap-x-14">
          <div className="relative z-20 min-w-0 overflow-visible">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B00]" />
              <span className="rq-section-badge">
                AI-Powered. Outcome-Driven.
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-[#0B1633] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15] xl:text-[2.85rem]">
              <span>Building </span>
              <span className="text-[#FF6B00]">AI-Native</span>
              <span> Enterprises.</span>
            </h1>

            <p className="rq-card-body mt-5 max-w-[520px]">
              Requanto Technologies helps organizations modernize operations through AI-powered SaaS
              platforms, low-code workflow automation, cybersecurity consulting, and managed technology
              services.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:flex-nowrap lg:gap-3.5">
              <button
                onClick={() => navigate('/contact#consultation')}
                className="inline-flex h-[52px] shrink-0 items-center justify-center gap-2.5 rounded-xl bg-[#FF6B00] px-5 text-[15px] font-medium text-white shadow-[0_8px_24px_rgba(255,107,0,0.28)] transition-all hover:bg-[#E55D00] sm:px-6 sm:text-base"
              >
                <Play className="h-4 w-4 shrink-0 fill-white" />
                Schedule Strategy Session
              </button>
              <button
                onClick={() => navigate('/solutions')}
                className="inline-flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-xl border-2 border-[#FF6B00] bg-white px-5 text-[15px] font-medium text-[#FF6B00] transition-all hover:bg-[#FFF7F0] sm:px-6 sm:text-base"
              >
                <Sparkles className="h-4 w-4 shrink-0 text-[#FF6B00]" />
                Explore AI Solutions
              </button>
            </div>

            <HeroFeatureBar className="mt-5 lg:mt-6" />
            <HeroPlatformMarquee />
          </div>

          <div className="relative z-0 flex min-h-[320px] w-full min-w-0 items-center justify-center overflow-visible bg-transparent py-6 sm:min-h-[400px] lg:min-h-[520px] lg:justify-end lg:self-center lg:py-0">
            <img
              src="/hero.webp"
              alt="Requanto AI Platform with intelligence, automation, security, and cloud capabilities"
              className="relative z-10 h-auto w-full max-w-[600px] translate-x-2 -translate-y-2 object-contain sm:max-w-[640px] lg:ml-auto lg:max-w-[720px] lg:translate-x-4 lg:-translate-y-4 xl:max-w-[780px]"
              width={1040}
              height={1200}
            />
          </div>
        </div>
      </div>

      <HeroWaveFooter className="-mt-[45px]" />
    </section>
  );
}

function HeroDecorations() {
  return (
    <>
      <div className="hero-checks-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[45%] w-[60%] opacity-40">
        <svg className="h-full w-full" viewBox="0 0 800 500" preserveAspectRatio="xMaxYMax slice" aria-hidden>
          <defs>
            <linearGradient id="heroFlowA" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1F9E69" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0B1633" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="heroFlowB" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2DD4A0" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#1F9E69" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path d="M200 500 C350 380 420 280 520 200 C620 120 700 80 800 40" stroke="url(#heroFlowA)" strokeWidth="2" fill="none" />
          <path d="M120 500 C280 400 380 300 500 220 C620 140 700 100 820 60" stroke="url(#heroFlowB)" strokeWidth="1.5" fill="none" opacity="0.7" />
          <path d="M300 500 C400 420 460 340 540 260 C620 180 700 130 800 90" stroke="rgba(31,158,105,0.22)" strokeWidth="1" fill="none" strokeDasharray="6 8" />
          <path d="M400 500 C480 420 520 360 580 300 C640 240 720 180 800 120" stroke="rgba(45,212,160,0.18)" strokeWidth="1" fill="none" />
        </svg>
      </div>
    </>
  );
}

function HeroFeatureBar({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-0 ${className}`}>
      {HERO_FEATURES.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="flex items-center">
            {i > 0 && <span className="mx-5 hidden h-8 w-px shrink-0 bg-[#E5E7EB] sm:block lg:mx-7" aria-hidden />}
            <div className="flex items-start gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-[#EAEAEA] bg-[#FAFBFC] shadow-sm">
                <Icon className="h-[22px] w-[22px] text-[#374151]" strokeWidth={1.5} />
              </div>
              <div>
                <div className="rq-card-title text-[#0B1633]">{item.title}</div>
                <div className="rq-card-body mt-1">{item.desc}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function HeroPlatformMarquee() {
  const items = [...HERO_MARQUEE_PLATFORMS, ...HERO_MARQUEE_PLATFORMS];

  return (
    <div className="relative z-30 mt-5 w-full max-w-full border-t border-[#E5E7EB]/60 bg-gray-100 pt-3 lg:mt-6 lg:max-w-[calc(100%+10rem)] xl:max-w-[calc(100%+12rem)]">
      <div className="hero-checks-bg pointer-events-none absolute inset-0 opacity-90" aria-hidden />
      <div
        className="relative h-7 overflow-hidden sm:h-8"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, black 0%, black 88%, transparent 100%)',
          maskImage: 'linear-gradient(to right, black 0%, black 88%, transparent 100%)',
        }}
      >
        <div className="hero-marquee-track flex h-full w-max items-center gap-8 whitespace-nowrap sm:gap-10">
          {items.map((name, i) => (
            <span key={`${name}-${i}`} className="inline-flex items-center gap-8 sm:gap-10">
              {i > 0 && <span className="h-3.5 w-px shrink-0 bg-[#94A3B8]/60" aria-hidden />}
              <span className="rq-card-body inline-block leading-none tracking-[-0.01em]">
                {name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroWaveFooter({ className = '' }: { className?: string }) {
  /* Reference curve: flat left (0%) → ~30% depth on right, smooth S-shape */
  const curve =
    'M0,78 C220,78 480,62 820,38 C1040,22 1240,10 1440,6 L1440,108 L0,108 Z';
  const curveLine =
    'M0,78 C220,78 480,62 820,38 C1040,22 1240,10 1440,6';

  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 1440 108" className="block w-full" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="heroWaveFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a4d38" />
            <stop offset="50%" stopColor="#214635" />
            <stop offset="100%" stopColor="#163528" />
          </linearGradient>
          <linearGradient id="heroGoldLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B8942E" stopOpacity="0.2" />
            <stop offset="40%" stopColor="#D4AF37" stopOpacity="0.65" />
            <stop offset="75%" stopColor="#F0D875" stopOpacity="1" />
            <stop offset="100%" stopColor="#E8C547" />
          </linearGradient>
          <filter id="heroGoldGlow" x="-10%" y="-50%" width="120%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Cropped viewBox — no empty white band above the curve */}
        <path d={curve} fill="url(#heroWaveFill)" />

        {/* Soft gold glow under the accent line */}
        <path
          d={curveLine}
          fill="none"
          stroke="#E8C547"
          strokeWidth="7"
          opacity="0.22"
          strokeLinecap="round"
        />
        <path
          d={curveLine}
          fill="none"
          stroke="url(#heroGoldLine)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#heroGoldGlow)"
        />
        <path
          d={curveLine}
          fill="none"
          stroke="#FFF8DC"
          strokeWidth="1"
          opacity="0.5"
          strokeLinecap="round"
          transform="translate(0,-2)"
        />

        {/* Center of gold border at viewBox x=720, y≈44 */}
        <foreignObject x="520" y="54" width="400" height="52">
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-white/60">
              Scroll to explore
            </span>
            <ChevronDown className="h-4 w-4 animate-bounce text-[#E8C547]/90" strokeWidth={2} />
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}

/* ─── WHAT WE DO ─── */

const ECOSYSTEM_LEFT = [
  {
    icon: Boxes,
    title: 'AI Enterprise SaaS',
    bullets: ['Community Operations', 'Vendor Intelligence', 'Procurement Automation'],
    lineY: 18,
  },
  {
    icon: Workflow,
    title: 'AI Low-Code',
    bullets: ['Drag-and-drop workflows', 'Dynamic forms', 'Business rules engine'],
    lineY: 50,
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    bullets: ['Cybersecurity Assessments', 'Governance Risk & Compliance', 'Security Program Development'],
    lineY: 82,
  },
] as const;

const ECOSYSTEM_RIGHT = [
  {
    icon: Layers3,
    title: 'Virtual CTO',
    bullets: ['Technology strategy', 'Product architecture', 'Cloud transformation', 'AI adoption roadmap'],
    lineY: 18,
  },
  {
    icon: Cloud,
    title: 'Managed IT & Technology',
    bullets: ['IT strategy', 'Cloud consulting', 'Process automation'],
    lineY: 50,
  },
  {
    icon: User,
    title: 'Virtual CISO',
    bullets: ['Executive security leadership', 'Risk & compliance oversight', 'Security program management'],
    lineY: 82,
  },
] as const;



function WhatWeDoBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-white" />
      <div className="hero-checks-bg pointer-events-none absolute inset-0 opacity-[0.28]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_20%,rgba(31,158,105,0.05),transparent_60%)]" />
      <svg
        className="pointer-events-none absolute left-0 top-8 h-32 w-48 opacity-40 md:h-40 md:w-64"
        viewBox="0 0 200 120"
        fill="none"
        aria-hidden
      >
        <path
          d="M0 80 C40 40 80 20 120 30 C150 38 175 55 200 70"
          stroke="#FF6B00"
          strokeWidth="1.5"
          strokeOpacity="0.35"
        />
        <path
          d="M0 95 C50 60 90 45 140 55 C165 60 185 72 200 85"
          stroke="#FF6B00"
          strokeWidth="1"
          strokeOpacity="0.2"
        />
      </svg>
      <svg
        className="pointer-events-none absolute right-0 top-8 h-32 w-48 opacity-40 md:h-40 md:w-64"
        viewBox="0 0 200 120"
        fill="none"
        aria-hidden
      >
        <path
          d="M200 80 C160 40 120 20 80 30 C50 38 25 55 0 70"
          stroke="#FF6B00"
          strokeWidth="1.5"
          strokeOpacity="0.35"
        />
        <path
          d="M200 95 C150 60 110 45 60 55 C35 60 15 72 0 85"
          stroke="#FF6B00"
          strokeWidth="1"
          strokeOpacity="0.2"
        />
      </svg>
    </>
  );
}

const ECOSYSTEM_CARD_STYLES = [
  {
    card: 'border-2 border-[#163F35]/65 bg-[#F7FBF9] shadow-[0_8px_28px_rgba(22,63,53,0.14)] ring-1 ring-[#163F35]/10',
    icon: 'border-[#163F35]/30 bg-[#EEF6F2] text-[#163F35]',
    bullet: 'bg-[#163F35]',
  },
  {
    card: 'border-2 border-[#1A6B8A]/60 bg-[#F5FAFC] shadow-[0_8px_28px_rgba(26,107,138,0.12)] ring-1 ring-[#1A6B8A]/10',
    icon: 'border-[#1A6B8A]/30 bg-[#E8F4F8] text-[#1A6B8A]',
    bullet: 'bg-[#1A6B8A]',
  },
  {
    card: 'border-2 border-[#2D7A5E]/60 bg-[#F4FAF7] shadow-[0_8px_28px_rgba(45,122,94,0.12)] ring-1 ring-[#2D7A5E]/10',
    icon: 'border-[#2D7A5E]/30 bg-[#EAF5EF] text-[#2D7A5E]',
    bullet: 'bg-[#2D7A5E]',
  },
] as const;

function EcosystemNodeCard({
  icon: Icon,
  title,
  bullets,
  style,
}: {
  icon: typeof BarChart3;
  title: string;
  bullets: readonly string[];
  style: (typeof ECOSYSTEM_CARD_STYLES)[number];
}) {
  return (
    <div
      className={`flex h-full w-full min-h-[130px] items-start gap-4 rounded-2xl px-5 py-4 backdrop-blur-sm sm:min-h-[140px] sm:px-5 sm:py-5 ${style.card}`}
    >
      <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg border ${style.icon}`}>
        <Icon className="h-[22px] w-[22px]" strokeWidth={1.5} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="rq-card-title">{title}</div>
        <ul className="mt-2.5 space-y-1.5">
          {bullets.map((item) => (
            <li key={item} className="rq-card-body flex items-start gap-2">
              <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${style.bullet}`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function EcosystemDiagram() {
  const hubX = 50;
  const hubY = 50;
  const leftX = 14;
  const rightX = 86;
  const connectors = [
    ...ECOSYSTEM_LEFT.map((n) => ({ x: leftX, y: n.lineY })),
    ...ECOSYSTEM_RIGHT.map((n) => ({ x: rightX, y: n.lineY })),
  ];

  return (
    <div className="relative mx-auto w-full max-w-[1100px]">
      <div className="relative grid grid-cols-[1fr_auto_1fr] grid-rows-3 items-stretch gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-5 md:gap-x-10 md:gap-y-5">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          {connectors.map((point, i) => (
            <line
              key={i}
              x1={point.x}
              y1={point.y}
              x2={hubX}
              y2={hubY}
              stroke="#FF6B00"
              strokeWidth="0.45"
              strokeDasharray="1.8 1.8"
              strokeOpacity="0.55"
            />
          ))}
          <circle cx={hubX} cy={hubY} r="0.8" fill="#FF6B00" opacity="0.85" />
        </svg>

        {ECOSYSTEM_LEFT.map((node, i) => (
          <div
            key={node.title}
            className="relative z-10 col-start-1 flex min-w-0 w-full max-w-[360px] justify-self-stretch"
            style={{ gridRow: i + 1 }}
          >
            <EcosystemNodeCard
              icon={node.icon}
              title={node.title}
              bullets={node.bullets}
              style={ECOSYSTEM_CARD_STYLES[i]}
            />
          </div>
        ))}

        <div className="relative z-10 col-start-2 row-span-3 row-start-1 flex items-center justify-center self-center px-2">
          <div className="relative flex h-[7.5rem] w-[7.5rem] flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#1a4a3e] via-[#214635] to-[#0d1f17] text-center shadow-[0_0_48px_rgba(31,158,105,0.28)] sm:h-36 sm:w-36 md:h-40 md:w-40">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(61,214,140,0.2),transparent_55%)]" />
            <div className="relative flex flex-col items-center justify-center gap-2 px-3">
              <div className="grid place-items-center rounded-xl bg-white p-2 shadow-[0_4px_16px_rgba(0,0,0,0.15)] ring-1 ring-white/30">
                <img
                  src="/favicon.png"
                  alt="Requanto"
                  className="h-8 w-8 object-contain sm:h-9 sm:w-9 md:h-10 md:w-10"
                />
              </div>
              <span className="text-sm font-medium leading-tight text-white sm:text-[15px] md:text-base">
                Requanto
                <br />
                Ecosystem
              </span>
            </div>
          </div>
        </div>

        {ECOSYSTEM_RIGHT.map((node, i) => (
          <div
            key={`${node.title}-${i}`}
            className="relative z-10 col-start-3 flex min-w-0 w-full max-w-[360px] justify-self-stretch"
            style={{ gridRow: i + 1 }}
          >
            <EcosystemNodeCard
              icon={node.icon}
              title={node.title}
              bullets={node.bullets}
              style={ECOSYSTEM_CARD_STYLES[i]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}



function WhatWeDoSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative overflow-hidden home-section-pad bg-white">
      <WhatWeDoBackground />

      <div className="container-rq relative z-10">
        <div className="mx-auto max-w-[720px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B00]" />
            <span className="rq-section-badge">
              What We Do
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B1633] md:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
            One Partner. Multiple <span className="text-[#FF6B00]">AI Solutions</span>.
          </h2>
          {/* <p className="mt-4 text-base leading-relaxed text-[#52627D] md:text-[17px] md:leading-[1.7]">
            We help businesses solve real operational challenges by combining enterprise software, artificial
            intelligence, cybersecurity, and strategic consultancy.
          </p> */}
        </div>

        <div
          className={`section-block-gap transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        >
          <EcosystemDiagram />
        </div>
      </div>
    </section>
  );
}

/* ─── INNOVATION LAB ─── */

const INNOVATION_VALUE_BLOCKS = [
  {
    icon: Target,
    title: 'Real Business Problems',
    text: 'We solve operational challenges first.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Solutions',
    text: 'Practical enterprise automation.',
  },
  {
    icon: BarChart3,
    title: 'Measurable Outcomes',
    text: 'Delivering ROI through AI.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Ready',
    text: 'Secure, scalable and compliant.',
  },
] as const;

const INNOVATION_INDUSTRIES = [
  {
    id: 'realestate',
    title: 'AI for Real Estate',
    icon: Building2,
    image: '/real-state.png',
    banner: 'from-[#163F35] via-[#1a4a3e] to-[#214635]',
    problems: ['Slow sales cycles', 'Manual vendor management'],
    solutions: ['Lead prediction', 'Vendor intelligence', 'Service automation'],
    to: '/innovation-lab#realestate',
  },
  {
    id: 'healthcare',
    title: 'AI for Healthcare',
    icon: Activity,
    image: '/hospital.png',
    banner: 'from-[#0f2d3d] via-[#163F35] to-[#1a4a3e]',
    problems: ['Administrative burden', 'Compliance complexity'],
    solutions: ['Document intelligence', 'Workflow automation', 'Compliance monitoring'],
    to: '/innovation-lab#healthcare',
  },
  {
    id: 'manufacturing',
    title: 'AI for Manufacturing',
    icon: Factory,
    image: '/manufraturing.png',
    banner: 'from-[#1a3a32] via-[#163F35] to-[#0d2420]',
    problems: ['Procurement delays', 'Vendor inefficiencies'],
    solutions: ['Predictive procurement', 'Supplier intelligence', 'Operational analytics'],
    to: '/innovation-lab#manufacturing',
  },
  {
    id: 'financial',
    title: 'AI for Financial Services',
    icon: Banknote,
    image: '/frelance.png',
    banner: 'from-[#111827] via-[#163F35] to-[#214635]',
    problems: ['Regulatory complexity', 'Operational risk'],
    solutions: ['Risk intelligence', 'Audit automation', 'Compliance workflows'],
    to: '/innovation-lab#financial',
  },
  {
    id: 'smart',
    title: 'AI for Smart Communities',
    icon: Network,
    image: '/ai-smartcommunity.png',
    banner: 'from-[#163528] via-[#163F35] to-[#1f6b52]',
    problems: ['Resident complaints', 'Manual service management'],
    solutions: ['Resident Copilot', 'Visitor intelligence', 'Maintenance automation'],
    to: '/innovation-lab#smart',
  },
] as const;

const INNOVATION_CARD_ACCENTS = [
  { problems: 'text-[#163F35]', problemDot: 'bg-[#163F35]', cta: 'text-[#163F35] hover:text-[#1E5A4A]' },
  { problems: 'text-[#1A6B8A]', problemDot: 'bg-[#1A6B8A]', cta: 'text-[#1A6B8A] hover:text-[#155A73]' },
  { problems: 'text-[#FF6B00]', problemDot: 'bg-[#FF6B00]', cta: 'text-[#FF6B00] hover:text-[#E55D00]' },
  { problems: 'text-[#5B4BB7]', problemDot: 'bg-[#5B4BB7]', cta: 'text-[#5B4BB7] hover:text-[#4A3D9A]' },
  { problems: 'text-[#2D7A5E]', problemDot: 'bg-[#2D7A5E]', cta: 'text-[#2D7A5E] hover:text-[#236349]' },
] as const;

function InnovationLabBackground() {
  const particles = [
    { left: '6%', top: '14%', delay: '0s' },
    { left: '94%', top: '18%', delay: '1.5s' },
    { left: '12%', top: '78%', delay: '2.8s' },
    { left: '88%', top: '72%', delay: '0.6s' },
  ];

  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-white" />
      <div className="dot-bg pointer-events-none absolute inset-0 opacity-[0.35]" />
      <div className="hero-mesh pointer-events-none absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(22,63,53,0.04),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_90%_90%,rgba(255,107,0,0.04),transparent_60%)]" />
      {particles.map((p, i) => (
        <span
          key={i}
          className={`what-we-do-particle pointer-events-none absolute h-1 w-1 rounded-full ${i % 2 === 0 ? 'bg-[#163F35]/40' : 'bg-[#FF6B00]/35'}`}
          style={{ left: p.left, top: p.top, animationDelay: p.delay }}
          aria-hidden
        />
      ))}
      <svg className="pointer-events-none absolute left-0 top-16 h-40 w-56 opacity-35" viewBox="0 0 200 120" fill="none" aria-hidden>
        <path d="M0 90 C50 50 90 30 140 45 C170 55 190 70 200 85" stroke="#163F35" strokeWidth="1.5" strokeOpacity="0.25" />
      </svg>
      <svg className="pointer-events-none absolute right-0 top-20 h-40 w-56 opacity-35" viewBox="0 0 200 120" fill="none" aria-hidden>
        <path d="M200 90 C150 50 110 30 60 45 C30 55 10 70 0 85" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.25" />
      </svg>
    </>
  );
}

function InnovationValueBar() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {INNOVATION_VALUE_BLOCKS.map((block, i) => {
        const Icon = block.icon;
        return (
          <div key={block.title} className="relative flex items-start gap-4 px-5 py-7 sm:px-6 md:py-8">
            {i > 0 && (
              <span
                className="absolute left-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-[#E7ECF3] sm:block"
                aria-hidden
              />
            )}
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#E7ECF3] bg-[#FAFBFC] text-[#163F35] shadow-sm">
              <Icon className="h-[22px] w-[22px]" strokeWidth={1.5} />
            </div>
            <div>
              <div className="rq-card-title">{block.title}</div>
              <p className="rq-card-body mt-1.5">{block.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function InnovationIndustryCard({
  title,
  icon: _icon,
  image,
  banner,
  problems,
  solutions,
  to,
  onNavigate,
  delay,
  inView,
  accent,
}: {
  title: string;
  icon: typeof Building2;
  image?: string;
  banner: string;
  problems: readonly string[];
  solutions: readonly string[];
  to: string;
  onNavigate: (to: string) => void;
  delay: number;
  inView: boolean;
  accent: (typeof INNOVATION_CARD_ACCENTS)[number];
}) {
  return (
    <article
      className={`group flex h-[400px] flex-col overflow-hidden rounded-2xl border border-[#E7ECF3] bg-white shadow-[0_4px_24px_rgba(17,24,39,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(17,24,39,0.09)] sm:h-[420px] ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      <div
        className={`relative h-[118px] shrink-0 overflow-hidden rounded-t-2xl border-b border-[#E7ECF3] bg-gradient-to-br ${banner}`}
      >
        {image ? (
          <img
            src={image}
            alt=""
            className="innovation-card-zoom absolute inset-0 h-full w-full rounded-t-2xl object-cover"
          />
        ) : (
          <div className="innovation-card-zoom absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 via-[#111827]/15 to-transparent" />
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-4 pb-3 pt-4 sm:px-5 sm:pb-4 sm:pt-4">
        <h3 className="rq-card-title shrink-0">{title}</h3>

        <div className="mt-2.5 min-h-0 flex-1 space-y-2.5 overflow-hidden sm:mt-3 sm:space-y-3">
          <div>
            <span className={`rq-card-label ${accent.problems}`}>Problems</span>
            <ul className="mt-1 space-y-1">
              {problems.map((item) => (
                <li key={item} className="rq-card-body flex items-start gap-2 text-[#0B1633]">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.problemDot}`} aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="rq-card-label text-[#163F35]">AI Solutions</span>
            <ul className="mt-1 space-y-1">
              {solutions.map((item) => (
                <li key={item} className="rq-card-body flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#163F35]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-2 shrink-0 border-t border-[#E7ECF3] pt-2.5">
          <button
            type="button"
            onClick={() => onNavigate(to)}
            className={`inline-flex w-full items-center gap-2 text-[15px] font-medium transition-colors sm:text-base ${accent.cta}`}
          >
            Learn More
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
}

function InnovationLabSection() {
  const { navigate } = useRoute();
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative overflow-hidden home-section-pad bg-white">
      <InnovationLabBackground />

      <div className="container-rq relative z-10">
        <div
          className={`mx-auto max-w-[850px] text-center transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B00]" />
            <span className="rq-section-badge">
              AI INNOVATION LAB
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B1633] md:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
            Solving Real Business Problems with <span className="text-[#FF6B00]">AI</span>
          </h2>
          {/* <p className="mt-4 text-base leading-relaxed text-[#52627D] md:text-[17px] md:leading-[1.7]">
            Instead of selling AI, we solve measurable business problems with intelligent enterprise solutions
            built for real-world operations.
          </p> */}
        </div>

        <div
          className={`section-block-gap transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          style={{ transitionDelay: inView ? '80ms' : '0ms' }}
        >
          <InnovationValueBar />
        </div>

        <div className="section-block-gap grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {INNOVATION_INDUSTRIES.map((industry, i) => (
            <InnovationIndustryCard
              key={industry.id}
              {...industry}
              accent={INNOVATION_CARD_ACCENTS[i]}
              onNavigate={navigate}
              delay={160 + i * 90}
              inView={inView}
            />
          ))}
        </div>

        <div
          className={`section-block-gap-sm transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          style={{ transitionDelay: inView ? '520ms' : '0ms' }}
        >
          <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-[#E7ECF3] bg-white/90 p-4 shadow-[0_4px_20px_rgba(17,24,39,0.05)] backdrop-blur-sm sm:p-5 lg:flex-row lg:items-center">
            <div className="flex max-w-lg items-start gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#163F35]/20 bg-[#F0F7F4] text-[#163F35]">
                <Sparkles className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="rq-card-title">
                  Every Industry.
                  <br />
                  Every Business Challenge.
                </h3>
                <p className="rq-card-body mt-2">
                  One AI foundation delivering measurable business outcomes across every industry.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigate('/solutions')}
              className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#FF6B00] px-5 text-[15px] font-medium text-white shadow-[0_6px_20px_rgba(255,107,0,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#E55D00] sm:text-base"
            >
              Explore AI Solutions
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── AI SOLUTIONS MARKETPLACE ─── */

const MARKETPLACE_AGENTS = [
  { name: 'AI Sales Agent', icon: TrendingUp },
  { name: 'AI Compliance Agent', icon: ShieldCheck },
  { name: 'AI Procurement Agent', icon: ShoppingCart },
  { name: 'AI Vendor Agent', icon: Users },
  { name: 'AI Service Desk Agent', icon: Headphones },
  { name: 'AI Resident Copilot', icon: User },
  { name: 'AI Security Analyst', icon: ShieldCheck },
  { name: 'AI Executive Assistant', icon: Sparkles },
] as const;

const MARKETPLACE_PLATFORMS = [
  {
    number: '01',
    id: 'mysft',
    name: 'mySFT AI',
    description: 'AI Real Estate Lifecycle & Community Operations Platform.',
    to: '/products#mysft',
    variant: 'mysft' as const,
  },
  {
    number: '02',
    id: 'studio',
    name: 'Requanto Studio',
    description: 'AI Low-Code / No-Code Workflow Platform.',
    to: '/products#studio',
    variant: 'studio' as const,
  },
  {
    number: '03',
    id: 'shield',
    name: 'Requanto Shield',
    description: 'Cybersecurity & GRC Platform.',
    to: '/products#shield',
    variant: 'shield' as const,
  },
  {
    number: '04',
    id: 'command',
    name: 'Requanto Command',
    description: 'Enterprise AI Operations Platform.',
    to: '/products#command',
    variant: 'command' as const,
  },
] as const;

function MarketplaceBackground() {
  const particles = [
    { left: '8%', top: '18%', delay: '0s' },
    { left: '92%', top: '22%', delay: '2s' },
    { left: '15%', top: '72%', delay: '1.2s' },
    { left: '85%', top: '68%', delay: '3.4s' },
  ];

  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-white" />
      <div className="dot-bg pointer-events-none absolute inset-0 opacity-[0.22]" />
      <div className="hero-mesh pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(22,63,53,0.04),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_100%_80%,rgba(255,107,0,0.04),transparent_55%)]" />
      {particles.map((p, i) => (
        <span
          key={i}
          className="marketplace-orbit-dot pointer-events-none absolute h-1 w-1 rounded-full bg-[#FF6B00]/50"
          style={{ left: p.left, top: p.top, animationDelay: p.delay }}
          aria-hidden
        />
      ))}
      <svg className="pointer-events-none absolute left-0 top-24 h-48 w-72 opacity-30" viewBox="0 0 280 160" fill="none" aria-hidden>
        <path d="M0 120 C80 60 160 40 280 80" stroke="#FF6B00" strokeWidth="1.2" strokeOpacity="0.35" />
        <path d="M0 140 C100 90 180 70 280 110" stroke="#FF6B00" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="4 6" />
      </svg>
      <svg className="pointer-events-none absolute right-0 top-32 h-48 w-72 opacity-30" viewBox="0 0 280 160" fill="none" aria-hidden>
        <path d="M280 120 C200 60 120 40 0 80" stroke="#FF6B00" strokeWidth="1.2" strokeOpacity="0.35" />
        <path d="M280 140 C180 90 100 70 0 110" stroke="#FF6B00" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="4 6" />
      </svg>
    </>
  );
}

function PlatformIllustration({ variant }: { variant: 'mysft' | 'studio' | 'shield' | 'command' }) {
  const images = {
    mysft: '/mysft.png',
    studio: '/rquanto.png',
    shield: '/requanto_sheild.png',
    command: '/requantocomand.png',
  } as const;

  const backgrounds = {
    mysft: 'from-[#EEF4F2] to-[#E8F0EC]',
    studio: 'from-[#FFF7F0] via-[#FAFBFC] to-[#EEF2FF]',
    shield: 'from-[#EEF4F2] to-[#D8E8E3]',
    command: 'from-[#E8EDF2] via-[#EEF2F6] to-[#E8F0EC]',
  } as const;

  return (
    <div className={`marketplace-illus-float relative h-full w-full overflow-hidden bg-gradient-to-br ${backgrounds[variant]}`}>
      <img
        src={images[variant]}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
}

function MarketplaceAgentNav({
  activeIndex,
  onSelect,
  onNavigate,
  inView,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
  onNavigate: (to: string) => void;
  inView: boolean;
}) {
  return (
    <div
      className={`relative flex h-full min-h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-[#1a4a3e] via-[#163F35] to-[#0f2d26] p-4 shadow-[0_0_48px_rgba(22,63,53,0.24),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-700 sm:p-5 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-100'}`}
    >
      <div className="pointer-events-none absolute -inset-px rounded-[24px] bg-gradient-to-br from-[#FF6B00]/12 via-transparent to-[#3DD68C]/8 opacity-70" />
      <svg
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 w-full opacity-25"
        viewBox="0 0 400 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0 80 Q100 40 200 70 T400 50 V120 H0 Z" fill="rgba(255,255,255,0.04)" />
        <path d="M0 95 Q120 55 240 85 T400 65" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
        <path d="M0 105 Q80 75 160 95 T320 80" fill="none" stroke="rgba(255,107,0,0.15)" strokeWidth="0.6" strokeDasharray="3 5" />
      </svg>

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#FF6B00]/35 bg-[#0d2420]/80 shadow-[0_0_16px_rgba(255,107,0,0.12)]">
            <Brain className="h-5 w-5 text-[#FF6B00]" strokeWidth={1.5} />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-bold tracking-tight text-white sm:text-[17px]">Enterprise AI Agents</h3>
            <p className="mt-1.5 text-[11px] leading-relaxed text-white/65 sm:text-xs">
              Pre-built AI agents that work across your business to automate tasks, reduce costs, and drive smarter
              decisions.
            </p>
          </div>
        </div>

        <ul className="mt-4 flex-1 space-y-0">
          {MARKETPLACE_AGENTS.map((agent, i) => {
            const Icon = agent.icon;
            const isActive = activeIndex === i;
            return (
              <li key={agent.name}>
                <button
                  type="button"
                  onClick={() => {
                    onSelect(i);
                    onNavigate('/agents');
                  }}
                  className={`group flex w-full items-center gap-2.5 rounded-lg px-1.5 py-2 text-left transition-all duration-300 sm:px-2 sm:py-2.5 ${
                    isActive
                      ? 'bg-white/10 shadow-[0_0_20px_rgba(255,107,0,0.18)] ring-1 ring-[#FF6B00]/30'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-white text-[#111827] shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </div>
                  <span className={`min-w-0 flex-1 text-[11px] font-medium leading-tight sm:text-xs ${isActive ? 'text-white' : 'text-white/90'}`}>
                    {agent.name}
                  </span>
                  <ChevronRight
                    className={`h-3.5 w-3.5 shrink-0 text-[#FF6B00] transition-all duration-300 ${isActive ? 'translate-x-0.5' : 'group-hover:translate-x-1'}`}
                    strokeWidth={2.5}
                  />
                </button>
                {i < MARKETPLACE_AGENTS.length - 1 && (
                  <div className="h-px bg-white/10" aria-hidden />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function MarketplacePlatformCard({
  number,
  name,
  description,
  variant,
  to,
  onNavigate,
  delay,
  inView,
}: {
  number: string;
  name: string;
  description: string;
  variant: 'mysft' | 'studio' | 'shield' | 'command';
  to: string;
  onNavigate: (to: string) => void;
  delay: number;
  inView: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onNavigate(to)}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      className={`group relative flex h-full min-h-[136px] w-full flex-row overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white text-left shadow-[0_2px_16px_rgba(17,24,39,0.05)] transition-all duration-500 hover:border-[#FF6B00]/30 hover:shadow-[0_12px_28px_rgba(17,24,39,0.1)] ${inView ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-100'}`}
    >
      <div className="relative w-[46%] shrink-0 overflow-hidden bg-[#F8FAFC] sm:w-[44%]">
        <span className="absolute left-2.5 top-2.5 z-10 grid h-6 w-6 place-items-center rounded-md bg-[#163F35] text-[10px] font-bold text-white shadow-sm">
          {number}
        </span>
        <PlatformIllustration variant={variant} />
      </div>
      <div className="relative flex min-w-0 flex-1 flex-col justify-center px-3.5 py-3 sm:px-4">
        <h4 className="pr-8 text-[13px] font-bold leading-snug tracking-tight text-[#163F35] sm:text-sm">{name}</h4>
        <p className="mt-1 line-clamp-3 text-[10px] leading-snug text-[#52627D] sm:text-[11px]">{description}</p>
        <span className="absolute bottom-2.5 right-2.5 grid h-7 w-7 place-items-center rounded-full bg-[#FF6B00] text-white shadow-[0_4px_12px_rgba(255,107,0,0.35)] transition-all duration-300 group-hover:scale-105 sm:bottom-3 sm:right-3 sm:h-8 sm:w-8">
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
    </button>
  );
}

function MarketplacePlatformsPanel({
  onNavigate,
  inView,
}: {
  onNavigate: (to: string) => void;
  inView: boolean;
}) {
  return (
    <div className="flex h-full min-h-full flex-col rounded-[24px] border border-[#E5E7EB] bg-white p-4 shadow-[0_4px_24px_rgba(17,24,39,0.05)] sm:p-5 lg:p-6">
      <div className="mb-4 flex shrink-0 items-start gap-3 sm:mb-5">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#E5E7EB] bg-[#F8FAF9] text-[#163F35] shadow-sm">
          <Layers3 className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold tracking-tight text-[#163F35] sm:text-xl">Enterprise Platforms</h3>
          <p className="mt-1 text-xs leading-relaxed text-[#52627D] sm:text-sm">
            Powerful AI-native platforms built for modern enterprises.
          </p>
        </div>
      </div>
      <div className="grid min-h-0 flex-1 auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {MARKETPLACE_PLATFORMS.map((platform, i) => (
          <MarketplacePlatformCard
            key={platform.id}
            number={platform.number}
            name={platform.name}
            description={platform.description}
            variant={platform.variant}
            to={platform.to}
            onNavigate={onNavigate}
            delay={200 + i * 100}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
}

function AgentsSection() {
  const { navigate } = useRoute();
  const { ref, inView } = useInView();
  const [activeAgent, setActiveAgent] = useState(0);

  return (
    <section ref={ref} className="relative overflow-hidden home-section-pad bg-white">
      <MarketplaceBackground />

      <div className="container-rq relative z-10">
        <div
          className={`mx-auto max-w-[760px] text-center transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B00]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#374151]">
              AI Solutions Marketplace
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111827] md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
            Enterprise <span className="text-[#FF6B00]">AI Solutions</span>.
            <br />
            One Marketplace.
          </h2>
          {/* <p className="mt-4 text-base leading-relaxed text-[#52627D] md:text-[17px] md:leading-[1.7]">
            Explore enterprise-ready AI agents and intelligent platforms designed to automate operations,
            strengthen security, improve compliance, and accelerate digital transformation.
          </p> */}
        </div>

        <div className="section-block-gap grid items-stretch gap-5 lg:grid-cols-[34%_66%] lg:gap-6 xl:gap-8">
          <div className="flex h-full w-full min-w-0">
            <MarketplaceAgentNav
              activeIndex={activeAgent}
              onSelect={setActiveAgent}
              onNavigate={navigate}
              inView={inView}
            />
          </div>

          <div className="h-full min-w-0">
            <MarketplacePlatformsPanel onNavigate={navigate} inView={inView} />
          </div>
        </div>

        <div
          className={`section-block-gap-sm transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          style={{ transitionDelay: inView ? '600ms' : '0ms' }}
        >
          <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-[#E7ECF3] bg-white/90 p-4 shadow-[0_4px_20px_rgba(17,24,39,0.05)] backdrop-blur-sm sm:p-5 lg:flex-row lg:items-center">
            <div className="flex max-w-lg items-start gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#163F35]/20 bg-[#F0F7F4] text-[#163F35]">
                <Sparkles className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base font-semibold leading-snug tracking-tight text-[#111827] sm:text-[17px]">
                  One Marketplace.
                  <br />
                  Infinite Enterprise Possibilities.
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#52627D]">
                  Deploy AI agents and enterprise platforms together to modernize operations with a unified AI ecosystem.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigate('/solutions')}
              className="group inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#FF6B00] px-5 text-[13px] font-semibold text-white shadow-[0_6px_20px_rgba(255,107,0,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#E55D00]"
            >
              Explore AI Solutions
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */

function FinalCtaBackground() {
  const particles = [
    { left: '6%', top: '12%', delay: '0s' },
    { left: '88%', top: '18%', delay: '2.4s' },
    { left: '12%', top: '78%', delay: '1.1s' },
    { left: '94%', top: '72%', delay: '3.8s' },
    { left: '48%', top: '8%', delay: '1.8s' },
  ];

  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-white" />
      <div className="dot-bg pointer-events-none absolute inset-0 opacity-[0.18]" />
      <div className="hero-mesh pointer-events-none absolute inset-0 opacity-15" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_30%,rgba(22,63,53,0.04),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_85%_70%,rgba(255,107,0,0.05),transparent_55%)]" />
      {particles.map((p, i) => (
        <span
          key={i}
          className="cta-particle-drift pointer-events-none absolute h-1 w-1 rounded-full bg-[#FF6B00]/45"
          style={{ left: p.left, top: p.top, animationDelay: p.delay }}
          aria-hidden
        />
      ))}
      <svg className="pointer-events-none absolute left-[5%] top-[15%] h-40 w-56 opacity-25" viewBox="0 0 220 140" fill="none" aria-hidden>
        <path d="M0 100 C60 40 140 30 220 70" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M0 115 C80 65 150 55 220 90" stroke="#FF6B00" strokeWidth="0.7" strokeOpacity="0.25" strokeDasharray="4 6" />
      </svg>
      <svg className="pointer-events-none absolute bottom-[10%] right-[4%] h-40 w-56 opacity-25" viewBox="0 0 220 140" fill="none" aria-hidden>
        <path d="M220 100 C160 40 80 30 0 70" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M220 115 C140 65 70 55 0 90" stroke="#FF6B00" strokeWidth="0.7" strokeOpacity="0.25" strokeDasharray="4 6" />
      </svg>
    </>
  );
}

function FinalCtaIllustration() {
  return (
    <div className="relative flex h-full min-h-[280px] w-full items-center justify-center sm:min-h-[320px] lg:min-h-[380px]">
      <img
        src="/cta.png"
        alt="Requanto AI enterprise ecosystem with connected buildings and analytics"
        className="cta-building-float h-auto w-full max-w-[380px] object-contain sm:max-w-[420px] lg:max-w-[480px] xl:max-w-[540px]"
      />
    </div>
  );
}

function FinalCtaButton({
  variant,
  icon: Icon,
  children,
  onClick,
}: {
  variant: 'primary' | 'secondary' | 'outline';
  icon: typeof Calendar;
  children: React.ReactNode;
  onClick: () => void;
}) {
  const styles = {
    primary:
      'border-[#163F35] bg-[#163F35] text-white shadow-[0_8px_24px_rgba(22,63,53,0.22)] hover:shadow-[0_16px_40px_rgba(22,63,53,0.32)] hover:bg-[#1E5A4A]',
    secondary:
      'border-[#E5E7EB] bg-white text-[#111827] shadow-[0_2px_12px_rgba(17,24,39,0.04)] hover:shadow-[0_12px_28px_rgba(17,24,39,0.08)] hover:bg-[#FAFAFA]',
    outline:
      'border-[#E5E7EB] bg-white text-[#111827] shadow-[0_2px_12px_rgba(17,24,39,0.04)] hover:shadow-[0_12px_28px_rgba(17,24,39,0.08)] hover:bg-[#FAFAFA]',
  } as const;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border px-4 text-[13px] font-semibold transition-all duration-300 hover:-translate-y-1 sm:w-auto ${styles[variant]}`}
    >
      <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} />
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}

const FINAL_CTA_TRUST = [
  { label: 'Enterprise Ready', icon: Shield },
  { label: 'Secure & Compliant', icon: Lock },
  { label: 'Proven Outcomes', icon: BarChart3 },
] as const;

function FinalCtaSection() {
  const { navigate } = useRoute();
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative overflow-hidden pb-14 md:pb-16 bg-white">
      <FinalCtaBackground />

      <div className="container-rq relative z-10">
        <div className="overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-[0_8px_32px_rgba(17,24,39,0.05)] sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[52%_48%] lg:gap-10">
            <div
              className={`flex flex-col justify-center transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-100'}`}
            >
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 shadow-sm">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B00]" />
                <span className="rq-section-badge">Final CTA</span>
              </div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B1633] md:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
                Your Industry Is Changing.
                <br />
                The Question Is:
                <br />
                <span className="text-[#FF6B00]">Will Your Technology Lead the Change?</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#52627D] md:text-[17px] md:leading-[1.7]">
                Build AI-native operations with{' '}
                <span className="font-semibold text-[#111827]">Requanto Technologies.</span>
              </p>

              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <FinalCtaButton variant="primary" icon={Calendar} onClick={() => navigate('/contact#consultation')}>
                  Book a Consultation
                </FinalCtaButton>
                <FinalCtaButton variant="secondary" icon={User} onClick={() => navigate('/contact')}>
                  Talk to an Expert
                </FinalCtaButton>
                <FinalCtaButton variant="outline" icon={Lightbulb} onClick={() => navigate('/solutions')}>
                  Explore AI Solutions
                </FinalCtaButton>
              </div>

              <div
                className={`mt-8 flex flex-col gap-4 border-t border-[#E5E7EB] pt-6 transition-all duration-700 sm:flex-row sm:items-center sm:gap-0 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-70'}`}
                style={{ transitionDelay: inView ? '300ms' : '0ms' }}
              >
                {FINAL_CTA_TRUST.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex flex-1 items-center sm:justify-start lg:justify-center">
                      {i > 0 && (
                        <div className="mx-4 hidden h-6 w-px shrink-0 bg-[#E5E7EB] sm:block" aria-hidden />
                      )}
                      <div className="flex items-center gap-2">
                        <Icon className="h-3.5 w-3.5 shrink-0 text-[#6B7280]" strokeWidth={1.75} />
                        <span className="text-xs font-medium text-[#6B7280] sm:text-[13px]">{item.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className={`flex h-full w-full items-center justify-center transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-100'}`}
              style={{ transitionDelay: inView ? '150ms' : '0ms' }}
            >
              <FinalCtaIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}