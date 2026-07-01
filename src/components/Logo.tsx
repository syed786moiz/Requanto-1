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
      <img
        src="/requanto-logo.png"
        alt="Requanto Technologies"
        className={`h-10 w-auto object-contain transition-transform group-hover:scale-[1.02] ${
          light ? 'brightness-0 invert' : ''
        }`}
      />
    </button>
  );
}
