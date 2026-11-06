import { NAV_ITEMS } from '../data/site';
import type { WorldId } from '../types';
import { MobileNav } from './MobileNav';

type Props = {
  activeWorld: WorldId | null;
  onHome: () => void;
  onWorld: (world: WorldId) => void;
};

export function TopNav({ activeWorld, onHome, onWorld }: Props) {
  return (
    <header className="topnav">
      <button type="button" className="topnav__logo" onClick={onHome} aria-label="Volver a la portada">
        CF<span>.</span>
      </button>

      <nav className="topnav__links" aria-label="Navegación principal">
        {NAV_ITEMS.map((item) => {
          const world = item.world;
          if (!world) {
            // Disponibles en etapas siguientes: visibles, pero sin acción todavía.
            return (
              <button
                key={item.id}
                type="button"
                className="is-pending"
                aria-disabled="true"
                title="Disponible en una próxima etapa"
              >
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
              onClick={() => onWorld(world)}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      <MobileNav activeWorld={activeWorld} onWorld={onWorld} />
    </header>
  );
}
