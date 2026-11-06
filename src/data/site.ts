import type { WorldId } from '../types';

/** Textos confirmados (docs/04). La portada usa exactamente estos textos, sin tagline. */
export const IDENTITY = {
  name: 'Constanza Flores',
  // Dos tramos para controlar el salto de línea sin alterar el texto.
  headline: ['Diseñadora Gráfica Senior ·', 'Ingeniera en Informática · UX/UI'],
  location: 'Santiago de Chile',
  email: 'conoflor@gmail.com',
} as const;

/** Credencial visible bajo el título de cada universo (docs/02; gana sobre el JSON demo). */
export const WORLDS: Record<
  WorldId,
  { id: WorldId; title: string; selectorTitle: string; path: string; credential: string }
> = {
  design: {
    id: 'design',
    title: 'Diseño',
    selectorTitle: 'DISEÑO',
    path: '/diseno',
    credential:
      'Diseño Gráfico — Universidad Diego Portales · Título profesional y licenciatura · 2016',
  },
  tech: {
    id: 'tech',
    title: 'Informática',
    selectorTitle: 'INFORMÁTICA',
    path: '/informatica',
    credential: 'Ingeniería en Informática — Duoc UC · Título profesional · 2025',
  },
};

/** Menú (docs/01). Los ítems sin `world` se activan en etapas siguientes. */
export const NAV_ITEMS: { id: string; label: string; world?: WorldId }[] = [
  { id: 'design', label: 'Diseño', world: 'design' },
  { id: 'tech', label: 'Informática', world: 'tech' },
  { id: 'brands', label: 'Marcas' },
  { id: 'about', label: 'Quién soy' },
  { id: 'contact', label: 'Contacto' },
];
