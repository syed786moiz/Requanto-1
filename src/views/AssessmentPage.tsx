'use client';

import { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Brain, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, Zap, TrendingUp, FileDown, RefreshCw, AlertCircle } from 'lucide-react';
import { useRoute } from '../lib/router';

type Question = {
  id: string;
  text: string;
  dimension: 'ai' | 'security' | 'digital';
  options: { label: string; value: number }[];
};

const QUESTIONS: Question[] = [
  { id: 'q1', text: 'How would you rate your organization\'s current AI adoption?', dimension: 'ai',
    options: [{ label: 'Exploring', value: 1 }, { label: 'Pilots underway', value: 2 }, { label: 'Production AI', value: 3 }, { label: 'AI-native', value: 4 }] },
  { id: 'q2', text: 'Is your data ready for AI use cases?', dimension: 'ai',
    options: [{ label: 'Siloed / poor quality', value: 1 }, { label: 'Partial', value: 2 }, { label: 'Mostly ready', value: 3 }, { label: 'Governed & AI-ready', value: 4 }] },
  { id: 'q3', text: 'Do you have an AI governance framework?', dimension: 'ai',
    options: [{ label: 'None', value: 1 }, { label: 'Informal', value: 2 }, { label: 'Documented', value: 3 }, { label: 'Enforced & audited', value: 4 }] },
  { id: 'q4', text: 'How mature is your cybersecurity program?', dimension: 'security',
    options: [{ label: 'Basic', value: 1 }, { label: 'Reactive', value: 2 }, { label: 'Programmatic', value: 3 }, { label: 'Optimized', value: 4 }] },
  { id: 'q5', text: 'Is MFA enforced across your organization?', dimension: 'security',
    options: [{ label: 'No', value: 1 }, { label: 'Partial', value: 2 }, { label: 'Most users', value: 3 }, { label: 'Universal + phishing-resistant', value: 4 }] },
  { id: 'q6', text: 'How do you handle incident response?', dimension: 'security',
    options: [{ label: 'Ad hoc', value: 1 }, { label: 'Documented, rarely tested', value: 2 }, { label: 'Tested annually', value: 3 }, { label: 'Continuous & automated', value: 4 }] },
  { id: 'q7', text: 'How would you describe your vendor risk management?', dimension: 'security',
    options: [{ label: 'None', value: 1 }, { label: 'Spreadsheet-based', value: 2 }, { label: 'Platform-tracked', value: 3 }, { label: 'Continuous monitoring', value: 4 }] },
  { id: 'q8', text: 'Where is your digital transformation maturity?', dimension: 'digital',
    options: [{ label: 'Early', value: 1 }, { label: 'Tactical', value: 2 }, { label: 'Strategic', value: 3 }, { label: 'Digital-first', value: 4 }] },
  { id: 'q9', text: 'How automated are your core workflows?', dimension: 'digital',
    options: [{ label: 'Manual', value: 1 }, { label: 'Some automation', value: 2 }, { label: 'Workflow platform', value: 3 }, { label: 'AI-orchestrated', value: 4 }] },
  { id: 'q10', text: 'How would you rate cloud adoption?', dimension: 'digital',
    options: [{ label: 'On-prem', value: 1 }, { label: 'Hybrid, early', value: 2 }, { label: 'Cloud-first', value: 3 }, { label: 'Cloud-native + FinOps', value: 4 }] },
];

