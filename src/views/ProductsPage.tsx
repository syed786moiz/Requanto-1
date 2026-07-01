'use client';

import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useReveal } from '../lib/hooks';
import { PRODUCTS, type Product } from '../data/content';
import { ArrowRight, CheckCircle2, Layers, Grid3x3 } from 'lucide-react';
import { useRoute } from '../lib/router';

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="A product hub for"
        highlight="enterprise AI."
        description="Ten connected AI platforms — from real estate lifecycle to GRC to financial operations — all built on the Requanto intelligence layer."
        ctas={[
          { label: 'Request a Demo', to: '/contact#demo', variant: 'accent' },
          { label: 'Talk to an Expert', to: '/contact#expert', variant: 'outline' },
        ]}
      />

      <section className="section">
        <div className="container-rq">
          <SectionHeading
            align="left"
            eyebrow="Platform Hub"
            title={<>Premium cards for every <span className="gradient-text">enterprise need.</span></>}
            description="Explore the full Requanto product family — vertically deep, horizontally connected."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ProductDeepDive />
    </>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { ref, visible } = useReveal();
  const { navigate } = useRoute();
  const Icon = product.icon;
  const accentCls =
    product.accent === 'accent'
      ? 'bg-accent/20 text-ink-900'
      : 'bg-brand-50 text-brand-600';

  return (
    <div ref={ref} className={`reveal reveal-delay-${(index % 3) + 1} ${visible ? 'is-visible' : ''}`}>
      <div
        id={product.id}
        className="group flex h-full scroll-mt-24 flex-col rounded-2xl border border-ink-200/70 bg-white p-6 shadow-premium transition-all hover:-translate-y-1.5 hover:shadow-premiumLg"
      >
        <div className="flex items-start justify-between">
          <span className={`grid h-12 w-12 place-items-center rounded-xl ${accentCls} transition-transform group-hover:scale-110`}>
            <Icon size={22} />
          </span>
          <span className="rounded-full bg-section px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-500">
            {product.category}
          </span>
        </div>
        <h3 className="mt-5 text-lg font-bold text-ink-900">{product.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{product.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {product.modules.slice(0, 5).map((m) => (
            <span key={m} className="rounded-md border border-ink-100 bg-section/60 px-2 py-0.5 text-[11px] font-medium text-ink-600">
              {m}
            </span>
          ))}
          {product.modules.length > 5 && (
            <span className="rounded-md border border-brand-100 bg-brand-50/60 px-2 py-0.5 text-[11px] font-semibold text-brand-700">
              +{product.modules.length - 5} more
            </span>
          )}
        </div>

        <button
          onClick={() => navigate(`/products#${product.id}`)}
          className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-transform group-hover:translate-x-1"
        >
          Explore platform <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

function ProductDeepDive() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <section className="section bg-section">
      <div className="container-rq space-y-16">
        <SectionHeading
          align="left"
          eyebrow="Flagship Platforms"
          title={<>A closer look at the <span className="gradient-text">core four.</span></>}
          description="The four platforms that anchor the Requanto ecosystem."
        />
        {featured.map((p, i) => (
          <DeepDiveRow key={p.id} product={p} reversed={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function DeepDiveRow({ product, reversed }: { product: Product; reversed: boolean }) {
  const { ref, visible } = useReveal();
  const Icon = product.icon;
  return (
    <div id={product.id} ref={ref} className={`scroll-mt-24 grid items-center gap-8 lg:grid-cols-2 lg:gap-14 reveal ${visible ? 'is-visible' : ''}`}>
      <div className={reversed ? 'lg:order-2' : ''}>
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink-900 text-accent">
            <Icon size={22} />
          </span>
          <span className="rounded-full bg-section px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
            {product.category}
          </span>
        </div>
        <h2 className="mt-5 text-display-lg text-ink-900">{product.name}</h2>
        <p className="mt-4 text-lg text-ink-600">{product.tagline}</p>
        <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {product.modules.map((m) => (
            <div key={m} className="flex items-center gap-2 text-sm font-medium text-ink-700">
              <CheckCircle2 size={15} className="shrink-0 text-success" />
              {m}
            </div>
          ))}
        </div>
      </div>
      <div className={reversed ? 'lg:order-1' : ''}>
        <ProductDashboard product={product} />
      </div>
    </div>
  );
}

function ProductDashboard({ product }: { product: Product }) {
  const Icon = product.icon;
  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-[1.5rem] bg-accent/10 blur-lg" />
      <div className="relative overflow-hidden rounded-2xl border border-ink-200/70 bg-white shadow-premiumLg">
        <div className="flex items-center justify-between border-b border-ink-100 bg-section/50 px-5 py-3">
          <div className="flex items-center gap-2">
            <Icon size={16} className="text-brand-600" />
            <span className="text-sm font-semibold text-ink-900">{product.name} · Dashboard</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulseGlow" />
            <span className="text-[11px] text-ink-500">Live</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-px bg-ink-100">
          {[
            { l: 'Active', v: '1,284' },
            { l: 'Automated', v: '84%' },
            { l: 'AI Agents', v: '12' },
          ].map((m) => (
            <div key={m.l} className="bg-white px-4 py-4 text-center">
              <div className="text-xl font-bold text-ink-900">{m.v}</div>
              <div className="text-[10px] uppercase tracking-wide text-ink-400">{m.l}</div>
            </div>
          ))}
        </div>
        <div className="space-y-2.5 p-5">
          {product.modules.slice(0, 4).map((m, i) => (
            <div key={m} className="flex items-center gap-3 rounded-lg border border-ink-100 bg-section/40 p-2.5">
              <Grid3x3 size={14} className="text-ink-400" />
              <span className="flex-1 text-xs font-medium text-ink-700">{m}</span>
              <div className="h-1 w-20 overflow-hidden rounded-full bg-ink-100">
                <div className="h-full rounded-full bg-accent" style={{ width: `${60 + i * 8}%` }} />
              </div>
              <span className="text-[10px] font-bold text-success">{60 + i * 8}%</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-ink-100 px-5 py-3">
          <span className="text-[11px] text-ink-500">Updated just now</span>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-brand-600">
            <Layers size={11} /> AI Intelligence Layer
          </span>
        </div>
      </div>
    </div>
  );
}
