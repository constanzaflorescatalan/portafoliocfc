# 05 — Responsive, accesibilidad y criterios de aceptación

## Responsive
- 1920×1080 es **referencia de arte**, no tamaño forzado. Revisar 1440, 1024, 768, 390 y 320 px de ancho; adaptarse a viewport.
- Móvil: menú hamburguesa; selector de mundos vertical o dos áreas táctiles claramente accionables; puntos de proyectos sin superponer etiquetas; alternativa en lista accesible si cosmos pequeño; marcas en 2 columnas o 1 según ancho; modal de interés ocupa espacio adecuado.
- Evitar scroll horizontal involuntario y contenido cortado. Imágenes adaptativas, `object-fit`, tamaños definidos.

## Accesibilidad
- Contraste legible: texto principal blanco suave sobre fondos oscuros; rosa usado con contraste comprobado para texto pequeño.
- Semántica (`nav`, `main`, `section`, `article`, `button`, `a`); títulos jerárquicos.
- Alternativas de texto para visuales reales; decorativos `aria-hidden`; foto DEMO etiquetada correctamente.
- Acciones con Enter/Espacio y foco visible; menú móvil operable por teclado.
- Modal con foco atrapado/retornado, Escape para cerrar y botón X accesible.
- Respetar `prefers-reduced-motion` y evitar animaciones que bloqueen navegación.
- Links externos seguros, descarga de CV funcional y comprobada; `mailto:` para correo.
- Estados de error y fallback: si no hay imagen o JS falla, mostrar contenido accesible.

## Rendimiento
- Lazy-load imágenes de casos/galería; precargar solo hero si es necesario.
- Animaciones con `transform`/`opacity` cuando sea posible; sin listeners de mouse o scroll que saturen el hilo principal; limpiar listeners en desmontaje.
- Comprimir demo assets y sustituir por medios optimizados finales (WebP/AVIF según compatibilidad).

## Criterios mínimos de aceptación (checklist)
- [ ] Inicio carga y muestra tarjeta/círculo/orbita con textos exactos, sin tagline.
- [ ] Botón/clic en portada abre mundos **siempre**, incluso con movimiento reducido.
- [ ] Panel izquierdo sale con círculo; derecho sale vacío; tarjeta desaparece hacia abajo.
- [ ] Selector muestra DISEÑO e INFORMÁTICA fijos y funciona en táctil/teclado.
- [ ] Diseño/Informática expanden su mitad y muestran título, formación y estrellas-proyecto.
- [ ] Etiquetas de proyectos visibles sin hover; estrellas orbitales clicables.
- [ ] Agujero negro al centro abre collage Quién soy; menú también accede directamente.
- [ ] Caso tiene estrella fija de regreso y controles Anterior/Siguiente.
- [ ] Marcas aparecen como capítulo tras scroll y desde menú, logos monochrome→color.
- [ ] Contacto es último capítulo y tiene links correctos, sin formulario.
- [ ] Todos los textos e imágenes inventados están marcados DEMO o claramente como referencia.
- [ ] No aparece Natural Pet, no se confunde Proust con sus clientes ni Drei con Nuva Oxi.
- [ ] Responsive móvil sin superposiciones; `Escape`, teclado y reduced motion verificados.
- [ ] Probar en navegador real, no depender de visor HTML del chat.