export default function AssessmentPage() {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [current, setCurrent] = useState(0);
  const [completed, setCompleted] = useState(false);
  const { navigate } = useRoute();

  const q = QUESTIONS[current];
  const answered = Object.keys(answers).length;
  const allAnswered = answered === QUESTIONS.length;

  function answer(value: number) {
    setAnswers({ ...answers, [q.id]: value });
    if (current < QUESTIONS.length - 1) {
      setTimeout(() => setCurrent(current + 1), 200);
    } else {
      setTimeout(() => setCompleted(true), 200);
    }
  }

  function score(dim: 'ai' | 'security' | 'digital') {
    const dimQs = QUESTIONS.filter((x) => x.dimension === dim);
    const max = dimQs.length * 4;
    const total = dimQs.reduce((acc, x) => acc + (answers[x.id] || 0), 0);
    return Math.round((total / max) * 100);
  }

  function reset() {
    setAnswers({});
    setCurrent(0);
    setCompleted(false);
    setStarted(false);
  }

  return (
    <>
      <PageHero
        eyebrow="AI Readiness Assessment"
        title="Measure your"
        highlight="AI maturity."
        description="Ten questions. Three scores — AI maturity, cybersecurity posture and digital transformation. Instant recommendations."
        ctas={[{ label: 'Talk to an Expert', to: '/contact#expert', variant: 'outline' }]}
      />

      <section className="section">
        <div className="container-rq">
          <div className="mx-auto max-w-2xl">
            {!started && !completed && (
              <StartCard onStart={() => setStarted(true)} />
            )}
            {started && !completed && (
              <div className="rounded-2xl border border-ink-200/70 bg-white p-6 shadow-premiumLg sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">
                    <Brain size={12} className="text-brand-600" />
                    Question {current + 1} of {QUESTIONS.length}
                  </span>
                  <span className="text-xs text-ink-500">{answered}/{QUESTIONS.length} answered</span>
                </div>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                  <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400 transition-all duration-500" style={{ width: `${(answered / QUESTIONS.length) * 100}%` }} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink-900">{q.text}</h3>
                <div className="mt-5 grid gap-2.5">
                  {q.options.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => answer(opt.value)}
                      className={`group flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ${
                        answers[q.id] === opt.value
                          ? 'border-brand-400 bg-brand-50 text-ink-900'
                          : 'border-ink-200 bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50/40'
                      }`}
                    >
                      {opt.label}
                      <span className="text-xs text-ink-400 group-hover:text-brand-600">{['Getting started', 'Emerging', 'Maturing', 'Optimized'][opt.value - 1]}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setCurrent(Math.max(0, current - 1))}
                    disabled={current === 0}
                    className="btn-ghost disabled:opacity-40"
                  >
                    <ArrowLeft size={15} /> Previous
                  </button>
                  {allAnswered ? (
                    <button onClick={() => setCompleted(true)} className="btn-accent">
                      See my score <ArrowRight size={15} />
                    </button>
                  ) : (
                    <button
                      onClick={() => current < QUESTIONS.length - 1 && setCurrent(current + 1)}
                      disabled={current === QUESTIONS.length - 1}
                      className="btn-ghost disabled:opacity-40"
                    >
                      Next <ArrowRight size={15} />
                    </button>
                  )}
                </div>
              </div>
            )}
            {completed && (
              <ResultsCard scores={{ ai: score('ai'), security: score('security'), digital: score('digital') }} onReset={reset} onAction={() => navigate('/contact#consultation')} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function StartCard({ onStart }: { onStart: () => void }) {
  return (
    <div className="rounded-2xl border border-ink-200/70 bg-white p-6 shadow-premiumLg sm:p-10">
      <div className="text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-ink-900 text-accent">
          <Brain size={26} />
        </span>
        <h3 className="mt-5 text-2xl font-bold text-ink-900">Assess your AI readiness</h3>
        <p className="mt-3 text-ink-600">
          A 10-question assessment that benchmarks your organization across three dimensions — with tailored recommendations from Requanto.
        </p>
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {[
          { icon: Brain, label: 'AI Maturity' },
          { icon: ShieldCheck, label: 'Cybersecurity' },
          { icon: TrendingUp, label: 'Digital Transformation' },
        ].map((d) => (
          <div key={d.label} className="rounded-xl border border-ink-200/70 bg-section/50 p-4 text-center">
            <d.icon size={20} className="mx-auto text-brand-600" />
            <div className="mt-2 text-sm font-semibold text-ink-800">{d.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button onClick={onStart} className="btn-accent">
          Start assessment <ArrowRight size={15} />
        </button>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-ink-500">
        <AlertCircle size={12} /> Takes about 3 minutes · No email required to preview results
      </div>
    </div>
  );
}

function ResultsCard({ scores, onReset, onAction }: { scores: { ai: number; security: number; digital: number }; onReset: () => void; onAction: () => void }) {
  const overall = Math.round((scores.ai + scores.security + scores.digital) / 3);
  const stage = overall >= 80 ? 'AI-Native' : overall >= 60 ? 'Maturing' : overall >= 40 ? 'Emerging' : 'Getting Started';
  const recs = [
    scores.ai < 70 && 'Accelerate AI adoption with structured use-case discovery and a governance framework.',
    scores.security < 70 && 'Strengthen your security posture — start with MFA, asset inventory and incident readiness.',
    scores.digital < 70 && 'Modernize workflows with a low-code automation platform and cloud transformation.',
  ].filter(Boolean) as string[];

  return (
    <div className="rounded-2xl border border-ink-200/70 bg-white p-6 shadow-premiumLg sm:p-8">
      <div className="flex items-center justify-between">
        <span className="eyebrow">
          <CheckCircle2 size={12} className="text-success" />
          Your AI Readiness Score
        </span>
        <span className="rounded-full bg-section px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-500">{stage}</span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-4">
        <div className="rounded-xl bg-gradient-to-br from-ink-900 to-ink-800 p-5 text-white sm:col-span-1">
          <div className="text-[11px] uppercase tracking-wide text-ink-400">Overall</div>
          <div className="mt-1 text-4xl font-bold text-accent">{overall}</div>
          <div className="mt-1 text-xs text-ink-300">/ 100</div>
        </div>
        {[
          { label: 'AI Maturity', value: scores.ai, icon: Brain, color: 'from-brand-500 to-brand-400' },
          { label: 'Cybersecurity', value: scores.security, icon: ShieldCheck, color: 'from-success to-emerald-400' },
          { label: 'Digital Transformation', value: scores.digital, icon: TrendingUp, color: 'from-accent to-accent-dark' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-ink-200/70 bg-white p-5">
            <div className="flex items-center gap-2">
              <s.icon size={16} className="text-brand-600" />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-500">{s.label}</span>
            </div>
            <div className="mt-2 text-3xl font-bold text-ink-900">{s.value}</div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
              <div className={`h-full rounded-full bg-gradient-to-r ${s.color}`} style={{ width: `${s.value}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-500">Recommendations</div>
        <ul className="space-y-2.5">
          {recs.length > 0 ? recs.map((r) => (
            <li key={r} className="flex items-start gap-2 rounded-lg border border-ink-100 bg-section/40 px-3 py-2.5 text-sm text-ink-700">
              <Zap size={14} className="mt-0.5 shrink-0 text-accent-dark" />
              {r}
            </li>
          )) : (
            <li className="flex items-center gap-2 rounded-lg border border-success/20 bg-success/5 px-3 py-2.5 text-sm text-ink-700">
              <CheckCircle2 size={14} className="text-success" />
              You're AI-native — let's continue scaling with Requanto.
            </li>
          )}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button onClick={onAction} className="btn-accent">
          Schedule a strategy session <ArrowRight size={15} />
        </button>
        <button onClick={() => window.print()} className="btn-outline">
          <FileDown size={15} /> Download report
        </button>
        <button onClick={onReset} className="btn-ghost">
          <RefreshCw size={15} /> Retake
        </button>
      </div>
    </div>
  );
}
