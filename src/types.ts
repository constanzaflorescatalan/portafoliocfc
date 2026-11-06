export type WorldId = 'design' | 'tech';

/**
 * Estados del flujo (docs/03): portada → apertura → selector → entrada al
 * universo elegido → universo. Las transiciones solo avanzan desde el estado
 * anterior, así un doble clic nunca dispara dos animaciones.
 */
export type Stage = 'cover' | 'opening' | 'chooser' | 'entering' | 'universe';

export type AppState = { stage: Stage; world: WorldId | null };

/** API imperativa de las capas de efectos al pasar el cursor (selector de mundos). */
export type HoverLayerHandle = {
  spawn: (x: number, y: number, width: number, height: number) => void;
  burst: (width: number, height: number) => void;
};
