# Portafolio Constanza Flores

React + Vite + TypeScript, CSS propio y tokens de `design/tokens.css`. Sin plantillas.

## Cómo verlo en tu navegador

Necesitas [Node.js](https://nodejs.org) 20 o superior.

```bash
npm install
npm run dev
```

Se abre solo en `http://localhost:5173`. Para probarlo en el celular (misma red wifi), usa la dirección «Network» que muestra la terminal.

Otros comandos: `npm run build` (revisa tipos y genera `dist/`), `npm run preview` (sirve ese build).

## Estado: etapa 2 (sitio navegable completo, con contenido DEMO)

- **Portada** aprobada, apertura partida en dos y **selector** Diseño / Informática (etapa 1).
- **Universos**: proyectos como puntos orbitales con nombre visible, agujero negro «Un poco más de mí» al centro.
- **Casos de estudio** con estrella de regreso y Anterior / Siguiente.
- **Quién soy**: collage de intereses con ventanas de foto + texto.
- **Marcas** y **Contacto** como capítulos al hacer scroll bajo el universo.
- Enlaces directos: `#/` · `#/mundos` · `#/diseno` · `#/informatica` · `#/diseno/<proyecto>` · `#/quien-soy` · `#/marcas` · `#/contacto`.
- Detalle de decisiones nuevas en `docs/07_DECISIONES_NUEVAS.md`.

## Cambiar el contenido

Todo el contenido editable está en `data/demo-content.json`: proyectos (con su posición en el universo), intereses, marcas y textos de contacto. Las imágenes van en `public/assets/`.

## Estructura

```
src/components   TopNav, MobileNav, OpeningTransition, LandingHero, WorldSelector, WorldPanel,
                 DesignStrokes, CodeFloaters, WorldSite, UniverseScene, OrbitalProject,
                 BlackHolePortal, ProjectCaseStudy, PersonalCollage, InterestModal,
                 InterestIcon, BrandGrid, ContactScreen, StarField
src/data         site.ts (identidad, mundos, menú) y content.ts (lee data/demo-content.json)
src/styles       base, nav, cover, chooser, universe, chapters, case, about
public/assets    imágenes DEMO (retrato de referencia, proyectos, intereses) y CV
design/          tokens.css aprobado (no se modifica)
docs/            especificación original, 07_DECISIONES_NUEVAS.md y GIT_PROTOCOLO.md
legacy-prototype prototipo HTML anterior (solo referencia)
```

Todas las imágenes y textos de proyectos son de muestra; el retrato es una **foto de referencia, por reemplazar**.

## Trabajo con Git

Ramas, formato de commits y versiones: ver [`docs/GIT_PROTOCOLO.md`](docs/GIT_PROTOCOLO.md).
