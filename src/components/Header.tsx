'use client';

import { useEffect, useState } from 'react';
import { Menu, ChevronDown, X } from 'lucide-react';
import { Logo } from './Logo';
import { NAV } from '../data/content';
import { useRoute, registerMegaClose } from '../lib/router';

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
        className="fixed inset-x-0 top-0 z-[100] border-b border-ink-200/80 bg-white/95 backdrop-blur-md"
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="container-rq flex h-14 items-center justify-between gap-6 lg:h-16">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}
              >
                <button
                  onClick={() => go(item.to)}
                  className={`flex items-center gap-0.5 px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.to)
                      ? 'font-semibold text-ink-900 underline decoration-[#ffe600] decoration-2 underline-offset-4'
                      : 'text-ink-600 hover:text-ink-900'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={13}
                      className={`opacity-50 transition-transform ${openMenu === item.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>

                {item.children && openMenu === item.label && (
                  <NavDropdown item={item} onNavigate={go} isActive={isActive} />
                )}
              </div>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <button onClick={() => go('/contact')} className="btn-accent px-5 py-2 text-sm">
              Contact
            </button>
          </div>

          <button
            className="grid h-9 w-9 place-items-center rounded-lg text-ink-700 hover:bg-ink-100 lg:hidden"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && <MobileMenu onNavigate={go} isActive={isActive} />}
      </header>
      <div className="h-14 lg:h-16" aria-hidden />
    </>
  );
}

function NavDropdown({
  item,
  onNavigate,
  isActive,
}: {
  item: (typeof NAV)[number];
  onNavigate: (to: string) => void;
  isActive: (to: string) => boolean;
}) {
  return (
    <div className="absolute left-0 top-full pt-1">
      <div className="min-w-[180px] animate-fade-in rounded-xl border border-ink-200/80 bg-white py-1.5 shadow-premium">
        {item.children!.map((child) => (
          <button
            key={child.label}
            onClick={() => onNavigate(child.to)}
            className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-section ${
              isActive(child.to)
                ? 'font-semibold text-ink-900 underline decoration-[#ffe600] decoration-2 underline-offset-2'
                : 'text-ink-700'
            }`}
          >
            {child.label}
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
    <div className="border-t border-ink-100 bg-white lg:hidden">
      <div className="container-rq max-h-[calc(100vh-3.5rem)] overflow-y-auto py-3">
        {NAV.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <>
                <button
                  onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                  className={`flex w-full items-center justify-between py-2.5 text-sm font-medium ${
                    isActive(item.to)
                      ? 'font-semibold text-ink-900 underline decoration-[#ffe600] decoration-2 underline-offset-2'
                      : 'text-ink-900'
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={15}
                    className={`text-ink-400 transition-transform ${expanded === item.label ? 'rotate-180' : ''}`}
                  />
                </button>
                {expanded === item.label && (
                  <div className="mb-2 ml-3 border-l border-ink-200 pl-3">
                    {item.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => onNavigate(child.to)}
                        className={`block w-full py-2 text-left text-sm ${
                          isActive(child.to)
                            ? 'font-semibold text-ink-900 underline decoration-[#ffe600] decoration-2 underline-offset-2'
                            : 'text-ink-600'
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
                className={`block w-full py-2.5 text-left text-sm font-medium ${
                  isActive(item.to)
                    ? 'font-semibold text-ink-900 underline decoration-[#ffe600] decoration-2 underline-offset-2'
                    : 'text-ink-900'
                }`}
              >
                {item.label}
              </button>
            )}
          </div>
        ))}
        <button onClick={() => onNavigate('/contact')} className="btn-accent mt-4 w-full text-sm">
          Contact
        </button>
      </div>
    </div>
  );
}
