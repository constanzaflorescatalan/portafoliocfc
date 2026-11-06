import { forwardRef, useImperativeHandle, useRef } from 'react';
import type { HoverLayerHandle } from '../types';

const NS = 'http://www.w3.org/2000/svg';
const MAX_LIVE = 14;
// Rosa y verde salvia, más un tercer acento (lavanda) muy tenue (docs/03).
const PALETTE = [
  { color: '#C782A2', opacity: 0.9 },
  { color: '#6FA08F', opacity: 0.8 },
  { color: '#A69ABF', opacity: 0.4 },
];

/** Trazos curvos fluidos que siguen el cursor en la mitad Diseño. Decorativo, sin eventos. */
export const DesignStrokes = forwardRef<HoverLayerHandle>(function DesignStrokes(_props, ref) {
  const svgRef = useRef<SVGSVGElement>(null);

  useImperativeHandle(
    ref,
    () => {
      const spawn = (x: number, y: number, width: number, height: number) => {
        const svg = svgRef.current;
        if (!svg) return;
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        while (svg.childElementCount >= MAX_LIVE) svg.firstElementChild?.remove();

        const dx = 45 + Math.random() * 85;
        const dy = (Math.random() - 0.5) * 110;
        const tone = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        const path = document.createElementNS(NS, 'path');
        path.setAttribute(
          'd',
          `M ${x - dx} ${y + 30} C ${x - 35} ${y - 105 + dy} ${x + 45} ${y + 88 - dy} ${x + dx} ${y - 22}`,
        );
        path.setAttribute('pathLength', '1');
        path.setAttribute('class', 'stroke');
        path.style.stroke = tone.color;
        path.style.setProperty('--stroke-op', String(tone.opacity));
        path.addEventListener('animationend', () => path.remove());
        svg.appendChild(path);
      };

      return {
        spawn,
        // Al enfocar con teclado no hay cursor: se dibuja un pequeño gesto en el centro.
        burst: (width: number, height: number) => {
          for (let i = 0; i < 3; i++) {
            window.setTimeout(() => {
              spawn(
                width * (0.35 + Math.random() * 0.3),
                height * (0.4 + Math.random() * 0.2),
                width,
                height,
              );
            }, i * 220);
          }
        },
      };
    },
    [],
  );

  return <svg ref={svgRef} className="art" aria-hidden="true" focusable="false" preserveAspectRatio="none" />;
});
