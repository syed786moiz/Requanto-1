'use client';

import { useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export type RouteContextType = {
  path: string;
  navigate: (to: string) => void;
};

// Mega menu open state via simple event bus to avoid prop drilling
let megaCloseListeners: Array<() => void> = [];
export function closeAllMega() {
  megaCloseListeners.forEach((fn) => fn());
}
export function registerMegaClose(fn: () => void) {
  megaCloseListeners.push(fn);
  return () => {
    megaCloseListeners = megaCloseListeners.filter((f) => f !== fn);
  };
}

export function useRoute(): RouteContextType {
  const router = useRouter();
  const pathname = usePathname();

  const navigate = useCallback(
    (to: string) => {
      const hashIndex = to.indexOf('#');
      const path = hashIndex === -1 ? to : to.slice(0, hashIndex);
      const hash = hashIndex === -1 ? '' : to.slice(hashIndex);
      const target = `${path}${hash}`;

      if (path === pathname && !hash) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      closeAllMega();
      router.push(target);
    },
    [router, pathname],
  );

  return { path: pathname ?? '/', navigate };
}
