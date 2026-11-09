import { useCallback, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
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
  /** Estado actual para el botón «atrás» del navegador (sin re-suscribir el evento). */
  const stateRef = useRef<AppState>(state);
  stateRef.current = state;
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

  /**
   * Cambio de pantalla con View Transitions. `kind` es una clase temporal en <html> que
   * elige la coreografía en CSS. Si se indican `from` y `to`, ese elemento (el nombre del
   * proyecto) viaja de un lugar a otro. Sin soporte o con movimiento reducido: cambio directo.
   */
  const transition = useCallback(
    (kind: string, change: () => void, from?: string, to?: string) => {
      if (reduced || typeof document.startViewTransition !== 'function') {
        change();
        return;
      }
      const root = document.documentElement;
      const name = 'project-title';
      const oldEl = from ? document.querySelector<HTMLElement>(from) : null;
      oldEl?.style.setProperty('view-transition-name', name);
      root.classList.add(kind);
      let newEl: HTMLElement | null = null;
      const vt = document.startViewTransition(() => {
        flushSync(change);
        oldEl?.style.removeProperty('view-transition-name');
        newEl = to ? document.querySelector<HTMLElement>(to) : null;
        newEl?.style.setProperty('view-transition-name', name);
      });
      vt.finished.finally(() => {
        root.classList.remove(kind);
        newEl?.style.removeProperty('view-transition-name');
      });
    },
    [reduced],
  );

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
      const ms = readMs('--motion-expand', 600);
      after(ms > 0 ? ms + 60 : 0, () => {
        const enter = () => update({ stage: 'universe', world });
        // La palabra del mundo viaja hasta su lugar como título del universo
        // (View Transitions). Sin soporte o con movimiento reducido: cambio directo.
        if (ms > 0 && typeof document.startViewTransition === 'function') {
          const root = document.documentElement;
          root.classList.add('vt-world');
          const vt = document.startViewTransition(() => flushSync(enter));
          vt.finished.finally(() => root.classList.remove('vt-world'));
        } else {
          enter();
        }
      });
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
    // Quién soy empieza a aparecer mientras el universo termina de absorberse (sin negro intermedio).
    const ms = readMs('--motion-portal', 900);
    after(ms > 0 ? Math.round(ms * 0.68) : 0, () => update({ stage: 'about', world }));
  }, [after, pushHash, update, state.world]);

  // Universo → caso: el nombre del proyecto viaja desde su punto hasta el título del caso.
  const openProject = useCallback(
    (world: WorldId, project: string) =>
      transition(
        'vt-project',
        () => jump({ stage: 'project', world, project }),
        `[data-project-title="${project}"]`,
        '.case__title',
      ),
    [jump, transition],
  );

  // Caso → caso: el actual sale hacia un lado y el nuevo entra desde el otro.
  const navigateProject = useCallback(
    (world: WorldId, project: string, dir: 'next' | 'prev') =>
      transition(`vt-case-${dir}`, () => jump({ stage: 'project', world, project })),
    [jump, transition],
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
  // Volver al universo: ya armado, sin repetir la entrada. Desde un caso, el título
  // del caso vuelve a su punto (el mismo viaje, al revés).
  const backToUniverse = useCallback(
    (world: WorldId, fromProject?: string, push = true) => {
      const next: AppState = { stage: 'universe', world, calm: true };
      if (!fromProject) {
        jump(next, push);
        return;
      }
      transition('vt-project', () => jump(next, push), '.case__title', `[data-project-title="${fromProject}"]`);
    },
    [jump, transition],
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
    // «Atrás/adelante» se comporta igual que los botones del sitio: desde un caso o
    // Quién soy, el universo vuelve ya armado (y el título del caso vuelve a su punto).
    const onPop = () => {
      const next = parseHash();
      const cur = stateRef.current;
      const toWorld = next.stage === 'universe' && !next.chapter && next.world === cur.world;
      if (toWorld && cur.stage === 'project' && next.world) {
        backToUniverse(next.world, cur.project, false);
      } else if (toWorld && (cur.stage === 'about' || cur.stage === 'portal')) {
        jump({ ...next, calm: true }, false);
      } else if (cur.stage === 'project' && next.stage === 'project' && next.world && next.project) {
        const list = PROJECTS[next.world];
        const from = list.findIndex((p) => p.id === cur.project);
        const to = list.findIndex((p) => p.id === next.project);
        const world = next.world;
        const project = next.project;
        transition(`vt-case-${to > from ? 'next' : 'prev'}`, () => jump({ stage: 'project', world, project }, false));
      } else {
        jump(next, false);
      }
    };
    window.addEventListener('popstate', onPop);
    return () => {
      window.removeEventListener('popstate', onPop);
      window.clearTimeout(timer.current);
    };
  }, [jump, backToUniverse, transition]);

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
            calm={!!state.calm}
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
            onBack={() => backToUniverse(world, state.project)}
            onNavigate={(id, dir) => navigateProject(world, id, dir)}
          />
        )}

        {stage === 'about' && world && (
          <PersonalCollage world={world} onBack={() => backToUniverse(world)} />
        )}
      </main>
    </>
  );
}
