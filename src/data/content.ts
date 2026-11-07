// Importación por partes: solo estas secciones del JSON entran al sitio publicado.
import {
  contact,
  experiences,
  identity,
  otherBrands,
  personalInterests,
  worlds as rawWorlds,
} from '../../data/demo-content.json';
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
};

export type Brand = {
  name: string;
  /** Relación con Coni (texto bajo el logo). Vacío en marcas que solo tienen nombre. */
  context: string;
  /** Color de acento si no hay logo. */
  color: string;
  /** Logo (public/assets/logos). Sin logo se muestra el nombre. */
  logo?: string;
  /** Fondo original del logo: se muestra al pasar el cursor. */
  logoBg?: string;
  /** En reposo: `silhouette` blanco · `lines` contornos en blanco (logos con mucho detalle) · `badge` grises. */
  logoMode: 'silhouette' | 'lines' | 'badge';
  /** Logo alto (dos logos apilados): se muestra con más altura. */
  logoTall: boolean;
  /** true si el fondo original es claro (el texto bajo el logo se oscurece al pasar el cursor). */
  lightBg: boolean;
  /** false = solo nombre y logo, sin ventana de detalle (por completar). */
  hasDetails: boolean;
  /** Datos de la ventana: organización, rol, período y qué hace. */
  organization: string;
  role: string;
  period: string;
  summary: string;
  detail?: string;
};

type RawWorld = { id: string; projects: Project[] };

const worlds = rawWorlds as unknown as RawWorld[];

export const PROJECTS: Record<WorldId, Project[]> = {
  design: worlds.find((w) => w.id === 'design')?.projects ?? [],
  tech: worlds.find((w) => w.id === 'tech')?.projects ?? [],
};

export const INTERESTS = personalInterests as unknown as Interest[];

export const CONTACT = {
  titleLead: contact.titleLead,
  titleHighlight: contact.titleHighlight,
  // En el JSON va como «usuario [at] dominio» para que los robots de spam no lo detecten.
  email: identity.email.replace(/\s*\[at\]\s*/, '@'),
  linkedin: identity.linkedin,
  githubPro: identity.githubPro,
  githubAcademic: identity.githubAcademic,
  vimeo: identity.vimeo,
  cv: 'assets/Constanza_Flores_CV.pdf',
};

type RawLogo = { logo?: string; logoBg?: string; logoMode?: string; logoTall?: boolean };
type RawBrand = RawLogo & { name: string; relation?: string; detail?: string; nameOnly?: boolean };
type RawExperience = RawLogo & {
  organization: string;
  kind: string;
  role: string;
  period: string;
  summary: string;
  showOrganization: boolean;
  brands: RawBrand[];
};

/** Luminancia aproximada de un color #rrggbb (0 = negro, 1 = blanco). */
function isLight(hex?: string): boolean {
  if (!hex || !/^#[0-9a-f]{6}$/i.test(hex)) return false;
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.6;
}

function logoFields(o: RawLogo) {
  return {
    color: '#C782A2',
    logo: o.logo,
    logoBg: o.logoBg,
    logoMode: (o.logoMode === 'badge' || o.logoMode === 'lines' ? o.logoMode : 'silhouette') as Brand['logoMode'],
    logoTall: Boolean(o.logoTall),
    lightBg: isLight(o.logoBg),
  };
}

const NO_DETAILS = { organization: '', role: '', period: '', summary: '', hasDetails: false };

/**
 * Grid de marcas desde `experiences` (data/demo-content.json): cada organización
 * (si corresponde) seguida de sus marcas, con la relación explícita
 * («Cliente vía Proust House», «Marca trabajada en Castaño»…). Al final, `otherBrands`:
 * marcas que por ahora solo tienen nombre y logo.
 */
const fromExperiences: Brand[] = (experiences as RawExperience[]).flatMap((exp) => {
  const base = {
    organization: exp.organization,
    role: exp.role,
    period: exp.period,
    summary: exp.summary,
    hasDetails: true,
  };
  const own: Brand[] = exp.showOrganization
    ? [{ ...base, ...logoFields(exp), name: exp.organization, context: exp.kind }]
    : [];
  const viaAgency = exp.kind === 'Agencia';
  const brands: Brand[] = exp.brands.map((b) =>
    b.nameOnly
      ? { ...NO_DETAILS, ...logoFields(b), name: b.name, context: '' }
      : {
          ...base,
          ...logoFields(b),
          name: b.name,
          context:
            b.relation ??
            (viaAgency ? `Cliente vía ${exp.organization}` : `Marca trabajada en ${exp.organization}`),
          detail: b.detail,
        },
  );
  return [...own, ...brands];
});

const others: Brand[] = (otherBrands as RawBrand[]).map((b) => ({
  ...NO_DETAILS,
  ...logoFields(b),
  name: b.name,
  context: '',
}));

export const BRANDS: Brand[] = [...fromExperiences, ...others];

/** Texto corto de presentación: aparece en la tarjeta de la portada con el primer clic. */
export const BIO: string = identity.bio;
