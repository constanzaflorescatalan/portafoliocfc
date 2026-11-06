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

## Estado: etapa 1 (portada + transición)

- Portada aprobada: retrato en círculo sobre tarjeta verde pino, una órbita rosa fija y una estrella de cuatro puntas que la recorre (14 s, provisional, sin brillo).
- Apertura: el fondo negro se parte en dos; el retrato y la órbita salen con la mitad izquierda, la derecha sale vacía y la tarjeta baja.
- Selector: DISEÑO e INFORMÁTICA; toda cada mitad es clicable. Hover con trazos (Diseño) y código/bloques de interfaz (Informática). La mitad elegida se expande.
- Universo: vista provisional con título y formación (la etapa 2 la reemplaza).
- Enlaces directos: `#/` portada · `#/mundos` selector · `#/diseno` · `#/informatica`. El botón «atrás» del navegador funciona.
- Menú: Diseño e Informática ya funcionan; Marcas, Quién soy y Contacto aparecen atenuados hasta sus etapas.

## Estructura

```
src/components   TopNav, MobileNav, OpeningTransition, LandingHero, WorldSelector, WorldPanel,
                 DesignStrokes, CodeFloaters, UniverseScene, StarField
src/data         textos y credenciales (site.ts)
src/styles       base, nav, cover, chooser, universe
public/assets    imágenes DEMO (retrato de referencia, proyectos, intereses) y CV
design/          tokens.css aprobado (no se modifica)
docs/            especificación original, 07_DECISIONES_NUEVAS.md y GIT_PROTOCOLO.md
legacy-prototype prototipo HTML anterior (solo referencia)
```

Todas las imágenes y textos de proyectos son de muestra; el retrato es una **foto de referencia, por reemplazar**.

## Trabajo con Git

Ramas, formato de commits y versiones: ver [`docs/GIT_PROTOCOLO.md`](docs/GIT_PROTOCOLO.md).
