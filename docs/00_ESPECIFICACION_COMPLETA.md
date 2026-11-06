# PORTAFOLIO WEB — CONSTANZA FLORES
## Especificación completa de UX/UI, composición, navegación, animaciones e interacciones

**Estado:** documento de diseño para implementar la web real con Claude Code. Especifica lo conversado y aprobado. Usar **fotos, mockups y textos provisionales** hasta que Constanza entregue los proyectos reales. No usar plantillas. No sustituir las decisiones aprobadas por estilos genéricos.

## 0. Concepto y objetivo

Construir un portafolio personal original para **Constanza Flores**, que combine su trayectoria en **Diseño Gráfico Senior** con su formación en **Ingeniería en Informática** y conocimientos de **UX/UI**. El sitio debe demostrar creatividad e interacción, pero permitir que quien contrata encuentre rápidamente proyectos, experiencia, formación y contacto. La metáfora principal es **un universo casi negro**, con estrellas/puntos orbitales que representan trabajos seleccionados. La web no debe sentirse como una plantilla ni como un videojuego: **editorial, sofisticada, minimalista, femenina de manera sutil y funcional**.

**Recorrido principal:** Portada → apertura del fondo → elección Diseño / Informática → universo de proyectos → proyectos individuales → marcas al hacer scroll → Contacto.

**Recorrido alternativo:** desde el universo o desde «Quién soy» del menú, entrar por un **agujero negro** al collage de intereses personales y regresar.

**Principio de contenido:** no incluir todos los trabajos. Las estrellas son **proyectos concretos destacados**, NO categorías, y NO es obligatorio tener la misma cantidad en Diseño e Informática. La selección y cantidad final se decidirán después. Por ahora usar contenido falso claramente identificado.

## 1. Sistema visual global

- **Referencia de diseño escritorio:** 1920 × 1080 px. Debe ser fluido y responsive: no fijar todo a un viewport 1920 × 1080. Las escenas principales ocupan al menos una altura de pantalla.
- **Estética:** oscura/editorial, con mucho espacio negativo, precisión tipográfica, pocos detalles decorativos y transiciones controladas.
- **Paleta B aprobada:** fondo casi negro `#05080E`; tarjeta/acento verde pino `#102E2C`; rosa antiguo `#C782A2`; blanco suave `#EBE9E8`.
- **Universo:** azul noche aún más oscuro, **casi negro**, con profundidad tonal muy sutil y algunas estrellas de fondo pequeñísimas, poco contrastadas. No usar un azul saturado, galaxias vistosas ni grandes nebulosas.
- **Tipografía principal:** **DM Sans** para títulos, navegación, botones, subtítulos y textos.
- **Tipografía secundaria:** **Sacramento** únicamente para acentos script ocasionales, nunca para legibilidad funcional ni para cuerpos largos.
- **Animaciones:** suaves, sin brillos, resplandores intensos, destellos constantes, hojas, líneas decorativas en la parte superior ni elementos ornamentales añadidos sin aprobación.
- **Fotografía:** inicialmente una imagen ficticia de prueba o espacio reservado. Constanza aún no decide si el círculo central definitivo llevará **foto o logo**. No crear un supuesto retrato real de ella.
- **Contenido y logos:** provisionales ahora; los originales se reemplazarán después.

## 2. Navegación global

### Escritorio

Barra horizontal **fija arriba**, minimalista y siempre accesible, con fondo oscuro discreto. A la izquierda «CF.» o un pequeño identificador/logotipo que lleva a Inicio. A la derecha enlaces visibles: **Diseño · Informática · Marcas · Quién soy · Contacto**. Tipografía DM Sans, sobria. Estado activo puede indicarse mediante una línea fina rosa.

### Móvil

Cabecera compacta con identificador y **menú hamburguesa**; al pulsarlo, se despliegan las mismas opciones y hay control de cierre. Los botones son táctiles, suficientemente amplios y accesibles. No depender exclusivamente del hover.

### Destinos

- **Inicio / CF:** vuelve a la portada.
- **Diseño:** entra o lleva al universo de Diseño, sin obligar a repetir toda la animación inicial.
- **Informática:** entra o lleva al universo de Informática.
- **Marcas:** desplaza o lleva a la **única sección compartida** de marcas.
- **Quién soy:** lleva al collage personal, mediante el portal cuando proceda o por acceso directo accesible.
- **Contacto:** conduce al cierre de la web.

Los accesos de menú no deben dejar al usuario atrapado en animaciones; permitir navegar directamente.

