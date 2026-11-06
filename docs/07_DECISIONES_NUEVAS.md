# 07 — Decisiones nuevas (etapa 1)

Este archivo registra decisiones tomadas al implementar. La especificación original (docs 01–06) no se modificó. Todo lo de abajo está **pendiente de tu aprobación visual**.

## Diferencias respecto al prototipo anterior (gana la documentación)
- Se quitaron de la portada los textos «PORTFOLIO — 2026» y «DISEÑO & INFORMÁTICA», y el botón «Probar mi foto»: la portada solo lleva lo que indica el brief.
- Se quitaron los subtítulos del selector («Creatividad en movimiento.», «Ideas que también funcionan.») y las etiquetas «MUNDO / 01»: no estaban en la especificación y eran frases inventadas.
- La credencial de cada universo usa el texto de `docs/02` («Diseño Gráfico — Universidad Diego Portales · Título profesional y licenciatura · 2016»), no la versión corta del demo.
- El fondo de estrellas del selector pasó de una grilla regular de puntos a estrellas mínimas y tenues dispersas.

## Medidas de la portada
- Se tomaron de `references/portada_aprobada.png` (1920×1080): órbita de 385×116 rotada −20°, círculo de 510, tarjeta de 678×470. Todo escala con una sola unidad, así la composición completa cabe en cualquier alto y ancho.
- La estrella pasa **detrás** de la foto en la mitad superior de la órbita y **delante** en la inferior.
- Los colores son los tokens aprobados; el rosa de la referencia es algo más brillante que `#C782A2` y se mantuvo el token.

## Comportamiento
- Estados: portada → apertura → selector → entrada → universo. Cada transición solo parte del estado anterior (sin dobles disparos).
- Con `prefers-reduced-motion`: se omite la estrella y todo avanza al instante.
- Enlaces directos por hash (`#/mundos`, `#/diseno`, `#/informatica`) y botón «atrás» del navegador.
- Marcas, Quién soy y Contacto aparecen en el menú atenuadas y sin acción hasta sus etapas.
- En móvil (≤ 760 px) el selector se apila en dos áreas táctiles y el menú pasa a hamburguesa.

## Pendiente de definir contigo
- Foto o logo final dentro del círculo.
- Si la estrella orbitando se mantiene tras probarla.
- Ritmo de la apertura (hoy ~1 s, con arranque rápido).
