# 09 — Revisión completa, crítica y próximos pasos

Revisión del 6 de noviembre de 2026, hecha **sin cambiar el sitio**, para revisar juntas al día siguiente. Incluye:

1. Qué tienes que entregar o decidir tú.
2. Chequeo técnico de todo el sitio.
3. Crítica y autocrítica honesta.
4. Portafolios de referencia para mirar juntas.
5. Pasos hasta publicar.

---

## 1. Lo que te falta entregar o decidir

### 1.1 Contenido que tienes que entregar

| # | Qué | Para qué sección | Detalle |
| --- | --- | --- | --- |
| 1 | **Proyectos reales** (recomendado: 3 a 5 por mundo) | Universos y casos | Por cada uno: título, cliente, agencia o vía, tu rol, objetivo (2–4 líneas), qué hiciste, herramientas, resultado y 3 a 6 imágenes. Para Informática, además los enlaces (GitHub, demo, Figma). |
| 2 | **Logos de las marcas** | Marcas | Preferir SVG o PNG con fondo transparente. Si no los tienes todos, se pueden dejar algunos como texto. |
| 3 | **Fotos y textos de los 11 intereses** | Quién soy | Una foto por interés y 1 o 2 frases. Gemoterapia y Escultura no tienen foto todavía. |
| 4 | **Bio profesional corta** (3 a 5 líneas) | Nueva, ver crítica 3.3 | Quién eres, qué haces y para quién. |
| 5 | **CV público sin teléfono** | Contacto | Ver `08_SEGURIDAD.md`. |
| 6 | **Foto final** (¿esta u otra?) y si el círculo lleva foto o logo | Portada | La especificación lo dejó abierto. |

### 1.2 Datos de marcas por confirmar

- «Pampier» (Castaño): cómo se escribe.
- Drei Ventures: desde cuándo.
- Arbor Counseling Centers: ¿se mantiene?
- Universidad Central: vía qué agencia y en qué fecha.
- DECH UNIMARC: período, rol, qué hiciste y vía quién.
- El Búho: qué clientes de gobierno confirmas; Ciudad Feliz.
- Vimeo: Subsecretaría/Ministerio del Trabajo (¿Brecha o El Búho?), Venezzia Live, La Triada, La Chinita, Mis Recetas Premium, Milkshake.
- LinkedIn: ¿sigue siendo `linkedin.com/in/conoflor`?
- **Permiso para mostrar trabajos de clientes**, sobre todo si firmaste confidencialidad.

### 1.3 Decisiones pendientes

- [ ] Título de Quién soy («Un poquito de mí.» u otro).
- [ ] Frase de Contacto (¿se queda «Tu mensaje será nuestro próximo gran proyecto.»?).
- [ ] ¿Versión en inglés? (Trabajas con clientes de EE. UU. y Canadá.)
- [ ] Dominio propio (ej. `constanzaflores.cl` o `.com`).
- [ ] Hosting (recomendado: Cloudflare Pages o Vercel).
- [ ] Repositorio privado o público limpio.
- [ ] ¿Cuántas marcas mostrar? (ver crítica 3.5).

---

## 2. Chequeo técnico (resultados de hoy)

Se recorrieron las 8 pantallas en computador (1440 px) y celular (iPhone 13) con pruebas automáticas de errores y accesibilidad (axe-core, normas WCAG 2 A/AA).

| Revisión | Resultado |
| --- | --- |
| Errores en consola | ✅ 0 en todas las pantallas |
| Desborde horizontal en celular | ✅ Ninguno |
| Un título principal (h1) por pantalla | ✅ Correcto |
| Imágenes sin texto alternativo | ✅ Ninguna |
| Dependencias con fallas (`npm audit`) | ✅ 0 |
| Peso del sitio | ✅ Liviano: JavaScript 82 KB y CSS 7 KB comprimidos; 1,4 MB en total con las imágenes demo |
| Movimiento reducido (`prefers-reduced-motion`) | ✅ Respetado |
| **Contraste bajo** en las etiquetas «Cliente / Agencia / Tipo» del caso de estudio | ⚠️ Falla AA (3 elementos) |
| **Botón sin nombre**: en celular, la estrella para volver del caso de estudio esconde su texto y queda sin nombre para lectores de pantalla | ⚠️ Falla crítica (fácil de corregir) |
| **Sin favicon** (ícono de la pestaña) | ⚠️ Falta |
| **Sin vista previa al compartir** (Open Graph: imagen, título y descripción en WhatsApp, LinkedIn, etc.) | ⚠️ Falta, y es importante para un portafolio |
| Direcciones con `#/` (ej. `#/diseno`) | ⚠️ Funcionan, pero Google y las vistas previas las tratan como una sola página |
| Imágenes sin formato moderno (WebP/AVIF) ni tamaños por pantalla | ⏳ Hacerlo cuando lleguen las imágenes reales |
| Fuentes cargadas desde Google | ⏳ Alojarlas en el sitio (privacidad y velocidad) |
| Sin `robots.txt`, `sitemap.xml` ni página 404 | ⏳ Agregar al publicar |
| Estrellas solo arriba a la izquierda en tu equipo | ❓ No reproducido aquí; falta captura y navegador |

