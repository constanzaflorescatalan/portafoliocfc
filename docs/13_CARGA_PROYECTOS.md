# 13 — Carga de los proyectos de Diseño

Implementación de `12_ESPECIFICACION_PROYECTOS.md` (documento de Coni, se conserva sin cambios). Rama `contenido/proyectos-diseno`.

## Qué está hecho

- Los 4 proyectos DEMO de Diseño se reemplazaron por **Castaño**, **Kingsbury · Calendario 2022** e **Hijas del Caldero**, en ese orden, con los textos del documento.
- Cada caso tiene: título, bajada, Rol / Años / Alcance, descripción, portada y bloques con sus piezas, en el orden y con los pies de imagen del documento.
- Solo se incluyeron las piezas marcadas ✅ y ⚠️. Las ❌ y las excluidas no están.
- Cada pieza tiene un espacio reservado con su proporción y el fondo uniforme del proyecto (crema `#F6F0E6`, azul claro, negro `#111`), con la marca «Imagen pendiente» o «Video pendiente» hasta que se cargue.
- Videos preparados para Vimeo: en bucle y sin sonido. Se permitió `player.vimeo.com` en la política de seguridad (`public/_headers`).
- Informática sigue con proyectos DEMO.

## Cómo cargar una imagen

1. Optimizar según las reglas del documento (sección 0): WebP calidad ~82, ≥1600 px de lado largo para portadas, ≥1000 px para grilla, sin franjas legales, QR ni datos de terceros.
2. Guardar en `public/assets/proyectos/<id-del-proyecto>/`, por ejemplo `public/assets/proyectos/castano/vaso-arte-plano.webp`.
3. En `data/demo-content.json`, en la pieza correspondiente (se reconoce por `pending`, el nombre del archivo de origen), escribir la ruta en `src`: `"src": "assets/proyectos/castano/vaso-arte-plano.webp"`. Ajustar `ratio` a la proporción real si cambia.
4. Para un video: subirlo a Vimeo y escribir el enlace en `vimeo`.

## Datos por confirmar antes de publicar

- Castaño: «90 años de historia» y que el vaso es para la cafetería de las tiendas.
- Años: Castaño 2021–2024 (coincide con el CV), Kingsbury 2021–2022, Hijas del Caldero 2019–2023.

## Pendientes de material (del documento, sección 4)

- Castaño: originales en alta del vaso (1.1b–1.1c), Queque Invierno (1.2b) y Café (1.2c); recortar franja del Ministerio de Salud (1.2a) y tarjeta amarilla (1.2e).
- Kingsbury: exportar páginas 1, 3, 8 y 14 del PDF a 2400 px y tapar los QR.
- Hijas del Caldero: reexportar etiquetas desde los `.ai` a ≥1600 px (o mockups) y exportar portada del catálogo.
- Subir a Vimeo `hdc promo.mp4` y `igexport-C4gMMPip5cN.mp4`.

Las imágenes no llegaron a esta sesión: el disco «coni vida» y el Escritorio están en la lista de Remote Control, pero el computador no los ofrece a sesiones en la nube. Se pueden subir como zip.
