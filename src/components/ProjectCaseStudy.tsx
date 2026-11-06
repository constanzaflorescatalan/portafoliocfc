import { useEffect, useRef } from 'react';
import { PROJECTS } from '../data/content';
import { WORLDS } from '../data/site';
import { asset } from '../lib/asset';
import type { WorldId } from '../types';

type Props = {
  world: WorldId;
  projectId: string;
  onBack: () => void;
  onNavigate: (projectId: string) => void;
};

const pad = (n: number) => String(n).padStart(2, '0');
const STAR = 'M0 -15 L4 -4 L15 0 L4 4 L0 15 L-4 4 L-15 0 L-4 -4 Z';

/**
 * Caso de estudio editorial (docs/02): fondo carbón, estrella fija para volver al
 * universo, cabecera, imagen principal, bloques breves, galería y Anterior/Siguiente.
 */
export function ProjectCaseStudy({ world, projectId, onBack, onNavigate }: Props) {
  const list = PROJECTS[world];
  const index = Math.max(0, list.findIndex((p) => p.id === projectId));
  const project = list[index];
  const prev = list[(index - 1 + list.length) % list.length];
  const next = list[(index + 1) % list.length];
  const scroller = useRef<HTMLElement>(null);

  // Al cambiar de proyecto, volver arriba.
  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
  }, [projectId]);

  // Escape también vuelve al universo.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onBack();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onBack]);

  if (!project) return null;

  const blocks = [
    { label: 'Objetivo', text: project.goal },
    { label: 'Mi participación', text: project.contribution },
    { label: 'Herramientas', text: project.tools.length ? project.tools.join(' · ') : 'Por definir (DEMO)' },
    { label: 'Resultado', text: project.result },
  ];

  return (
    <article ref={scroller} className="case" aria-labelledby="case-title">
      <button type="button" className="case__star" onClick={onBack}>
        <svg viewBox="-16 -16 32 32" aria-hidden="true" focusable="false">
          <path d={STAR} />
        </svg>
        <span>Volver a {WORLDS[world].title}</span>
      </button>

      <div className="case__inner" key={project.id}>
        <header className="case__head">
          <p className="case__kicker">
            <span>
              {WORLDS[world].title} / {project.type}
            </span>
            {project.isDemo && <span className="demo-tag">Contenido DEMO</span>}
            <span className="case__counter">
              {pad(index + 1)} / {pad(list.length)}
            </span>
          </p>
          <h1 id="case-title" className="case__title" tabIndex={-1} data-autofocus>
            {project.title}
          </h1>
          <dl className="case__meta">
            <div>
              <dt>Cliente</dt>
              <dd>{project.client}</dd>
            </div>
            {project.agency && (
              <div>
                <dt>Agencia / colaboración</dt>
                <dd>{project.agency}</dd>
              </div>
            )}
            <div>
              <dt>Tipo</dt>
              <dd>{project.type}</dd>
            </div>
          </dl>
          <p className="case__intro">{project.intro}</p>
        </header>

        <figure className="case__hero">
          <img
            src={asset(project.image)}
            alt={project.isDemo ? 'Imagen de ejemplo (DEMO), no es un trabajo real' : project.title}
          />
        </figure>

        <section className="case__blocks" aria-label="Detalles del proyecto">
          {blocks.map((b) => (
            <div key={b.label} className="case__block">
              <h2>{b.label}</h2>
              <p>{b.text}</p>
            </div>
          ))}
        </section>

        {project.gallery.length > 0 && (
          <section className="case__gallery" aria-label="Galería">
            {project.gallery.map((src, i) => (
              <figure key={src + i}>
                <img
                  src={asset(src)}
                  loading="lazy"
                  alt={project.isDemo ? `Imagen de galería ${i + 1} (DEMO)` : `${project.title}, imagen ${i + 1}`}
                />
              </figure>
            ))}
          </section>
        )}

        {list.length > 1 && (
          <nav className="case__pager" aria-label="Otros proyectos">
            <button type="button" onClick={() => onNavigate(prev.id)}>
              <span className="case__pager-dir">← Anterior</span>
              <span className="case__pager-title">{prev.title}</span>
            </button>
            <button type="button" onClick={() => onNavigate(next.id)}>
              <span className="case__pager-dir">Siguiente →</span>
              <span className="case__pager-title">{next.title}</span>
            </button>
          </nav>
        )}
      </div>
    </article>
  );
}
