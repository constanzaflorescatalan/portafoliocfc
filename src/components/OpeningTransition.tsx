import type { ReactNode } from 'react';
import { CoverSky } from './CoverSky';

type Props = { opening: boolean; children: ReactNode };

/**
 * Fondo negro partido en dos (docs/02-03): la mitad izquierda sale hacia la izquierda
 * llevando el círculo/foto/órbita; la derecha sale vacía y la tarjeta baja y desaparece.
 * Las animaciones viven en CSS (`.is-opening`); este componente solo marca el estado.
 */
export function OpeningTransition({ opening, children }: Props) {
  return (
    <section
      className={`cover${opening ? ' is-opening' : ''}`}
      aria-label="Portada de Constanza Flores"
    >
      <div className="cover__door cover__door--left" aria-hidden="true">
        <CoverSky />
      </div>
      <div className="cover__door cover__door--right" aria-hidden="true">
        <CoverSky />
      </div>
      {children}
    </section>
  );
}
