import { useCallback, useEffect, useRef, useState } from 'react';
import { LandingHero } from './components/LandingHero';
import { OpeningTransition } from './components/OpeningTransition';
import { PersonalCollage } from './components/PersonalCollage';
import { ProjectCaseStudy } from './components/ProjectCaseStudy';
import { TopNav } from './components/TopNav';
import { WorldSite } from './components/WorldSite';
import { WorldSelector } from './components/WorldSelector';
import { PROJECTS } from './data/content';
import { WORLDS } from './data/site';
import { useReducedMotion } from './hooks/useReducedMotion';
import { readMs } from './lib/motion';
import type { AppState, Chapter, NavTarget, Stage, WorldId } from './types';

const WORLD_BY_PATH: Record<string, WorldId> = { diseno: 'design', informatica: 'tech' };
const LAST_WORLD_KEY = 'cf:lastWorld';

/** Cambia la URL sin romper la navegación si el navegador bloquea el historial (iframes, vistas previas). */
function setHash(hash: string, mode: 'push' | 'replace') {
  if (window.location.hash === hash) return;
  try {
    if (mode === 'push') window.history.pushState(null, '', hash);
    else window.history.replaceState(null, '', hash);
  } catch {
    /* sin historial: la app sigue funcionando por estado */
  }
}

function readLastWorld(): WorldId {
  try {
    const value = window.sessionStorage.getItem(LAST_WORLD_KEY);
    return value === 'tech' ? 'tech' : 'design';
  } catch {
    return 'design';
  }
}

function saveLastWorld(world: WorldId) {
  try {
    window.sessionStorage.setItem(LAST_WORLD_KEY, world);
  } catch {
    /* sin almacenamiento: se usa Diseño por defecto */
  }
}

/** Ruta (hash) de cada estado: enlaces directos y botón "atrás" del navegador. */
function hashFor({ stage, world, project, chapter }: AppState): string {
  const w = WORLDS[world ?? 'design'].path;
  if (stage === 'project' && project) return `#${w}/${project}`;
  if (stage === 'about' || stage === 'portal') return '#/quien-soy';
  if (stage === 'universe' || stage === 'entering') {
    if (chapter === 'brands') return '#/marcas';
    if (chapter === 'contact') return '#/contacto';
    return `#${w}`;
  }
  if (stage === 'chooser' || stage === 'opening') return '#/mundos';
  return '#/';
}

function parseHash(): AppState {
  const parts = window.location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const [first, second] = parts;
  const world = first ? WORLD_BY_PATH[first] : undefined;
  if (world) {
    if (second && PROJECTS[world].some((p) => p.id === second)) {
      return { stage: 'project', world, project: second };
    }
    return { stage: 'universe', world };
  }
  if (first === 'marcas') return { stage: 'universe', world: readLastWorld(), chapter: 'brands' };
  if (first === 'contacto') return { stage: 'universe', world: readLastWorld(), chapter: 'contact' };
  if (first === 'quien-soy') return { stage: 'about', world: readLastWorld() };
  if (first === 'mundos') return { stage: 'chooser', world: null };
  return { stage: 'cover', world: null };
}

function titleFor(state: AppState): string {
  const suffix = 'Constanza Flores';
  if (state.stage === 'chooser') return `Elige un mundo — ${suffix}`;
  if (state.stage === 'about' || state.stage === 'portal') return `Quién soy — ${suffix}`;
  if (state.stage === 'project' && state.world) {
    const p = PROJECTS[state.world].find((x) => x.id === state.project);
    if (p) return `${p.title} — ${suffix}`;
  }
  if (state.stage === 'universe' && state.world) {
    if (state.chapter === 'brands') return `Marcas — ${suffix}`;
    if (state.chapter === 'contact') return `Contacto — ${suffix}`;
    return `${WORLDS[state.world].title} — ${suffix}`;
  }
  return `${suffix} — Portafolio`;
}

