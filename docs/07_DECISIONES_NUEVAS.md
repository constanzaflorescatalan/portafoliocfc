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

---

# Etapa 2 — Universos, casos, Quién soy, Marcas y Contacto

Todo lo de abajo está **pendiente de tu aprobación visual**. Los docs 01–06 no se modificaron.

## Universo
- Proyectos como puntos orbitales (círculo rosa + dos contornos finos) con número, nombre y tipo **siempre visibles**. El punto flota suavemente; el texto queda quieto para leerlo y hacer clic con facilidad.
- Posiciones en `data/demo-content.json` (`position: [x%, y%]`), editables sin tocar código.
- ~~Órbitas punteadas alrededor del agujero negro~~: retiradas para cumplir `docs/00` («sin elementos ornamentales añadidos sin aprobación»).
- Agujero negro: núcleo negro con disco de acreción tenue que gira lento (rosa/verde pino/lavanda muy bajos). Texto «Un poco más de mí» en Sacramento (acento decorativo) + «Descubrir».
- Clic en el agujero negro: el universo hace zoom hacia el centro y se desvanece (~0,9 s) y aparece Quién soy.
- En celular (≤ 760 px) el universo pasa a una lista de dos columnas con el agujero negro arriba (alternativa de lista de docs/05).

## Caso de estudio
- Fondo carbón `#0b0d11`. Estrella de cuatro puntas fija arriba a la izquierda con «Volver a Diseño/Informática»; Escape también vuelve.
- Bloques: Objetivo, Mi participación (texto de `docs/00`), Herramientas, Resultado. Metadatos: Cliente, Agencia/colaboración, Tipo.
- Anterior/Siguiente da la vuelta dentro del mismo universo; contador 01 / N.

## Quién soy
- Collage con los 9 íconos de línea del prototipo; en hover se elevan y giran levemente.
- Ventana con `<dialog>` nativo: foco atrapado, Escape, clic fuera o × cierran y el foco vuelve al ícono.
- «Mucho de mí.» en Sacramento como único acento.

## Marcas y Contacto
- Capítulos de pantalla completa debajo del universo con encaje por pantallas (scroll-snap); el contenido sube al entrar.
- Marcas generadas desde `brandRelationships`: primero organizaciones, luego clientes con su relación («Cliente vía Proust House», «Proyecto vía Drei Ventures»).
- Contacto sin formulario: correo, LinkedIn, GitHub y descarga del CV.

## Rutas
`#/diseno/<id-proyecto>` caso · `#/quien-soy` · `#/marcas` · `#/contacto`. Al hacer scroll entre capítulos la URL y el menú se actualizan.

## Pendiente de definir contigo
- Proyectos reales, textos e imágenes; logos oficiales.
- Si se mantienen la flotación de los puntos y el giro del disco del agujero negro.

## Ajustes por la especificación completa (`docs/00`)
- Marcas y Quién soy pasan a fondo negro carbón; Quién soy suma acentos verde bosque (círculos de íconos y resplandor de fondo muy tenue).

## Portada — cambios pedidos por Coni
- **Foto real de Constanza** en el círculo (`public/assets/retrato_constanza.jpg`, recorte cuadrado 900 px). Reemplaza al retrato demo.
- **Fondo de universo en la portada** (pedido explícito, cambia el «fondo #05080E muy limpio» de docs/00): degradé radial azul noche más oscuro que el universo (#0c1730 → #020409), estrellas finas dibujadas en canvas (casi todas diminutas y tenues), una bruma diagonal apenas perceptible y 6 estrellas que titilan muy lento. Sin brillos ni nebulosas.
- El cielo se pinta dentro de cada mitad del fondo, así se parte y viaja con ellas en la apertura.
- Fondo de la portada **más oscuro** (#08112a → #010205).
- **Estrellas con profundidad**: el campo "respira" (se acerca y se aleja) en un ciclo de 26 s; las cercanas se mueven, crecen y se aclaran más que las lejanas. Quieto con `prefers-reduced-motion`.
- **Órbita, contorno del círculo y estrella en blanco suave** (#EBE9E8, línea al 78 %) en vez de rosa, a pedido de Coni. El rosa se mantiene en la línea bajo los títulos y el pin de ubicación. Cambiar en `--orbit-color` / `--orbit-star` (cover.css).
