# Portafolio Constanza Flores

Portafolio personal de **Constanza Flores**, diseñadora gráfica senior e ingeniera en informática.
Hecho desde cero con **React + Vite + TypeScript** y CSS propio, sin plantillas.

## Cómo verlo en tu computador

Necesitas [Node.js](https://nodejs.org) 20 o superior (la versión está en `.nvmrc`).

```bash
npm install
npm run dev
```

Se abre en `http://localhost:5173`. Para probarlo en el celular (misma red wifi), usa la dirección «Network» que muestra la terminal.

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga automática |
| `npm run build` | Revisa tipos y genera el sitio final en `dist/` |
| `npm run preview` | Sirve la versión de `dist/` para revisarla |
| `npm run typecheck` | Solo revisa tipos de TypeScript |

## Recorrido del sitio

1. **Portada**: foto en círculo con órbita y luna, tarjeta azul oscuro, cielo con estrellas en movimiento. La flecha abre el broche.
2. **Apertura**: el fondo se parte en dos; la foto se va con la mitad izquierda.
3. **Selector**: DISEÑO / INFORMÁTICA. Trazos de color o código al pasar el cursor; «Explorar» aparece en la mitad activa.
4. **Universos**: proyectos como puntos orbitales y agujero negro «CF» que lleva a Quién soy.
5. **Casos de estudio**: estrella para volver y Anterior / Siguiente.
6. **Marcas**: grilla de marcas; cada una abre una ventana con período, rol y qué hizo Coni.
7. **Contacto**: «Tu mensaje será nuestro próximo gran proyecto.», botón Mail que copia el correo, LinkedIn, GitHub, Vimeo y CV.
8. **Quién soy**: íconos de intereses orbitando alrededor del título; cada uno abre una ventana.

Enlaces directos: `#/` · `#/mundos` · `#/diseno` · `#/informatica` · `#/diseno/<id-proyecto>` · `#/marcas` · `#/contacto` · `#/quien-soy`. El botón «atrás» del navegador funciona.

## Cambiar el contenido (sin tocar código)

Todo el contenido está en **`data/demo-content.json`**:

| Sección del JSON | Qué controla |
| --- | --- |
| `identity` | Correo, LinkedIn, GitHub profesional y académico, Vimeo |
| `worlds[].projects` | Proyectos de Diseño e Informática (título, textos, imágenes, `position` en el universo) |
| `experiences` | Marcas: organización, rol, período, resumen y marcas asociadas (con `logo`, `logoBg` y `logoMode`) |
| `otherBrands` | Marcas que por ahora solo tienen nombre y logo (sin ventana) |
| `personalInterests` | Intereses de Quién soy (nombre, texto, foto) |
| `contact` | Frase de contacto |

Las imágenes y el CV van en **`public/assets/`** y se nombran en el JSON como `assets/archivo.jpg`.
Los textos e imágenes marcados con `isDemo: true` son de ejemplo y muestran la etiqueta DEMO.

## Estructura del proyecto

```
portafoliocfc/
├── index.html              página base (fuentes, título, metadatos)
├── data/
│   └── demo-content.json   contenido editable (proyectos, marcas, intereses, contacto)
├── design/
│   └── tokens.css          tokens de diseño aprobados originales (no se modifican)
├── public/
│   └── assets/             imágenes, retrato, CV y logos/ de marcas (se copian tal cual al sitio)
├── src/
│   ├── main.tsx            punto de entrada: carga estilos y monta la app
│   ├── App.tsx             estados, rutas (#/...) y navegación entre pantallas
│   ├── types.ts            tipos compartidos
│   ├── components/         un componente por pieza de la interfaz (ver abajo)
│   ├── data/               site.ts (identidad, mundos, menú) · content.ts (lee el JSON)
│   ├── hooks/              useReducedMotion
│   ├── lib/                asset (rutas a public/) · motion (duraciones de los tokens)
│   └── styles/             un archivo CSS por sección
├── docs/                   especificación y decisiones (ver abajo)
├── references/             referencias visuales aprobadas y CV original
└── legacy-prototype/       prototipo HTML anterior (solo referencia, no se publica)
```

### Componentes (`src/components/`)

| Pantalla | Componentes |
| --- | --- |
| Menú | `TopNav`, `MobileNav` |
| Portada y apertura | `LandingHero`, `OpeningTransition`, `CoverSky` |
| Selector | `WorldSelector`, `WorldPanel`, `DesignStrokes`, `CodeFloaters` |
| Universo + capítulos | `WorldSite`, `UniverseScene`, `OrbitalProject`, `BlackHolePortal`, `StarField` |
| Casos | `ProjectCaseStudy` |
| Marcas | `BrandGrid`, `BrandModal` |
| Contacto | `ContactScreen` |
| Quién soy | `PersonalCollage`, `InterestIcon`, `InterestModal` |

### Estilos (`src/styles/`)

| Archivo | Sección |
| --- | --- |
| `base.css` | Reset, tipografía (Urbanist), variables extra, utilidades |
| `nav.css` | Menú de escritorio y móvil |
| `cover.css` | Portada, cielo, órbita, tarjeta y apertura |
| `chooser.css` | Selector Diseño / Informática |
| `universe.css` | Universos, puntos orbitales, agujero negro |
| `chapters.css` | Marcas y Contacto |
| `case.css` | Casos de estudio |
| `about.css` | Quién soy y su ventana |

## Documentación (`docs/`)

| Archivo | Contenido |
| --- | --- |
| `00_ESPECIFICACION_COMPLETA.md` | Especificación completa (fuente de verdad) |
| `01`–`06` | Brief, flujos, animaciones, contenido, responsive y estado original |
| `07_DECISIONES_NUEVAS.md` | Todo lo cambiado durante la implementación y lo pendiente |
| `08_SEGURIDAD.md` | Investigación de seguridad y protección de datos, con plan por prioridad |
| `09_REVISION_Y_PROXIMOS_PASOS.md` | Revisión completa, crítica, referencias, lo que falta y pasos hasta publicar |
| `10_ANALISIS_TRANSICIONES.md` | Análisis crítico de transiciones, efectos y rendimiento, con recomendaciones |
| `11_EVALUACION_UX.md` | Evaluación UX/UI y front-end completa, con problemas por prioridad |
| `GIT_PROTOCOLO.md` | Ramas, formato de commits y versiones |

## Pendiente

Lista completa de lo que falta y pasos hasta publicar en `docs/09_REVISION_Y_PROXIMOS_PASOS.md`. Seguridad en `docs/08_SEGURIDAD.md`.
