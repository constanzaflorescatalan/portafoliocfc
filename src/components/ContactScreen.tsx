import { CONTACT } from '../data/content';

const IDENTITY_YEAR = new Date().getFullYear();
import { asset } from '../lib/asset';

/** Capítulo final, sin formulario (docs/02). El copy del título es provisional. */
export function ContactScreen() {
  return (
    <section id="contacto" data-chapter="contact" className="chapter contact" aria-labelledby="contact-title">
      <div className="shell contact__shell">
        <p className="eyebrow">03 / Contacto</p>
        <h2 id="contact-title" className="contact__title" tabIndex={-1} data-chapter-heading>
          ¿Creamos algo <em>juntos?</em>
        </h2>
        <p className="contact__subtitle">{CONTACT.subtitle}</p>

        <a className="contact__email" href={`mailto:${CONTACT.email}`}>
          {CONTACT.email} <span aria-hidden="true">↗</span>
        </a>

        <ul className="contact__links">
          <li>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <a href={asset(CONTACT.cv)} download="Constanza_Flores_CV.pdf">
              Descargar CV <span aria-hidden="true">↓</span>
            </a>
          </li>
        </ul>

        <footer className="contact__foot">
          <span>© Constanza Flores · {IDENTITY_YEAR}</span>
          <span>Diseño + Informática</span>
        </footer>
      </div>
    </section>
  );
}
