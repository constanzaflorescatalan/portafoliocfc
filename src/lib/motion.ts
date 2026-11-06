/**
 * Lee una duración de `design/tokens.css` (por ejemplo `--motion-long`).
 * Con `prefers-reduced-motion` los tokens valen 0ms, así que el flujo avanza al instante.
 */
export function readMs(cssVar: string, fallback: number): number {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
  const value = parseFloat(raw);
  if (Number.isNaN(value)) return fallback;
  if (raw.endsWith('ms')) return value;
  if (raw.endsWith('s')) return value * 1000;
  return value;
}
