# Portafolio Constanza Flores — Entrega para Claude Code

**Objetivo:** convertir el concepto aprobado en un sitio real, original, responsive y accesible; usar contenido e imágenes de demostración hasta que Coni apruebe la curaduría. **No** usar plantillas comerciales ni inventar trabajos, resultados o credenciales.

## Orden de lectura obligatorio
1. `CLAUDE.md` — instrucciones operativas para Claude Code.
2. `docs/01_BRIEF_Y_DECISIONES.md` — decisiones de UX/UI y diseño aprobadas.
3. `docs/02_FLUJOS_Y_PANTALLAS.md` — arquitectura y navegación.
4. `docs/03_ANIMACIONES_E_INTERACCIONES.md` — especificaciones de movimiento.
5. `docs/04_CONTENIDO_Y_CURADURIA.md` — contenido, relaciones laborales y reglas de atribución.
6. `docs/05_RESPONSIVE_ACCESIBILIDAD_QA.md` — requisitos de calidad y criterios de aceptación.
7. `design/tokens.css` y `data/*.json` — tokens y datos temporales.

## Referencias incluidas
- `references/portada_aprobada.png`: concepto de portada con una órbita rosada (referencia más cercana a la selección final).
- `references/vistas_version_0_1.jpg`: composición de las pantallas de la demo previa.
- `references/universo_version_0_1.png`: universo en el prototipo anterior.
- `references/cv_usuario.pdf`: CV aportado por la usuaria (contexto de experiencias, no contenido para copiar sin confirmar).
- `legacy-prototype/`: **prototipo anterior en HTML/CSS/JS, no proyecto React**. Úsalo como referencia y para recuperar imágenes temporales, no como verdad final de diseño o contenido.

## Primer trabajo a pedirle a Claude
"Lee `CLAUDE.md` y los archivos de `docs`. Prepara un plan breve; implementa la app React + Vite por fases, empezando por navegación y portada, luego la transición y los universos. Usa solo datos de muestra identificados como DEMO. Verifica que la entrada al universo funcione mediante clic y teclado y que el menú permita entrar directamente. No publiques nada sin autorización."

## Ejecutar desarrollo (después de que Claude cree React)
```bash
npm install
npm run dev
```
La carpeta `legacy-prototype` se puede previsualizar separadamente, pero **no contiene** la nueva app React.
