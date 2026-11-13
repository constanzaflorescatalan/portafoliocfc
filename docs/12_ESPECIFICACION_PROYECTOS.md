# Especificaciones de portafolio — Constanza Flores

Documento de traspaso para implementar las secciones de proyectos en la página web.
Contiene **qué piezas se muestran, en qué orden, de dónde salen y qué tratamiento necesitan** para verse bien.
Los textos están redactados y aprobados.

> **Archivos:** todas las piezas seleccionadas están en esta carpeta (`portafolio-web/`), ordenadas por proyecto y renombradas con el **ID de su ficha** (por ejemplo, `1.1a-vaso-arte-plano.png` corresponde a la ficha 1.1a). Las rutas de "Archivo" en las tablas indican el origen. Las páginas del calendario Kingsbury y del catálogo de Hijas del Caldero ya están exportadas como JPG de 2400 px. Las piezas marcadas ❌ no se incluyeron.

Proyectos (en este orden en la web):

1. **Castaño**: packaging, envase y punto de venta para una marca grande
2. **Kingsbury**: calendario editorial 2022
3. **Hijas del Caldero**: identidad de marca completa, etiquetas y animación

---

## 0. Reglas generales de calidad (aplican a todo)

El portafolio tiene que verse impecable. Una pieza con mala resolución o mal recortada resta más de lo que suma: **si no cumple, no se publica.**

| Regla | Detalle |
|---|---|
| Resolución mínima | 1600 px en el lado largo para imágenes de portada o a ancho completo; 1000 px para piezas de grilla. Exportar al doble del tamaño en pantalla (retina). |
| Formato web | WebP (calidad ~82) con JPG de respaldo. PNG solo si hay transparencia. |
| Peso | Máximo ~400 KB por imagen de grilla y ~800 KB por imagen de portada. |
| Fondo | Uniforme dentro de cada proyecto: crema cálido `#F6F0E6` para Castaño, azul claro de marca para Kingsbury, negro `#111` para Hijas del Caldero. |
| Recortes | Sin bordes de captura de pantalla, sin barras de navegador, sin cursores ni marcas de agua. |
| Franjas legales | Quitar la franja del Ministerio de Salud ("Prefiere alimentos con menos sellos…") de las imágenes del portafolio, buscando la versión sin franja o recortándola. |
| Texto de relleno | Ninguna pieza puede tener "Lorem ipsum" visible. |
| Datos personales | Ningún nombre, firma ni dato de contacto de terceros legible. |
| Video | Alojado en Vimeo, sin sonido en reproducción automática, en bucle, con imagen de portada (poster) estática. |
| Accesibilidad | Cada imagen lleva texto alternativo descriptivo (`alt`). |

Leyenda de estado usada abajo:
- ✅ **Lista**: se puede usar tal cual (solo optimizar el peso).
- ⚠️ **Necesita tratamiento**: usable si se aplica lo indicado.
- ❌ **No usar**: la calidad no alcanza; reemplazar o descartar.

---

## 1. Castaño

**Rol:** Líder de Diseño, Castaño (Panadería Castaño, Chile).
**Qué demuestra:** diseño de envase de principio a fin (arte plano → producto real), sistema de packaging de línea y piezas de punto de venta en producción.
**Carpeta de origen:** `Escritorio/castaño/`

### Texto del proyecto
- **Título:** Castaño
- **Bajada:** Packaging, envases y punto de venta para una panadería con 90 años de historia.
- **Descripción:** Como Líder de Diseño de Castaño, estuve a cargo de la gráfica que acompaña a la marca en sus tiendas, en el supermercado y en redes sociales. El desafío era conservar la calidez de una panadería tradicional chilena y, al mismo tiempo, darle una imagen actual y consistente a toda su línea de productos.
- **Rol / año / alcance:** Líder de Diseño · 2021–2024 · Packaging, envases, punto de venta y contenido para redes.

### 1.1 Pieza principal: Vaso "La vida es más rica con Castaño"
Es la pieza estrella del proyecto. Se presenta como una secuencia de 3 imágenes grandes: **arte plano → render 3D → escena real.** Después, si se quiere, una grilla pequeña con las fotos originales 1.1b y 1.1c.

