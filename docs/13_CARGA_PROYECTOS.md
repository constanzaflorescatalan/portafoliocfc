# 13 — Carga de los proyectos de Diseño

Implementación de `12_ESPECIFICACION_PROYECTOS.md` (documento de Coni, versión con archivos; se conserva sin cambios). Rama `contenido/proyectos-diseno`.

## Qué está hecho

- Los 4 proyectos DEMO de Diseño se reemplazaron por **Castaño**, **Kingsbury · Calendario 2022** e **Hijas del Caldero**, en ese orden, con los textos aprobados del documento, sin reescribir.
- **46 imágenes** cargadas en `public/assets/proyectos/<proyecto>/`, con el nombre del ID de su ficha (1.1a, 2.3, 3.5c…).
  - WebP (calidad 82; 58 en los logos blanco/negro por peso) + respaldo JPG (PNG si tiene transparencia), máximo 2400 px en el lado largo.
  - Todas dentro del peso del documento (≤ 400 KB en grilla, ≤ 800 KB en portada). Total WebP: ~6,9 MB.
  - Cada imagen tiene su texto alternativo (`alt`) descriptivo.
- Estructura de cada caso: título, bajada, Rol / Años / Alcance, descripción, portada y bloques.
  - **Castaño:** portada = arte plano (1.1a) → render 3D y escena (1.1d, 1.1e) → fotos originales chicas (1.1b, 1.1c) → packaging en grilla → punto de venta en franja.
  - **Kingsbury:** portada = montaje del calendario (2.0) → portada plana (2.1) → enero, junio y diciembre en grilla → contraportada (2.5) como cierre.
  - **Hijas del Caldero:** portada = logo dorado → versiones de logo → etiquetas planas + fila de 5 acondicionadores → **montajes de producto justo después (3.5)** → aplicaciones → redes y eventos.
- Fondo uniforme por proyecto (crema, azul claro, negro). Excepciones por pieza: logo negro sobre crema claro y etiquetas sobre blanco, para que se vean.
- **Videos:** no se subieron (irán a Vimeo). Los bloques «Contenido para redes» (Castaño) y «Animación» (Hijas del Caldero) están preparados en el JSON y **no aparecen** hasta tener el enlace de Vimeo. La política de seguridad ya permite `player.vimeo.com`.
- Informática sigue con proyectos DEMO.

## Decisiones tomadas al cargar (revisar con Coni)

- **1.3b exhibidor:** venía con dos vistas juntas; se usa solo la más nítida (la derecha), como pide el documento.
- **3.3a afiche:** se taparon el teléfono y el correo de la escuela (datos de contacto de terceros, regla de la sección 0). Se mantiene @hijasdelcaldero.
- **3.3d tarjeta:** se tapó el teléfono personal de Coni (igual que en el CV público).
- **3.6b flyer «Lectura de Tarot Online»:** no se incluyó porque muestra el nombre de otra persona (regla de datos personales).
- **3.5 montajes y 1.1d / 1.1e:** el documento indica que son montajes generados a partir del arte real. Los textos alternativos dicen «Montaje de producto» / «Render 3D» para no presentarlos como fotos reales.
- La sección 3.7 excluye flyers de horóscopo/tarot, pero la 3.6 dice que Coni los agregó: se respetó la 3.6 (grilla chica al final).

## Cómo cargar más piezas

1. Optimizar (reglas de la sección 0): WebP ~82 + JPG, ≤ 2400 px, sin franjas legales, QR vigentes ni datos de terceros.
2. Guardar en `public/assets/proyectos/<id-del-proyecto>/`.
3. En `data/demo-content.json`, en la pieza: `src` (WebP), `fallback` (JPG/PNG), `alt`, `ratio` y `caption`.
4. Para un video: subirlo a Vimeo y poner el enlace en `vimeo` de la pieza correspondiente (ya existen con `pending`).

## Pendiente

- Coni: subir a Vimeo `hdc promo.mp4` (y opcionalmente `igexport-C4gMMPip5cN.mp4` e `igexport-C4s9PK5ruz0.mp4`) y pasar los enlaces.
