import type { Ref } from 'react';
import { WORLDS } from '../data/site';
import type { WorldId } from '../types';
import { StarField } from './StarField';

type Props = {
  world: WorldId;
  onBack: () => void;
  headingRef: Ref<HTMLHeadingElement>;
};

/**
 * Vista provisional de la etapa 1: título y formación del universo elegido.
 * En la etapa 2 se reemplaza por los puntos orbitales, el agujero negro y el paso a Marcas.
 */
export function UniverseScene({ world, onBack, headingRef }: Props) {
  const info = WORLDS[world];

  return (
    <section className="universe" aria-labelledby="universe-title">
      <StarField count={80} seed={world === 'design' ? 57 : 91} />
      <div className="universe__inner">
        <p className="eyebrow">Universo / {info.title}</p>
        <h1 id="universe-title" className="universe__title" tabIndex={-1} ref={headingRef}>
          {info.title}
          <span className="universe__dot">.</span>
        </h1>
        <p className="universe__credential">{info.credential}</p>

        <div className="universe__note">
          <p className="tag">Vista provisional · Etapa 1</p>
          <p>
            Aquí irán los puntos orbitales con los proyectos, el agujero negro «Un poco más de mí» y
            el paso a Marcas. Se construye en la etapa 2.
          </p>
        </div>

        <button type="button" className="enter-btn" onClick={onBack}>
          <span aria-hidden="true">←</span> Volver a elegir mundo
        </button>
      </div>
    </section>
  );
}
