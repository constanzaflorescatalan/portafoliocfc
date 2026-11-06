import type { CSSProperties } from 'react';
import { PROJECTS } from '../data/content';
import { WORLDS } from '../data/site';
import type { WorldId } from '../types';
import { BlackHolePortal } from './BlackHolePortal';
import { OrbitalProject } from './OrbitalProject';
import { StarField } from './StarField';

type Props = {
  world: WorldId;
  onOpenProject: (projectId: string) => void;
  onPortal: () => void;
  onScrollCue: () => void;
};

/**
 * Universo de cada mundo (docs/02): título + formación, proyectos como puntos
 * orbitales con nombre siempre visible y el agujero negro al centro.
 */
export function UniverseScene({ world, onOpenProject, onPortal, onScrollCue }: Props) {
  const info = WORLDS[world];
  const projects = PROJECTS[world];

  return (
    <section
      id="universo"
      data-chapter="universe"
      className={`chapter universe universe--${world}`}
      aria-labelledby="universe-title"
    >
      <StarField count={90} seed={world === 'design' ? 57 : 91} />

      <header className="universe__head">
        <h1 id="universe-title" className="universe__title" tabIndex={-1} data-autofocus>
          {info.title}
          <span className="universe__dot">.</span>
        </h1>
        <p className="universe__credential">{info.credential}</p>
      </header>

      <div className="universe__space">
        <ul className="constellation" aria-label={`Proyectos de ${info.title}`}>
          {projects.map((project, i) => (
            <li
              key={project.id}
              className="constellation__item"
              style={
                {
                  '--x': `${project.position[0]}%`,
                  '--y': `${project.position[1]}%`,
                  '--i': i,
                } as CSSProperties
              }
            >
              <OrbitalProject
                project={project}
                index={i}
                total={projects.length}
                onOpen={() => onOpenProject(project.id)}
              />
            </li>
          ))}
        </ul>

        <BlackHolePortal onEnter={onPortal} />
      </div>

      <div className="universe__foot">
        <button type="button" className="scroll-cue" onClick={onScrollCue}>
          Desliza para ver marcas <span aria-hidden="true">↓</span>
        </button>
      </div>
    </section>
  );
}
