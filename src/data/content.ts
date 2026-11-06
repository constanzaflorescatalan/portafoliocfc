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
  /** Foto de la ventana; vacía = se muestra el ícono grande en su lugar. */
  image: string;
  position: [number, number];
};

export type Brand = {
  name: string;
  /** Relación con Coni, para no confundir agencias con sus clientes (docs/04). */
  context: string;
  /** Color de muestra del hover mientras no haya logos oficiales. */
  color: string;
  /** Logo oficial (ruta en public/assets). Mientras no exista se muestra el nombre. */
  logo?: string;
  /** Datos de la ventana: organización, rol, período y qué hace. */
  organization: string;
  role: string;
  period: string;
  summary: string;
  detail?: string;
};

type RawWorld = { id: string; projects: Project[] };

const worlds = raw.worlds as unknown as RawWorld[];

export const PROJECTS: Record<WorldId, Project[]> = {
  design: worlds.find((w) => w.id === 'design')?.projects ?? [],
  tech: worlds.find((w) => w.id === 'tech')?.projects ?? [],
};

export const INTERESTS = raw.personalInterests as unknown as Interest[];

export const CONTACT = {
  titleLead: raw.contact.titleLead,
  titleHighlight: raw.contact.titleHighlight,
  email: raw.identity.email,
  linkedin: raw.identity.linkedin,
  github: raw.identity.github,
  vimeo: raw.identity.vimeo,
  cv: 'assets/Constanza_Flores_CV.pdf',
};

/** Colores demostrativos para el hover (se reemplazan por logos reales). */
const BRAND_COLORS: Record<string, string> = {
  'Proust House': '#D6A2BC',
  'Property Partners': '#9CCABF',
  'Imagination Station': '#AEC4DC',
  'Scotch Plains Montessori School': '#D9B4AD',
  'Forge Programming': '#D29CBA',
  'Arbor Counseling Centers': '#B3C8C2',
  'Drei Ventures': '#A5C5B1',
  'Nuva Oxi': '#D6A1C3',
  'HEAD Chile': '#E6C0A2',
  'Calú Bags': '#D9B9C9',
  Castaño: '#D8BBA6',
  Kingsbury: '#9EC3E0',
  'Patagonia Donuts': '#C3A7DD',
  'Universidad Central': '#B9C3DE',
  'DECH UNIMARC': '#E0A3A3',
  'R Medy': '#A5B8D0',
  'El Búho Comunicaciones': '#C9B79C',
  MujerActual: '#D9A5B8',
  'Hijas del Caldero': '#B9A6CF',
  'Brecha Digital Consultores': '#9FC1C9',
  'E-Mach Card': '#B5BDD6',
  'Municipalidad de La Granja': '#A9C7B5',
  'Municipalidad de La Pintana': '#B7C2DA',
  SUBDERE: '#C9B3C9',
  'Municipalidad de Independencia': '#D8A9B6',
  'Municipalidad de Puerto Montt': '#9FBFD9',
  'Servicio de Registro Civil': '#B0BEDC',
  'ISA InterChile': '#A8C8D8',
};

type RawExperience = {
  organization: string;
  kind: string;
  role: string;
  period: string;
  summary: string;
  showOrganization: boolean;
  logo?: string;
  brands: { name: string; relation?: string; detail?: string; logo?: string }[];
};

/**
 * Grid de marcas desde `experiences` (data/demo-content.json): cada organización
 * (si corresponde) seguida de sus marcas, con la relación explícita
 * («Cliente vía Proust House», «Marca de Maletas Chile SpA»…).
 */
export const BRANDS: Brand[] = (raw.experiences as RawExperience[]).flatMap((exp) => {
  const base = { organization: exp.organization, role: exp.role, period: exp.period, summary: exp.summary };
  const own: Brand[] = exp.showOrganization
    ? [
        {
          ...base,
          name: exp.organization,
          context: exp.kind,
          color: BRAND_COLORS[exp.organization] ?? '#C782A2',
          logo: exp.logo,
        },
      ]
    : [];
  const viaAgency = exp.kind === 'Agencia';
  const brands: Brand[] = exp.brands.map((b) => ({
    ...base,
    name: b.name,
    context:
      b.relation ??
      (viaAgency ? `Cliente vía ${exp.organization}` : `Marca trabajada en ${exp.organization}`),
    color: BRAND_COLORS[b.name] ?? '#C782A2',
    logo: b.logo,
    detail: b.detail,
  }));
  return [...own, ...brands];
});
