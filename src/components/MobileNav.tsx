import { useEffect, useRef, useState } from 'react';
import { NAV_ITEMS } from '../data/site';
import type { WorldId } from '../types';

type Props = { activeWorld: WorldId | null; onWorld: (world: WorldId) => void };

export function MobileNav({ activeWorld, onWorld }: Props) {
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
        {NAV_ITEMS.map((item) => {
          const world = item.world;
          if (!world) {
            return (
              <button key={item.id} type="button" className="is-pending" aria-disabled="true">
                {item.label}
                <span className="sr-only"> (disponible en una próxima etapa)</span>
              </button>
            );
          }
          return (
            <button
              key={item.id}
              type="button"
              aria-current={activeWorld === world ? 'page' : undefined}
              onClick={() => {
                setOpen(false);
                onWorld(world);
              }}
            >
              {item.label} <span aria-hidden="true">↗</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
