import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { PROJECTS } from '../data/content';
import type { Project } from '../data/content';
import { WORLDS } from '../data/site';
import { asset } from '../lib/asset';
import { BackStar } from './BackStar';
import { CaseMedia } from './CaseMedia';
import type { WorldId } from '../types';

type Props = {
  world: WorldId;
  projectId: string;
  onBack: () => void;
  onNavigate: (projectId: string, dir: 'next' | 'prev') => void;
};

const pad = (n: number) => String(n).padStart(2, '0');

/** Mini imagen del proyecto anterior/siguiente: su portada o, si falta, un recuadro con su fondo. */
function PagerThumb({ project }: { project: Project }) {
  const src = project.cover?.src || project.image;
  if (!src) {
    return <span className="case__pager-thumb case__pager-thumb--empty" style={{ background: project.mediaBg }} aria-hidden="true" />;
  }
  return <img className="case__pager-thumb" src={asset(src)} alt="" loading="lazy" decoding="async" />;
}

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

  // Si el caso llega con una transición (título que viaja, o deslizamiento entre casos),
  // no repite su propio fundido. Se decide al montar, para no reiniciarlo al terminar.
  const [morphEntry] = useState(() => document.documentElement.classList.contains('vt-project'));
  const sliding = useMemo(() => {
    const root = document.documentElement.classList;
    return root.contains('vt-case-next') || root.contains('vt-case-prev');
  }, [projectId]);

  // Dirección del scroll: en celular la estrella se esconde al bajar y vuelve al subir.
  const [down, setDown] = useState(false);
  const lastY = useRef(0);

  // Al cambiar de proyecto, volver arriba (antes de pintar, para que la transición lo capture).
  useLayoutEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
    lastY.current = 0;
    setDown(false);
  }, [projectId]);

  // Escape también vuelve al universo.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onBack();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onBack]);

  const onScroll = () => {
    const y = scroller.current?.scrollTop ?? 0;
    const delta = y - lastY.current;
    if (Math.abs(delta) > 6) {
      setDown(delta > 0 && y > 120);
      lastY.current = y;
    }
  };

  if (!project) return null;

  const blocks = [
    { label: 'Objetivo', text: project.goal },
    { label: 'Mi participación', text: project.contribution },
    { label: 'Herramientas', text: project.tools.length ? project.tools.join(' · ') : 'Por definir (DEMO)' },
    { label: 'Resultado', text: project.result },
  ];

  return (
    <article
      ref={scroller}
      className={`case${morphEntry ? ' case--morph' : ''}${down ? ' is-scrolling-down' : ''}`}
      aria-labelledby="case-title"
      onScroll={onScroll}
    >
      <BackStar label={`Volver a ${WORLDS[world].title}`} onClick={onBack} />

      <div className={`case__inner${morphEntry || sliding ? ' case__inner--still' : ''}`} key={project.id}>
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
          {project.subtitle && <p className="case__subtitle">{project.subtitle}</p>}
          <dl className="case__meta">
            {project.sections ? (
              <>
                <div>
                  <dt>Rol</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt>Años</dt>
                  <dd>{project.years}</dd>
                </div>
                <div>
                  <dt>Alcance</dt>
                  <dd>{project.scope}</dd>
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
          </dl>
          <p className="case__intro">{project.intro}</p>
        </header>

        {project.sections ? (
          // Proyecto real: portada y bloques con sus piezas (data/demo-content.json).
          <>
            {project.cover && (
              <div className="case__cover">
                <CaseMedia media={project.cover} bg={project.mediaBg} />
              </div>
            )}
            {project.sections.map((section) => (
              <section key={section.title} className="case__section">
                <div className="case__section-text">
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </div>
                <div
                  className={`case__media case__media--${section.layout}`}
                  style={{ '--cols': section.columns ?? 3 } as CSSProperties}
                >
                  {section.media.map((m, i) => (
                    <CaseMedia key={(m.src || m.pending || m.alt) + i} media={m} bg={project.mediaBg} />
                  ))}
                </div>
              </section>
            ))}
          </>
        ) : (
          <>
            <figure className="case__hero">
              <img
                src={asset(project.image)}
                decoding="async"
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
                      decoding="async"
                      alt={project.isDemo ? `Imagen de galería ${i + 1} (DEMO)` : `${project.title}, imagen ${i + 1}`}
                    />
                  </figure>
                ))}
              </section>
            )}
          </>
        )}

        {list.length > 1 && (
          <nav className="case__pager" aria-label="Otros proyectos">
            {/* Mini imagen del proyecto anterior / siguiente: un adelanto, no la imagen completa. */}
            <button type="button" onClick={() => onNavigate(prev.id, 'prev')}>
              <PagerThumb project={prev} />
              <span className="case__pager-text">
                <span className="case__pager-dir">← Anterior</span>
                <span className="case__pager-title">{prev.title}</span>
              </span>
            </button>
            <button type="button" onClick={() => onNavigate(next.id, 'next')}>
              <PagerThumb project={next} />
              <span className="case__pager-text">
                <span className="case__pager-dir">Siguiente →</span>
                <span className="case__pager-title">{next.title}</span>
              </span>
            </button>
          </nav>
        )}
      </div>
    </article>
  );
}
