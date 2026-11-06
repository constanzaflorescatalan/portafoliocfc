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
  reduced: boolean;
  onOpenProject: (world: WorldId, project: string) => void;
  onPortal: () => void;
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
  reduced,
  onOpenProject,
  onPortal,
  onChapterChange,
}: Props) {
  const scroller = useRef<HTMLDivElement>(null);
  // Si se llegó con la transición desde el selector, el universo no repite su propio
  // fundido de entrada (se decide una sola vez al montar, para no reiniciarlo al terminar).
  const [morphEntry] = useState(() => document.documentElement.classList.contains('vt-world'));
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
  }, [world]);

  const scrollToBrands = () => {
    const root = scroller.current;
    const target = root?.querySelector<HTMLElement>('#marcas');
    if (root && target) root.scrollTo({ top: target.offsetTop, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <div
      ref={scroller}
      className={`site${absorbing ? ' is-absorbing' : ''}${morphEntry ? ' site--morph' : ''}`}
      data-world={world}
    >
      <UniverseScene
        key={world}
        world={world}
        onOpenProject={(id) => onOpenProject(world, id)}
        onPortal={onPortal}
        onScrollCue={scrollToBrands}
      />
      <BrandGrid />
      <ContactScreen />
    </div>
  );
}
