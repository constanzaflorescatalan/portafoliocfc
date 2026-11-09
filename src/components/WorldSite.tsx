import { useEffect, useRef, useState } from 'react';
import type { Chapter, WorldId } from '../types';
import { BrandGrid } from './BrandGrid';
import { ContactScreen } from './ContactScreen';
import { UniverseScene } from './UniverseScene';

type Props = {
  world: WorldId;
  chapter?: Chapter;
  nonce?: number;
  absorbing: boolean;
  /** Vuelta desde un caso o Quién soy: sin repetir las animaciones de entrada. */
  calm: boolean;
  reduced: boolean;
  onOpenProject: (world: WorldId, project: string) => void;
  onPortal: () => void;
  onBackToWorlds: () => void;
  onChapterChange: (chapter: Chapter) => void;
};

const CHAPTER_IDS: Record<Chapter, string> = {
  universe: 'universo',
  brands: 'marcas',
  contact: 'contacto',
};

/**
 * Universo + Marcas + Contacto como capítulos de pantalla completa (docs/02, transición B):
 * el scroll encaja pantalla por pantalla y cada capítulo anima su entrada al aparecer.
 */
export function WorldSite({
  world,
  chapter,
  nonce,
  absorbing,
  calm,
  reduced,
  onOpenProject,
  onPortal,
  onBackToWorlds,
  onChapterChange,
}: Props) {
  const scroller = useRef<HTMLDivElement>(null);
  // Si se llegó con la transición desde el selector, el universo no repite su propio
  // fundido de entrada (se decide una sola vez al montar, para no reiniciarlo al terminar).
  const [morphEntry] = useState(() => {
    const root = document.documentElement.classList;
    return root.contains('vt-world') || root.contains('vt-project');
  });
  const [calmEntry] = useState(calm);
  const scrollTimer = useRef<number | undefined>(undefined);
  // Marcas y Contacto (40 logos) se arman después de la animación de entrada, para que
  // no la traben. Si se llega directo a esos capítulos (menú o enlace), se arman de inmediato.
  const [chaptersReady, setChaptersReady] = useState(() => !!chapter && chapter !== 'universe');
  useEffect(() => {
    if (chaptersReady) return;
    const id = window.setTimeout(() => setChaptersReady(true), calm ? 350 : 1500);
    return () => window.clearTimeout(id);
  }, [chaptersReady, calm]);
  const needChapters = !!chapter && chapter !== 'universe';
  if (needChapters && !chaptersReady) setChaptersReady(true);
  const mounted = useRef(false);
  const changeRef = useRef(onChapterChange);
  changeRef.current = onChapterChange;

  // Desplazarse al capítulo pedido por el menú (instantáneo la primera vez).
  useEffect(() => {
    const root = scroller.current;
    if (!root) return;
    const target = root.querySelector<HTMLElement>(`#${CHAPTER_IDS[chapter ?? 'universe']}`);
    const smooth = mounted.current && !reduced;
    mounted.current = true;
    if (!target) return;
    root.scrollTo({ top: target.offsetTop, behavior: smooth ? 'smooth' : 'auto' });
    if (chapter && chapter !== 'universe') {
      target.querySelector<HTMLElement>('[data-chapter-heading]')?.focus({ preventScroll: true });
    }
  }, [chapter, nonce, world, reduced]);

  // Capítulo visible: marca la entrada animada y actualiza el menú.
  useEffect(() => {
    const root = scroller.current;
    if (!root) return;
    const sections = Array.from(root.querySelectorAll<HTMLElement>('[data-chapter]'));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            if (entry.intersectionRatio >= 0.5) changeRef.current(el.dataset.chapter as Chapter);
          }
        }
      },
      { root, threshold: [0.15, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [world, chaptersReady]);

  useEffect(() => () => window.clearTimeout(scrollTimer.current), []);

  // Mientras se hace scroll, las marcas no reaccionan al cursor (sin destellos al pasar).
  const onScroll = () => {
    const root = scroller.current;
    if (!root) return;
    root.classList.add('is-scrolling');
    window.clearTimeout(scrollTimer.current);
    scrollTimer.current = window.setTimeout(() => root.classList.remove('is-scrolling'), 180);
  };

  const scrollToBrands = () => {
    const go = () => {
      const root = scroller.current;
      const target = root?.querySelector<HTMLElement>('#marcas');
      if (root && target) root.scrollTo({ top: target.offsetTop, behavior: reduced ? 'auto' : 'smooth' });
    };
    if (chaptersReady) go();
    else {
      setChaptersReady(true);
      window.requestAnimationFrame(() => window.requestAnimationFrame(go));
    }
  };

  return (
    <div
      ref={scroller}
      className={`site${absorbing ? ' is-absorbing' : ''}${morphEntry ? ' site--morph' : ''}${calmEntry ? ' site--calm' : ''}`}
      data-world={world}
      onScroll={onScroll}
    >
      <UniverseScene
        key={world}
        world={world}
        onOpenProject={(id) => onOpenProject(world, id)}
        onPortal={onPortal}
        onScrollCue={scrollToBrands}
        onBack={onBackToWorlds}
      />
      {chaptersReady && (
        <>
          <BrandGrid />
          <ContactScreen />
        </>
      )}
    </div>
  );
}
