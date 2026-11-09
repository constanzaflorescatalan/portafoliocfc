import { useEffect, useRef } from 'react';
import type { Brand } from '../data/content';
import { asset } from '../lib/asset';

type Props = { brand: Brand | null; onClose: () => void };

/**
 * Vista previa del trabajo, arriba de la ventana. Con video: la imagen es la portada,
 * con botón de reproducir y enlace «Ver video». Sin imagen todavía: un recuadro de espera.
 */
function BrandPreviewMedia({ brand }: { brand: Brand }) {
  const preview = brand.preview;
  if (!preview?.image) {
    return (
      <div className="brand-modal__media brand-modal__media--empty" aria-hidden="true">
        <span>Vista previa del trabajo · pendiente</span>
      </div>
    );
  }
  const img = (
    <img
      src={asset(preview.image)}
      alt={preview.isDemo ? 'Imagen de ejemplo (DEMO), no es el trabajo real' : `Trabajo para ${brand.name}`}
      loading="lazy"
      decoding="async"
    />
  );
  return (
    <figure className="brand-modal__media">
      {preview.video ? (
        <a
          className="brand-modal__video"
          href={preview.video}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver video del trabajo para ${brand.name} (se abre en otra pestaña)`}
        >
          {img}
          <span className="brand-modal__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M9 7l8 5-8 5z" />
            </svg>
          </span>
        </a>
      ) : (
        img
      )}
      {preview.isDemo && <span className="demo-tag brand-modal__demo">DEMO</span>}
    </figure>
  );
}

/**
 * Ventana de una marca: texto pequeño con período, rol y qué hace Coni ahí.
 * <dialog> nativo: foco atrapado, Escape y clic fuera cierran.
 */
export function BrandModal({ brand, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (brand && !dialog.open) dialog.showModal();
    if (!brand && dialog.open) dialog.close();
  }, [brand]);

  return (
    <dialog
      ref={ref}
      className="brand-modal"
      aria-labelledby="brand-modal-title"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {brand && (
        <div className="brand-modal__card">
          <button type="button" className="brand-modal__close" onClick={onClose} aria-label="Cerrar">
            ×
          </button>
          <BrandPreviewMedia brand={brand} />
          {brand.logo ? (
            <span className="brand-modal__logo" style={{ background: brand.logoBg ?? 'transparent' }}>
              <img src={asset(brand.logo)} alt={brand.name} />
            </span>
          ) : (
            <h2 id="brand-modal-title" className="brand-modal__name" style={{ color: brand.color }}>
              {brand.name}
            </h2>
          )}
          {brand.logo && (
            <h2 id="brand-modal-title" className="sr-only">
              {brand.name}
            </h2>
          )}
          <p className="brand-modal__context">
            {brand.context}
            {brand.detail ? ` · ${brand.detail}` : ''}
          </p>
          <dl className="brand-modal__facts">
            <div>
              <dt>Período</dt>
              <dd>{brand.period}</dd>
            </div>
            <div>
              <dt>Rol</dt>
              <dd>{brand.role}</dd>
            </div>
          </dl>
          <p className="brand-modal__summary">{brand.summary}</p>
          {brand.preview?.video && (
            <a className="brand-modal__link" href={brand.preview.video} target="_blank" rel="noopener noreferrer">
              Ver video <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      )}
    </dialog>
  );
}
