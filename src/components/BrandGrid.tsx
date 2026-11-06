import type { CSSProperties } from 'react';
import { BRANDS } from '../data/content';

/**
 * Capítulo de marcas (docs/02): grid limpio, monocromo en reposo y color al pasar
 * el cursor o enfocar. Mientras no haya logos oficiales se usan nombres tipográficos.
 */
export function BrandGrid() {
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
            <li
              key={brand.name}
              className="brand"
              tabIndex={0}
              style={{ '--brand': brand.color, '--i': i } as CSSProperties}
            >
              <span className="brand__name">{brand.name}</span>
              <span className="brand__context">{brand.context}</span>
            </li>
          ))}
        </ul>

        <p className="chapter__note">
          Nombres reales · logotipos tipográficos temporales (DEMO) · el color al pasar el cursor es
          demostrativo hasta tener los logos oficiales.
        </p>
      </div>
    </section>
  );
}
