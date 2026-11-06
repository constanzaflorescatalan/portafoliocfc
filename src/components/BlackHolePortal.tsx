type Props = { onEnter: () => void };

/**
 * Agujero negro central (docs/02): apenas mayor que los puntos orbitales, con el
 * texto siempre visible. Movimiento gravitacional suave, sin brillos.
 */
export function BlackHolePortal({ onEnter }: Props) {
  return (
    <button type="button" className="blackhole" onClick={onEnter}>
      <span className="blackhole__body" aria-hidden="true">
        <span className="blackhole__disk" />
        <span className="blackhole__ring" />
        <span className="blackhole__core" />
      </span>
      <span className="blackhole__label">Un poco más de mí</span>
      <span className="blackhole__cue" aria-hidden="true">
        Descubrir ↗
      </span>
    </button>
  );
}