| # | Pieza | Archivo en esta carpeta | Resolución | Estado | Tratamiento |
|---|---|---|---|---|---|
| 1.1a | **Arte plano, presentación** (silueta recortada sobre fondo crema, con título) | `1-castano/vaso/1.1a-vaso-arte-plano-presentacion.jpg` | 2400×1600 | ✅ | **Paso 1 de la secuencia y portada del proyecto.** El PNG original `1.1a-vaso-arte-plano.png` queda solo como respaldo. |
| 1.1d | **Render 3D del vaso** (estudio, fondo crema) | `1-castano/vaso/1.1d-vaso-render-3d.jpg` | 1122×1402 | ✅ | Paso 2 de la secuencia. |
| 1.1e | **Vaso en escena real** (cafetería, medialuna y pan) | `1-castano/vaso/1.1e-vaso-escena-cafeteria.jpg` | 1122×1402 | ✅ | Paso 3 de la secuencia. 1.1d y 1.1e pueden ir lado a lado en escritorio. |
| 1.1b | Dos vasos con café (foto original) | `1-castano/vaso/1.1b-vasos-con-cafe.webp` | 1000×1000 | ⚠️ | Opcional, en grilla pequeña. |
| 1.1c | Vaso con sándwich y muffin (foto original) | `1-castano/vaso/1.1c-vaso-ambiente.jpg` | 600×510 | ⚠️ | Opcional, solo en tamaño pequeño. |

*Nota:* 1.1d y 1.1e son montajes generados a partir del arte real; revisé que el texto y el logo del vaso coinciden con el original.

**Texto de la pieza:**
> **Vaso para cafetería**
> Diseño del vaso para la cafetería de las tiendas Castaño. Una ilustración de línea fina con panes, cruasanes, muffins y granos de café rodea el mensaje «La vida es más rica con Castaño». El arte se trabajó sobre la plantilla curva del vaso para que el patrón quede continuo al armarlo.

### 1.2 Packaging de línea
Se muestra como una grilla de 3 o 4 columnas con fondo uniforme, para que se lea como un sistema.

| # | Pieza | Archivo | Resolución | Estado | Tratamiento |
|---|---|---|---|---|---|
| 1.2a | Galletas artesanales (Mantequilla / Limón) | `1.2a-galletas-artesanales.jpg` | 2400×2070 | ✅ | Mejor calidad del set. Franja del Ministerio de Salud ya recortada. |
| 1.2b | Queque Invierno (etiqueta estacional) | `Captura de pantalla 2026-11-13 a la(s) 12.25.09 a.m..png` | 814×918 | ⚠️ | Es una captura: recortar bordes. Si existe el render original, reemplazarla. Muy buena pieza: vale la pena conseguir el original. |
| 1.2c | Café Castaño (bolsa Blend Orgánico) | `D_NQ_NP_656698-…-castano-1-kg.webp` | 500×500 | ⚠️ | Resolución baja: solo en grilla pequeña. Ideal: conseguir el render o una foto propia. |
| 1.2d | Muffin Chocolate Negro (faja) | `15e2ef71-….avif` | 612×612 | ⚠️ | Solo en grilla. Convertir de AVIF a WebP/JPG. |
| 1.2e | Pan Hallulla | `1.2e-pan-hallulla.jpg` | 1001×1001 | ✅ | Tarjeta amarilla ya recortada; bolsa sola centrada sobre blanco. |
| 1.2f | Pan Hot Dog | `images.jpg` / `Captura … 5.42.59 p.m..png` | 192×192 / 490×486 | ❌ | Calidad insuficiente. No usar salvo que aparezca un original. |
| 1.2g | Brownie (3 unidades) | `images-3.jpg` | 300×300 | ❌ | Demasiado chica y con franja legal. No usar. |
| 1.2h | Pan Hallulla (duplicado) | `images-5.jpg` | 447×447 | ❌ | Duplicado de menor calidad que 1.2e. No usar. |