## 3. Pantalla 1 — Portada / Inicio

### Composición

Pantalla completa con fondo **`#05080E`**, muy limpio. En el centro hay un **círculo grande con una fotografía o logo provisional**, **superpuesto** sobre la parte superior de una tarjeta rectangular de bordes redondeados en **verde pino `#102E2C`**. Es como un **broche visual** que mantiene cerrada la pantalla. La composición es centrada y con mucho aire alrededor.

El círculo va rodeado por **UNA sola órbita elíptica fina rosada**, inclinada, con apariencia espacial pero sobria. La órbita puede pasar visualmente delante/detrás del círculo para sugerir volumen. **No** añadir hojas, líneas arriba de la página, brillo, partículas, destellos, grandes halos ni una segunda órbita: la opción elegida fue la minimalista limpia.

### Texto exacto de la tarjeta

**Constanza Flores**  
**Diseñadora Gráfica Senior · Ingeniera en Informática · UX/UI**  
**Santiago de Chile**

El nombre se destaca en DM Sans; los títulos van debajo en tamaño menor y la ubicación al final. No añadir una frase o eslogan en la portada: la usuaria eligió expresamente **sin frase**. La tarjeta puede tener separadores mínimos si no sobrecargan.

### Animación al cargar

La propuesta aprobada consiste en una secuencia elegante, ligeramente superpuesta, que toma aproximadamente **1,5–2 segundos**:

1. Aparece la imagen circular con una pequeña transición de opacidad y escala.
2. Se revela/dibuja la órbita fina rosada.
3. La tarjeta verde aparece desde unos píxeles más abajo hasta quedar parcialmente **detrás** del círculo; aparecen el nombre y los títulos.

**Detalle provisional:** una pequeña estrella rosa de cuatro puntas recorre lentamente la órbita, aproximadamente una vuelta cada 12–15 segundos. La **línea orbital permanece fija**, se mueve solo la estrella. Sin brillo ni estelas. La forma exacta de la estrella y el movimiento pueden cambiarse después.

### Acción principal

El conjunto central (círculo/tarjeta y un área clicable obvia) invita a **entrar**. Debe ser accesible también mediante teclado y tener indicación de interacción. Al hacer clic/tocar, se dispara la **apertura del broche** descrita a continuación. No inventar un eslogan adicional para el botón.

## 4. Transición de apertura — el broche y las dos mitades negras

**Esta animación es crucial; no invertir los lados.**

1. La pantalla inicial entera de fondo negro se **parte verticalmente por la mitad**, como dos puertas/cortinas que se abren desde el centro.
2. La **mitad izquierda negra se desliza hacia la IZQUIERDA llevando consigo el círculo con foto/logo y su órbita**. La imagen **NO** se desplaza hacia la derecha.
3. La **mitad derecha negra se desliza hacia la DERECHA, vacía**.
4. La **tarjeta verde con los datos baja y desaparece** antes o durante la apertura.
5. Detrás de esas dos mitades se revela gradualmente un **universo azul muy oscuro, casi negro**, con profundidad discreta y algunas estrellas tenues.
6. Tras concluir, aparecen de forma clara y fija las palabras **DISEÑO** (izquierda) e **INFORMÁTICA** (derecha).

No sustituir esto por un fade genérico ni por dos paneles que simplemente se pintan de distinto color. La sensación buscada es **abrir un cierre/broche físico, revelando otro mundo detrás**. La escena se mantiene elegante y fluida; permitir reducción de movimiento por accesibilidad.

## 5. Pantalla 2 — Elegir Diseño o Informática

El fondo del escenario es el universo casi negro, con dos **zonas interactivas**, izquierda y derecha. Los títulos **DISEÑO** e **INFORMÁTICA** son **medianos, elegantes, visibles desde el principio**, en DM Sans. No hacerlos gigantes ni esconderlos hasta el hover.

### Lado izquierdo: DISEÑO

- Toda la **mitad izquierda** es clicable, no únicamente el texto.
- **Hover / mover mouse:** aparecen **líneas y trazos curvos finos, fluidos, estéticamente cuidados**, que siguen/reaccionan al cursor y se dibujan/desvanecen con suavidad. Deben sentirse como creatividad y arte, **no garabatos caóticos**.
- Usar rosa antiguo, verde bosque o tonos derivados y, solo si ayuda, un tercer tono apagado (p. ej., lila). Mantener buen contraste y orden.
- Al salir el cursor, las líneas se desvanecen naturalmente; al tocar/clicar, se puede mostrar una reacción breve antes de navegar.
- **Click en cualquier lugar de esta mitad:** la zona Diseño **se expande y ocupa toda la pantalla**, mientras la otra mitad se retira. Entra al **Universo Diseño**.

