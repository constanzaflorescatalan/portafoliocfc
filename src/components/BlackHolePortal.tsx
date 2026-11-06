type Props = { onEnter: () => void };

/**
 * Agujero negro central: apenas mayor que los puntos orbitales, con «CF» en gris
 * oscuro al centro (pedido de Coni; reemplaza a «Un poco más de mí»).
 * Movimiento gravitacional suave, sin brillos. Lleva a Quién soy.
 */
export function BlackHolePortal({ onEnter }: Props) {
  return (
    <button
      type="button"
      className="blackhole"
      onClick={onEnter}
      aria-label="Un poco más de mí: ir a Quién soy"
    >
      <span className="blackhole__body" aria-hidden="true">
        <span className="blackhole__disk" />
        <span className="blackhole__ring" />
        <span className="blackhole__core" />
        <span className="blackhole__mark">CF</span>
      </span>
    </button>
  );
}