**Texto del bloque:**
> **Packaging de línea**
> Etiquetas y fajas para los productos envasados de la marca: galletas artesanales, queques de temporada, muffins, pan y café. Cada producto tiene su propio color o recurso gráfico, pero todos comparten la misma estructura, para que la línea se reconozca junta en la góndola.

### 1.3 Punto de venta: exhibidor "770 g"
Demuestra que el diseño llegó a la tienda. Se muestra como una franja horizontal de fotos.

| # | Pieza | Archivo | Resolución | Estado | Tratamiento |
|---|---|---|---|---|---|
| 1.3a | Exhibidor en 3 supermercados | `Captura de pantalla 2026-11-13 a la(s) 11.22.15 a.m..png` | 1074×498 | ⚠️ | Captura con 3 fotos juntas: separarlas o usarla como franja. Recortar bordes. |
| 1.3b | Exhibidor en 2 vistas | `Captura de pantalla 2026-11-13 a la(s) 11.21.50 a.m..png` | 1088×776 | ⚠️ | Usar una sola de las dos vistas, la más nítida, para no repetir. |

**Texto del bloque:**
> **Punto de venta**
> Exhibidor para el lanzamiento del Pan Blanco XL de 770 g, con un 35 % más de producto. La pieza se instaló en supermercados y lleva la promoción al tono cercano de la marca con el mensaje «Nuestro cariño es cada vez más grande».

### 1.4 Contenido animado para redes (opcional, vía Vimeo)

**Texto del bloque:**
> **Contenido para redes**
> Piezas animadas para el Instagram de Castaño: concursos, campañas de temporada y contenido del día a día.
| # | Pieza | Archivo | Formato | Estado | Tratamiento |
|---|---|---|---|---|---|
| 1.4a | "¿Trajiste almuerzo?" | `igexport-C4gMMPip5cN.mp4` | 1080×1920, 26 s | ✅ | Mejor calidad de los tres. Vertical: mostrar en un marco tipo teléfono o en una columna angosta. |
| 1.4b | Concurso empanadas (pasos) | `igexport-C4s9PK5ruz0.mp4` | 720×1280, 15 s | ⚠️ | Resolución media: solo en tamaño pequeño. |
| 1.4c | Concurso Navidad | `igexport-C0UyIAAv6K7.mp4` | 720×720, 43 s | ⚠️ | La base es metraje de comercial, no diseño propio: usar solo si se explica que el aporte fue el marco gráfico. Recortar la franja legal. |

### 1.5 Excluido del proyecto Castaño
- **Mailing "Pan recién horneado"** (`mailing-pan-calentito-14.jpg`): más genérico que el resto, no suma.
- **`castano-drive-referencia.png`**: es un rediseño de bolsas que **no es de Constanza**. No usar bajo ningún motivo.
- **`revision-castano.jpg`, `revision-carpeta-castano.html`, `etiquetas-hijas-del-caldero.html`**: archivos de trabajo interno, no son piezas.

---

## 2. Kingsbury — Calendario 2022

**Qué demuestra:** diseño editorial con sistema: una grilla que cambia de color según el producto, más ilustración de portada.
**Archivo de origen:** `Escritorio/castaño/calendario Kingsbury_TRZ.pdf` (18 páginas, **227 MB**: no subir el PDF a la web).

### Texto del proyecto
- **Título:** Kingsbury · Calendario 2022
- **Bajada:** Un calendario que presenta la línea de panes de molde mes a mes.
- **Descripción:** Calendario de 18 páginas para Kingsbury, marca de pan de molde de Castaño. Cada mes toma el color de uno de los productos y lo acompaña con una receta de sándwich y un código QR para verla completa. Abre con una ilustración de ciudad en tonos azules con toda la línea al frente, y usa el mes de enero para lanzar el nuevo pan Hi Low.
- **Rol / año / alcance:** Diseño editorial e ilustración · 2021–2022.

### Piezas seleccionadas
Exportar estas páginas del PDF como imágenes a **2400 px de ancho** (WebP + JPG):

