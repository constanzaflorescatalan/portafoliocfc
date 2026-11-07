# 10 — Análisis crítico de transiciones y efectos

Revisión del 7 de noviembre de 2026, **sin cambios en el sitio**. Se recorrieron 14 transiciones capturando cuadros a lo largo de cada una (pantalla 1280 × 800), y se midió fluidez (cuadros por segundo) y costo de procesador.

## Resumen

El sitio **se mueve bien y sin errores**, y las animaciones respetan «reducir movimiento». Los tres problemas principales:

1. **Las navegaciones internas no tienen la misma magia que la entrada.** Abrir un proyecto, pasar al siguiente o volver al universo son fundidos genéricos con un instante de pantalla vacía, mientras que la portada, la apertura y la entrada al universo son espaciales y continuas.
2. **Se repiten animaciones de entrada que ya se vieron.** Cada vez que se vuelve al universo, los puntos reaparecen uno por uno (~0,9 s de espera), y el logo «CF.» repite la intro completa.
3. **El cielo de estrellas es caro para el procesador** en la portada y en Quién soy. En computador no se nota; en celulares gasta batería y puede trabarse.

## Mediciones

| Pantalla | Cuadros por segundo | Procesador (cada 3 s) | Comentario |
| --- | --- | --- | --- |
| Portada en reposo | 60 | ~550 ms | El cielo se dibuja 2 veces (una por mitad), 60 veces por segundo |
| Selector con efectos | 60 | — | Fluido |
| Universo en reposo | 60 | ~18 ms | Muy liviano |
| Quién soy (órbita) | **56**, con un tirón de 83 ms | ~550 ms | Cielo + órbita que recalcula la posición de los 11 íconos en cada cuadro, más un desenfoque detrás de cada círculo |

## Transición por transición

| # | Transición | Duración aprox. | Qué funciona | Qué se puede mejorar |
| --- | --- | --- | --- | --- |
| 1 | Carga de la portada | ~1,5–2 s | Secuencia elegante: foto → órbita → tarjeta, tal como pide la especificación | — |
| 2 | Apertura (broche) | ~1 s | Las mitades se abren y la foto se va a la izquierda; se siente física | Durante un instante se superpone el texto de la tarjeta que cae con «DISEÑO / INFORMÁTICA». La especificación pedía que las palabras aparecieran *después* de abrir |
| 3 | Efectos del selector | — | Trazos y código bonitos, sin invadir la otra mitad | Son **muy tenues**: con un movimiento rápido casi no se ven |
| 4 | Entrada al universo | **~2,4 s** | La palabra que viaja y se convierte en título es el mejor momento del sitio | Es **larga**: entre 0,4 y 1,1 s la palabra solo se desliza al centro y no pasa nada más. Se puede acortar la expansión a ~1,6 s en total |
| 5 | Abrir un proyecto | ~0,3 s | Rápido | **Corte seco**: el universo desaparece de golpe y el caso aparece desde negro. No hay relación visual entre el punto que se tocó y el caso |
| 6 | Siguiente / anterior | ~0,3 s | Rápido | Pantallazo vacío entre un caso y otro; no se percibe dirección (izquierda / derecha) |
| 7 | Volver al universo (estrella) | ~0,9 s | — | Se repite toda la entrada: el título aparece, luego los puntos uno a uno. Al volver debería estar listo al instante |
| 8 | Agujero negro → Quién soy | ~1,5 s | La absorción (zoom + desenfoque) comunica muy bien el «portal» | Entre ~0,7 y 1,0 s queda **casi negro**: el universo termina de irse antes de que Quién soy empiece a aparecer |
| 9 | Ventana de un interés | ~0,4 s | Correcta y suave | — |
| 10 | Volver de Quién soy | ~0,9 s | — | Mismo problema que el punto 7 |
| 11 | Scroll a Marcas | ~0,5 s | El cambio por capítulos funciona y el contenido entra subiendo | Si el cursor queda sobre un logo durante el scroll, **la celda se pinta de blanco entera**: es un destello fuerte. El efecto de color al pasar el cursor es, en general, muy brusco para un sitio tan sutil |
| 12 | Scroll a Contacto | ~0,6 s | Correcto | — |
| 13 | Menú → Marcas desde la portada | ~0,9 s | Lleva directo, como pide la especificación | Fundido desde negro, sin sensación de lugar |
| 14 | Logo «CF.» → portada | ~1,5 s | — | Repite la intro completa cada vez; en la segunda visita cansa |

## Coherencia general

- **Demasiadas duraciones distintas**: 220, 400, 550, 600, 700, 800, 850, 900, 1000 y 1100 ms, con varias curvas de aceleración. Se siente menos «un solo sistema». Conviene una escala corta: **rápido 200 ms · medio 400 ms · lento 700 ms · escena 1000 ms**.
- **Dos lenguajes de transición mezclados**: espacial (abrir, viajar, absorber) en la entrada y fundidos genéricos dentro del sitio. Lo ideal es que todo hable el idioma espacial del universo.
- **Lo que está muy bien**: nada bloquea la navegación (todo se puede saltar con el menú), hay alternativa para «reducir movimiento» y no hay errores.

