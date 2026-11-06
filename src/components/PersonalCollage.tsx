import { useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { INTERESTS } from '../data/content';
import type { Interest } from '../data/content';
import { WORLDS } from '../data/site';
import type { WorldId } from '../types';
import { InterestIcon } from './InterestIcon';
import { InterestModal } from './InterestModal';
import { StarField } from './StarField';

type Props = { world: WorldId; onBack: () => void };

/**
 * Quién soy (docs/02): collage editorial con íconos de línea; cada uno abre una
 * ventana con foto y texto breve. Siempre hay salida de vuelta al universo.
 */
export function PersonalCollage({ world, onBack }: Props) {
  const [open, setOpen] = useState<Interest | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="about" aria-labelledby="about-title">
      <StarField count={60} seed={23} />

      <button type="button" className="about__back" onClick={onBack}>
        <span aria-hidden="true">←</span> Volver a {WORLDS[world].title}
      </button>

      <header className="about__head">
        <p className="eyebrow">Quién soy</p>
        <h1 id="about-title" className="about__title" tabIndex={-1} data-autofocus>
          Un poquito de todo. <span className="about__script">Mucho de mí.</span>
        </h1>
        <p className="about__hint">Toca un ícono para conocer un poco más.</p>
      </header>

      <ul className="collage" aria-label="Intereses personales">
        {INTERESTS.map((item, i) => (
          <li
            key={item.id}
            className="collage__item"
            style={
              { '--x': `${item.position[0]}%`, '--y': `${item.position[1]}%`, '--i': i } as CSSProperties
            }
          >
            <button
              type="button"
              className="interest"
              aria-haspopup="dialog"
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setOpen(item);
              }}
            >
              <span className="interest__circle">
                <InterestIcon id={item.id} />
              </span>
              <span className="interest__name">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>

      <p className="about__demo">Fotos y textos de ejemplo (DEMO), por reemplazar.</p>

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
