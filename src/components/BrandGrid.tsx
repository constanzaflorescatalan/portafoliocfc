import { useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { BRANDS } from '../data/content';
import type { Brand } from '../data/content';
import { asset } from '../lib/asset';
import { BrandModal } from './BrandModal';
import { StarField } from './StarField';

/**
 * Capítulo de marcas (docs/02): grid limpio, monocromo en reposo y color al pasar
 * el cursor o enfocar. Cada marca abre una ventana con período, rol y qué hace Coni.
 * Mientras no haya logo oficial se muestra el nombre.
 */
export function BrandGrid() {
  const [open, setOpen] = useState<Brand | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section id="marcas" data-chapter="brands" className="chapter brands" aria-labelledby="brands-title">
      {/* Estrellas casi invisibles: solo se perciben mirando con atención. */}
      <StarField count={70} seed={311} dim={0.35} />
      <div className="shell">
        <header className="chapter__head">
          <p className="eyebrow">02 / Experiencia</p>
          <h2 id="brands-title" tabIndex={-1} data-chapter-heading>
            Marcas con las que he trabajado<span className="pink">.</span>
          </h2>
        </header>

        <ul className="brand-grid">
          {BRANDS.map((brand, i) => {
            const cls = `brand brand--${brand.logoMode}${brand.lightBg ? ' brand--light' : ''}${brand.logoTall ? ' brand--tall' : ''}`;
            const style = { '--logo-bg': brand.logoBg ?? 'transparent', '--i': i } as CSSProperties;
            const inner = (
              <>
                {brand.logo ? (
                  <img className="brand__logo" src={asset(brand.logo)} alt={brand.name} loading="lazy" />
                ) : (
                  <span className="brand__name">{brand.name}</span>
                )}
                {brand.context && <span className="brand__context">{brand.context}</span>}
              </>
            );
            return (
              <li key={brand.name}>
                {brand.hasDetails ? (
                  <button
                    type="button"
                    className={cls}
                    style={style}
                    aria-haspopup="dialog"
                    onClick={(e) => {
                      triggerRef.current = e.currentTarget;
                      setOpen(brand);
                    }}
                  >
                    {inner}
                  </button>
                ) : (
                  // Marcas que por ahora solo tienen nombre y logo: sin ventana.
                  <div className={cls} style={style} tabIndex={0}>
                    {inner}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <BrandModal
        brand={open}
        onClose={() => {
          setOpen(null);
          triggerRef.current?.focus();
        }}
      />
    </section>
  );
}