### Lado derecho: INFORMÁTICA

- Toda la **mitad derecha** es clicable.
- **Hover / mover mouse:** aparecen elementos tecnológicos minimalistas animados: fragmentos de código, llaves, etiquetas HTML, símbolos `</>`, cursores parpadeantes, componentes UI, pequeños estados de interacción o módulos que reaccionan al cursor.
- Es importante comunicar **programación, lógica, interfaces e interacción**, **NO** lluvia verde de Matrix ni estética «hacker» exagerada.
- Al salir el cursor, las piezas se ocultan/desvanecen.
- **Click en cualquier lugar de esta mitad:** Informática **se expande hasta ocupar toda la pantalla**, la otra mitad desaparece y se entra al **Universo Informática**.

### Móvil

No hay hover real. Presentar dos zonas táctiles claramente separadas, pudiendo apilarse verticalmente; una pulsación abre el universo y puede acompañarse de microanimación breve. Nunca ocultar la única manera de entrar.

## 6. Universos de proyectos (Diseño e Informática)

Cada universo usa fondo azul casi negro con algunas estrellas decorativas tenues, en calma. Su **título principal** y una **credencial académica discreta** se muestran sin competir con los proyectos.

- **Universo Diseño:** «Diseño», con la credencial **Diseño Gráfico · Universidad Diego Portales · 2016** (título profesional y licenciatura).
- **Universo Informática:** «Informática», con **Ingeniería en Informática · Duoc UC · 2025** (título profesional).

### Proyectos representados como puntos orbitales

- Cada proyecto destacado es **una estrella interactiva**, representada mediante **un pequeño punto central** con uno o varios **anillos circulares delgados y muy sutiles**. La usuaria eligió los **puntos orbitales** y no las estrellas tradicionales de puntas.
- Distribución **orgánica**, no en cuadrícula simétrica: algunos arriba, otros abajo; composición equilibrada, aire entre elementos, evitar superponer nombres.
- Los **nombres de los proyectos son visibles siempre**, no solo al pasar el mouse. La fuente es DM Sans.
- **Hover/foco:** el punto se amplía ligeramente, los anillos se expanden o reaccionan con movimiento sutil y se destaca el nombre. No agregar halos brillantes.
- **Click/tap:** abre directamente el **caso de estudio de ese proyecto**. No hay un nivel previo de categorías.
- La **cantidad definitiva de proyectos queda pendiente** de curaduría. No llenar la pantalla artificialmente; inicialmente poner ejemplos ficticios, suficientemente diferenciados para probar la composición.
- Puede haber uno más protagonista y otros más discretos por tamaño/composición, pero es un criterio visual, no un ranking obligatorio.

### Importante sobre contenido

Las estrellas representan **proyectos elegidos por calidad y relevancia profesional**, no todas las empresas, y **no categorías** como «Branding», «RRSS» o «UX/UI». Fue una decisión explícita tras reconsiderar el árbol de navegación. Dentro de cada proyecto ya se explica la marca y las habilidades aplicadas.

## 7. Agujero negro central — acceso a «Quién soy»

En el **centro del universo** hay un **agujero negro**, un poco más grande que los puntos orbitales de proyectos, pero **no enorme**. Es oscuro y profundo, con un borde tenue y un movimiento muy discreto que sugiera gravedad. No usar un agujero negro cinematográfico con un gran aro naranja o brillos intensos.

- Lleva texto **visible**: **«Un poco más de mí»**. No reservar ese texto únicamente para hover.
- **Hover/foco:** ligera respuesta visual/gravitacional, manteniendo la estética minimal.
- **Click/tap:** se produce un zoom/absorción suave hacia el centro: el universo parece ser atraído y se entra a la escena del **collage personal**.
- **Regreso:** permitir volver al universo desde el espacio personal sin perderse; mantener el menú global disponible.
- El enlace **«Quién soy»** del menú debe dar acceso directo a este contenido, aunque el usuario no descubra el agujero negro.

## 8. Página interior de CADA proyecto

**No usar ventanas modales pequeñas para mostrar proyectos profesionales.** La idea aprobada es que el clic en la estrella abra una **página/escena completa**, limpia, editorial y centrada en el trabajo. Aquí se deja atrás el ambiente de estrellas para priorizar legibilidad e imágenes. Fondo negro carbón uniforme, acorde con el sistema visual.