---

## 3. Crítica y autocrítica

### Lo que está muy bien

- **Concepto propio y coherente.** El universo, el broche que se abre, los dos mundos y la órbita no se parecen a ninguna plantilla. Es memorable.
- **Une tus dos perfiles.** El sitio en sí demuestra diseño e informática a la vez: es un argumento de venta.
- **Cuidado visual consistente.** Paleta acotada, misma familia tipográfica y el mismo cielo en todas las secciones.
- **Técnicamente sano.** Liviano, sin errores, accesible con teclado y con el contenido separado del código.

### Lo que hay que mejorar (en orden de importancia)

**3.1 Todavía no muestra tu trabajo.** Es lo más importante. Hoy todo el contenido de proyectos es DEMO. Un portafolio se evalúa por sus casos. La recomendación más repetida por quienes contratan es mostrar **pocos proyectos, pero profundos (3 a 5)**, con el problema, tus decisiones y el resultado, no solo imágenes finales.

**3.2 Se tarda en llegar al trabajo.** Para ver un proyecto hacen falta 3 clics (portada → mundo → proyecto) más las animaciones. Quienes revisan portafolios suelen mirarlos en pocos minutos. Ideas, sin perder el concepto:
- Recordar si la persona ya vio la apertura y saltarla en la siguiente visita.
- En la portada, un acceso discreto a «Proyectos destacados».
- El menú ya permite entrar directo: no es grave, pero conviene medirlo.

**3.3 Falta quién eres profesionalmente.** «Quién soy» muestra solo intereses personales. No hay en ningún lado una bio corta, qué servicios ofreces, años de experiencia o en qué te especializas. Opciones:
- Una bio de 3 a 5 líneas en Quién soy, sobre los íconos.
- Una línea de experiencia simple (empresas y años) en Marcas.
- Un estado como «Disponible para proyectos freelance» en Contacto.

**3.4 La portada no dice qué ofreces.** Por decisión de la especificación no hay frase. Es elegante, pero alguien que llega sin contexto ve tu nombre y títulos y no sabe si trabajas freelance, buscas empleo o qué tipo de proyectos haces. Vale la pena repensarlo.

**3.5 Marcas: 28 nombres es mucho texto.** Sin logos, la grilla parece una lista. Hay marcas grandes mezcladas con proyectos menores. Recomendación: **curar 12 a 16** de las más reconocibles o relevantes, y agrupar por relación (Agencias · Empresas · Clientes). El resto queda en el CV.

**3.6 Universos con pocos proyectos pueden verse vacíos.** Con 3 o 4 puntos hay mucho espacio. Cuando estén los proyectos reales, conviene ajustar la composición (tamaños distintos para el proyecto principal, como permite la especificación).

**3.7 El agujero negro casi no se ve.** «CF» en gris oscuro es elegante, pero muchas personas no van a descubrir que lleva a Quién soy. El menú lo compensa. Se puede probar un leve pulso al pasar el cursor.

**3.8 Celular.** Funciona, pero pierde parte de la magia: no hay efectos en el selector y el universo pasa a una lista. Se podría agregar un toque de movimiento al tocar.

**3.9 Inglés.** Con clientes en EE. UU. y Canadá, una versión en inglés amplía mucho las oportunidades. Como los textos ya están en el JSON, es factible.

**3.10 ¿Tiene demasiadas cosas?** No: la estructura es razonable (portada, 2 mundos, marcas, contacto y quién soy). El riesgo no es la cantidad de secciones, sino la **cantidad de animaciones antes de ver contenido**. Recomendación: mantener todas las animaciones, pero que ninguna bloquee y que todo se pueda saltar.

---

## 4. Portafolios de referencia para mirar juntas

> Verificar cada enlace antes de la reunión: algunos cambian de dirección o de diseño.

**Experiencias interactivas y creativas (como el tuyo)**

