'use client';

import { useRoute } from '../lib/router';

export function Logo({ light = false, onClick }: { light?: boolean; onClick?: () => void }) {
  const { navigate } = useRoute();
  return (
    <button
      onClick={() => {
        onClick?.();
        navigate('/');
      }}
      className="group focus:outline-none"
      aria-label="Requanto Technologies home"
    >
      <span
        className={`inline-block overflow-hidden transition-transform group-hover:scale-[1.02] ${
          light
            ? 'rounded-xl bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-white/10'
            : 'rounded-lg'
        }`}
      >
        <img
          src="/requanto-logo.png"
          alt="Requanto Technologies"
          className="h-8 w-auto object-contain sm:h-9"
        />
      </span>
    </button>
  );
}
