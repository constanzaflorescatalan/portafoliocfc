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
const STAR_SHAPE = 'M0 -15 L4 -4 L15 0 L4 4 L0 15 L-4 4 L-15 0 L-4 -4 Z';

/**
 * Estrella de cuatro puntas, sin brillo. Hay una copia detrás y otra delante de la foto;
 * cada una es visible solo durante la mitad de la órbita que le corresponde.
 */
function OrbitStar({ half }: { half: 'front' | 'back' }) {
  return (
    <g opacity="0">
      <animateMotion dur={`${ORBIT_SECONDS}s`} begin="1.8s" repeatCount="indefinite" path={FULL_LOOP} />
      <animate
        attributeName="opacity"
        dur={`${ORBIT_SECONDS}s`}
        begin="1.8s"
        repeatCount="indefinite"
        calcMode="discrete"
        keyTimes="0;0.5"
        values={half === 'front' ? '1;0' : '0;1'}
      />
      <path className="orbit-star" d={STAR_SHAPE} transform={`rotate(${-ORBIT.rotate})`} />
    </g>
  );
}

function PinIcon() {
  return (
    <svg className="hero__pin" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

export function LandingHero({ opening, reduced, onEnter }: Props) {
  const orbitTransform = `translate(${ORBIT.cx} ${ORBIT.cy}) rotate(${ORBIT.rotate})`;

  return (
    <>
      <div className="hero">
        <div className="hero__card">
          <h1 className="hero__name">{IDENTITY.name}</h1>
          <p className="hero__headline">
            <span>{IDENTITY.headline[0]}</span> <span>{IDENTITY.headline[1]}</span>
          </p>
          <div className="hero__rule" aria-hidden="true" />
          <p className="hero__location">
            <PinIcon />
            <span>{IDENTITY.location}</span>
          </p>
        </div>

        <div className="hero__portrait">
          <svg className="hero__orbit" viewBox="0 0 750 970" aria-hidden="true" focusable="false">
            <g transform={orbitTransform}>
              <ellipse
                className="orbit-line"
                cx="0"
                cy="0"
                rx={ORBIT.rx}
                ry={ORBIT.ry}
                pathLength="1"
              />
              {!reduced && <OrbitStar half="back" />}
            </g>
          </svg>

          <div className="hero__photo">
            <img
              src={asset('assets/retrato_demo.jpg')}
              alt="Foto de referencia, pendiente de reemplazar por la foto final de Constanza"
              width={800}
              height={800}
            />
          </div>

          <svg className="hero__orbit hero__orbit--front" viewBox="0 0 750 970" aria-hidden="true" focusable="false">
            <g transform={orbitTransform}>
              <path className="orbit-line orbit-line--front" d={FRONT_ARC} pathLength="1" />
              {!reduced && <OrbitStar half="front" />}
            </g>
          </svg>
        </div>

        {/* Zona clicable del "broche" para ratón y toque. El control accesible es el botón de abajo. */}
        <button
          type="button"
          className="hero__clasp"
          tabIndex={-1}
          aria-hidden="true"
          disabled={opening}
          onClick={onEnter}
        />
      </div>

      <div className="cover__bottom">
        <button type="button" className="enter-btn" disabled={opening} onClick={onEnter}>
          Entrar al universo <span aria-hidden="true">↗</span>
        </button>
        <p className="cover__demo">Prototipo con contenido de ejemplo</p>
      </div>
    </>
  );
}