### Estructura

1. **Arriba izquierda:** pequeña **estrella fija** que actúa como control «Volver al universo». Debe regresar al universo **del que procede** (Diseño o Informática), idealmente conservando contexto/posición.
2. Identificador discreto, por ejemplo `01 / 04`, según el número real de proyectos de ese universo.
3. **Nombre grande del proyecto**, categoría y marca/cliente; titulares DM Sans.
4. **Imagen principal o hero** grande (temporalmente una imagen de ejemplo).
5. **Objetivo del proyecto** explicado en 2–4 líneas.
6. **Mi participación:** especificar lo que Constanza realmente realizó, sin atribuirle funciones inventadas.
7. **Herramientas y tecnologías** utilizadas.
8. **Resultado / galería:** imágenes grandes, mockups, video, prototipo o enlaces reales cuando estén disponibles.
9. **Pie de navegación:** flechas discretas **«Anterior» y «Siguiente»** para visitar otros proyectos del mismo universo, además del regreso con la estrella fija.

### Interacción

- Desplazamiento vertical natural para leer el caso; animaciones de entrada discretas.
- Clic en «Anterior»/«Siguiente»: transición suave entre casos, respetando el universo y el orden de proyectos; no enviar a otro tipo de trabajo sin contexto.
- Contenido centrado en imágenes, poco texto bien jerarquizado; mantener diferencia entre tareas de diseño, UX/UI y desarrollo.
- No mostrar resultados cuantitativos ni métricas no suministradas; usar placeholders neutros.

## 9. Marcas con las que he trabajado

**Una sección compartida**, disponible desde ambos universos. Está **debajo del universo mediante scroll** y además es accesible desde el enlace fijo **«Marcas»** del menú. No repetir una cuadrícula completa de marcas en cada universo.

### Transición aprobada: opción B, por pantallas

Cuando se hace scroll desde el universo, este **se desliza hacia arriba como un capítulo que termina** y se revela una pantalla/capítulo nuevo de marcas, con fondo negro carbón y tipografía editorial. Es una separación clara de capítulos, NO el simple fundido continuo originalmente propuesto como opción A. El scroll debe seguir siendo manejable, también con teclado, ratón y pantalla táctil, sin dejar atrapado al visitante.

### Composición de la sección

- Título: **«Marcas con las que he trabajado»**.
- **Cuadrícula espaciosa y ordenada** de **logotipos oficiales** (no carrusel, no cinta infinita).
- Por defecto los logos aparecen **monocromáticos** en blanco/gris.
- **Hover/foco:** recuperan sus colores originales con transición sutil.
- En móvil (sin hover), los logos deben seguir siendo reconocibles; se puede mostrar color original o alternar con tap/foco sin ocultar información.
- Puede existir enlace a la web oficial de una marca cuando corresponda, pero no es necesario para entender el diseño. Mantener consistencia de tamaños visuales.

### Atribución CORRECTA (muy importante)

- **Proust House**: trabajo de diseño para clientes/proyectos como **Property Partners**, **Imagination Station**, **Scotch Plains Montessori School**, **Forge Programming** y **Arbor Counseling Centers**. Estas marcas son clientes/proyectos **dentro de Proust House**; no atribuirlas todas como empleadores directos.
- **Drei Ventures**: colaboración actual como diseñadora gráfica freelance; **Nuva Oxi** es un proyecto realizado **dentro de Drei Ventures**, no una empresa empleadora aparte.
- **HEAD** y **Castaño**: experiencias/empresas importantes que deben conservarse.
- **NO incluir Natural Pet**: la usuaria indicó expresamente que no existe en su portafolio.
- Otros logos solo después de confirmar que realmente correspondan a su trayectoria. La cuadrícula debe poder crecer sin romper el layout.

## 10. Mundo personal — collage después del agujero negro

La sección se siente más cercana, artística y humana, pero no rompe la estética oscura/minimalista. Es **«Quién soy»**, separada de los casos de estudio. Se llega desde el **agujero negro central** y desde el menú.

### Composición

- Fondo negro/carbón y acentos rosa antiguo y verde bosque.
- Título personal provisional: **«Un poquito de todo. Mucho de mí.»** (se puede ajustar la redacción después).
- **Collage libre y equilibrado**, no una cuadrícula empresarial rígida.
- **Íconos lineales minimalistas**, de trazo fino, grosor coherente y paleta limitada. **No stickers ni ilustraciones sobrecargadas**: la usuaria eligió expresamente iconografía minimal para seguir el estilo de la web.

