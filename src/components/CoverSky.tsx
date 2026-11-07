import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * Cielo de la portada: degradé azul noche muy oscuro + estrellas finas en canvas.
 *
 * Movimiento: el campo de estrellas "respira" muy lento, acercándose y alejándose
 * del centro. Cada estrella tiene una profundidad: las cercanas se desplazan, crecen
 * y se aclaran más que las lejanas (parallax), así se percibe volumen sin brillos.
 *
 * Se pinta igual dentro de cada mitad del fondo (200% de ancho) y con el mismo reloj,
 * así ambas mitades coinciden y las estrellas se parten y viajan con su mitad al abrir.
 */
const SEED = 1987;
/** Duración de un ciclo completo acercar → alejar, en segundos. */
const BREATH_SECONDS = 14;
/** Desplazamiento máximo hacia el espectador para las estrellas más cercanas. */
const DEPTH_AMPLITUDE = 0.16;

const TWINKLES = [
  { x: 12, y: 22, d: 0 },
  { x: 31, y: 71, d: 2.4 },
  { x: 44, y: 14, d: 4.1 },
  { x: 63, y: 83, d: 1.3 },
  { x: 79, y: 27, d: 3.2 },
  { x: 91, y: 62, d: 5.0 },
];

type Star = { x: number; y: number; z: number; r: number; a: number; color: string };

function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/** Estrellas en coordenadas normalizadas (-0.5…0.5 desde el centro del cielo). */
function makeStars(width: number, height: number): Star[] {
  const rand = rng(SEED);
  const count = Math.round((width * height) / 5200);
  return Array.from({ length: count }, () => {
    const big = rand() > 0.94;
    const tint = rand();
    return {
      x: rand() - 0.5,
      y: rand() - 0.5,
      z: 0.15 + rand() * 0.85, // 1 = más cerca
      r: big ? 0.9 + rand() * 0.6 : 0.35 + rand() * 0.45,
      a: big ? 0.4 + rand() * 0.3 : 0.1 + rand() * 0.32,
      color: tint > 0.92 ? '231, 196, 214' : tint > 0.6 ? '206, 216, 236' : '236, 236, 242',
    };
  });
}

/** El movimiento es muy lento: 30 cuadros por segundo se ven igual y gastan la mitad. */
const FRAME_MS = 1000 / 30;

type Props = {
  /** Ocupa todo su contenedor (Quién soy) en vez del 200 % de cada puerta de la portada. */
  full?: boolean;
  /** Cielo quieto: se dibuja una sola vez, sin respiración ni titileo (Quién soy). */
  still?: boolean;
};

export function CoverSky({ full = false, still = false }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();
  const reduced = reducedMotion || still;

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    let stars: Star[] = [];
    let w = 0;
    let h = 0;
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      if (!w || !h) return;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = makeStars(w, h);
    };

    const draw = (time: number) => {
      if (!w || !h) return;
      ctx.clearRect(0, 0, w, h);
      // Mismo reloj en ambas mitades: fase según el tiempo absoluto.
      const breath = reduced ? 0 : (1 - Math.cos((time / 1000 / BREATH_SECONDS) * Math.PI * 2)) / 2;
      const cx = w / 2;
      const cy = h * 0.42;
      for (const s of stars) {
        const near = breath * DEPTH_AMPLITUDE * s.z;
        const scale = 1 + near;
        const x = cx + s.x * w * scale;
        const y = cy + (s.y + 0.08) * h * scale;
        if (x < -4 || x > w + 4 || y < -4 || y > h + 4) continue;
        const r = s.r * (1 + near * 3);
        const a = Math.min(1, s.a * (1 + near * 4));
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${a.toFixed(3)})`;
        ctx.fill();
      }
    };

    let last = -Infinity;
    const loop = (time: number) => {
      if (time - last >= FRAME_MS) {
        last = time;
        draw(time);
      }
      frame = window.requestAnimationFrame(loop);
    };

    resize();
    if (reduced) draw(0);
    else frame = window.requestAnimationFrame(loop);

    const observer = new ResizeObserver(() => {
      resize();
      if (reduced) draw(0);
    });
    observer.observe(canvas);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [reduced]);

  return (
    <div className={`sky${full ? ' sky--full' : ''}`} aria-hidden="true">
      <div className="sky__haze" />
      <canvas ref={ref} className="sky__stars" />
      {!still && TWINKLES.map((t, i) => (
        <i
          key={i}
          className="sky__twinkle"
          style={{ left: `${t.x}%`, top: `${t.y}%`, animationDelay: `${t.d}s` }}
        />
      ))}
    </div>
  );
}
