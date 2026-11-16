import { useEffect, useState } from 'react';
import { BIO, BRANDS } from '../data/content';
import { IDENTITY } from '../data/site';
import { asset } from '../lib/asset';

type Props = { opening: boolean; reduced: boolean; onEnter: () => void };

/**
 * Geometría de la portada aprobada (referencia 1920×1080, `references/portada_aprobada.png`)
 * expresada en un lienzo de 750×970 que escala con `--u` (ver cover.css).
 */
const ORBIT = { cx: 381, cy: 314, rx: 385, ry: 116, rotate: -20 };
/** Vuelta completa de la estrella; mantener igual a `--orbit-duration` en tokens.css (provisional). */
const ORBIT_SECONDS = 14;

const FRONT_ARC = `M ${-ORBIT.rx} 0 A ${ORBIT.rx} ${ORBIT.ry} 0 0 0 ${ORBIT.rx} 0`;
const FULL_LOOP = `${FRONT_ARC} A ${ORBIT.rx} ${ORBIT.ry} 0 0 0 ${-ORBIT.rx} 0`;
/** Radio de la luna que recorre la órbita (en unidades del lienzo 750×970). */
const MOON_R = 10;

/**
 * Luna (antes estrella de cuatro puntas), sin brillo. Hay una copia detrás y otra delante de la foto;
 * cada una es visible solo durante la mitad de la órbita que le corresponde.
 */
function MoonGradient({ half }: { half: 'front' | 'back' }) {
  return (
    <defs>
      <radialGradient id={`moon-${half}`} cx="38%" cy="34%" r="70%">
        <stop offset="0%" stopColor="#f4f3f2" />
        <stop offset="55%" stopColor="#d9d8db" />
        <stop offset="100%" stopColor="#8f97a8" />
      </radialGradient>
    </defs>
  );
}

function OrbitMoon({ half, begin }: { half: 'front' | 'back'; begin: string }) {
  return (
    <g opacity="0">
      <animateMotion dur={`${ORBIT_SECONDS}s`} begin={begin} repeatCount="indefinite" path={FULL_LOOP} />
      <animate
        attributeName="opacity"
        dur={`${ORBIT_SECONDS}s`}
        begin={begin}
        repeatCount="indefinite"
        calcMode="discrete"
        keyTimes="0;0.5"
        values={half === 'front' ? '1;0' : '0;1'}
      />
      {/* Luna: círculo con sombreado esférico suave (sin brillo). */}
      <circle className="orbit-moon" r={MOON_R} fill={`url(#moon-${half})`} />
    </g>
  );
}

/**
 * Marcas con las que ha trabajado: círculos pequeños en blanco y negro que recorren la misma
 * órbita que la luna, más lento. Imágenes en `public/assets/logos-orbita` (mismo nombre que el logo).
 */
const BRAND_SECONDS = 90;
const BRAND_R = 19;
const ORBIT_LOGOS: string[] = Array.from(
  new Set(BRANDS.filter((b) => b.logo).map((b) => b.logo!.replace('assets/logos/', 'assets/logos-orbita/'))),
);

/** Puntos repartidos a igual distancia sobre la órbita (para la versión quieta). */
const STILL_POINTS: [number, number][] = (() => {
  const steps = 720;
  const pts: [number, number][] = [];
  for (let k = 0; k <= steps; k++) {
    const a = (2 * Math.PI * k) / steps;
    pts.push([-ORBIT.rx * Math.cos(a), ORBIT.ry * Math.sin(a)]);
  }
  const acc = [0];
  for (let k = 1; k < pts.length; k++) acc.push(acc[k - 1] + Math.hypot(pts[k][0] - pts[k - 1][0], pts[k][1] - pts[k - 1][1]));
  const total = acc[acc.length - 1];
  return ORBIT_LOGOS.map((_, i) => {
    const target = (i / ORBIT_LOGOS.length) * total;
    const k = acc.findIndex((d) => d >= target);
    return pts[Math.max(0, k)];
  });
})();

/** Un círculo de marca. Con movimiento reducido queda quieto en su punto de la órbita. */
function BrandChip({ src, index, half, still }: { src: string; index: number; half: 'front' | 'back'; still: boolean }) {
  const n = ORBIT_LOGOS.length;
  const f = index / n;
  const chip = (
    // La órbita está girada; se compensa para que los logos queden derechos.
    <g transform={`rotate(${-ORBIT.rotate})`}>
      <image href={asset(src)} x={-BRAND_R} y={-BRAND_R} width={BRAND_R * 2} height={BRAND_R * 2} />
    </g>
  );
  if (still) {
    const [x, y] = STILL_POINTS[index];
    if ((half === 'front') !== y >= 0) return null;
    return <g transform={`translate(${x.toFixed(1)} ${y.toFixed(1)})`}>{chip}</g>;
  }
  const begin = `${(-f * BRAND_SECONDS).toFixed(2)}s`;
  return (
    <g opacity="0">
      <animateMotion dur={`${BRAND_SECONDS}s`} begin={begin} repeatCount="indefinite" path={FULL_LOOP} />
      <animate
        attributeName="opacity"
        dur={`${BRAND_SECONDS}s`}
        begin={begin}
        repeatCount="indefinite"
        calcMode="discrete"
        keyTimes="0;0.5"
        values={half === 'front' ? '1;0' : '0;1'}
      />
      {chip}
    </g>
  );
}