| Portafolio | Qué mirar |
| --- | --- |
| **Bruno Simon** — [bruno-simon.com](https://bruno-simon.com) | El referente del portafolio-juego: manejas un auto en 3D por el sitio. Ganó premios de portafolio y desarrollo en Awwwards. Muestra que la experiencia **es** el portafolio, y aun así tiene una versión simple. |
| **Robin Noguier** — [robin-noguier.com](https://robin-noguier.com) | Diseñador con navegación 3D en WebGL y React (Site of the Day en Awwwards). Movimiento muy pulido sin perder claridad. |
| **Minh Pham** — [minhpham.design](https://minhpham.design) | Site of the Day en Awwwards. Diseñador con interacción fluida y casos claros. |
| **Samsy** — [samsy.ninja](https://samsy.ninja) | Tecnólogo creativo (París): experimentos visuales potentes. |
| **Lynn Fisher** — [lynnandtonic.com](https://lynnandtonic.com) | Rediseña su sitio cada año con humor y mucha personalidad. Ideal para ver cómo jugar sin perder lo profesional. |
| **Fieldspace** (plantilla de Framer) | Plantilla que presenta el trabajo como un espacio para explorar, muy cercana a tu concepto. Sirve como referencia de navegación espacial. |

**Claros y efectivos para reclutadores**

| Portafolio | Qué mirar |
| --- | --- |
| **Brittany Chiang** — [brittanychiang.com](https://brittanychiang.com) | Desarrolladora: una sola página, bio arriba, experiencia con pestañas por empresa y proyectos destacados. Lo opuesto al tuyo en espectáculo, pero un modelo de **claridad**. |

**Galerías para inspirarse**
- [Awwwards — mejores portafolios](https://www.awwwards.com/websites/winner_category_portfolio/) y [categoría Developer](https://www.awwwards.com/websites/developer/).
- [Muzli — 100 mejores portafolios de diseñadores 2026](https://muz.li/blog/top-100-most-creative-and-unique-portfolio-websites-of-2025/).
- [Hon Tran — los 10 mejores sitios premiados de 2026 (escrito por un jurado)](https://www.hontran.dev/blog/best-award-winning-websites-2026).

**Qué aprender de ellos para tu sitio**
1. **Casos de estudio cortos pero con historia**: problema → decisiones → resultado.
2. **Una vía rápida** para quien tiene poco tiempo, sin quitar la experiencia.
3. **Bio y disponibilidad visibles** muy temprano.
4. **Rendimiento cuidado**: los premiados usan WebGL y 3D, pero también optimizan mucho. El tuyo ya es liviano, así que no conviene sumar 3D pesado sin necesidad.

---

## 5. Próximos pasos hasta publicar

**Fase 1 — Seguridad y datos (1 sesión)**
1. CV público sin teléfono, repositorio privado o limpio y 2FA en GitHub (`08_SEGURIDAD.md`).
2. Corregir los 2 problemas de accesibilidad.

**Fase 2 — Contenido real (la más larga; depende de tu material)**
3. Elegir y escribir 3 a 5 proyectos por mundo; preparar imágenes en tamaño web.
4. Logos de marcas y curaduría de la lista.
5. Fotos y textos de intereses.
6. Bio profesional y estado de disponibilidad.

**Fase 3 — Ajustes de experiencia (1 a 2 sesiones)**
7. Vía rápida a proyectos y saltar la apertura en visitas repetidas.
8. Ajustar la composición de los universos con los proyectos reales.
9. Resolver lo pendiente de la portada (foto final, estrellas en tu equipo).

**Fase 4 — Preparar la publicación (1 sesión)**
10. Favicon, imagen y textos para compartir (Open Graph), `robots.txt`, `sitemap.xml` y página 404.
11. Direcciones sin `#` (rutas reales) para Google y para compartir enlaces a cada proyecto.
12. Fuentes alojadas en el sitio, imágenes en WebP/AVIF y cabeceras de seguridad.
13. (Opcional) Versión en inglés.

**Fase 5 — Publicar (1 sesión)**
14. Crear la cuenta en el hosting elegido y conectar el repositorio. Cada cambio en `main` se publica solo.
15. Comprar y conectar el dominio, con HTTPS automático.
16. Revisar el sitio publicado: [MDN HTTP Observatory](https://developer.mozilla.org/en-US/observatory), securityheaders.com, prueba en celulares reales (iPhone y Android) y en Safari, Chrome y Firefox.
17. Compartir: LinkedIn, CV y firma de correo.

---

## Fuentes

- Galerías y premios: [Awwwards — portafolios](https://www.awwwards.com/websites/winner_category_portfolio/), [Awwwards — Developer](https://www.awwwards.com/websites/developer/), [Muzli 2026](https://muz.li/blog/top-100-most-creative-and-unique-portfolio-websites-of-2025/), [Hon Tran 2026](https://www.hontran.dev/blog/best-award-winning-websites-2026)
- Ejemplos de navegación interactiva: [Framer — Fieldspace](https://www.framer.com/marketplace/templates/fieldspace/?via=framplates), [Framer — análisis de 15 portafolios](https://www.framer.com/blog/portfolio-website-examples/), [Webflow — portafolios UX](https://webflow.com/blog/ux-design-portfolio), [Lovable — ejemplos UX](https://lovable.dev/guides/11-ux-portfolio-examples)
- Qué buscan quienes contratan: [Lyssna (2026)](https://www.lyssna.com/blog/ux-designer-portfolio/), [UX Design Institute](https://www.uxdesigninstitute.com/blog/hiring-managers-ux-portfolio/), [ADPList](https://adplist.org/blog/what-is-a-hiring-manager-looking-for-in-a-design-portfolio), [UX Collective](https://uxdesign.cc/what-hiring-managers-look-for-in-a-product-design-portfolio-7b1837360bf9), [Muzli — portafolio UX 2026](https://feed.muz.li/?p=201332), [Medium — estructura de caso de estudio](https://medium.com/@maxrichy/how-to-structure-a-ux-case-study-that-hiring-managers-notice-4f0e9bf45fa4)
