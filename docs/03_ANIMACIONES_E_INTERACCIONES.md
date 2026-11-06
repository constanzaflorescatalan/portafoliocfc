# 03 — Animaciones e interacciones

Principio: movimiento elegante, útil y moderado; navegación nunca depende de completar una animación. Cuando `prefers-reduced-motion: reduce`, saltar a estado final o usar desvanecimiento mínimo.

| Área | Estado inicial | Acción | Animación/transición | Estado final |
|---|---|---|---|---|
| Portada | Fondo negro | Carga | Fotografía aparece; órbita se traza; tarjeta verde asciende, ligeramente solapado | Elementos visibles y clicables |
| Órbita | Línea fija rosa | Tiempo | Estrella de 4 puntas da vuelta cada 12–15s, provisional; detrás/delante de foto según capas | Loop sutil, sin glow |
| Broche | Portada centrada | Clic/Enter | Fondo negro divide verticalmente; foto+círculo+órbita viajan en panel izquierdo a la izquierda; panel derecho se va a la derecha vacío; tarjeta baja | Selector de mundos visible |
| Selector Diseño | Título fijo en mitad izquierda | Hover/focus | Líneas curvas color rosa/verde y un tercer acento muy tenue si aporta; siguen el cursor sin ruido | No cambiar texto principal |
| Selector Informática | Título fijo mitad derecha | Hover/focus | Código breve, bloques UI, cursors o parpadeos técnicos reactivos | No lluvia Matrix |
| Mundo seleccionado | Ambos lados visibles | Clic/tap | Mitad clicada se expande a todo viewport; la otra se retira | Universo del mundo |
| Proyecto orbital | Punto con 1–2 contornos | Hover/focus | Crece ligeramente / anillos se expanden; nombre visible desde antes | En clic abre caso |
| Agujero negro | Portal centro | Hover/focus | Suave distorsión/movimiento gravitacional sin luces exageradas | En clic zoom/absorción a collage |
| Ícono interés | Collage lineal | Hover/focus/clic | Microelevación/inclinación; clic abre modal | Modal foto + texto |
| Marcas | Universo visible | Scroll | **Cambio de capítulo**: universo se desplaza arriba y entra grid marcas como nueva pantalla | Logos reposo monocromáticos |
| Logo de marca | Monocromático | Hover/focus | Color original, transición corta | Estado original al salir |
| Casos | Caso mostrado | Anterior/Siguiente | Cambio fluido sin distracción | Caso siguiente mismo universo |

## Detalles funcionales
- No permitir doble clic que dispare transiciones simultáneas; gestionar estados `idle/opening/choosing/entering/ready` o equivalente.
- Si JS de animación falla, los enlaces deben seguir operativos o mostrarse navegación fallback.
- Mantener scroll y estado coherentes al regresar desde casos o `Quién soy`.
- Aceptar `Escape` para cerrar modal; botón de cerrar visible.
- El selector completo de cada mitad debe ser accesible por teclado y ofrecer indicador de foco.
- Las líneas creativas del hover no deben invadir el otro mundo ni bloquear clics (`pointer-events: none`).
- Las estrellas decorativas (fondo) deben ser verdaderamente tenues y no confundirse con puntos clicables.
- No generar efectos intensos con scroll continuo que dañen rendimiento o accesibilidad.
