'use client';

import { useRoute } from '../lib/router';

export function Logo({ light = false, tall = false, onClick }: { light?: boolean; tall?: boolean; onClick?: () => void }) {
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
          className={`w-auto object-contain ${tall ? 'h-11 sm:h-12' : 'h-8 sm:h-9'}`}
        />
      </span>
    </button>
  );
}