function OrbitBrands({ half, still }: { half: 'front' | 'back'; still: boolean }) {
  return (
    <g className="orbit-brands">
      {ORBIT_LOGOS.map((src, i) => (
        <BrandChip key={src} src={src} index={i} half={half} still={still} />
      ))}
    </g>
  );
}

const SEEN_KEY = 'cf:coverSeen';

/** ¿Ya vio la portada completa en esta visita? Entonces la intro es corta. */
function readSeen(): boolean {
  try {
    return window.sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    return false;
  }
}

export function LandingHero({ opening, reduced, onEnter }: Props) {
  const [quick] = useState(readSeen);
  // Paso 1 (siempre): nombre y títulos. Paso 2 (primer clic): los títulos se van y la
  // tarjeta muestra quién es. El segundo clic abre el broche hacia Diseño / Informática.
  const [showBio, setShowBio] = useState(false);
  const advance = () => {
    if (!showBio) setShowBio(true);
    else onEnter();
  };
  useEffect(() => {
    try {
      window.sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* sin almacenamiento: siempre intro completa */
    }
  }, []);
  const moonBegin = quick ? '0.5s' : '1.8s';
  // Las marcas se cargan después del retrato para no retrasar la portada.
  const [brandsReady, setBrandsReady] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setBrandsReady(true), quick ? 150 : 900);
    return () => window.clearTimeout(t);
  }, [quick]);
  const orbitTransform = `translate(${ORBIT.cx} ${ORBIT.cy}) rotate(${ORBIT.rotate})`;

  return (
    <>
      <div className={`hero${quick ? ' hero--quick' : ''}`}>
        <div className="hero__card">
          <h1 className="hero__name">{IDENTITY.name}</h1>
          <div className="hero__rule" aria-hidden="true" />
          {/* Títulos y presentación comparten lugar: uno se pliega y el otro se despliega. */}
          <div className={`hero__swap${showBio ? ' is-bio' : ''}`}>
            <div className="hero__swap-item" aria-hidden={showBio}>
              <p className="hero__headline">
                <span>{IDENTITY.headline[0]}</span> <span>{IDENTITY.headline[1]}</span>
              </p>
            </div>
            <div className="hero__swap-item" aria-hidden={!showBio}>
              <p className="hero__bio" aria-live="polite">
                {showBio ? BIO : ''}
              </p>
            </div>
          </div>
          {/* Flecha que invita a entrar (sin texto). Control accesible por teclado. */}
          <button
            type="button"
            className={`hero__enter${showBio ? ' hero__enter--go' : ''}`}
            aria-label={showBio ? 'Entrar al portafolio' : 'Conocer a Constanza'}
            disabled={opening}
            onClick={advance}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
          </button>
        </div>

        <div className="hero__portrait">
          <svg className="hero__orbit" viewBox="0 0 750 970" aria-hidden="true" focusable="false">
            <MoonGradient half="back" />
            <g transform={orbitTransform}>
              <ellipse
                className="orbit-line"
                cx="0"
                cy="0"
                rx={ORBIT.rx}
                ry={ORBIT.ry}
                pathLength="1"
              />
              {brandsReady && <OrbitBrands half="back" still={reduced} />}
              {!reduced && <OrbitMoon half="back" begin={moonBegin} />}
            </g>
          </svg>

          <div className="hero__photo">
            <img
              src={asset('assets/retrato_constanza.jpg')}
              alt="Constanza Flores"
              width={900}
              height={900}
            />
          </div>

          <svg className="hero__orbit hero__orbit--front" viewBox="0 0 750 970" aria-hidden="true" focusable="false">
            <MoonGradient half="front" />
            <g transform={orbitTransform}>
              <path className="orbit-line orbit-line--front" d={FRONT_ARC} pathLength="1" />
              {brandsReady && <OrbitBrands half="front" still={reduced} />}
              {!reduced && <OrbitMoon half="front" begin={moonBegin} />}
            </g>
          </svg>
        </div>

        {/* Zona clicable del "broche" para ratón y toque. El control accesible es la flecha de la tarjeta. */}
        <button
          type="button"
          className="hero__clasp"
          tabIndex={-1}
          aria-hidden="true"
          disabled={opening}
          onClick={advance}
        />
      </div>

    </>
  );
}
