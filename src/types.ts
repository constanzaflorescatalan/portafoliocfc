export type WorldId = 'design' | 'tech';

/**
 * Estados del flujo (docs/03): portada → apertura → selector → entrada al
 * universo elegido → universo → (caso de estudio | portal → quién soy).
 * Las transiciones animadas solo avanzan desde el estado anterior, así un
 * doble clic nunca dispara dos animaciones.
 */
export type Stage =
  | 'cover'
  | 'opening'
  | 'chooser'
  | 'entering'
  | 'universe'
  | 'project'
  | 'portal'
  | 'about';

/** Capítulos que viven debajo del universo, al hacer scroll (docs/02). */
export type Chapter = 'universe' | 'brands' | 'contact';

export type AppState = {
  stage: Stage;
  world: WorldId | null;
  /** Caso de estudio abierto (stage = 'project'). */
  project?: string;
  /** Capítulo al que hay que desplazarse al entrar (menú Marcas / Contacto). */
  chapter?: Chapter;
  /** Cambia en cada clic del menú, para volver a desplazar aunque el capítulo sea el mismo. */
  nonce?: number;
  /** Vuelta al universo (desde un caso o Quién soy): aparece ya armado, sin repetir la entrada. */
  calm?: boolean;
};

export type NavTarget = WorldId | 'brands' | 'about' | 'contact';

/** API imperativa de las capas de efectos al pasar el cursor (selector de mundos). */
export type HoverLayerHandle = {
  spawn: (x: number, y: number, width: number, height: number) => void;
  burst: (width: number, height: number) => void;
};
