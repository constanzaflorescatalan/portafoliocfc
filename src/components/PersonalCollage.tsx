import { useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { INTERESTS } from '../data/content';
import type { Interest } from '../data/content';
import { WORLDS } from '../data/site';
import type { WorldId } from '../types';
import { CoverSky } from './CoverSky';
import { InterestIcon } from './InterestIcon';
import { InterestModal } from './InterestModal';

type Props = { world: WorldId; onBack: () => void };

/**
 * Quién soy: mismo cielo de la portada; los íconos de intereses orbitan lento
 * alrededor del título, como planetas. Solo íconos (el nombre va en la ventana
 * y como etiqueta accesible). Siempre hay salida de vuelta al universo.
 */
export function PersonalCollage({ world, onBack }: Props) {
  const [open, setOpen] = useState<Interest | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const total = INTERESTS.length;

  return (
    <section className="about" aria-labelledby="about-title">
      <CoverSky full />

      <button type="button" className="about__back" onClick={onBack}>
        <span aria-hidden="true">←</span> Volver a {WORLDS[world].title}
      </button>

      <div className="about__stage">
        <header className="about__head">
          <p className="eyebrow">Quién soy</p>
          <h1 id="about-title" className="about__title" tabIndex={-1} data-autofocus>
            Un poquito de mí<span className="pink">.</span>
          </h1>
          <p className="about__hint">Toca un ícono para conocer un poco más.</p>
        </header>

        <ul className="orbit" aria-label="Intereses personales">
          {INTERESTS.map((item, i) => (
            <li
              key={item.id}
              className="orbit__item"
              style={{ '--a': `${(360 / total) * i - 90}deg`, '--i': i } as CSSProperties}
            >
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
            </li>
          ))}
        </ul>
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
