import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, '../src/views/HomePage.tsx');
let content = fs.readFileSync(file, 'utf8');

const start = content.indexOf('/* ─── INNOVATION LAB ─── */');
const end = content.indexOf('const NETWORK_AGENT_LAYOUT');
if (start === -1 || end === -1) throw new Error('Markers not found');

const replacement = `/* ─── INNOVATION LAB ─── */

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
    banner: 'from-[#163F35] via-[#1a4a3e] to-[#214635]',
    problems: ['Slow sales cycles', 'Manual vendor management', 'Poor operational visibility'],
    solutions: ['Lead prediction', 'Vendor intelligence', 'Service automation', 'Resident AI assistant'],
    to: '/innovation-lab#realestate',
  },
  {
    id: 'healthcare',
    title: 'AI for Healthcare',
    icon: Activity,
    banner: 'from-[#0f2d3d] via-[#163F35] to-[#1a4a3e]',
    problems: ['Administrative burden', 'Compliance complexity'],
    solutions: ['Document intelligence', 'Workflow automation', 'Compliance monitoring'],
    to: '/innovation-lab#healthcare',
  },
  {
    id: 'manufacturing',
    title: 'AI for Manufacturing',
    icon: Factory,
    banner: 'from-[#1a3a32] via-[#163F35] to-[#0d2420]',
    problems: ['Procurement delays', 'Vendor inefficiencies'],
    solutions: ['Predictive procurement', 'Supplier intelligence', 'Operational analytics'],
    to: '/innovation-lab#manufacturing',
  },
  {
    id: 'financial',
    title: 'AI for Financial Services',
    icon: Banknote,
    banner: 'from-[#111827] via-[#163F35] to-[#214635]',
    problems: ['Regulatory complexity', 'Operational risk'],
    solutions: ['Risk intelligence', 'Audit automation', 'Compliance workflows'],
    to: '/innovation-lab#financial',
  },
  {
    id: 'smart',
    title: 'AI for Smart Communities',
    icon: Network,
    banner: 'from-[#163528] via-[#163F35] to-[#1f6b52]',
    problems: ['Resident complaints', 'Manual service management'],
    solutions: ['Resident Copilot', 'Visitor intelligence', 'AI maintenance operations'],
    to: '/innovation-lab#smart',
  },
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
          className="what-we-do-particle pointer-events-none absolute h-1 w-1 rounded-full bg-[#FF6B00]/45"
          style={{ left: p.left, top: p.top, animationDelay: p.delay }}
          aria-hidden
        />
      ))}
      <svg className="pointer-events-none absolute left-0 top-16 h-40 w-56 opacity-35" viewBox="0 0 200 120" fill="none" aria-hidden>
        <path d="M0 90 C50 50 90 30 140 45 C170 55 190 70 200 85" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.3" />
      </svg>
      <svg className="pointer-events-none absolute right-0 top-20 h-40 w-56 opacity-35" viewBox="0 0 200 120" fill="none" aria-hidden>
        <path d="M200 90 C150 50 110 30 60 45 C30 55 10 70 0 85" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.3" />
      </svg>
    </>
  );
}

function InnovationValueBar() {
  return (
    <div className="grid grid-cols-1 border-y border-[#E7ECF3] sm:grid-cols-2 xl:grid-cols-4">
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
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#E7ECF3] bg-[#FAFBFC] text-[#163F35] shadow-sm">
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-[15px] font-semibold text-[#111827]">{block.title}</div>
              <p className="mt-1 text-[13px] leading-snug text-[#6B7280]">{block.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function InnovationIndustryCard({
  title,
  icon: Icon,
  banner,
  problems,
  solutions,
  to,
  onNavigate,
  delay,
  inView,
}: {
  title: string;
  icon: typeof Building2;
  banner: string;
  problems: readonly string[];
  solutions: readonly string[];
  to: string;
  onNavigate: (to: string) => void;
  delay: number;
  inView: boolean;
}) {
  return (
    <article
      className={\`group flex h-[560px] flex-col overflow-hidden rounded-3xl border border-[#E7ECF3] bg-white shadow-[0_4px_24px_rgba(17,24,39,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(17,24,39,0.1)] \${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}\`}
      style={{ transitionDelay: inView ? \`\${delay}ms\` : '0ms' }}
    >
      <div className={\`relative h-[200px] shrink-0 overflow-hidden bg-gradient-to-br \${banner}\`}>
        <div className="innovation-card-zoom absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/70 via-[#111827]/25 to-transparent" />
        <div className="absolute bottom-0 left-5 translate-y-1/2">
          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/30 bg-white/95 text-[#163F35] shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:rotate-6">
            <Icon className="h-5 w-5" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-10">
        <h3 className="text-base font-semibold tracking-tight text-[#111827]">{title}</h3>

        <div className="mt-4 flex-1 space-y-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#FF6B00]">Problems</span>
            <ul className="mt-2 space-y-1.5">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[12px] leading-snug text-[#52627D]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B00]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#163F35]">AI Solutions</span>
            <ul className="mt-2 space-y-1.5">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[12px] leading-snug text-[#52627D]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#163F35]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-auto border-t border-[#E7ECF3] pt-4">
          <button
            type="button"
            onClick={() => onNavigate(to)}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#FF6B00] transition-colors hover:text-[#E55D00]"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-[#E7ECF3] bg-white pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-20 lg:pt-[140px]"
    >
      <InnovationLabBackground />

      <div className="container-rq relative z-10">
        <div
          className={\`mx-auto max-w-[720px] text-center transition-all duration-700 \${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}\`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B00]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#374151]">
              AI Innovation Lab
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111827] md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
            Solving Real Business Problems with <span className="text-[#FF6B00]">AI</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#52627D] md:text-[17px] md:leading-[1.7]">
            Instead of selling AI, we solve measurable business problems with intelligent enterprise solutions
            built for real-world operations.
          </p>
        </div>

        <div
          className={\`mt-12 transition-all duration-700 md:mt-14 \${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}\`}
          style={{ transitionDelay: inView ? '80ms' : '0ms' }}
        >
          <InnovationValueBar />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 xl:grid-cols-5">
          {INNOVATION_INDUSTRIES.map((industry, i) => (
            <InnovationIndustryCard
              key={industry.id}
              {...industry}
              onNavigate={navigate}
              delay={160 + i * 90}
              inView={inView}
            />
          ))}
        </div>

        <div
          className={\`mt-12 transition-all duration-700 md:mt-14 \${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}\`}
          style={{ transitionDelay: inView ? '520ms' : '0ms' }}
        >
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-[#E7ECF3] bg-white/85 p-6 shadow-[0_8px_32px_rgba(17,24,39,0.06)] backdrop-blur-sm sm:p-8 lg:flex-row lg:items-center">
            <div className="flex max-w-xl items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#FF6B00]/20 bg-[#FFF7F0] text-[#FF6B00]">
                <Sparkles className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#111827] md:text-2xl">
                  Every Industry.
                  <br />
                  Every Business Challenge.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#52627D] md:text-[15px]">
                  One AI foundation delivering measurable business outcomes across every industry.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigate('/solutions')}
              className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-6 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(255,107,0,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#E55D00]"
            >
              Explore AI Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

`;

content = content.slice(0, start) + replacement + content.slice(end);
fs.writeFileSync(file, content);
console.log('Patched Innovation Lab section');