| # | Página | Contenido | Estado | Tratamiento |
|---|---|---|---|---|
| 2.0 | Montaje | **Calendario triangular de escritorio**, anillado arriba, con la portada al frente, sobre un escritorio (`2-kingsbury/2.0-montaje-calendario-escritorio.jpg`, 1536×1024) | ✅ | **Imagen de portada del proyecto**: muestra el objeto real. Va antes de las páginas planas. |
| 2.1 | Pág. 1 | Portada: ilustración de ciudad en azules con la línea de panes | ✅ | A ancho completo, justo después del montaje. |
| 2.2 | Pág. 3 | Enero, verde Hi Low (lanzamiento de producto) | ✅ | Exportar en alta. |
| 2.3 | Pág. 8 | Junio, azul Pan Perfecto, con receta | ✅ | Exportar en alta. |
| 2.4 | Pág. 14 | Diciembre, café Wholegrain, con receta | ✅ | Exportar en alta. |
| 2.5 | Pág. 18 | Contraportada Hi Low | ⚠️ | Opcional, como cierre. |

Presentación sugerida: el montaje 2.0 primero, después la portada plana grande y luego los 3 meses en grilla o carrusel, para que se note el cambio de color por producto.

**Pies de imagen sugeridos:**
- Portada: «Portada ilustrada con la línea completa de productos».
- Enero: «Enero: lanzamiento del nuevo pan Hi Low».
- Junio: «Junio: Pan Perfecto, con receta y QR».
- Diciembre: «Diciembre: Integral Wholegrain, con receta y QR».
Los códigos QR ya no funcionan, pero se pueden dejar tal cual: son parte del diseño original.

---

## 3. Hijas del Caldero

**Rol:** diseño de identidad completa (logo, etiquetas, catálogo, gráficas y animación).
**Qué demuestra:** un sistema de marca coherente aplicado a más de 10 formatos distintos.
**Carpeta de origen:** disco externo `coni vida/HIJAS DEL CALDERO/`

### Texto del proyecto
- **Título:** Hijas del Caldero
- **Bajada:** Identidad de marca para una tienda de cosmética natural y productos rituales.
- **Descripción:** Hijas del Caldero vende cosmética artesanal, perfumes, sales y productos esotéricos. Diseñé su identidad completa: un caldero grabado en dorado sobre negro, con tipografía de carácter gótico y ornamentos de inspiración victoriana. A partir de ahí construí un sistema de etiquetas para más de diez formatos (sprays, cremas, jabones, shampoo, sales y polvos), además de catálogos, afiches, packs especiales y piezas animadas.
- **Rol / año / alcance:** Identidad de marca, packaging, editorial y animación · 2019–2023.

### 3.1 Logo

**Texto del bloque:**
> **Logo**
> Un caldero de estilo grabado, con letras góticas y detalles en dorado. Funciona en dorado sobre negro, en blanco, en negro y como sello circular.
| # | Pieza | Archivo | Resolución | Estado | Tratamiento |
|---|---|---|---|---|---|
| 3.1a | Logo dorado sobre negro | `IDENTIDAD DE MARCA HDC/LOGO HDC/logo hijas del caldero n c dor.png` | 2126×2254 | ✅ | Portada del proyecto, centrado sobre negro. |
| 3.1b | Logo circular | `IDENTIDAD DE MARCA HDC/logoo hdc circulo.png` | 3817×3817 | ✅ | Versión secundaria o sello. |
| 3.1c | Versiones blanco / negro | `IDENTIDAD DE MARCA HDC/LOGO HDC/logo blanco.png`, `logo negro.png` | 2198×2326 | ✅ | Mostrar juntas como "versiones de logo". |

### 3.2 Sistema de etiquetas (pieza fuerte)
Todas las etiquetas están **exportadas en alta (~2000 px en el lado largo)** directamente desde los editables `.ai` individuales (`IDENTIDAD DE MARCA HDC/etiquetas/ETIQUETAS IA POR SEPARADO/`). Son artes planos sobre fondo blanco. Los montajes en envase están en la sección 3.5.

