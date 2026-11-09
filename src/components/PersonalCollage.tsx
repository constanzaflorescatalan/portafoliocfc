import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { INTERESTS } from '../data/content';
import type { Interest } from '../data/content';
import { WORLDS } from '../data/site';
import type { WorldId } from '../types';
import { BackStar } from './BackStar';
import { CoverSky } from './CoverSky';
import { InterestIcon } from './InterestIcon';
import { InterestModal } from './InterestModal';

type Props = { world: WorldId; onBack: () => void };

/**
 * Quién soy: mismo cielo de la portada, quieto; los íconos de intereses orbitan lento
 * alrededor del título, como planetas. Solo íconos (el nombre va en la ventana
 * y como etiqueta accesible). Siempre hay salida de vuelta al universo.
 */
export function PersonalCollage({ world, onBack }: Props) {
  const [open, setOpen] = useState<Interest | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const total = INTERESTS.length;
  const orbitRef = useRef<HTMLDivElement>(null);

  // La órbita gira con transformaciones (sin recalcular la página en cada cuadro).
  // Una elipse = un círculo aplastado; aquí se mide el aplastamiento según el tamaño.
  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;
    const measure = () => {
      const css = getComputedStyle(orbit);
      const rx = parseFloat(css.getPropertyValue('--rx')) / 100 || 0.4;
      const ry = parseFloat(css.getPropertyValue('--ry')) / 100 || 0.38;
      const { width, height } = orbit.getBoundingClientRect();
      if (!width || !height) return;
      const k = (ry * height) / (rx * width);
      orbit.style.setProperty('--r', `${rx * width}px`);
      orbit.style.setProperty('--k', String(k));
      orbit.style.setProperty('--k-inv', String(1 / k));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(orbit);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" aria-labelledby="about-title">
      <CoverSky full still />

      <BackStar label={`Volver a ${WORLDS[world].title}`} onClick={onBack} />

      <div className="about__stage">
        <header className="about__head">
          <p className="eyebrow">Quién soy</p>
          <h1 id="about-title" className="about__title" tabIndex={-1} data-autofocus>
            Un poquito de mí<span className="pink">.</span>
          </h1>
          <p className="about__hint">Toca un ícono para conocer un poco más.</p>
        </header>

        <div ref={orbitRef} className="orbit">
          <div className="orbit__squash">
            <ul className="orbit__spin" aria-label="Intereses personales">
              {INTERESTS.map((item, i) => (
                <li
                  key={item.id}
                  className="orbit__item"
                  style={{ '--a': `${(360 / total) * i - 90}deg`, '--i': i } as CSSProperties}
                >
                  <div className="orbit__counter">
                    <button
                      type="button"
                      className="interest"
                      aria-haspopup="dialog"
                      aria-label={item.name}
                      onClick={(e) => {
                        triggerRef.current = e.currentTarget;
                        setOpen(item);
                      }}
                    >
                      <span className="interest__circle">
                        <InterestIcon id={item.id} />
                      </span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <InterestModal
        interest={open}
        onClose={() => {
          setOpen(null);
          triggerRef.current?.focus();
        }}
      />
    </section>
  );
}
