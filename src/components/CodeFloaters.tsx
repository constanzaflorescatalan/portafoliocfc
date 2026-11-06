import { forwardRef, useImperativeHandle, useRef } from 'react';
import type { HoverLayerHandle } from '../types';

const MAX_LIVE = 14;
const TOKENS = [
  'const idea = true;',
  '<interface />',
  '{ design: code }',
  'function create() {}',
  'if (clicked) open();',
  'display: grid;',
  'let imagination = 1;',
];

type Kind = 'code' | 'chip' | 'caret';

/** Código breve, bloques de interfaz y cursores parpadeando al pasar por la mitad Informática. */
export const CodeFloaters = forwardRef<HoverLayerHandle>(function CodeFloaters(_props, ref) {
  const layerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(
    ref,
    () => {
      const spawn = (x: number, y: number, width: number, height: number) => {
        const layer = layerRef.current;
        if (!layer) return;
        while (layer.childElementCount >= MAX_LIVE) layer.firstElementChild?.remove();

        const roll = Math.random();
        const kind: Kind = roll < 0.55 ? 'code' : roll < 0.85 ? 'chip' : 'caret';
        const el = document.createElement('span');
        el.className = `float float--${kind}`;
        if (kind === 'code') {
          el.textContent = TOKENS[Math.floor(Math.random() * TOKENS.length)];
        } else if (kind === 'chip') {
          el.style.width = `${36 + Math.random() * 56}px`;
          el.style.height = `${14 + Math.random() * 14}px`;
        }
        // Se mantiene dentro de la mitad para no invadir el otro mundo.
        el.style.left = `${Math.max(8, Math.min(x + 12, width - 260))}px`;
        el.style.top = `${Math.max(32, Math.min(y - 12, height - 40))}px`;
        el.addEventListener('animationend', () => el.remove());
        layer.appendChild(el);
      };

      return {
        spawn,
        burst: (width: number, height: number) => {
          for (let i = 0; i < 3; i++) {
            window.setTimeout(() => {
              spawn(
                width * (0.3 + Math.random() * 0.35),
                height * (0.4 + Math.random() * 0.25),
                width,
                height,
              );
            }, i * 260);
          }
        },
      };
    },
    [],
  );

  return <div ref={layerRef} className="art" aria-hidden="true" />;
});