| # | Pieza | Archivo en esta carpeta | Resolución | Estado |
|---|---|---|---|---|
| 3.2a | Spray Mágico "Atrae Fortuna", gris y dorado | `3.2a-spray-atrae-fortuna.jpg` | 1300×2002 | ✅ **La mejor etiqueta: va primero.** |
| 3.2b | Spray Mágico "Conexión", variante negra | `3.2b-spray-conexion.jpg` | 1300×2002 | ✅ Mostrar junto a 3.2a para evidenciar el sistema. |
| 3.2c | Acondicionadores "Magia Capilar" (5 variedades: Caléndula Melisa, Lavanda Mágica, Lemongrass Limón, Manzanilla Naranja, Romero Ortiga), con ilustración botánica y fases lunares | `3.2c-acondicionador-*.jpg` (5 archivos) | 1150×1955 | ✅ Mostrar las 5 en fila: es la prueba más clara del sistema. |
| 3.2d | Crema de Lavanda, hexagonal | `3.2d-crema-lavanda.jpg` | 1950×2001 | ✅ |
| 3.2e | Jabón Rosa · Jazmín · Violeta | `3.2e-jabon-rosa-jazmin-violeta.jpg` | 2000×1524 | ✅ |

*Nota:* las etiquetas "Rayo Verde" y "Chocolate Menta" no tienen editable disponible; se reemplazaron por "Conexión" y la línea de acondicionadores, del mismo sistema y en alta resolución.

Presentación sugerida: grilla sobre fondo negro, con las etiquetas a escala relativa real (el formato de cada una es parte del valor). Los 5 acondicionadores, en una fila propia.

**Texto del bloque:**
> **Sistema de etiquetas**
> Una misma base (fondo negro, marco ornamental y nombre del producto como protagonista) adaptada a cada formato: rectángulos para sprays y shampoo, hexágonos para cremas y tiras para sales y polvos. El color del marco cambia según la intención del producto, y detalles como las fases lunares refuerzan el universo de la marca.

### 3.3 Aplicaciones de marca
| # | Pieza | Archivo | Resolución | Estado | Tratamiento |
|---|---|---|---|---|---|
| 3.3a | Afiche ritual "Samhain & Beltane" | `hdc afiche/ritual-2023.png` | 2448×3168 | ✅ | Pieza vertical destacada. |
| 3.3b | Portada del catálogo (mármol negro y dorado) | `CATALOGO/catalogo cosmetica.pdf` (pág. 1) | PDF, 13 MB | ⚠️ | Exportar la portada y 1 o 2 páginas interiores a 2400 px. No subir el PDF. |
| 3.3c | Pack Ritual Lunar | `PACK LUNAR/PACK-LUNAR1.jpg`, `PACK-LUNAR2.jpg` | 1080×1080 | ✅ | Grilla. |
| 3.3d | Tarjeta de presentación | `IDENTIDAD DE MARCA HDC/tarjetas/constanza flores.jpg` | 946×591 | ⚠️ | Solo en tamaño pequeño, o mejor en mockup. |

**Texto del bloque:**
> **Aplicaciones**
> La identidad se extiende a catálogos de productos, afiches para rituales y eventos, packs especiales como el Pack Ritual Lunar y tarjetas de presentación.

### 3.4 Animación (vía Vimeo)

**Texto del bloque:**
> **Animación**
> Piezas animadas para redes y lanzamientos, que llevan al movimiento la estética dorada y ornamental de la marca.
| # | Pieza | Archivo | Formato | Estado | Tratamiento |
|---|---|---|---|---|---|
| 3.4a | Video promocional | `VIDEOS/videos promo/hdc promo.mp4` | 1920×1510, 15 s, 20 MB | ✅ | **Video principal del proyecto.** Subir a Vimeo e incrustarlo en bucle, sin sonido. |
| 3.4b | Animación zodiaco | `VIDEOS/videos promo/hdc zodiaco.mp4` | 1000×834, 10 s | ⚠️ | Secundario, en tamaño medio. (El `.mov` pesa 533 MB: no usarlo.) |