## Recomendaciones por prioridad

### Alta
1. **Abrir proyecto desde el punto**: que el nombre del proyecto viaje desde el punto orbital hasta el título del caso (la misma técnica de la entrada al universo), o que el punto crezca hasta llenar la pantalla.
2. **Volver sin repetir animaciones**: al regresar del caso o de Quién soy, el universo aparece ya armado, con un fundido corto (~300 ms).
3. **Optimizar el cielo y la órbita**: dibujar un solo cielo en la portada (no dos), bajar a 30 cuadros por segundo en celulares, mover la órbita con transformaciones y quitar el desenfoque detrás de los íconos. El aspecto no cambia y se gana fluidez y batería.
4. **Acortar la entrada al universo** de ~2,4 s a ~1,6 s, sin perder el viaje de la palabra.

### Media
5. **Siguiente / anterior con dirección**: el caso actual sale hacia un lado y el nuevo entra desde el otro, sin pantallazo vacío.
6. **Portal sin negro intermedio**: que Quién soy empiece a aparecer mientras el universo todavía se está absorbiendo.
7. **Color de marcas más suave**: en vez de pintar la celda entera de blanco, mostrar el fondo original en un recuadro redondeado más chico, con una transición algo más lenta. Y no activar el efecto mientras se hace scroll.
8. **Intro corta en visitas repetidas**: si la persona ya vio la portada, el logo «CF.» lleva a una versión rápida (~0,5 s).
9. **Una sola escala de duraciones** para todo el sitio.

### Baja
10. Efectos del selector un poco más visibles (más trazos y código, o que duren más).
11. En la apertura, que «DISEÑO / INFORMÁTICA» aparezcan apenas termina de abrirse el broche, como dice la especificación.

## Cómo se midió

- Cuadros capturados con Playwright en Chromium (1280 × 800), en instantes fijos durante cada transición.
- Cuadros por segundo con `requestAnimationFrame` durante 1,5–2 s.
- Costo de procesador y recálculos de diseño con las métricas de rendimiento de Chrome (3 s en reposo por pantalla).
- No se probó en celulares reales ni en Safari: conviene confirmar ahí la fluidez de la portada y de Quién soy.

## Propuesta en prueba (rama `propuesta/transiciones`, no aprobada)

Implementada el 7 de noviembre de 2026 para que Coni la revise. **No está en `main`** hasta su aprobación.

| # | Cambio | Dónde |
| --- | --- | --- |
| 1 | Quién soy con cielo **quieto** (sin respiración ni titileo) | `CoverSky` (`still`), `PersonalCollage` |
| 2 | Órbita de Quién soy movida solo con transformaciones, sin desenfoque detrás de los íconos | `PersonalCollage`, `about.css` |
| 3 | Cielo de la portada a 30 cuadros por segundo (el movimiento es lento, se ve igual) | `CoverSky` |
| 4 | Abrir proyecto: el nombre viaja del punto al título del caso; al volver, hace el viaje al revés | `App.tsx` (`transition`), `case.css` |
| 5 | Volver al universo (desde caso o Quién soy) sin repetir la entrada | `WorldSite` (`site--calm`) |
| 6 | Siguiente / Anterior: el caso sale hacia un lado y el nuevo entra desde el otro | `ProjectCaseStudy`, `case.css` |
| 7 | Portal: Quién soy aparece mientras el universo se absorbe (sin negro) | `App.tsx`, `universe.css` |
| 8 | Entrada al universo más corta (~2,4 s → ~1,5 s) | `--motion-expand` 600 ms, transición 700 ms |
| 9 | Marcas: color en un recuadro redondeado suave; sin efecto mientras se hace scroll | `chapters.css`, `WorldSite` |
| 10 | Intro corta (~0,6 s) al volver a la portada en la misma visita | `LandingHero` (`hero--quick`) |
| 11 | «DISEÑO / INFORMÁTICA» aparecen al final de la apertura; efectos del selector más visibles | `chooser.css` |
| 12 | **Presentación en la portada** (idea de Coni): el primer clic hace crecer la tarjeta y muestra un texto corto de quién es; el segundo abre el broche. En visitas repetidas parte con el texto visible. Texto elegido: opción E, editable en `identity.bio` del JSON | `LandingHero`, `cover.css`, `data/demo-content.json` |

Mediciones de la propuesta (mismo método):

| Pantalla | Antes | Propuesta |
| --- | --- | --- |
| Quién soy | 56 cps, tirón de 83 ms, ~550 ms de procesador | **60 cps, sin tirones, ~16 ms** |
| Portada | ~550 ms de procesador | **~350 ms** |
| Selector → universo listo | ~2,4 s | **~1,5 s** |

Sin errores; probado con teclado, «reducir movimiento» y celular (iPhone 13 emulado). La órbita se detiene al pasar el cursor o enfocar un ícono.
