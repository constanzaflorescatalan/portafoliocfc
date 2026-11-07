import type { Project } from '../data/content';

type Props = { project: Project; index: number; total: number; onOpen: () => void };

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Punto orbital de un proyecto (docs/02-03): círculo rosa con uno o dos contornos
 * finos, nombre siempre visible. Hover/foco: los anillos se expanden; clic abre el caso.
 */
export function OrbitalProject({ project, index, total, onOpen }: Props) {
  return (
    <button type="button" className="orbital" onClick={onOpen}>
      <span className="orbital__body" aria-hidden="true">
        <span className="orbital__ring orbital__ring--outer" />
        <span className="orbital__ring" />
        <span className="orbital__core" />
      </span>
      <span className="orbital__label">
        <span className="orbital__num">
          {pad(index + 1)} / {pad(total)}
        </span>
        <span className="orbital__title" data-project-title={project.id}>
          {project.title}
        </span>
        <span className="orbital__type">{project.type}</span>
      </span>
    </button>
  );
}
