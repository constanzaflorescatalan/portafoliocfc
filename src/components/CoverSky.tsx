import { useEffect, useRef } from 'react';

/**
 * Cielo de la portada: degradé azul noche muy oscuro + estrellas finas dibujadas en canvas.
 * Se pinta igual dentro de cada mitad del fondo (con 200% de ancho), así las estrellas
 * se parten y viajan con su mitad al abrirse el broche. Decorativo.
 */
const SEED = 1987;
const TWINKLES = [
  { x: 12, y: 22, d: 0 },
  { x: 31, y: 71, d: 2.4 },
  { x: 44, y: 14, d: 4.1 },
  { x: 63, y: 83, d: 1.3 },
  { x: 79, y: 27, d: 3.2 },
  { x: 91, y: 62, d: 5.0 },
];

function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function paint(canvas: HTMLCanvasElement) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  if (!w || !h) return;
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  const rand = rng(SEED);
  // Densidad según área: pocas estrellas, casi todas diminutas y tenues.
  const count = Math.round((w * h) / 5200);
  for (let i = 0; i < count; i++) {
    const x = rand() * w;
    const y = rand() * h;
    const big = rand() > 0.94;
    const r = big ? 0.9 + rand() * 0.6 : 0.35 + rand() * 0.45;
    const a = big ? 0.45 + rand() * 0.35 : 0.12 + rand() * 0.38;
    // Leve variación de tono: blancos fríos y algún rosado muy tenue.
    const tint = rand();
    const color = tint > 0.92 ? '231, 196, 214' : tint > 0.6 ? '206, 216, 236' : '236, 236, 242';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${color}, ${a.toFixed(3)})`;
    ctx.fill();
  }
}

export function CoverSky() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    paint(canvas);
    const observer = new ResizeObserver(() => paint(canvas));
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sky" aria-hidden="true">
      <div className="sky__haze" />
      <canvas ref={ref} className="sky__stars" />
      {TWINKLES.map((t, i) => (
        <i
          key={i}
          className="sky__twinkle"
          style={{ left: `${t.x}%`, top: `${t.y}%`, animationDelay: `${t.d}s` }}
        />
      ))}
    </div>
  );
}
