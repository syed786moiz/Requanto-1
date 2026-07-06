'use client';

import { useEffect, useState } from 'react';
import {
  Menu,
  ChevronDown,
  X,
  Landmark,
  Building2,
  Briefcase,
  Factory,
  Building,
  Bot,
  Layers3,
  ShieldCheck,
  Radar,
  Server,
  Workflow,
  ArrowRight,
  Cpu,
} from 'lucide-react';
import { Logo } from './Logo';
import { useRoute, registerMegaClose } from '../lib/router';

type MenuItem = {
  title: string;
  to: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

type HeaderNavItem = {
  label: string;
  to: string;
  mega?: {
    sections: { title: string; items: MenuItem[] }[];
    footerLink?: { label: string; to: string };
  };
  dropdown?: { label: string; to: string }[];
};

const HEADER_NAV: HeaderNavItem[] = [
  {
    label: 'Solutions',
    to: '/solutions',
    mega: {
      sections: [
        {
          title: 'AI Solutions',
          items: [
            { title: 'AI for Financial Services', to: '/industries#financialservices', description: 'Risk intelligence, compliance, audit automation', icon: Landmark },
            { title: 'AI for Real Estate', to: '/industries#realestate', description: 'Vendor intelligence, community operations, automation', icon: Building2 },
            { title: 'AI for Healthcare', to: '/industries#healthcare', description: 'Document intelligence, compliance workflows', icon: Briefcase },
            { title: 'AI for Manufacturing', to: '/industries#manufacturing', description: 'Procurement intelligence and operational analytics', icon: Factory },
            { title: 'AI for Smart Communities', to: '/industries#smartcities', description: 'Resident copilot and service automation', icon: Building },
            { title: 'Enterprise AI Agents', to: '/agents', description: 'AI workforce for sales, compliance, procurement, and security', icon: Bot },
          ],
        },
      ],
      footerLink: { label: 'Explore all AI solutions', to: '/solutions' },
    },
  },
  {
    label: 'Products',
    to: '/products',
    mega: {
      sections: [
        {
          title: 'Platforms',
          items: [
            { title: 'mySFT AI', to: '/products#mysft', description: 'AI real estate lifecycle and community operations platform.', icon: Building2 },
            { title: 'Requanto Studio', to: '/products#studio', description: 'Low-code AI platform for workflow engineering.', icon: Layers3 },
            { title: 'Requanto Shield', to: '/products#shield', description: 'Cybersecurity, risk, and compliance platform.', icon: ShieldCheck },
            { title: 'Requanto Command', to: '/products#command', description: 'Enterprise AI operations intelligence layer.', icon: Radar },
          ],
        },
      ],
      footerLink: { label: 'View all products', to: '/products' },
    },
  },
  {
    label: 'Services',
    to: '/services',
    mega: {
      sections: [
        {
          title: 'Enterprise Services',
          items: [
            { title: 'Virtual CISO', to: '/services#vciso', description: 'Executive security leadership and board readiness.', icon: ShieldCheck },
            { title: 'Virtual CTO', to: '/services#vcto', description: 'Technology leadership for AI-native modernization.', icon: Cpu },
            { title: 'Managed IT', to: '/services#managed-it', description: 'Run and modernize enterprise infrastructure.', icon: Server },
            { title: 'Automation Advisory', to: '/services#digital-transformation', description: 'Transform operations with intelligent automation.', icon: Workflow },
          ],
        },
      ],
    },
  },
  {
    label: 'Industries',
    to: '/industries',
    mega: {
      sections: [
        {
          title: 'Industry Solutions',
          items: [
            { title: 'Financial Services', to: '/industries#financialservices', description: 'Risk and compliance intelligence for regulated enterprises.', icon: Landmark },
            { title: 'Real Estate', to: '/industries#realestate', description: 'Connected operations and automation for modern portfolios.', icon: Building2 },
            { title: 'Healthcare', to: '/industries#healthcare', description: 'Secure document intelligence and operational workflows.', icon: Briefcase },
            { title: 'Manufacturing', to: '/industries#manufacturing', description: 'Supply and procurement intelligence for resilient operations.', icon: Factory },
          ],
        },
      ],
    },
  },
  {
    label: 'AI',
    to: '/innovation-lab',
    dropdown: [
      { label: 'AI Innovation Lab', to: '/innovation-lab' },
      { label: 'AI Agents', to: '/agents' },
    ],
  },
  {
    label: 'Resource',
    to: '/resources',
    dropdown: [
      { label: 'Insights', to: '/resources#insights' },
      { label: 'Case Studies', to: '/resources#cases' },
      { label: 'Knowledge Center', to: '/resources#knowledge' },
    ],
  },
  {
    label: 'About',
    to: '/about',
  },
];

export function Header() {
  const { navigate, path } = useRoute();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    return registerMegaClose(() => {
      setOpenMenu(null);
      setMobileOpen(false);
    });
  }, []);

  const isActive = (to: string) => {
    const base = to.split('#')[0];
    if (base === '/' && path === '/') return true;
    return base !== '/' && path.startsWith(base);
  };

  const go = (to: string) => {
    setOpenMenu(null);
    setMobileOpen(false);
    navigate(to);
  };

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[100] h-[80px] border-b border-[#E7ECF3] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.06)]"
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="mx-auto grid h-full w-full max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-4 px-5 sm:px-7 lg:px-10 xl:gap-6">
          <div className="flex shrink-0 items-center">
            <Logo tall />
          </div>

          <nav className="hidden items-center justify-center gap-0.5 xl:flex">
            {HEADER_NAV.map((item) => (
              <div key={item.label} className="relative" onMouseEnter={() => setOpenMenu(item.mega || item.dropdown ? item.label : null)}>
                <button
                  onClick={() => go(item.to)}
                  className={`group relative flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-[15px] font-medium transition-all ${
                    isActive(item.to)
                      ? 'font-semibold text-[#ff6900]'
                      : 'text-[#0B1633] hover:bg-[#ff6900]/8 hover:text-[#ff6900]'
                  }`}
                >
                  {item.label}
                  {(item.mega || item.dropdown) && (
                    <ChevronDown
                      size={16}
                      className={`transition-all ${openMenu === item.label ? 'rotate-180 text-[#ff6900]' : 'text-[#0B1633]/70 group-hover:text-[#ff6900]'}`}
                    />
                  )}
                  <span
                    className={`pointer-events-none absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-[#ff6900] transition-opacity ${
                      isActive(item.to) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </button>

                {item.mega && openMenu === item.label && <MegaMenu item={item} onNavigate={go} isActive={isActive} />}
                {item.dropdown && openMenu === item.label && <NavDropdown item={item} onNavigate={go} isActive={isActive} />}
              </div>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center justify-end xl:flex">
            <button
              onClick={() => go('/contact')}
              className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full bg-[#ff6900] px-6 text-[15px] font-semibold text-white transition-all hover:bg-[#e55d00] hover:shadow-[0_8px_20px_rgba(255,105,0,0.28)]"
            >
              Connect <span aria-hidden>→</span>
            </button>
          </div>

          <button
            className="col-start-3 grid h-10 w-10 place-items-center justify-self-end rounded-lg border border-[#E7ECF3] text-[#0B1633] transition-all hover:bg-[#F8FAFC] xl:hidden"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && <MobileMenu onNavigate={go} isActive={isActive} />}
      </header>
      <div className="h-[80px]" aria-hidden />
    </>
  );
}

function MegaMenuItem({
  menuItem,
  onNavigate,
  isActive,
  delay = 0,
}: {
  menuItem: MenuItem;
  onNavigate: (to: string) => void;
  isActive: (to: string) => boolean;
  delay?: number;
}) {
  const Icon = menuItem.icon;

  return (
    <button
      onClick={() => onNavigate(menuItem.to)}
      style={{ animationDelay: `${delay}ms` }}
      className={`group flex w-full animate-[fade-in_200ms_ease-out] items-start gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors ${
        isActive(menuItem.to)
          ? 'bg-[#FFF4EB] text-[#0B1633]'
          : 'hover:bg-[#FFF8F3] hover:text-[#0B1633]'
      }`}
    >
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#ff6900]" />
      <span className="min-w-0">
        <span className="block text-[13px] font-semibold leading-snug text-[#0B1633]">{menuItem.title}</span>
        <span className="mt-0.5 block text-[11px] leading-snug text-[#5B6D89] line-clamp-2">{menuItem.description}</span>
      </span>
    </button>
  );
}

function MegaMenu({
  item,
  onNavigate,
  isActive,
}: {
  item: HeaderNavItem;
  onNavigate: (to: string) => void;
  isActive: (to: string) => boolean;
}) {
  if (!item.mega) return null;

  const footerLink = item.mega.footerLink;
  const sections = item.mega.sections;
  const totalItems = sections.reduce((count, section) => count + section.items.length, 0);
  const useTwoColumns = totalItems > 3;

  return (
    <div className="absolute left-1/2 top-full z-30 w-max max-w-[min(560px,calc(100vw-2rem))] -translate-x-1/2 pt-2">
      <div className="rounded-xl border border-[#E7ECF3] bg-white p-3 shadow-[0_12px_40px_rgba(15,23,42,0.12)] animate-[fade-in_200ms_ease-out]">
        <div className="space-y-3">
          {sections.map((section) => (
            <div key={section.title}>
              <p className="mb-1.5 px-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5B6D89]">{section.title}</p>
              <div className={`grid gap-0.5 ${useTwoColumns ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
                {section.items.map((menuItem, idx) => (
                  <MegaMenuItem
                    key={menuItem.title}
                    menuItem={menuItem}
                    onNavigate={onNavigate}
                    isActive={isActive}
                    delay={idx * 25}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {footerLink && (
          <div className="mt-2.5 flex justify-end border-t border-[#E7ECF3] pt-2">
            <button
              onClick={() => onNavigate(footerLink.to)}
              className="inline-flex items-center gap-1 px-1 text-xs font-medium text-[#ff6900] hover:text-[#e55d00]"
            >
              {footerLink.label} <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function NavDropdown({
  item,
  onNavigate,
  isActive,
}: {
  item: HeaderNavItem;
  onNavigate: (to: string) => void;
  isActive: (to: string) => boolean;
}) {
  if (!item.dropdown) return null;

  return (
    <div className="absolute left-1/2 top-full z-30 w-max min-w-[200px] -translate-x-1/2 pt-2">
      <div className="rounded-xl border border-[#E7ECF3] bg-white p-1.5 shadow-[0_12px_40px_rgba(15,23,42,0.12)] animate-[fade-in_200ms_ease-out]">
        {item.dropdown.map((child) => (
          <button
            key={child.label}
            onClick={() => onNavigate(child.to)}
            className={`flex w-full items-center justify-between gap-6 rounded-lg px-3 py-2 text-left text-[13px] transition-colors ${
              isActive(child.to)
                ? 'bg-[#FFF4EB] font-semibold text-[#0B1633]'
                : 'text-[#4E6180] hover:bg-[#FFF8F3] hover:text-[#0B1633]'
            }`}
          >
            {child.label}
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#ff6900]" />
          </button>
        ))}
      </div>
    </div>
  );
}

function MobileMenu({
  onNavigate,
  isActive,
}: {
  onNavigate: (to: string) => void;
  isActive: (to: string) => boolean;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="fixed inset-x-0 bottom-0 top-[80px] z-[99] bg-white xl:hidden">
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col px-5 pb-6 pt-4 sm:px-7">
        <div className="flex-1 overflow-y-auto">
          {HEADER_NAV.map((item) => (
            <div key={item.label}>
              {item.mega || item.dropdown ? (
                <>
                  <button
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    className={`flex w-full items-center justify-between border-b border-[#E7ECF3] py-4 text-left text-base font-medium transition-colors ${
                      isActive(item.to) ? 'font-semibold text-[#ff6900]' : 'text-[#0B1633] hover:text-[#ff6900]'
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={18} className={`transition-transform ${expanded === item.label ? 'rotate-180 text-[#ff6900]' : 'text-[#0B1633]/70'}`} />
                  </button>
                  {expanded === item.label && (
                    <div className="my-2 rounded-xl border border-[#E7ECF3] bg-white/75 p-3">
                      {item.mega?.sections.map((section) => (
                        <div key={section.title} className="mb-3 last:mb-0">
                          <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-[#5B6D89]">{section.title}</p>
                          {section.items.map((child) => (
                            <button
                              key={child.title}
                              onClick={() => onNavigate(child.to)}
                              className={`mb-1 block w-full rounded-lg px-2 py-2 text-left text-sm ${
                                isActive(child.to) ? 'bg-[#FFF9DD] font-semibold text-[#0B1633]' : 'text-[#4E6180]'
                              }`}
                            >
                              <span className="block">{child.title}</span>
                              <span className="mt-0.5 block text-xs text-[#5B6D89]">{child.description}</span>
                            </button>
                          ))}
                        </div>
                      ))}
                      {item.dropdown?.map((child) => (
                        <button
                          key={child.to}
                          onClick={() => onNavigate(child.to)}
                          className={`block w-full rounded-lg px-2 py-2 text-left text-sm ${
                            isActive(child.to) ? 'bg-[#FFF9DD] font-semibold text-[#0B1633]' : 'text-[#4E6180]'
                          }`}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => onNavigate(item.to)}
                  className={`block w-full border-b border-[#E7ECF3] py-4 text-left text-base font-medium transition-colors ${
                    isActive(item.to) ? 'font-semibold text-[#ff6900]' : 'text-[#0B1633] hover:text-[#ff6900]'
                  }`}
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="pt-4">
          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#ff6900] px-4 text-base font-semibold text-white transition-all hover:bg-[#e55d00]"
          >
            Connect <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
