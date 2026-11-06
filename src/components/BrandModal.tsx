import { useEffect, useRef } from 'react';
import type { Brand } from '../data/content';
import { asset } from '../lib/asset';

type Props = { brand: Brand | null; onClose: () => void };

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
          {brand.logo ? (
            <img className="brand-modal__logo" src={asset(brand.logo)} alt={brand.name} />
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
        </div>
      )}
    </dialog>
  );
}
