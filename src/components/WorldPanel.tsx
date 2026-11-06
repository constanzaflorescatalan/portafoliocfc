import { useRef } from 'react';
import type { FocusEvent, PointerEvent, Ref } from 'react';
import { WORLDS } from '../data/site';
import type { HoverLayerHandle, WorldId } from '../types';
import { CodeFloaters } from './CodeFloaters';
import { DesignStrokes } from './DesignStrokes';
import { StarField } from './StarField';

type Props = {
  world: WorldId;
  reduced: boolean;
  onChoose: (world: WorldId) => void;
  buttonRef?: Ref<HTMLButtonElement>;
};

const THROTTLE_MS: Record<WorldId, number> = { design: 105, tech: 170 };

/** Una mitad completa del selector: toda el área es un botón (clic, toque, teclado). */
export function WorldPanel({ world, reduced, onChoose, buttonRef }: Props) {
  const info = WORLDS[world];
  const layer = useRef<HoverLayerHandle>(null);
  const lastSpawn = useRef(0);

  const onPointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    if (reduced || event.pointerType === 'touch') return;
    const now = performance.now();
    if (now - lastSpawn.current < THROTTLE_MS[world]) return;
    lastSpawn.current = now;
    const rect = event.currentTarget.getBoundingClientRect();
    layer.current?.spawn(event.clientX - rect.left, event.clientY - rect.top, rect.width, rect.height);
  };

  const onFocus = (event: FocusEvent<HTMLButtonElement>) => {
    if (reduced || !event.currentTarget.matches(':focus-visible')) return;
    const rect = event.currentTarget.getBoundingClientRect();
    layer.current?.burst(rect.width, rect.height);
  };

  return (
    <button
      type="button"
      ref={buttonRef}
      className={`panel panel--${world}`}
      aria-label={`Entrar al universo de ${info.title}`}
      onClick={() => onChoose(world)}
      onPointerMove={onPointerMove}
      onFocus={onFocus}
    >
      <StarField count={50} seed={world === 'design' ? 57 : 91} />
      {world === 'design' ? <DesignStrokes ref={layer} /> : <CodeFloaters ref={layer} />}
      <span className="panel__label">
        <span className="panel__title">{info.selectorTitle}</span>
        <span className="panel__cue">
          Explorar
        </span>
      </span>
    </button>
  );
}
