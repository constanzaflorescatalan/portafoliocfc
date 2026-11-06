import { useCallback, useEffect, useRef, useState } from 'react';
import { LandingHero } from './components/LandingHero';
import { OpeningTransition } from './components/OpeningTransition';
import { TopNav } from './components/TopNav';
import { UniverseScene } from './components/UniverseScene';
import { WorldSelector } from './components/WorldSelector';
import { WORLDS } from './data/site';
import { useReducedMotion } from './hooks/useReducedMotion';
import { readMs } from './lib/motion';
import type { AppState, Stage, WorldId } from './types';

/** Ruta (hash) de cada estado: permite enlaces directos y botón "atrás" del navegador. */
function hashFor({ stage, world }: AppState): string {
  if (stage === 'universe' || stage === 'entering') return `#${WORLDS[world ?? 'design'].path}`;
  if (stage === 'chooser' || stage === 'opening') return '#/mundos';
  return '#/';
}

function parseHash(): AppState {
  const hash = window.location.hash.replace(/^#/, '');
  if (hash === WORLDS.design.path) return { stage: 'universe', world: 'design' };
  if (hash === WORLDS.tech.path) return { stage: 'universe', world: 'tech' };
  if (hash === '/mundos') return { stage: 'chooser', world: null };
  return { stage: 'cover', world: null };
}

const TITLES: Record<Stage, string> = {
  cover: 'Constanza Flores — Portafolio',
  opening: 'Constanza Flores — Portafolio',
  chooser: 'Elige un mundo — Constanza Flores',
  entering: 'Constanza Flores — Portafolio',
  universe: 'Constanza Flores — Portafolio',
};

export default function App() {
  const reduced = useReducedMotion();
  const [state, setState] = useState<AppState>(parseHash);
  const stageRef = useRef<Stage>(state.stage);
  const timer = useRef<number | undefined>(undefined);
  const firstPanelRef = useRef<HTMLButtonElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const previousStage = useRef<Stage>(state.stage);

  const update = useCallback((next: AppState) => {
    stageRef.current = next.stage;
    setState(next);
  }, []);

  const after = useCallback((ms: number, fn: () => void) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(fn, ms);
  }, []);

  const pushHash = useCallback((next: AppState) => {
    const hash = hashFor(next);
    if (window.location.hash !== hash) window.history.pushState(null, '', hash);
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

  // Menú: desde el selector conserva la animación; desde cualquier otro estado entra directo.
  const goWorld = useCallback(
    (world: WorldId) => {
      if (stageRef.current === 'chooser') chooseWorld(world);
      else if (stageRef.current === 'entering') return;
      else jump({ stage: 'universe', world });
    },
    [chooseWorld, jump],
  );

  const goHome = useCallback(() => jump({ stage: 'cover', world: null }), [jump]);
  const backToChooser = useCallback(() => jump({ stage: 'chooser', world: null }), [jump]);

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
    if (was === state.stage) return;
    if (state.stage === 'chooser') firstPanelRef.current?.focus({ preventScroll: true });
    if (state.stage === 'universe') headingRef.current?.focus({ preventScroll: true });
  }, [state.stage]);

  useEffect(() => {
    document.title =
      state.stage === 'universe' && state.world
        ? `${WORLDS[state.world].title} — Constanza Flores`
        : TITLES[state.stage];
  }, [state.stage, state.world]);

  const { stage, world } = state;
  const showCover = stage === 'cover' || stage === 'opening';
  const showChooser = stage === 'opening' || stage === 'chooser' || stage === 'entering';
  const activeWorld = stage === 'universe' || stage === 'entering' ? world : null;

  return (
    <>
      <a className="skip" href="#main">
        Saltar al contenido
      </a>
      <TopNav activeWorld={activeWorld} onHome={goHome} onWorld={goWorld} />

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

        {stage === 'universe' && world && (
          <UniverseScene world={world} onBack={backToChooser} headingRef={headingRef} />
        )}
      </main>
    </>
  );
}