### 3.5 Montajes de producto (carpeta `3-hijas-del-caldero/montajes/`)
Fotografías de producto generadas a partir de las etiquetas reales (PNG originales de `IDENTIDAD DE MARCA HDC/ETIQUETAS TARJETA PNG/`). Revisé el texto de las etiquetas en cada imagen y coincide con el original. Todas comparten el fondo de lino crudo y la misma luz, así que funcionan como serie. Formato 4:5 vertical, 1122×1402.

| # | Montaje | Archivo | Estado | Tratamiento |
|---|---|---|---|---|
| 3.5a | Spray Atrae Fortuna | `3.5a-montaje-spray-atrae-fortuna.jpg` | ✅ | **Imagen destacada del bloque** (o portada alternativa del proyecto). |
| 3.5b | Spray Amor Propio | `3.5b-montaje-spray-amor-propio.jpg` | ✅ | Junto a 3.5a. |
| 3.5c | Shampoo + Acondicionador Lavanda Mágica | `3.5c-montaje-shampoo-acondicionador-lavanda.jpg` | ✅ | |
| 3.5d | Jabón Rosa · Jazmín · Violeta | `3.5d-montaje-jabon-rosa-jazmin-violeta.jpg` | ✅ | |
| 3.5e | Aceite Abramelin | `3.5e-montaje-aceite-abramelin.jpg` | ✅ | |
| 3.5f | Sal de las Brujas | `3.5f-montaje-sal-de-las-brujas.jpg` | ✅ | |

Presentación sugerida: grilla de 3 columnas en escritorio (2 filas) y de 1 columna en móvil, ubicada justo después del bloque de etiquetas planas. Así se lee "diseño → producto real".

**Texto del bloque:**
> **En el producto**
> Las etiquetas aplicadas a sus envases: sprays, shampoo y acondicionador, jabones, aceites y sales, todos dentro de una misma atmósfera natural y ritual.

### 3.6 Piezas para redes (opcional, carpeta `3-hijas-del-caldero/redes/`)
Flyers cuadrados agregados por Constanza: `3.6a` Martes de Brujas, `3.6b` Lectura de Tarot Online, `3.6c` Horóscopo & Tarot, `3.6d` Horóscopo Mágico. Redimensionados a 2000 px. Van en una grilla secundaria al final del proyecto, en tamaño pequeño.

**Texto del bloque:**
> **Redes y eventos**
> Piezas para Instagram, radio y encuentros en línea, que mantienen la identidad incluso en el contenido del día a día.

### 3.7 Excluido de Hijas del Caldero
- **`FOTOS PRODUCTOS/`**: fotos oscuras, de celular y con filtro. Bajan el nivel del proyecto. No usar.
- **Flyers de horóscopo, tarot, radio y eventos**: piezas de contenido rápido, no de identidad.

---

## 4. Pendientes antes de publicar

- [x] Redactar los textos de cada proyecto y bloque (borrador listo).
- [x] Datos de años y uso del vaso confirmados.
- [x] Castaño: no hay originales en mayor resolución del vaso, el queque ni el café. Se usan los archivos disponibles, en tamaño de grilla.
- [x] Castaño: franja del Ministerio de Salud (1.2a) y tarjeta amarilla (1.2e) recortadas.
- [x] Kingsbury: páginas 1, 3, 8, 14 y 18 exportadas a 2400 px (carpeta `2-kingsbury/`).
- [x] Hijas del Caldero: etiquetas exportadas en alta desde los `.ai` individuales.
- [x] Hijas del Caldero: portada y página interior del catálogo exportadas (`3.3b-…`).
- [x] Hijas del Caldero: 6 montajes de producto (`3-hijas-del-caldero/montajes/`).
- [x] Castaño: arte plano del vaso con presentación profesional, render 3D y escena real (1.1a, 1.1d, 1.1e).
- [x] Kingsbury: montaje del calendario triangular sobre escritorio (2.0).
- [ ] (Lo ve Constanza) Subir a Vimeo: `hdc promo.mp4` (y opcionalmente `igexport-C4gMMPip5cN.mp4`).
- [ ] Optimizar todas las imágenes a WebP con JPG de respaldo y escribir el `alt` de cada una.
