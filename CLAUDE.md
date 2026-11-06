# Instrucciones para Claude Code — Portafolio de Constanza Flores

Eres el agente de implementación de una web personal original para una diseñadora gráfica senior e ingeniera en informática. Hablar con la usuaria en español de Chile. **Prioridad: reproducir decisiones aprobadas, no reinventar diseño.**

## Fuente de verdad
- **`docs/00_ESPECIFICACION_COMPLETA.md` es la especificación completa y fuente de verdad principal.** Antes de cambiar algo aprobado, preguntar.
- Leer `docs/01_BRIEF_Y_DECISIONES.md` hasta `docs/05_RESPONSIVE_ACCESIBILIDAD_QA.md` antes de escribir componentes.
- Usar `design/tokens.css`; mantener DM Sans + Sacramento, colores aprobados.
- Datos de prueba desde `data/demo-content.json`; no presentarlos como experiencia real de la usuaria.
- Si documentación y demo anterior difieren, **gana la documentación**.
- No incluir Natural Pet: la usuaria corrigió explícitamente que NO existe en su historial.
- Diferenciar Proust House (agencia) de sus clientes y Drei Ventures (colaboración freelance) de Nuva Oxi (cliente/proyecto de Drei).

## Stack propuesto
- React + Vite, JavaScript o TypeScript (preferencia TypeScript si no obstaculiza avance).
- CSS personalizado y tokens, sin plantilla o librería visual de plantilla.
- Animaciones CSS/GSAP donde aporten; instalar dependencias solo cuando se usen. No hacer toda la experiencia dependiente de animaciones para navegar.
- Datos de proyectos desacoplados de la UI para reemplazarlos sin tocar componentes.
- Sin backend ni formulario de contacto; enlaces a correo, LinkedIn, GitHub y descarga de CV.
- Compatible con teclado, móvil y `prefers-reduced-motion`.

## Componentes sugeridos (ajustables)
`AppShell`, `TopNav`, `MobileNav`, `LandingHero`, `OpeningTransition`, `WorldSelector`, `UniverseScene`, `OrbitalProject`, `BlackHolePortal`, `ProjectCaseStudy`, `BrandGrid`, `PersonalCollage`, `InterestModal`, `ContactScreen`, `ScrollChapterTransition`.

## Flujo de trabajo
1. Confirmar versiones con `node -v`, `npm -v`; revisar repositorio existente antes de modificarlo.
2. Crear base React + Vite y estructura `src/components`, `src/pages`, `src/styles`, `src/data`, `public/assets`.
3. Implementar primero rutas/estado y navegación con **fallback accesible**; probar clics reales y teclado.
4. Aplicar diseño y efectos de entrada de forma progresiva, sin bloquear el contenido si falla una animación.
5. Crear universos y páginas con textos/imágenes DEMO.
6. Implementar galería de marcas, portal personal, popup y contacto.
7. Verificar escritorio y móvil, accesibilidad, rendimiento y navegación; comunicar resultados y limitaciones.
8. Entregar archivos listos para subir a GitHub/Vercel, sin desplegar ni comprar dominio sin solicitud expresa.

## Evitar
- No importar ni dejar marca visual de plantillas prediseñadas.
- No atribuir a Coni imágenes demo ni datos de impacto inventados.
- No llamar “marca propia” a una agencia para la que trabajó ni mezclar clientes con empleadores.
- No introducir sombras luminosas, hojas, línea decorativa superior, neones, nebulosas intensas, estrellas brillantes o exceso de partículas en la portada aprobada.
- No obligar a hover para descubrir los nombres o acceder a proyectos.
- No crear una sección académica adicional: la formación se muestra debajo del título de cada universo, además de la portada.
- No reemplazar la transición acordada por una navegación genérica de tarjetas.
- No llenar proyectos con datos falsos sin rotular DEMO.

## Entregables y comunicación
- Mostrar cambios paso a paso y pedir revisión visual cuando corresponda; nunca suponer que el usuario aprobó algo no confirmado.
- Documentar decisiones nuevas en archivo separado y conservar la especificación original.
- Priorizar una experiencia que **sí se pueda abrir y recorrer** en Chrome real, no solo en la vista previa de HTML dentro del chat.
