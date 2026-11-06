import { useEffect, useRef, useState } from 'react';
import { CONTACT } from '../data/content';
import { asset } from '../lib/asset';
import { StarField } from './StarField';

const YEAR = new Date().getFullYear();

/** Copia el correo; si el navegador no deja, abre el programa de correo. */
async function copyEmail(email: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(email);
    return true;
  } catch {
    window.location.href = `mailto:${email}`;
    return false;
  }
}

/** Capítulo final, sin formulario (docs/02). Los textos salen de data/demo-content.json. */
export function ContactScreen() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onMail = async () => {
    if (await copyEmail(CONTACT.email)) {
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2200);
    }
  };

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
          <span className="contact__lead">{CONTACT.titleLead}</span>
          <em className="contact__highlight">{CONTACT.titleHighlight}</em>
        </h2>

        <ul className="contact__links">
          <li className="contact__mail">
            <button type="button" onClick={onMail} title={CONTACT.email} aria-describedby="mail-status">
              Mail <span aria-hidden="true">⧉</span>
            </button>
            <span id="mail-status" className={`contact__toast${copied ? ' is-on' : ''}`} role="status">
              {copied ? 'Correo copiado' : ''}
            </span>
          </li>
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
