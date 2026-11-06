import { CONTACT } from '../data/content';
import { asset } from '../lib/asset';
import { StarField } from './StarField';

const YEAR = new Date().getFullYear();

/** Separa la frase en dos tramos («Diseño que se ve.» / «Código que funciona.»). */
function splitTitle(title: string): [string, string] {
  const i = title.indexOf('. ');
  return i === -1 ? [title, ''] : [title.slice(0, i + 1), title.slice(i + 2)];
}

/** Capítulo final, sin formulario (docs/02). La frase sale de data/demo-content.json. */
export function ContactScreen() {
  const [first, second] = splitTitle(CONTACT.title);
  const links = [
    { label: 'LinkedIn', href: CONTACT.linkedin },
    { label: 'GitHub', href: CONTACT.github },
    { label: 'Vimeo', href: CONTACT.vimeo },
  ];

  return (
    <section id="contacto" data-chapter="contact" className="chapter contact" aria-labelledby="contact-title">
      <StarField count={60} seed={733} dim={0.35} />
      <div className="shell contact__shell">
        <p className="eyebrow">03 / Contacto</p>
        <h2 id="contact-title" className="contact__title" tabIndex={-1} data-chapter-heading>
          {first}
          {second && (
            <>
              <br />
              <em>{second}</em>
            </>
          )}
        </h2>

        <a className="contact__email" href={`mailto:${CONTACT.email}`}>
          {CONTACT.email} <span aria-hidden="true">↗</span>
        </a>

        <ul className="contact__links">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
          <li>
            <a href={asset(CONTACT.cv)} download="Constanza_Flores_CV.pdf">
              Descargar CV <span aria-hidden="true">↓</span>
            </a>
          </li>
        </ul>

        <footer className="contact__foot">
          <span>© Constanza Flores · {YEAR}</span>
          <span>Diseño + Informática</span>
        </footer>
      </div>
    </section>
  );
}
