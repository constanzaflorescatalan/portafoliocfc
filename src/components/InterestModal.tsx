import { useEffect, useRef } from 'react';
import type { Interest } from '../data/content';
import { asset } from '../lib/asset';
import { InterestIcon } from './InterestIcon';

type Props = { interest: Interest | null; onClose: () => void };

/**
 * Ventana de un interés. Usa <dialog> nativo: foco atrapado, Escape cierra y el
 * fondo queda inerte. Clic fuera de la tarjeta también cierra.
 */
export function InterestModal({ interest, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (interest && !dialog.open) dialog.showModal();
    if (!interest && dialog.open) dialog.close();
  }, [interest]);

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="modal-title"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {interest && (
        <div className="modal__card">
          <button type="button" className="modal__close" onClick={onClose} aria-label="Cerrar">
            ×
          </button>
          <figure className={`modal__media${interest.image ? '' : ' modal__media--icon'}`}>
            {interest.image ? (
              <img
                src={asset(interest.image)}
                alt={interest.isDemo ? `Foto de ejemplo para ${interest.name} (DEMO)` : interest.name}
              />
            ) : (
              <InterestIcon id={interest.id} />
            )}
          </figure>
          <div className="modal__body">
            <span className="modal__icon">
              <InterestIcon id={interest.id} />
            </span>
            <h2 id="modal-title">{interest.name}</h2>
            <p>{interest.description}</p>
            {interest.isDemo && <span className="demo-tag">Contenido DEMO</span>}
          </div>
        </div>
      )}
    </dialog>
  );
}
