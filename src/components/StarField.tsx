import { useMemo } from 'react';

type Props = { count?: number; seed?: number };

/**
 * Estrellas mínimas y tenues de fondo (docs/01). Posiciones deterministas para que
 * la composición sea estable; son decorativas y nunca clicables.
 */
export function StarField({ count = 70, seed = 57 }: Props) {
  const stars = useMemo(() => {
    let s = seed;
    const rnd = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
    return Array.from({ length: count }, () => ({
      left: 3 + rnd() * 94,
      top: 4 + rnd() * 92,
      opacity: 0.08 + rnd() * 0.26,
    }));
  }, [count, seed]);

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star, i) => (
        <i
          key={i}
          style={{ left: `${star.left}%`, top: `${star.top}%`, opacity: star.opacity }}
        />
      ))}
    </div>
  );
}