export default function App() {
  const reduced = useReducedMotion();
  const [state, setState] = useState<AppState>(parseHash);
  const stageRef = useRef<Stage>(state.stage);
  const timer = useRef<number | undefined>(undefined);
  const firstPanelRef = useRef<HTMLButtonElement>(null);
  const previousStage = useRef<Stage>(state.stage);
  /** Capítulo visible al hacer scroll (para el indicador del menú). */
  const [visibleChapter, setVisibleChapter] = useState<Chapter>('universe');

  const update = useCallback((next: AppState) => {
    stageRef.current = next.stage;
    if (next.world) saveLastWorld(next.world);
    setState(next);
  }, []);

  const after = useCallback((ms: number, fn: () => void) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(fn, ms);
  }, []);

  const pushHash = useCallback((next: AppState) => {
    setHash(hashFor(next), 'push');
  }, []);

  /** Salto directo, sin animación (menú, volver, historial del navegador). */
  const jump = useCallback(
    (next: AppState, push = true) => {
      window.clearTimeout(timer.current);
      update(next);
      if (push) pushHash(next);
    },
    [update, pushHash],
  );

  // Portada → selector: el negro se parte en dos.
  const openCover = useCallback(() => {
    if (stageRef.current !== 'cover') return;
    const next: AppState = { stage: 'opening', world: null };
    update(next);
    pushHash(next);
    const ms = readMs('--motion-long', 1000);
    after(ms > 0 ? ms + 80 : 0, () => update({ stage: 'chooser', world: null }));
  }, [after, pushHash, update]);

  // Selector → universo: la mitad elegida se expande y la otra se retira.
  const chooseWorld = useCallback(
    (world: WorldId) => {
      if (stageRef.current !== 'chooser') return;
      const next: AppState = { stage: 'entering', world };
      update(next);
      pushHash(next);
      const ms = readMs('--motion-expand', 850);
      after(ms > 0 ? ms + 60 : 0, () => update({ stage: 'universe', world }));
    },
    [after, pushHash, update],
  );

  // Agujero negro → quién soy: zoom/absorción y luego Quién soy.
  const enterPortal = useCallback(() => {
    if (stageRef.current !== 'universe') return;
    const world = state.world ?? readLastWorld();
    const next: AppState = { stage: 'portal', world };
    update(next);
    pushHash(next);
    const ms = readMs('--motion-portal', 900);
    after(ms > 0 ? ms : 0, () => update({ stage: 'about', world }));
  }, [after, pushHash, update, state.world]);

  const openProject = useCallback(
    (world: WorldId, project: string) => jump({ stage: 'project', world, project }),
    [jump],
  );

  const goNav = useCallback(
    (target: NavTarget) => {
      const current = stageRef.current;
      if (current === 'entering' || current === 'opening' || current === 'portal') return;
      if (target === 'design' || target === 'tech') {
        if (current === 'chooser') chooseWorld(target);
        else jump({ stage: 'universe', world: target, chapter: 'universe', nonce: Date.now() });
        return;
      }
      const world = state.world ?? readLastWorld();
      if (target === 'about') jump({ stage: 'about', world });
      else jump({ stage: 'universe', world, chapter: target, nonce: Date.now() });
    },
    [chooseWorld, jump, state.world],
  );

  const goHome = useCallback(() => jump({ stage: 'cover', world: null }), [jump]);
  const backToUniverse = useCallback(
    (world: WorldId) => jump({ stage: 'universe', world }),
    [jump],
  );

  /** El scroll entre capítulos actualiza la URL sin llenar el historial. */
  const onChapterChange = useCallback(
    (chapter: Chapter) => {
      setVisibleChapter(chapter);
      if (stageRef.current !== 'universe' || !state.world) return;
      setHash(hashFor({ stage: 'universe', world: state.world, chapter }), 'replace');
    },
    [state.world],
  );

  // Botón "atrás/adelante" del navegador.
  useEffect(() => {
    const onPop = () => jump(parseHash(), false);
    window.addEventListener('popstate', onPop);
    return () => {
      window.removeEventListener('popstate', onPop);
      window.clearTimeout(timer.current);
    };
  }, [jump]);

  // Foco coherente al cambiar de pantalla (teclado y lector de pantalla).
  useEffect(() => {
    const was = previousStage.current;
    previousStage.current = state.stage;
    if (was === state.stage && state.stage !== 'project') return;
    if (state.stage === 'chooser') firstPanelRef.current?.focus({ preventScroll: true });
    if (state.stage === 'universe' || state.stage === 'project' || state.stage === 'about') {
      window.requestAnimationFrame(() =>
        document.querySelector<HTMLElement>('[data-autofocus]')?.focus({ preventScroll: true }),
      );
    }
  }, [state.stage, state.project]);

  useEffect(() => {
    document.title = titleFor(state);
  }, [state]);

  const { stage, world } = state;
  const showCover = stage === 'cover' || stage === 'opening';
  const showChooser = stage === 'opening' || stage === 'chooser' || stage === 'entering';
  const showSite = (stage === 'universe' || stage === 'portal') && world;

  let activeNav: NavTarget | null = null;
  if (stage === 'about' || stage === 'portal') activeNav = 'about';
  else if (stage === 'universe' || stage === 'entering' || stage === 'project') {
    if (stage === 'universe' && visibleChapter !== 'universe') activeNav = visibleChapter;
    else activeNav = world;
  }

  return (
    <>
      <a className="skip" href="#main">
        Saltar al contenido
      </a>
      <TopNav active={activeNav} onHome={goHome} onNav={goNav} />

      <main id="main">
        {showChooser && (
          <WorldSelector
            chosen={stage === 'entering' ? world : null}
            inert={stage === 'opening'}
            reduced={reduced}
            onChoose={chooseWorld}
            firstPanelRef={firstPanelRef}
          />
        )}

        {showCover && (
          <OpeningTransition opening={stage === 'opening'}>
            <LandingHero opening={stage === 'opening'} reduced={reduced} onEnter={openCover} />
          </OpeningTransition>
        )}

        {showSite && (
          <WorldSite
            world={world}
            chapter={state.chapter}
            nonce={state.nonce}
            absorbing={stage === 'portal'}
            reduced={reduced}
            onOpenProject={openProject}
            onPortal={enterPortal}
            onChapterChange={onChapterChange}
          />
        )}

        {stage === 'project' && world && state.project && (
          <ProjectCaseStudy
            world={world}
            projectId={state.project}
            onBack={() => backToUniverse(world)}
            onNavigate={(id) => openProject(world, id)}
          />
        )}

        {stage === 'about' && world && (
          <PersonalCollage world={world} onBack={() => backToUniverse(world)} />
        )}
      </main>
    </>
  );
}
