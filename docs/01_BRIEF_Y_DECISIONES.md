# 01 — Brief y decisiones de diseño

## Propósito
Web personal para mostrar trabajo destacado de **Diseño Gráfico** e **Informática**, credenciales académicas, marcas/colaboraciones y personalidad de Constanza Flores. Debe servir como portafolio profesional y al mismo tiempo como demostración de front-end y UX/UI. Crear desde cero, sin plantilla. Primero usar contenido visual/textual **DEMO**, curar casos reales después.

## Estilo aprobado
- **Oscuro editorial**, sofisticado, femenino de manera sutil, minimalista, interactivo, con mucho aire.
- Referencia de composición desktop: **1920 × 1080**; implementar responsive, no una web fija de 1920 px.
- Paleta seleccionada B: negro casi azulado `#05080E`; verde pino `#102E2C`; rosa antiguo `#C782A2`; blanco suave `#EBE9E8`.
- Tipografías: **DM Sans** para navegación, títulos, textos; **Sacramento** para escasos acentos decorativos, nunca para texto importante.
- Universo: azul nocturno **todavía más oscuro, casi negro**, con profundidad muy sutil y estrellas mínimas y tenues.
- Evitar brillos/neón, hojas, adornos superiores, decoraciones recargadas y efectos de ciencia ficción espectaculares.

## Portada aprobada
- Fondo negro profundo.
- Centro: retrato o logo dentro de círculo (**elección foto/logo aún abierta**). Se admite retrato DEMO.
- Círculo **superpuesto** a tarjeta verde bosque/pino con esquinas redondeadas.
- Una sola línea orbital elíptica rosa rodea el círculo.
- Una estrella pequeña de cuatro puntas que recorre la órbita lentamente (12–15 s), **provisional**, sin brillo. La línea orbital queda fija. No añadir otras estrellas decorativas a la portada.
- Texto exacto de la tarjeta: `Constanza Flores` / `Diseñadora Gráfica Senior · Ingeniera en Informática · UX/UI` / `Santiago de Chile`.
- **Sin frase/tagline** sobre la portada. No agregar slogans inventados.
- Entrada sugerida: aparece retrato, luego se dibuja órbita, tarjeta asciende suavemente. Secuencia breve con solapamiento de movimientos (~1.5–2s), respetando movimiento reducido.

## Menús
- Escritorio: barra fija arriba, minimal, con **Inicio/logo, Diseño, Informática, Marcas, Quién soy, Contacto**. Indicador discreto de sección activa.
- Móvil: menú colapsado y accesible.

## Decisiones de contenido/navegación
- Portada → apertura → selector de dos mundos → universo elegido → proyectos seleccionados.
- **Puntos orbitales** (no estrellas de puntas) representan proyectos específicos; distribución orgánica, etiquetas visibles.
- Número de proyectos **sin fijar**: decidir tras curaduría; plantilla flexible (4/2 son solo demos, no compromisos).
- Cada proyecto abre un caso de estudio editorial con imagen principal, objetivo, participación real, herramientas, resultados/entregables, galería; al pie Anterior/Siguiente.
- Estrella pequeña **fija arriba a la izquierda** regresa al universo correspondiente desde el caso de estudio.
- Centro del universo: agujero negro, solo ligeramente más grande que los puntos orbitales, texto siempre visible `Un poco más de mí`. Es acceso al mundo personal.
- Marcas: una cuadrícula limpia, espaciosa, no marquee. Logos reales monocromáticos por defecto → colores originales en hover/focus. Sección compartida, **debajo del universo al hacer scroll**, con acceso directo desde menú.
- De universo a Marcas: transición **B, por pantallas** (universo se desplaza arriba, marcas ocupan pantalla completa), no fundido continuo.
- Contacto última pantalla principal, minimal, sin formulario.
- Formación académica aparece **debajo del título de cada universo**, no como sección académica separada. La portada también incluye ambos títulos.
- Quién soy: acceso por menú y portal, collage minimalista de intereses; cada ícono abre popup con foto + texto corto.

## No decidido aún
- Foto/logo final, material y orden exacto de proyectos, logos oficiales finales, tamaños exactos finales, copy definitivo de los popups, si el giro de estrella se mantiene tras pruebas, imágenes definitivas.
- Interacción móvil de efectos hover puede adaptarse libremente, pero sin ocultar navegación y acciones.
