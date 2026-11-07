import type { Ref } from 'react';
import type { WorldId } from '../types';
import { WorldPanel } from './WorldPanel';

type Props = {
  /** Mundo elegido mientras su mitad se expande; `null` si todavía se está eligiendo. */
  chosen: WorldId | null;
  /** Bloquea el foco mientras la portada aún cubre el selector. */
  inert: boolean;
  reduced: boolean;
  onChoose: (world: WorldId) => void;
  firstPanelRef: Ref<HTMLButtonElement>;
};

export function WorldSelector({ chosen, inert, reduced, onChoose, firstPanelRef }: Props) {
  return (
    <section
      className="chooser"
      data-chosen={chosen ?? undefined}
      data-opening={inert ? '' : undefined}
      aria-label="Elegir mundo"
      inert={inert}
    >
      <h1 className="sr-only">Elige un mundo: Diseño o Informática</h1>
      <WorldPanel world="design" reduced={reduced} onChoose={onChoose} buttonRef={firstPanelRef} />
      <WorldPanel world="tech" reduced={reduced} onChoose={onChoose} />
      <p className="chooser__hint" aria-hidden="true">
        Elige un mundo para entrar
      </p>
    </section>
  );
}
