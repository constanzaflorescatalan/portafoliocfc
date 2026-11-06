import { useEffect, useRef, useState } from 'react';
import { NAV_ITEMS } from '../data/site';
import type { NavTarget } from '../types';

type Props = { active: NavTarget | null; onNav: (target: NavTarget) => void };

export function MobileNav({ active, onNav }: Props) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="mobilenav">
      <button
        type="button"
        ref={toggleRef}
        className="mobilenav__toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <nav id="mobile-menu" className="mobilenav__panel" aria-label="Navegación móvil" hidden={!open}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-current={active === item.id ? 'page' : undefined}
            onClick={() => {
              setOpen(false);
              onNav(item.id);
            }}
          >
            {item.label} <span aria-hidden="true">↗</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
