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
- La estrella de cuatro puntas que recorre la órbita pasa a ser una **luna**: círculo pequeño (r = 10) con sombreado esférico suave, sin brillo.
- Movimiento de estrellas más perceptible: ciclo de 14 s y amplitud 0,16 (antes 26 s y 0,075, demasiado sutil).
- Barra de navegación superior más oscura (casi negra, 97 % → 86 %).

## Tipografía — cambio elegido por Coni
- **Urbanist** reemplaza a DM Sans como tipografía principal en todo el sitio (opción B de la comparación). Sacramento se mantiene para acentos.
- Se definió en `src/styles/base.css` (`--font-primary`), sin modificar `design/tokens.css`.
- Se eliminó el espaciado negativo entre letras de títulos y nombre (antes hasta −0,07 em); ahora títulos +0,01/+0,02 em y texto general +0,02 em. Nombre de portada en peso 600.
- Nombre en portada como «Constanza Flores» (solo C y F en mayúscula), sin `text-transform: uppercase`.

## Tarjeta de la portada — ajuste pedido por Coni
- Más pequeña (600 de ancho en vez de 678; textos ~10 % menores y menos espacio interno; alto según contenido).
- Más abajo (arriba en 510 en vez de 488): ya no toca la órbita de la luna (que baja hasta ~485); la foto aún se apoya sobre ella.
- Verde pino más oscuro y **claramente translúcido** (≈ 40–48 % de opacidad, desenfoque mínimo de 1,5 px) para que se vean el cielo y las estrellas detrás; borde tenue al 10 %.
- Orden de la tarjeta: **Constanza Flores → línea rosada → Diseñadora Gráfica Senior · Ingeniera en Informática · UX/UI → Santiago de Chile** (antes la línea iba después de los títulos).
- Se eliminaron de la portada «Santiago de Chile», el botón «Entrar al universo» y la nota «Prototipo con contenido de ejemplo».
- En su lugar, dentro de la tarjeta, una **flecha hacia abajo** en un círculo fino que se mueve suavemente (invita a hacer clic sin texto). Es un botón accesible («Entrar al portafolio») para teclado y lector de pantalla; con el ratón se puede hacer clic en todo el conjunto. Sin movimiento con `prefers-reduced-motion`.
- Al quitar la barra inferior, la composición de la portada usa más alto de pantalla y se ve más grande.

## Selector Diseño / Informática — ajustes pedidos por Coni
- Fondos de ambas mitades con **el mismo oscuro del cielo de la portada** (#08112a → #010205). Cada mitad tiene su centro de luz propio (Diseño a la derecha de su mitad, Informática a la izquierda) y una línea divisoria tenue, para que se lean separadas.
- **«Explorar» solo aparece al pasar el cursor** por cualquier parte de su mitad (o al enfocarla con teclado), **sin flecha ni línea**. En pantallas táctiles (sin cursor) se muestra siempre, para no ocultar cómo entrar.
- Hover de Informática: se quitaron los «bloques de interfaz» (rectángulos vacíos que se leían como cajas sin sentido). Ahora solo aparecen fragmentos de código (16 variantes) y, a veces, un cursor parpadeando.

## Universos — ajustes pedidos por Coni
- Agujero negro: se quitaron «Un poco más de mí» y «Descubrir». Al centro va **«CF» en gris oscuro** (#343a46), apenas visible; se aclara levemente al pasar el cursor. El botón conserva el nombre accesible «Un poco más de mí: ir a Quién soy».
- Se quitó la etiqueta «Universo / Diseño» (y su equivalente en Informática): queda solo el título y la formación.
- Composición más arriba: agujero negro al 42 % del espacio (antes 55 %) y proyectos 14 puntos más arriba en `data/demo-content.json`, para reducir el aire bajo la formación.
- Pie: se quitó «Proyectos de ejemplo · contenido DEMO»; queda «Desliza para ver marcas» a la derecha. Los proyectos siguen siendo DEMO hasta que Coni defina los reales.
- Nombres de proyecto hasta 280 px de ancho para que no se corten en dos líneas.

## Marcas — pedido de Coni (con su CV ATS)
- Se quitó la nota bajo la grilla («Nombres reales · logotipos tipográficos temporales…»).
- Cada marca es un botón que abre una **ventana pequeña** con relación, período, rol y qué hace Coni (texto chico). Se cierra con ×, Escape o clic fuera.
- Los datos viven en `experiences` de `data/demo-content.json` (reemplaza a `brandRelationships`). Cada experiencia: organización, tipo, rol, período, resumen y sus marcas. Cuando lleguen los logos se agrega `logo` a cada marca y la grilla muestra el logo (gris en reposo, color al pasar el cursor) en vez del nombre.
- El texto bajo cada nombre se mantiene por ahora (Coni lo pidió así hasta tener logos).
- Marcas agregadas según el CV y lo que contó Coni: HEAD Chile y Calú Bags (Maletas Chile SpA), Patagonia Donas (Castaño), Municipalidad de La Granja, Municipalidad de La Pintana y SUBDERE (clientes vía Brecha Digital Consultores), El Búho Comunicaciones, MujerActual, Hijas del Caldero, Brecha Digital Consultores, E-Mach Card.
- **Pendiente de confirmar con Coni** (no se publican hasta confirmar): nombre de la marca de pan de Castaño; escritura de «Pampier»; desde cuándo trabaja con Drei Ventures (hoy dice solo «Actualidad»); clientes de El Búho (ej. «Isa» y organismos de gobierno); si Arbor Counseling Centers se mantiene (está en el CV anterior, no en el ATS).

### Marcas encontradas en Vimeo (vimeo.com/conoflor, 76 videos revisados por título y miniatura)
- **Castaño** (videos 2022): Kingsbury (la «marca de pan»: Pan Perfecto, 50/50, Wholegrain), **Patagonia Donuts** (así aparece en el logo; antes decía «Patagonia Donas»), Café Castaño y Ándale (tortillas Castaño).
- **Brecha Digital Consultores** (videos 2020 marcados «derechos agencia b.digital»): se suman Municipalidad de Independencia, Municipalidad de Puerto Montt y Servicio de Registro Civil (Clave Única). La Pintana se confirma por el logo del Departamento de Salud Municipal en la serie del tigre (2021).
- **El Búho Comunicaciones**: ISA InterChile (videos 2019 y 2021; Coni lo mencionó como cliente de El Búho).
- Pendientes de confirmar con Coni (en `vimeoReview` del JSON): Subsecretaría/Ministerio del Trabajo (¿vía Brecha o El Búho?), Universidad Central, Venezzia Live, La Triada, La Chinita, Mis Recetas Premium, Milkshake, Ciudad Feliz; y «Pampier», que no aparece en los videos.
- Los trabajos universitarios de 2014 (Good Girl, Urbano, Programa, ONG, etc.) no se agregan como marcas.
- A pedido de Coni: se reemplazaron Café Castaño y Ándale por **Universidad Central (comunicaciones internas)** y **DECH UNIMARC**. Van como marcas propias (no «vía Castaño»): Universidad Central con período 2019 y rol «Ilustración y animación» (según el video y su descripción en Vimeo); DECH UNIMARC con período y rol «Por confirmar».
- Tarjeta de la portada pasa a **vidrio esmerilado azul oscuro** (pedido de Coni; antes verde pino translúcido): degradé azul noche translúcido (~36–46 %), desenfoque de 12 px del cielo detrás, brillo suave en la parte superior, borde fino azulado y sombra profunda.
