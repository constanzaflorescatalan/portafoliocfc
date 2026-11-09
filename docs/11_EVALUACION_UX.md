# 11 — Evaluación UX/UI y front-end (9 de noviembre de 2026)

Revisión completa de la rama `propuesta/transiciones` (incluye la presentación en la portada y el ajuste de fluidez). Mirada de diseño UX/UI senior y de desarrollo front-end.

## Cómo se evaluó

- Recorrido completo en Chromium, escritorio (1440 × 900) y celular (iPhone 13 emulado), con capturas de cada pantalla.
- Accesibilidad automática (axe-core, WCAG 2 A/AA) en las 8 pantallas, en escritorio y celular.
- Fluidez de cada transición con el procesador 4 veces más lento (ver `10_ANALISIS_TRANSICIONES.md`).
- Botón «atrás» del navegador, teclado, «reducir movimiento», enlaces directos y una ruta inexistente.
- Tiempo y cantidad de clics desde que se abre el sitio hasta ver un proyecto.
- Tamaño de las zonas de toque en celular.
- No se probó en Safari ni en celulares reales.

## Lo que está bien (no tocar)

| Área | Resultado |
| --- | --- |
| Accesibilidad automática | **0 errores** en las 8 pantallas, en escritorio y celular |
| Errores de programa | 0 en todo el recorrido |
| Fluidez | Todas las transiciones sin tirones notorios, también con el procesador lento |
| Navegación | Menú fijo siempre visible; se puede saltar a cualquier sección; enlaces directos (`#/marcas`, etc.) funcionan |
| Teclado y lector de pantalla | Foco ordenado al cambiar de pantalla, títulos de pestaña correctos, Escape cierra casos y ventanas |
| Reducir movimiento | Todo funciona sin animaciones |
| Celular | Sin scroll horizontal; universo como lista; selector con «Explorar» siempre visible |
| Peso | Página liviana (JS 83 kB comprimido, imágenes chicas, fuentes propias) |
| Concepto | La narrativa espacial (broche → mundos → universo → agujero negro) es original y coherente |

## Problemas encontrados, por prioridad

### Alta (afectan la navegación o son errores)

1. **El botón «atrás» del navegador desde un caso repite toda la entrada del universo** (puntos que aparecen de a uno), mientras la estrella vuelve con el universo ya armado. Dos formas de volver con comportamientos distintos.
2. **Enlaces de Contacto muy chicos para el dedo**: Mail, LinkedIn, GitHub, Vimeo y CV miden 14–15 px de alto. El mínimo recomendado es 24 px (WCAG 2.5.8) y lo ideal 44 px. Es el último paso de la conversión y hoy cuesta tocarlo en el celular.
3. **Llegar a un proyecto toma 4 toques y ~8 s en celular** (~4,3 s en computador): texto de la portada → broche → mundo → proyecto, con sus animaciones. El menú permite atajos, pero quien no lo use espera bastante.

### Media (mejoran la experiencia)

4. **Caso en celular: la estrella para volver queda encima del contenido** al hacer scroll (tapa títulos de la galería) y es solo un ícono, sin la palabra «volver».
5. **Portada en dos pasos sin pista**: la flecha es igual antes y después del texto. Funciona, pero no anticipa que el segundo toque «entra».
6. **Al cambiar de mundo o ir a Marcas desde la portada con el menú**, el cambio es un fundido desde negro, sin el lenguaje espacial del resto.
7. **Quién soy en celular**: los íconos se mueven y no hay cursor que los detenga; el giro es muy lento, así que se pueden tocar, pero conviene vigilarlo.

### Baja (detalles)

8. Una ruta inexistente (ej. `#/no-existe`) muestra la portada sin aviso. Al publicar con rutas reales hará falta una página 404.
9. Al ir a Marcas desde el menú en la portada, el capítulo queda 17 px más arriba de lo esperado (existía antes de esta rama).

## Lo que más pesa y no es código

- **Todo el contenido de proyectos es DEMO.** Es lo más importante del portafolio y lo que más impacta la evaluación de quien contrata. Se trabajará con el material que entregue Coni.
- **Datos de marcas por confirmar** (ver `09_REVISION_Y_PROXIMOS_PASOS.md`, sección 1.2).
- **CV público con teléfono** y repositorio público (ver `08_SEGURIDAD.md`).
- **Publicación**: hosting, dominio y rutas reales (sin `#`) para que Google indexe cada sección.

## Recomendaciones

| # | Arreglo propuesto | Esfuerzo |
| --- | --- | --- |
| 1 | «Atrás» del navegador igual que la estrella: universo ya armado y título que vuelve a su punto | Bajo |
| 2 | Enlaces de Contacto con zona de toque de 44 px (sin cambiar cómo se ven) | Bajo |
| 3 | Estrella del caso en celular con la palabra «Volver» y que se esconda al bajar y aparezca al subir | Bajo |
| 4 | Pista en la flecha del segundo paso (por ejemplo, gira levemente o cambia a →) | Bajo |
| 5 | Acortar la espera hasta el primer proyecto: botón «Ver proyectos» discreto en el texto de la portada que lleve directo a Diseño | Medio, decide Coni |
| 6 | Cambio de mundo desde el menú con la misma transición de la palabra que viaja | Medio |
| 7 | Página 404 al publicar | Bajo, en la fase de publicación |

## Aplicado el 9 de noviembre (rama `propuesta/transiciones`)

- **1. «Atrás» del navegador** igual que los botones del sitio: desde un caso, el título vuelve a su punto y el universo aparece armado; desde Quién soy, universo armado; entre casos, deslizamiento hacia el lado correcto.
- **2. Contacto**: todos los enlaces con 44 px de zona de toque (se ven igual).
- **4. Estrella del caso en celular**: dice «Volver a Diseño/Informática», se esconde al bajar y reaparece al subir (o al enfocarla con teclado).
- **5. Pista en la portada**: en el segundo paso la flecha gira y apunta hacia adelante.
- **Botón «Volver» unificado**: Quién soy usa la misma estrella rosa en cápsula que los casos (componente `BackStar`), pedido de Coni.

### Descartado

- **3. Atajo «Ver proyectos · Diseño → · Informática →»** en el texto de la portada: se probó en un link aparte (rama `ejemplo/ver-proyectos`) y **Coni no lo aprobó**. La portada queda como estaba (nombre y títulos → texto → broche).
- **Volver a los mundos** (pedido de Coni): Diseño e Informática tienen la misma estrella «Volver», que lleva a la pantalla dividida. La palabra hace el viaje de entrada al revés («Diseño.» → «DISEÑO»). La estrella se va con el scroll (no tapa Marcas ni Contacto) y el «atrás» del navegador hace lo mismo. En pantallas angostas el título baja 40 px para no quedar bajo la estrella.
- **Mini imagen en Anterior / Siguiente** (pedido de Coni): al final de cada caso, una imagen pequeña del proyecto anterior y del siguiente junto a su nombre (en celular, sobre el nombre). Por ahora usa la imagen DEMO de cada proyecto; se reemplaza sola al cargar las imágenes reales (`image` de cada proyecto en el JSON).
