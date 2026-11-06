import type { ReactNode } from 'react';

/** Íconos de línea minimalistas para el collage personal (docs/02: no stickers). */
const PATHS: Record<string, ReactNode> = {
  gym: <path d="M3 9v6m3-8v10m12-10v10m3-8v6M6 12h12" />,
  cocina: <path d="M4 10h16v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8Zm-2 0h20M8 7V3m4 4V3m4 4V3" />,
  animales: (
    <>
      <ellipse cx="6" cy="7" rx="1.5" ry="2.3" />
      <ellipse cx="11" cy="4.8" rx="1.5" ry="2.2" />
      <ellipse cx="16" cy="6" rx="1.5" ry="2.2" />
      <ellipse cx="20" cy="9" rx="1.5" ry="2.1" />
      <path d="M12 12c-3.6 0-7 4.2-7 6.5 0 2.5 2 3.5 4.3 2.3 1.8-1 3.6-1 5.4 0 2.3 1.2 4.3.2 4.3-2.3 0-2.3-3.4-6.5-7-6.5Z" />
    </>
  ),
  tarot: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M13 6a5 5 0 1 0 0 10 4.5 4.5 0 0 1-3-5 4.5 4.5 0 0 1 3-5Zm2 11v2M7 19h9" />
    </>
  ),
  herbolaria: <path d="M12 22V11M12 15C4 15 4 7 3 5c6-1 11 2 9 10Zm0-4c0-6 5-9 9-9 1 5-2 9-9 9Z" />,
  dibujo: <path d="m4 20 4.5-1 11-11-3.5-3.5-11 11L4 20Zm10-13 3.5 3.5M3 21h18" />,
  pintura: (
    <>
      <path d="M12 3a9 9 0 0 0 0 18h1a2 2 0 0 0 2-2c0-1-.8-2-1.6-2.3-.9-.5-.4-2 .8-2H19a3 3 0 0 0 3-3c0-4.8-4.5-8.7-10-8.7Z" />
      <circle cx="7" cy="10" r="1" />
      <circle cx="11" cy="6.8" r="1" />
      <circle cx="17" cy="9" r="1" />
      <circle cx="7.5" cy="15" r="1" />
    </>
  ),
  jabones: (
    <>
      <rect x="4" y="9" width="16" height="11" rx="4" />
      <path d="M11 6c0-2 2-3 2-5M16 7c0-1 1-2 1-3M7 15h10" />
    </>
  ),
  velas: <path d="M7 12h10v9H7v-9Zm5 0V9m0-8c4 4 4 7 0 8-4-1-4-4 0-8Z" />,
};

export function InterestIcon({ id }: { id: string }) {
  return (
    <svg className="interest-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {PATHS[id] ?? <circle cx="12" cy="12" r="8" />}
    </svg>
  );
}
