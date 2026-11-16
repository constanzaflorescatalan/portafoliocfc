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

## Informática: Grado Cerrado (agregado el 13 de noviembre)

- Primer proyecto real de Informática. Los 3 DEMO de Informática se mantienen por ahora (no se borra nada sin pedirlo).
- 11 imágenes en `public/assets/proyectos/grado-cerrado/` (WebP + PNG/JPG, ~0,6 MB en WebP): portada, 6 pantallas, logotipo, isotipo, arquitectura en Azure y modelo de datos.
- **No llegó documento con textos.** Los textos se escribieron solo con lo que muestran las imágenes (bajada de la portada, funciones visibles en las pantallas, servicios del diagrama y tablas del modelo). Fondo del proyecto: amarillo de la marca `#F5D96C`.
- **Confirmado por Coni:** proyecto de título en equipo (Capstone, Duoc UC), 2025; ella hizo principalmente el frontend y apoyó en backend.
- **Repositorio:** está en la cuenta de la compañera (github.com/AstGon/Grado_Cerrado, carpetas Fase1–Fase3). Falta que Coni confirme si se enlaza.

## Videos de Vimeo (agregados el 16 de noviembre)

Se revisaron los 60 videos públicos de vimeo.com/conoflor y se usaron los que calzan con lo publicado:

- **Castaño · Contenido para redes:** tutorial de pedidos (716184922), compra online y retiro (716185024), Café Castaño (716184408). Reemplazan a los mp4 de Instagram, que no estaban en Vimeo.
- **Kingsbury · Animaciones para redes (bloque nuevo):** Pan Perfecto (716186262), Kingsbury (716186176), Wholegrain (716184993), 50/50 (716186218).
- **Hijas del Caldero · Animación:** logo animado (357417276), Ostara (363591215), Luna cuervo (363591260). `hdc promo.mp4` sigue pendiente (no está en Vimeo).
- **Marcas (ventana con video):** Castaño, Kingsbury, Patagonia Donuts, Universidad Central, ISA InterChile, Municipalidad de La Granja (vía Brecha Digital, según la descripción del video). Se quitó la imagen DEMO de Proust House.

Los videos muestran la portada de Vimeo con botón de reproducir; el reproductor se carga solo al tocarlo (rendimiento). Portadas en `public/assets/proyectos/<proyecto>/video-<id>` y `public/assets/marcas-videos/`.

## Informática completa (16 de noviembre, decisión delegada por Coni: «dale con lo que creas mejor»)

- **R·MEDY** (nuevo): capturas del sitio publicado rmedymd.com (inicio, buscador guiado, grilla de servicios, cuatro pasos, formulario; escritorio y celular) y del prototipo de app encontrado en su Drive (carpeta ROBERT). Texto basado en su CV. Enlace «Ver sitio publicado». **No se usaron** las secciones con fotos/nombres de médicos ni reseñas de pacientes (datos de terceros), ni la boleta o cotización del Drive. *Por confirmar con Coni:* qué secciones del sitio publicado son diseño suyo (la implementación figura de Forward Marketing).
- **Grupo Cero** (nuevo, repo Confloresc/Prueba-1): galería de arte de artistas locales, capturas tomadas localmente (Bootstrap servido desde npm). Proyecto en equipo con Astrid, 2023 (según fechas del repositorio). Enlace «Ver repositorio».
- **No incluidos:** App de asistencia QR (AstGon/myApp-ApiLogin-) y Estacionamiento (AstGon/Parking): visualmente muy básicos frente al resto (pantallas blancas, imágenes rotas) y la app muestra nombres reales de compañeros. Se pueden mencionar más adelante como enlaces a repositorio.
- **Se quitaron los 3 proyectos DEMO** de Informática: quedan Grado Cerrado, R·MEDY y Grupo Cero.
- Nuevo campo `links` en los proyectos (botones a sitio o repositorio).

## Vancouver Laser & Skin Care Centre (16 de noviembre)

Caso de estudio UX/UI armado con el material del Drive de Coni (carpeta ROBERT › VANCOUVER, mismo grupo de clínicas que R·MEDY, misma dirección en 750 West Broadway):
- Diagnóstico y textos tomados de sus documentos «Revisión inicial y levantamiento de secciones», «Estilo Visual 1» y «Estilo Visual 2».
- Imágenes: mapa del sitio, 4 wireframes (PDF exportado), estilo 1 y 2 (inicio y tratamientos), diseño final (inicio, destacados y Explore Treatments).
- Se recortaron las secciones de reseñas con nombres de pacientes. No se usaron cotizaciones.
- Año 2025 (fechas de los archivos). *Por confirmar con Coni:* si va como proyecto propio o dentro de R·MEDY, y si el rediseño está publicado (vancouverlaser.com) para enlazarlo.
