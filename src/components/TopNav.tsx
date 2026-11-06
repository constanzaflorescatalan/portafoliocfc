import { NAV_ITEMS } from '../data/site';
import type { NavTarget } from '../types';
import { MobileNav } from './MobileNav';

type Props = {
  active: NavTarget | null;
  onHome: () => void;
  onNav: (target: NavTarget) => void;
};

export function TopNav({ active, onHome, onNav }: Props) {
  return (
    <header className="topnav">
      <button type="button" className="topnav__logo" onClick={onHome} aria-label="Volver a la portada">
        CF<span>.</span>
      </button>

      <nav className="topnav__links" aria-label="Navegación principal">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-current={active === item.id ? 'page' : undefined}
            onClick={() => onNav(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <MobileNav active={active} onNav={onNav} />
    </header>
  );
}
