import type { NavTarget, WorldId } from '../types';

/** Textos de la portada (docs/04 y docs/07). Sin tagline. */
export const IDENTITY = {
  name: 'Constanza Flores',
  // Dos tramos para controlar el salto de línea sin alterar el texto.
  headline: ['Diseñadora Gráfica Senior ·', 'Ingeniera en Informática · UX/UI'],
  email: 'constanza.florescatalan@gmail.com',
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

/** Menú (docs/01). */
export const NAV_ITEMS: { id: NavTarget; label: string }[] = [
  { id: 'design', label: 'Diseño' },
  { id: 'tech', label: 'Informática' },
  { id: 'brands', label: 'Marcas' },
  { id: 'about', label: 'Quién soy' },
  { id: 'contact', label: 'Contacto' },
];
