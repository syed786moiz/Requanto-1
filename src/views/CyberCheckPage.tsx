'use client';

import { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { ShieldCheck, ArrowRight, CheckCircle2, AlertTriangle, FileDown, RefreshCw, Lock, HardHat, Activity, Users, FileCheck } from 'lucide-react';
import { useRoute } from '../lib/router';

type Check = {
  id: string;
  label: string;
  icon: any;
  options: { label: string; value: number }[];
};

const CHECKS: Check[] = [
  { id: 'mfa', label: 'Multi-Factor Authentication', icon: Lock,
    options: [{ label: 'Not enforced', value: 0 }, { label: 'Some users', value: 1 }, { label: 'Most users', value: 2 }, { label: 'Universal + phishing-resistant', value: 3 }] },
  { id: 'assets', label: 'Asset Inventory', icon: HardHat,
    options: [{ label: 'None', value: 0 }, { label: 'Manual', value: 1 }, { label: 'Automated, partial', value: 2 }, { label: 'Real-time & complete', value: 3 }] },
  { id: 'incident', label: 'Incident Response', icon: Activity,
    options: [{ label: 'No plan', value: 0 }, { label: 'Documented', value: 1 }, { label: 'Tested annually', value: 2 }, { label: 'Continuous & automated', value: 3 }] },
  { id: 'vendor', label: 'Vendor Security', icon: Users,
    options: [{ label: 'None', value: 0 }, { label: 'Spreadsheets', value: 1 }, { label: 'Platform-tracked', value: 2 }, { label: 'Continuous monitoring', value: 3 }] },
  { id: 'compliance', label: 'Compliance Readiness', icon: FileCheck,
    options: [{ label: 'Unknown', value: 0 }, { label: 'Gap analysis', value: 1 }, { label: 'Programmatic', value: 2 }, { label: 'Audit-ready & ongoing', value: 3 }] },
];

export default function CyberCheckPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const { navigate } = useRoute();

  const allAnswered = Object.keys(answers).length === CHECKS.length;
  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const max = CHECKS.length * 3;
  const score = Math.round((total / max) * 100);
  const grade = score >= 85 ? 'A+' : score >= 70 ? 'A' : score >= 55 ? 'B' : score >= 40 ? 'C' : 'D';
  const posture = score >= 70 ? 'Strong' : score >= 45 ? 'Developing' : 'At Risk';

  return (
    <>
      <PageHero
        eyebrow="Cybersecurity Health Check"
        title="Know your"
        highlight="security posture."
        description="A fast assessment across MFA, assets, incident response, vendor security and compliance. Get your scorecard and recommendations."
        ctas={[{ label: 'Schedule vCISO', to: '/services#vciso', variant: 'outline' }]}
      />

      <section className="section">
        <div className="container-rq">
          <div className="mx-auto max-w-2xl">
            {!showResults && (
              <div className="rounded-2xl border border-ink-200/70 bg-white p-6 shadow-premiumLg sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">
                    <ShieldCheck size={12} className="text-brand-600" />
                    Cybersecurity assessment
                  </span>
                  <span className="text-xs text-ink-500">{Object.keys(answers).length}/{CHECKS.length} answered</span>
                </div>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                  <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400 transition-all duration-500" style={{ width: `${(Object.keys(answers).length / CHECKS.length) * 100}%` }} />
                </div>

                <div className="mt-6 space-y-5">
                  {CHECKS.map((c) => {
                    const Icon = c.icon;
                    const selected = answers[c.id];
                    return (
                      <div key={c.id} className="rounded-xl border border-ink-200/70 bg-section/40 p-4">
                        <div className="flex items-center gap-2">
                          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-600">
                            <Icon size={16} />
                          </span>
                          <span className="text-sm font-semibold text-ink-900">{c.label}</span>
                          {selected !== undefined && (
                            <CheckCircle2 size={14} className="ml-auto text-success" />
                          )}
                        </div>
                        <div className="mt-3 grid gap-1.5 sm:grid-cols-2">
                          {c.options.map((opt) => (
                            <button
                              key={opt.label}
                              onClick={() => setAnswers({ ...answers, [c.id]: opt.value })}
                              className={`rounded-lg border px-3 py-2 text-left text-xs font-medium transition-all ${
                                selected === opt.value
                                  ? 'border-brand-400 bg-brand-50 text-ink-900'
                                  : 'border-ink-200 bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50/40'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-ink-500">All questions required to generate score.</span>
                  <button
                    onClick={() => setShowResults(true)}
                    disabled={!allAnswered}
                    className="btn-accent disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Generate score <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            )}

            {showResults && (
              <div className="rounded-2xl border border-ink-200/70 bg-white p-6 shadow-premiumLg sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">
                    <CheckCircle2 size={12} className="text-success" />
                    Your Security Scorecard
                  </span>
                  <span className="rounded-full bg-section px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-500">{posture}</span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-gradient-to-br from-ink-900 to-ink-800 p-5 text-white sm:col-span-1">
                    <div className="text-[11px] uppercase tracking-wide text-ink-400">Overall Score</div>
                    <div className="mt-1 text-5xl font-bold text-accent">{score}</div>
                    <div className="mt-1 text-xs text-ink-300">Grade {grade} · / 100</div>
                  </div>
                  <div className="rounded-xl border border-ink-200/70 bg-white p-5 sm:col-span-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-ink-500">Per-Control Breakdown</div>
                    <div className="mt-3 space-y-2.5">
                      {CHECKS.map((c) => {
                        const v = answers[c.id];
                        const pct = Math.round((v / 3) * 100);
                        return (
                          <div key={c.id} className="flex items-center gap-3">
                            <c.icon size={14} className="text-ink-500" />
                            <span className="w-40 shrink-0 text-xs font-medium text-ink-700">{c.label}</span>
                            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink-100">
                              <div className={`h-full rounded-full ${pct >= 67 ? 'bg-success' : pct >= 34 ? 'bg-warning' : 'bg-danger'}`} style={{ width: `${pct}%` }} />
                            </div>
                            <span className="text-[10px] font-bold text-ink-600">{pct}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-brand-100 bg-brand-50/40 p-4">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck size={16} className="mt-0.5 shrink-0 text-brand-600" />
                    <div>
                      <div className="text-sm font-semibold text-ink-900">Requanto recommendation</div>
                      <p className="mt-1 text-sm text-ink-600">
                        {score < 70
                          ? 'Engage a Requanto Virtual CISO to build a measurable remediation roadmap, prioritizing MFA, asset inventory and incident readiness.'
                          : 'You have a strong foundation — Requanto can optimize with continuous monitoring, third-party risk and AI-powered threat detection.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button onClick={() => navigate('/services#vciso')} className="btn-accent">
                    Schedule a vCISO engagement <ArrowRight size={15} />
                  </button>
                  <button onClick={() => window.print()} className="btn-outline">
                    <FileDown size={15} /> Download report
                  </button>
                  <button onClick={() => { setAnswers({}); setShowResults(false); }} className="btn-ghost">
                    <RefreshCw size={15} /> Retake
                  </button>
                </div>
              </div>
            )}

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-ink-500">
              <AlertTriangle size={12} /> Indicative assessment · not a substitute for an expert security audit
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
