import raw from '../../data/demo-content.json';
import type { WorldId } from '../types';

/**
 * Contenido editable del sitio. Todo sale de `data/demo-content.json`, así los
 * proyectos, intereses y marcas se reemplazan sin tocar componentes.
 * Mientras `isDemo` sea true, la interfaz muestra la etiqueta DEMO.
 */
export type Project = {
  id: string;
  title: string;
  isDemo: boolean;
  type: string;
  client: string;
  agency?: string;
  intro: string;
  goal: string;
  contribution: string;
  tools: string[];
  result: string;
  image: string;
  gallery: string[];
  /** Posición del punto orbital en escritorio: [x %, y %]. */
  position: [number, number];
};

export type Interest = {
  id: string;
  name: string;
  isDemo: boolean;
  description: string;
  image: string;
  position: [number, number];
};

export type Brand = {
  name: string;
  /** Relación con Coni, para no confundir agencias con sus clientes (docs/04). */
  context: string;
  /** Color de muestra del hover mientras no haya logos oficiales. */
  color: string;
};

type RawWorld = { id: string; projects: Project[] };

const worlds = raw.worlds as unknown as RawWorld[];

export const PROJECTS: Record<WorldId, Project[]> = {
  design: worlds.find((w) => w.id === 'design')?.projects ?? [],
  tech: worlds.find((w) => w.id === 'tech')?.projects ?? [],
};

export const INTERESTS = raw.personalInterests as unknown as Interest[];

export const CONTACT = {
  title: raw.contact.title,
  subtitle: raw.contact.subtitle,
  email: raw.identity.email,
  linkedin: raw.identity.linkedin,
  github: raw.identity.github,
  cv: 'assets/Constanza_Flores_CV.pdf',
};

/** Colores demostrativos para el hover (se reemplazan por logos reales). */
const BRAND_COLORS: Record<string, string> = {
  'Proust House': '#D6A2BC',
  'Drei Ventures': '#A5C5B1',
  HEAD: '#E6C0A2',
  Castaño: '#D8BBA6',
  'R Medy': '#A5B8D0',
  'Property Partners': '#9CCABF',
  'Imagination Station': '#AEC4DC',
  'Scotch Plains Montessori School': '#D9B4AD',
  'Forge Programming': '#D29CBA',
  'Arbor Counseling Centers': '#B3C8C2',
  'Nuva Oxi': '#D6A1C3',
};

/**
 * Grid de marcas derivado de `brandRelationships`: primero cada organización y
 * luego sus clientes con la relación explícita ("Cliente vía Proust House").
 */
export const BRANDS: Brand[] = (() => {
  const list: Brand[] = [];
  const clients: Brand[] = [];
  for (const rel of raw.brandRelationships) {
    list.push({
      name: rel.organization,
      context: rel.role.replace(/;.*$/, ''),
      color: BRAND_COLORS[rel.organization] ?? '#C782A2',
    });
    for (const client of rel.clients) {
      const name = client.replace(/\s*\(.*\)$/, '');
      clients.push({
        name,
        context: `${rel.organization === 'Drei Ventures' ? 'Proyecto' : 'Cliente'} vía ${rel.organization}`,
        color: BRAND_COLORS[name] ?? '#C782A2',
      });
    }
  }
  return [...list, ...clients];
})();
