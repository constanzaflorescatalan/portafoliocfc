import { useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { BRANDS } from '../data/content';
import type { Brand } from '../data/content';
import { asset } from '../lib/asset';
import { BrandModal } from './BrandModal';

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
      <div className="shell">
        <header className="chapter__head">
          <p className="eyebrow">02 / Experiencia</p>
          <h2 id="brands-title" tabIndex={-1} data-chapter-heading>
            Marcas con las que he trabajado<span className="pink">.</span>
          </h2>
        </header>

        <ul className="brand-grid">
          {BRANDS.map((brand, i) => (
            <li key={brand.name} style={{ '--brand': brand.color, '--i': i } as CSSProperties}>
              <button
                type="button"
                className="brand"
                aria-haspopup="dialog"
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setOpen(brand);
                }}
              >
                {brand.logo ? (
                  <img className="brand__logo" src={asset(brand.logo)} alt={brand.name} loading="lazy" />
                ) : (
                  <span className="brand__name">{brand.name}</span>
                )}
                <span className="brand__context">{brand.context}</span>
              </button>
            </li>
          ))}
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
