/** Ruta a un archivo de `public/`, respetando la base configurada (Vercel, GitHub Pages…). */
export function asset(path: string): string {
  const base = (import.meta.env?.BASE_URL as string | undefined) ?? '/';
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
