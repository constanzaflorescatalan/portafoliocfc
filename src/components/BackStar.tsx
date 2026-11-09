const STAR = 'M0 -15 L4 -4 L15 0 L4 4 L0 15 L-4 4 L-15 0 L-4 -4 Z';

type Props = { label: string; onClick: () => void; className?: string };

/** Botón «Volver» con la estrella rosa: el mismo en los casos y en Quién soy. */
export function BackStar({ label, onClick, className }: Props) {
  return (
    <button type="button" className={`back-star${className ? ` ${className}` : ''}`} onClick={onClick}>
      <svg viewBox="-16 -16 32 32" aria-hidden="true" focusable="false">
        <path d={STAR} />
      </svg>
      <span>{label}</span>
    </button>
  );
}
