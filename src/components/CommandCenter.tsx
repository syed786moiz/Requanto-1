'use client';

import { Activity, Cpu, ShieldCheck, Building2, Workflow, Network, TrendingUp, Bot, Gauge } from 'lucide-react';

type Node = { id: string; label: string; icon: any; angle: number; ring: number; metric?: string; value?: string; status?: string };

const NODES: Node[] = [
  { id: 'realestate', label: 'Real Estate', icon: Building2, angle: -90, ring: 1, value: '92', metric: 'Lead Score' },
  { id: 'finance', label: 'Financial Svcs', icon: TrendingUp, angle: -54, ring: 1, value: '-48%', metric: 'False Positives', status: 'ok' },
  { id: 'cyber', label: 'Cybersecurity', icon: ShieldCheck, angle: -18, ring: 1, value: 'A+', metric: 'Posture' },
  { id: 'procurement', label: 'Procurement', icon: Workflow, angle: 18, ring: 1, value: '-37%', metric: 'Cycle Time', status: 'ok' },
  { id: 'vendor', label: 'Vendor Intel', icon: Network, angle: 54, ring: 1, value: '210', metric: 'Monitored' },
  { id: 'ops', label: 'Operations', icon: Activity, angle: 90, ring: 1, value: '99.8%', metric: 'Uptime', status: 'ok' },
];

const RING2: Node[] = [
  { id: 'ai1', label: 'AI Agent', icon: Bot, angle: -75, ring: 2 },
  { id: 'ai2', label: 'AI Agent', icon: Bot, angle: -25, ring: 2 },
  { id: 'ai3', label: 'AI Agent', icon: Bot, angle: 25, ring: 2 },
  { id: 'ai4', label: 'AI Agent', icon: Bot, angle: 75, ring: 2 },
  { id: 'ai5', label: 'Insight', icon: Cpu, angle: 125, ring: 2 },
  { id: 'ai6', label: 'Insight', icon: Cpu, angle: 175, ring: 2 },
];

export function CommandCenter() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* backdrop rings */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="absolute h-[88%] w-[88%] rounded-full border border-ink-200/60" />
        <div className="absolute h-[64%] w-[64%] rounded-full border border-ink-200/60" />
        <div className="absolute h-[40%] w-[40%] rounded-full border border-ink-200/70" />
      </div>

      {/* rotating dotted ring */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="h-[88%] w-[88%] rounded-full border border-dashed border-brand-200/70 animate-[orbit-slow_60s_linear_infinite]" />
        <div className="absolute h-[64%] w-[64%] rounded-full border border-dashed border-accent/40 animate-[orbit-rev_45s_linear_infinite]" />
      </div>

      {/* center hub */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative grid h-32 w-32 place-items-center rounded-full bg-ink-900 text-white shadow-premiumLg">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-600/30 to-transparent" />
          <div className="absolute -inset-2 rounded-full bg-brand-500/10 blur-xl animate-pulseGlow" />
          <div className="relative flex flex-col items-center">
            <Gauge size={26} className="text-accent" />
            <span className="mt-1 text-[15px] font-bold tracking-tight">Requanto</span>
            <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-ink-400">Platform</span>
          </div>
        </div>
      </div>

      {/* connections */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none" aria-hidden>
        {NODES.map((n, i) => {
          const radius = n.ring === 1 ? 38 : 48;
          const x = 50 + radius * Math.cos((n.angle * Math.PI) / 180);
          const y = 50 + radius * Math.sin((n.angle * Math.PI) / 180);
          return (
            <line
              key={n.id}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke="url(#linkGrad)"
              strokeWidth="0.4"
              strokeDasharray="2 2"
              className={i % 2 === 0 ? 'animate-dash' : ''}
            />
          );
        })}
        <defs>
          <linearGradient id="linkGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.15" />
          </linearGradient>
        </defs>
      </svg>

      {/* nodes */}
      {NODES.map((n) => (
        <NetworkNode key={n.id} node={n} radius={38} />
      ))}
      {RING2.map((n) => (
        <NetworkNode key={n.id} node={n} radius={48} small />
      ))}

      {/* floating metric chips — hidden on small screens to avoid overflow */}
      <div className="absolute -left-4 top-6 hidden animate-float-y sm:block" style={{ animationDelay: '0.4s' }}>
        <MetricChip icon={Activity} label="Live Workflows" value="1,284" trend="+12%" />
      </div>
      <div className="absolute -right-2 top-24 hidden animate-float-y sm:block" style={{ animationDelay: '1.2s' }}>
        <MetricChip icon={Bot} label="AI Agents" value="37" trend="Active" accent />
      </div>
      <div className="absolute -left-2 bottom-10 hidden animate-float-y sm:block" style={{ animationDelay: '0.8s' }}>
        <MetricChip icon={ShieldCheck} label="Risk Score" value="92" trend="A+" />
      </div>
    </div>
  );
}

function NetworkNode({ node, radius, small = false }: { node: Node; radius: number; small?: boolean }) {
  const x = 50 + radius * Math.cos((node.angle * Math.PI) / 180);
  const y = 50 + radius * Math.sin((node.angle * Math.PI) / 180);

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className={`group relative flex flex-col items-center ${small ? 'scale-90' : ''}`}>
        <div className={`relative grid place-items-center rounded-2xl border border-ink-200/80 bg-white shadow-premium transition-transform hover:scale-110 ${small ? 'h-10 w-10' : 'h-14 w-14'}`}>
          <node.icon size={small ? 16 : 20} className={node.status === 'ok' ? 'text-success' : 'text-brand-600'} />
          {node.status === 'ok' && (
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-success" />
          )}
        </div>
        {!small && (
          <div className="mt-1.5 flex flex-col items-center">
            <span className="text-[10px] font-semibold text-ink-700">{node.label}</span>
            {node.value && <span className="text-[10px] font-bold text-brand-600">{node.value}</span>}
          </div>
        )}
      </div>
    </div>
  );
}

function MetricChip({ icon: Icon, label, value, trend, accent }: { icon: any; label: string; value: string; trend?: string; accent?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-ink-200/70 bg-white/80 px-3 py-2 shadow-premium backdrop-blur-md">
      <span className={`grid h-8 w-8 place-items-center rounded-lg ${accent ? 'bg-accent/20 text-ink-900' : 'bg-brand-50 text-brand-600'}`}>
        <Icon size={15} />
      </span>
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] text-ink-500">{label}</span>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-bold text-ink-900">{value}</span>
          {trend && <span className="text-[10px] font-semibold text-success">{trend}</span>}
        </div>
      </div>
    </div>
  );
}