### Los 9 intereses que deben aparecer

**Gym, cocina, animales, tarot, herbolaria, dibujo, pintura, jabones artesanales y velas artesanales.**

### Interacciones

- **Hover/foco** sobre un ícono: ligero movimiento o cambio sutil de énfasis, no destellos.
- **Click/tap** sobre cualquier ícono: abre **un popup/modal o desplegable**, con **una imagen** del interés y **un texto corto** que explique qué significa para Coni.
- La ventana tiene **botón de cerrar** claramente visible; cerrar devuelve al mismo collage. Debe funcionar con teclado y móvil.
- Usar fotografías e historias provisionales por ahora, **no inventar recuerdos personales como si fueran reales**.
- Mantener retorno claro hacia el universo y navegación global.

## 11. Contacto — última pantalla del recorrido principal

La sección de contacto es la **última pantalla** al desplazarse después de Marcas. No hay un formulario de contacto.

**Contenido previsto:** una frase editorial grande (ejemplo provisional «¿Creamos algo juntos?»), email visible **conoflor@gmail.com**, enlaces a **LinkedIn**, **GitHub** y un botón/enlace **Descargar CV**. La frase y microcopy se pueden revisar después; la estructura minimalista ya está aprobada.

- Enlaces clicables: mailto y perfiles correctos. Referencias conocidas: `linkedin.com/in/conoflor` y `github.com/Confloresc`.
- El CV será descargable cuando se incorpore su versión final.
- Pie de página sencillo con «Constanza Flores» y/o año, sin adornos pesados.

## 12. Flujo de navegación completo

1. **Abrir sitio:** portada negra con círculo + órbita rosa + tarjeta verde con nombre y credenciales.
2. **Click en la portada:** tarjeta baja y desaparece; negro se parte en dos; **foto/círculo se va con la mitad izquierda a la izquierda**; mitad derecha se retira vacía hacia la derecha.
3. **Aparece el fondo universo:** títulos **DISEÑO** a la izquierda e **INFORMÁTICA** a la derecha, fijos.
4. **Hover Diseño:** trazos de color fluidos; **hover Informática:** código y componentes interactivos.
5. **Click en cualquiera de las mitades:** esa zona se expande y ocupa toda la pantalla; se entra en el universo elegido.
6. **Universo:** título + formación discreta; proyectos como puntos orbitales distribuidos orgánicamente, con nombres siempre visibles; agujero negro central etiquetado «Un poco más de mí».
7. **Click en estrella de proyecto:** abre caso editorial completo. Estrella fija superior izquierda regresa al universo. Botones **Anterior/Siguiente** recorren proyectos.
8. **Click en agujero negro:** transición de absorción/zoom y entrada al collage personal; cada ícono abre popup con imagen y texto corto.
9. **Scroll bajo universo:** transición de capítulo donde el universo sube y se revela la sección **Marcas** en cuadrícula.
10. **Seguir bajando:** última escena **Contacto**.
11. **En cualquier momento:** navegación fija de escritorio o menú móvil permite saltar a Diseño, Informática, Marcas, Quién soy o Contacto.

## 13. Responsive, accesibilidad y usabilidad

- Referencia de escritorio 1920 × 1080, pero funcionar en portátil, tablet y smartphone.
- Barra de navegación fija en escritorio; menú hamburguesa en móvil.
- Las áreas grandes de Diseño/Informática deben seguir siendo accesibles en táctil; reemplazar comportamientos de hover por estados táctiles comprensibles.
- Puntos orbitales y agujero negro deben tener **zonas de clic suficientemente grandes** aunque sus representaciones visuales sean pequeñas.
- Navegable con teclado: tab, Enter/Espacio, foco visible y cierre de modales con Escape.
- Acompañar interacciones con nombres de texto: no depender solo de color o animación.
- Respetar `prefers-reduced-motion`: reducir o reemplazar animaciones largas, especialmente las de apertura y portal; no bloquear navegación.
- Contraste adecuado, jerarquía semántica y textos alternativos para fotografías/logos.
- Mantener performance: optimizar imágenes, no cargar librerías enormes para efectos menores, evitar scroll interceptado que complique el uso.

## 14. Pautas de desarrollo para Claude Code

