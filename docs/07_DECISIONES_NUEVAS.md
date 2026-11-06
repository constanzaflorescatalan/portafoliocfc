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
- Tarjeta de la portada: **azul oscuro plano, sin brillo ni degradé** (rgba(13, 22, 48, 0.82)); luego más oscuro: rgba(7, 12, 28, 0.88), borde casi invisible; se mantiene una leve transparencia con desenfoque para no tapar del todo el cielo.
- Borde de la tarjeta más oscuro: línea casi negra (#02040a) en vez del borde claro tenue.
- Luego, a pedido de Coni: tarjeta **sin contorno** (sin borde).
- Fondo de Marcas: **mismo degradé azul noche de la portada** (#08112a → #010205) con estrellas casi invisibles (StarField con `dim` 0,35: opacidad máxima ≈ 0,12).

## Contacto — pedido de Coni
- Fondo: **mismo azul noche** de la portada y Marcas, con estrellas casi invisibles.
- Frase nueva: **«Diseño que se ve. Código que funciona.»** (segunda parte en rosa). Se quitó «Siempre hay espacio para una buena idea.». La frase está en `contact.title` del JSON.
- Correo nuevo: **constanza.florescatalan@gmail.com** (reemplaza conoflor@gmail.com en todo el sitio).
- Enlaces: LinkedIn (linkedin.com/in/conoflor, el de su CV), **GitHub github.com/constanzaflorescatalan** (cuenta del proyecto) y **Vimeo vimeo.com/conoflor** (nuevo).
- «Descargar CV» descarga el **CV ATS** que entregó Coni (reemplaza `public/assets/Constanza_Flores_CV.pdf`).
- Luego, a pedido de Coni: frase **«Tu mensaje será nuestro próximo»** (blanco, más pequeña) + **«gran proyecto.»** (rosa, al tamaño grande del título). Textos en `contact.titleLead` / `contact.titleHighlight`.
- El correo grande se reemplazó por **«Mail»** en la fila de enlaces: al hacer clic copia constanza.florescatalan@gmail.com y muestra «Correo copiado»; si el navegador no permite copiar, abre el programa de correo. El correo aparece como tooltip al pasar el cursor.

## Quién soy — pedido de Coni
- Título: **«Quién soy» (etiqueta) + «Un poquito de mí.»**. Se quitó «Mucho de mí.». Se mantiene «Toca un ícono para conocer un poco más.». Se quitó la nota DEMO del pie.
- Fondo: **el mismo cielo de la portada** (degradé azul noche + estrellas que se acercan y alejan + titileo), con `CoverSky full`.
- **Solo íconos**, sin nombres visibles (el nombre va como etiqueta accesible y en la ventana). Los 9 íconos **orbitan muy lento (140 s por vuelta) alrededor del título** en una elipse, cada uno flotando suavemente; la órbita se detiene al pasar el cursor o enfocar con teclado para poder hacer clic con calma. Círculos azul oscuro translúcidos; al pasar el cursor, borde y ícono rosados.
- En celular (o pantallas bajas): grilla de 3 × 3 sin órbita. Con `prefers-reduced-motion`: todo quieto.
- Nuevos intereses a pedido de Coni: **Gemoterapia** (ícono de gema facetada) y **Escultura en arcilla** (ícono de figurita tipo gatito sobre una base). Ahora son 11 íconos en la órbita. Sin foto todavía: la ventana muestra el ícono grande en rosa sobre fondo verde pino oscuro hasta que Coni entregue imagen y texto.

---

# Pendiente de confirmar (resumen al cierre del día)

**Contenido**
- Proyectos reales de Diseño e Informática (hoy son DEMO).
- Logos oficiales de las marcas (hoy se muestran los nombres).
- Fotos y textos de los 11 intereses de Quién soy (hoy son de ejemplo; Gemoterapia y Escultura sin foto).

**Datos de marcas**
- Nombre correcto de «Pampier» (Castaño).
- Desde cuándo trabaja con Drei Ventures.
- Si se mantiene Arbor Counseling Centers.
- Universidad Central: vía qué agencia y período exacto.
- DECH UNIMARC: período, rol y vía qué empresa.
- Clientes de El Búho por confirmar (organismos de gobierno, Ciudad Feliz).
- Vimeo por confirmar: Subsecretaría/Ministerio del Trabajo, Venezzia Live, La Triada, La Chinita, Mis Recetas Premium, Milkshake.

**Técnico**
- Estrellas de la portada: Coni las vio solo arriba a la izquierda en su equipo; falta captura y navegador para reproducirlo (sospecha: Safari).
- Publicación pública (GitHub Pages / Vercel) cuando Coni lo pida.

## Preparación para publicar (sesión 2)
- **Fuentes alojadas en el sitio** (`@fontsource-variable/urbanist`, `@fontsource/sacramento`): ya no se carga nada desde Google; el sitio no hace ninguna conexión externa.
- **Favicon** («CF.» con punto rosa) en SVG, PNG 32 px y ícono para iPhone (`public/`).
- **Vista previa al compartir** (Open Graph y Twitter): `public/og-image.jpg` 1200×630 con foto, órbita, nombre y títulos. Al tener dominio, cambiar `og:image` a dirección completa.
- **`public/robots.txt`**: buscadores permitidos; robots de IA (GPTBot, ClaudeBot, Google-Extended, CCBot, PerplexityBot, etc.) bloqueados.
- **`public/_headers`**: cabeceras de seguridad (CSP, HSTS, nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy, COOP) para Cloudflare Pages o Netlify. Probadas sirviendo el sitio con ellas: sin bloqueos.
- **Correo protegido contra spam**: en el JSON va como `usuario [at] dominio` y se arma solo al copiar; ya no aparece como correo en el código publicado.
- **Notas internas fuera del sitio publicado**: se detectó que el JSON completo (con notas como «por confirmar con Coni» y la revisión de Vimeo) viajaba en el código del sitio. Se quitaron esas notas del JSON (siguen en este documento) y el sitio importa solo las secciones que muestra. Regla: **todo lo que está en `data/demo-content.json` es público**.
- **Accesibilidad**: la estrella de volver del caso de estudio tiene nombre accesible también en celular; los textos tenues subieron de 45 % a 60 % de opacidad para cumplir contraste AA. Revisión con axe-core: 0 problemas en 16 pantallas.
- Contacto: el enlace de **GitHub apunta a la cuenta académica github.com/Confloresc** (pedido de Coni), en vez de la cuenta del proyecto.

## Visibilidad para buscadores e IA (decisión de Coni)
- Prioridad: **que reclutadores y clientes la encuentren**, también a través de asistentes de IA (ChatGPT, Claude, Perplexity, Gemini).
- `public/robots.txt`: se **permite a todos** los buscadores y robots de IA (búsqueda, asistentes y entrenamiento). Único bloqueo: **Bytespider** (recopilación agresiva, sin aporte de visibilidad). Reemplaza el bloqueo amplio anterior.
- **Ficha Schema.org (tipo Person)** en el `<head>` de `index.html`: nombre, profesiones, descripción, correo, Santiago (CL), estudios (UDP 2016, Duoc UC 2025), especialidades, idiomas y perfiles (LinkedIn, GitHub académico, Vimeo, Figma). Invisible para visitantes. Al tener dominio, agregar `"url"`.
- **Texto de respaldo** en `<noscript>` con el mismo resumen y enlaces: lo leen robots que no ejecutan JavaScript y personas sin JavaScript; no aparece en el sitio normal.
- El **correo queda legible** en la ficha y el respaldo (decisión consciente: canal de contacto directo; Gmail filtra el spam). En el código interactivo sigue protegido.
- Descripción del sitio (`meta description`) con palabras clave: diseño UX/UI, diseño web, branding, Santiago de Chile.

## Transición selector → universo (pedido de Coni)
- Antes: la mitad elegida se expandía y luego aparecía otra pantalla con el título en otro lugar (se sentía como un corte).
- Ahora: la palabra del mundo («DISEÑO» / «INFORMÁTICA») **es el mismo elemento visual** que el título del universo. Tras la expansión, **viaja hacia arriba, cambia de tamaño y se funde en «Diseño.» / «Informática.»** (View Transitions, 800 ms), mientras el selector se desvanece y el universo aparece alrededor; la formación entra después.
- Navegadores sin View Transitions (versiones antiguas) o con movimiento reducido: entran directo al universo, sin transición.
- Se evitó que el universo repitiera su propio fundido al terminar (causaba un parpadeo).
- Quién soy en **celular**: ya no es una grilla quieta; mantiene **la misma órbita giratoria** que en computador, con la elipse más estirada en vertical (39 % × 43 %), íconos de 46–58 px y el título equilibrado («Un poquito / de mí.»). Probado en iPhone 13, iPhone SE y Pixel 7: ningún ícono se corta ni tapa el título. En celular horizontal la órbita es más ancha que alta.

## Logos de marcas (entregados por Coni)
- 41 logos en `public/assets/logos/` (WebP, fondo quitado, recortados; ~650 KB en total).
- **En reposo**: todos en blanco suave (silueta) para que la grilla se vea pareja. Cuatro logos de bloque sólido (Zetering, Registro Civil, Subsecretaría del Trabajo, SUBDERE) van como **insignia en grises** (`logoMode: "badge"`), porque en silueta serían rectángulos.
- **Al pasar el cursor o enfocar**: el logo aparece con sus colores **sobre su fondo original** (`logoBg`, detectado del borde del archivo). Si el fondo es claro, el texto bajo el logo se oscurece.
- La ventana de cada marca muestra el logo original sobre su fondo.
- **12 marcas nuevas, solo nombre y logo** (sin ventana ni descripción por ahora, en `otherBrands`): BC Media Reach, Zetering, Loz Takos, Masoterapia Raúl Oliva Vásquez, #ChileSinResiduos, Las Tabinas, Maestras Leyendas, Apoquindo Centro de Entrenamiento, Municipalidad de Lo Espejo, Subsecretaría del Trabajo, SISS, Salsa & Avocado.
- «DECH UNIMARC» se separó en **DECH** (con su ventana, período por confirmar) y **Unimarc** (solo nombre y logo), porque llegaron dos logos distintos. Confirmar con Coni la relación entre ambas.
- E-Mach: el archivo entregado era una firma de correo con datos personales de otra persona (nombre, correo y teléfono); se publicó **solo el recorte de la palabra «EMACH»**.
- El logo de El Búho llegó muy pequeño (40 × 40 px): pedir una versión más grande.
- Total en la grilla: 41 marcas.
- Ajustes de logos pedidos por Coni:
  - **DECH y Unimarc en una sola tarjeta** («DECH · Unimarc»), un logo arriba del otro (`dech-unimarc.webp`, `logoTall`).
  - **E-Mach**: solo la palabra «EMACH» (sin la firma de correo).
  - **El Búho**: el logo de 40 px se agrandó y suavizó (silueta del mismo búho).
  - **Zetering**: sin bloques de color; solo el texto («zeter» azul, «ing» dorado, con el corchete del diseño) y el subtítulo, fondo transparente.
  - **Registro Civil, Subsecretaría del Trabajo y SUBDERE**: sin los bloques azul y rojo; queda el escudo y el nombre (se recortó «Gobierno de Chile» porque dejaba un hueco y achicaba todo). Al pasar el cursor, fondo rojo gobierno. Ya no hay insignias en grises.
  - **Marcas de gobierno juntas**: La Granja, La Pintana, Independencia, Puerto Montt, Lo Espejo, Registro Civil, SUBDERE, Subsecretaría del Trabajo y SISS (las tres últimas añadidas sin ventana, solo nombre y logo).
  - Total: **40 marcas** (10 filas completas de 4).