- Construir **desde cero**, sin plantillas, preferentemente **React + Vite** con **CSS personalizado**; usar GSAP solo si ayuda realmente con la apertura y otras transiciones.
- Separar en componentes reutilizables y mantener los datos de proyectos/marcas fuera de la presentación, para poder reemplazar mocks sin reprogramar layouts.
- Proponer estructura clara: `components`, `pages`/`sections`, `styles`, `data`, `assets`, y navegación/estado.
- Desarrollar y comprobar **por etapas**. Prioridad: 1) portada y apertura; 2) selector y universos; 3) casos de proyecto; 4) marcas/scroll; 5) portal y collage; 6) contacto, responsive y accesibilidad.
- Usar imágenes, logos y textos **ficticios de muestra** claramente identificados. **No inventar proyectos reales, logros, métricas o participación.**
- Dar acceso local en navegador para revisar; los archivos HTML sueltos en visores de ChatGPT pueden no ejecutar las interacciones. Se probará en navegador real.
- No cambiar la dirección del desplazamiento del círculo, el tipo de estrellas, la paleta, las tipografías ni el funcionamiento del menú sin consultar.

## 15. Decisiones definitivas vs. pendientes

### Aprobado

- Portada centrada 1920 × 1080 como referencia, círculo superpuesto a tarjeta verde; **sin eslogan**.
- Órbita elíptica rosada **única**, sin hojas, línea decorativa superior ni brillos.
- Partición vertical del negro; **círculo viaja con la izquierda hacia la izquierda**, derecha vacía hacia la derecha; tarjeta cae/desaparece.
- Universo azul extremadamente oscuro, profundo, con pocas estrellas de fondo tenues.
- Títulos Diseño/Informática medianos, fijos y visibles. Mitades completamente clicables.
- Hover izquierdo con líneas de colores; hover derecho con código/elementos UI. Mitad elegida se expande.
- Estrellas de proyectos = **puntos orbitales**, con nombres siempre visibles y distribución orgánica.
- Proyecto abre página editorial con objetivo, aporte, herramientas, resultado, gran galería, estrella fija para volver, y Anterior/Siguiente.
- Agujero negro en centro del universo, algo mayor que las estrellas, texto visible «Un poco más de mí», conduce a collage.
- Collage con **nueve intereses** e íconos lineales; clic abre ventana con fotografía y texto breve.
- Marcas en cuadrícula, monocromáticas → color en hover; sección al hacer scroll bajo universo con **transición tipo capítulo/pantalla**, acceso por menú.
- Contacto como **última pantalla**, correo y enlaces sin formulario.
- Barra fija superior con Diseño, Informática, Marcas, Quién soy y Contacto; hamburguesa en móvil.
- Formación académica **dentro de cada universo**, bajo su título; no una pantalla académica adicional.
- Tipografías **DM Sans + Sacramento**; paleta **`#05080E`, `#102E2C`, `#C782A2`, `#EBE9E8`**.

### Abierto / provisional

- Si el círculo final usa **fotografía real o logotipo**.
- Si se mantiene la estrellita rosada de cuatro puntas recorriendo la órbita; por ahora sí, con posibilidad de cambiarla.
- Cuántos proyectos exactos mostrar en cada universo y cuáles serán (curaduría posterior).
- Fotografías, mockups, textos de proyectos y logos finales.
- Microcopy personal y frase exacta de Contacto; usar textos falsos de prueba en esta etapa.
- Ajustes finos de duración/easing según pruebas reales.

## 16. Criterios mínimos para considerar correcta la primera versión

- La portada respeta posición, texto y paleta; no añade eslogan ni ornamentos prohibidos.
- Al entrar, el círculo **va a la izquierda** y el negro realmente **se separa en dos**.
- Diseño e Informática son visibles, reaccionan diferente al hover y cada mitad abre su universo.
- Las estrellas orbitales muestran los nombres, se pueden accionar con teclado/touch y abren casos de estudio.
- La estrella superior izquierda vuelve al universo; Anterior/Siguiente funcionan.
- El portal central lleva a un collage funcional con popups que abren y cierran.
- La cuadrícula de marcas aparece en un capítulo al hacer scroll y también desde «Marcas».
- Contacto es el final; el menú funciona en escritorio y móvil.
- Todos los contenidos de demostración están señalados como provisionales.

---

**Instrucción final para Claude:** conserva esta especificación como fuente de verdad. Antes de cambiar cualquier elemento aprobado, pregunta; antes de sustituir los contenidos ficticios por reales, solicita aprobación. Implementa una etapa funcional y comprobable por vez.
