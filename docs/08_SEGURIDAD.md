# 08 — Seguridad y protección de datos (investigación para desarrollar)

Investigación del 6 de noviembre de 2026 para trabajar al día siguiente. Explica qué riesgos tiene el portafolio, qué está bien hoy y qué falta hacer, por prioridad.

## 1. Lo primero: qué tan «hackeable» es este sitio

El portafolio es un **sitio estático**: solo archivos (HTML, CSS, JavaScript e imágenes). No tiene base de datos, no tiene inicio de sesión, no tiene formulario y no guarda datos de visitantes. Eso elimina los ataques más comunes de la web, como robar contraseñas de usuarios, inyectar código en una base de datos o tomar control de un servidor propio.

Los riesgos reales de un sitio así son otros:

1. **Tus datos personales publicados** (teléfono en el CV, correo, foto).
2. **Que alguien entre a tus cuentas** (GitHub, el hosting, el dominio) y cambie el sitio.
3. **Uso no autorizado de tus imágenes y trabajos.**
4. **Configuración del hosting** (cabeceras de seguridad, HTTPS).
5. **Dependencias** (librerías de código) con fallas conocidas.

## 2. Revisión del estado actual (hecha hoy)

| Punto | Estado | Detalle |
| --- | --- | --- |
| Dependencias (`npm audit`) | ✅ Bien | 0 vulnerabilidades conocidas. Solo usa React y Vite. |
| Metadatos de las imágenes (EXIF/GPS) | ✅ Bien | Ninguna imagen tiene metadatos ni ubicación GPS. Tu foto se recortó y guardó sin metadatos. |
| Enlaces externos | ✅ Bien | Abren en otra pestaña con `rel="noopener noreferrer"` (evita que la otra página controle la tuya). |
| Sin formularios ni base de datos | ✅ Bien | No hay datos de visitantes que proteger ni filtrar. |
| **Teléfono en el CV público** | ⚠️ Atender | `public/assets/Constanza_Flores_CV.pdf` y `references/cv_usuario.pdf` incluyen tu teléfono. Cualquiera puede descargarlos del sitio y del repositorio. |
| **Repositorio público en GitHub** | ⚠️ Atender | El código, tu foto y los CV están visibles para cualquiera. Además, quedan en el historial aunque se borren después. |
| Correo en el código | ⚠️ Menor | El correo aparece en el JavaScript del sitio; los robots de spam pueden leerlo. |
| Cabeceras de seguridad | ⏳ Pendiente | Se configuran al publicar (dependen del hosting elegido). |
| Fuentes de Google | ⏳ Menor | Se cargan desde Google, que recibe la IP del visitante. Se pueden alojar en el propio sitio. |

## 3. Plan por prioridad

### 🔴 Prioridad alta (hacer antes de publicar)

**3.1 Proteger tus datos personales**
- Hacer un **CV público sin teléfono** (solo correo, LinkedIn y portafolio). El CV completo se envía por correo a quien lo pida.
- Quitar `references/cv_usuario.pdf` del proyecto (ya no se necesita) o mantenerlo fuera del repositorio.
- **Pasar el repositorio a privado** (GitHub → Settings → Danger Zone → Change visibility). El sitio se puede publicar igual desde un repositorio privado con Vercel, Netlify o Cloudflare Pages.
- Si el repositorio queda público: el teléfono **sigue en el historial de git** aunque se borre el archivo. Para sacarlo de verdad hay que reescribir el historial (herramienta `git filter-repo`) o crear un repositorio nuevo limpio. Lo podemos hacer juntas.

**3.2 Proteger tus cuentas** (lo más importante en un sitio estático)
- Activar la **verificación en dos pasos (2FA)** en GitHub, idealmente con una *passkey* o una app de autenticación, no por SMS.
- Lo mismo en el hosting (Vercel/Netlify/Cloudflare) y en el registro del dominio, cuando los tengas.
- Usar contraseñas únicas con un gestor de contraseñas.
- En GitHub, activar **Dependabot** (avisa si una librería tiene una falla) y **Secret scanning** (avisa si se sube una clave por error). Están en Settings → Code security.
- Proteger la rama `main` (Settings → Branches): que no se pueda borrar ni sobrescribir.

**3.3 Publicar con HTTPS y cabeceras de seguridad**
Las cabeceras son instrucciones que el servidor le da al navegador para protegerse. Las recomendadas:

| Cabecera | Para qué sirve |
| --- | --- |
| `Content-Security-Policy` | Solo permite cargar código, estilos e imágenes de orígenes autorizados. Es la principal defensa si alguna vez se cuela código malicioso. |
| `Strict-Transport-Security` (HSTS) | Obliga a usar siempre HTTPS. |
| `X-Content-Type-Options: nosniff` | Evita que el navegador interprete mal los archivos. |
| `Referrer-Policy: strict-origin-when-cross-origin` | No revela a otros sitios las páginas exactas que visita la persona. |
| `Permissions-Policy` | Bloquea cámara, micrófono y ubicación, que el sitio no usa. |
| `frame-ancestors 'none'` (dentro del CSP) | Impide que otro sitio meta tu portafolio dentro del suyo para engañar (*clickjacking*). |

**Dónde publicar**, según qué tanto permite configurar:

| Hosting | Cabeceras propias | Repositorio privado | Comentario |
| --- | --- | --- | --- |
| **GitHub Pages** | ❌ No | Solo con plan pagado | Solo permite el CSP como etiqueta `<meta>`, y así no funcionan `frame-ancestors` ni las otras cabeceras. |
| **Vercel** | ✅ `vercel.json` | ✅ Gratis | Muy simple para React + Vite. |
| **Netlify** | ✅ archivo `_headers` | ✅ Gratis | Similar a Vercel. |
| **Cloudflare Pages** | ✅ archivo `_headers` | ✅ Gratis | Además incluye bloqueo de robots de IA y protección contra ataques. |

**Recomendación:** Cloudflare Pages o Vercel. Cloudflare suma el bloqueo de robots de IA (punto 3.5).

### 🟡 Prioridad media

**3.4 Imágenes y trabajos: qué se puede y qué no**

Lo honesto primero: **no existe forma de impedir al 100 % que alguien guarde una imagen que se ve en pantalla.** Para mostrarla, el navegador ya la descargó, y siempre queda la captura de pantalla. Lo que sí funciona es combinar medidas que desaniman la copia y te respaldan si pasa:

| Medida | Efectividad | Comentario |
| --- | --- | --- |
| **Subir imágenes en tamaño web** (≈ 1600–2000 px, comprimidas) | Alta | Nadie obtiene tu archivo original en alta resolución para imprimir o reutilizar. Además el sitio carga más rápido. |
| **Marca de agua sutil** (ej. «© Constanza Flores» en una esquina) en piezas clave | Media-alta | Desanima la copia y deja la autoría visible. Se puede quitar, pero exige trabajo. |
| **Aviso de derechos** en el pie («© 2026 Constanza Flores. Todos los derechos reservados. Los trabajos se muestran con fines de portafolio.») | Media | Deja claro el uso permitido. |
| **Metadatos de autoría** en las imágenes (autor y copyright, *sin* GPS) | Media | Respaldo si necesitas reclamar autoría. |
| **Bloquear clic derecho y arrastrar** sobre las imágenes | Baja | Se salta en segundos y molesta a visitantes legítimos. Útil solo como «disuasivo suave». |
| **Bloqueo de robots de IA** (Cloudflare + `robots.txt`) | Media | Reduce que tus trabajos se usen para entrenar IA. Los robots que no respetan las reglas igual pueden entrar. |
| **Protección contra *hotlinking*** (Cloudflare) | Media | Impide que otros sitios muestren tus imágenes usando tu servidor. |
| **Búsqueda inversa periódica** (Google Imágenes, TinEye) | Seguimiento | Para detectar si tus trabajos aparecen en otros lados. |

Ojo con las **marcas de clientes**: antes de publicar logos y piezas de clientes (Proust House, HEAD, Castaño, municipalidades, etc.), confirma que tienes permiso para mostrarlas, sobre todo si hubo acuerdos de confidencialidad.

**3.5 Robots de IA y *scraping*** — *actualizado (sesión 2)*
- **Decisión de Coni: priorizar la visibilidad.** Se permite a todos los buscadores y robots de IA, para aparecer cuando un reclutador busque con ChatGPT, Claude, Perplexity o Gemini. Solo se bloquea Bytespider. Ver `07_DECISIONES_NUEVAS.md`.
- Las imágenes se cuidan con tamaño web, marca de agua y aviso de derechos (punto 3.4), no bloqueando robots.
- Si en el futuro se quiere frenar solo el entrenamiento de IA sin perder la búsqueda: bloquear GPTBot, ClaudeBot, CCBot y Google-Extended, y mantener permitidos OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User y Perplexity-User.

**3.6 Correo contra spam** — *nota: el correo ahora es legible en la ficha Schema.org y el texto de respaldo, por decisión de visibilidad*
- Ya no se muestra el correo como texto (el botón «Mail» lo copia). Se puede además **guardar el correo codificado** en el código y armarlo solo al hacer clic, para que los robots de spam no lo encuentren.
- Opcional: usar un **correo exclusivo para el portafolio** o un alias.

### 🟢 Prioridad baja / buenas prácticas

- **Alojar las fuentes (Urbanist y Sacramento) en el propio sitio**, en vez de cargarlas desde Google. Mejora la privacidad del visitante (Google no recibe su IP) y la velocidad. También permite un CSP más estricto.
- **Fijar versiones** de las dependencias y revisar `npm audit` antes de cada publicación.
- **No usar analítica que siga a las personas.** Si quieres saber cuántas visitas tienes, usar una opción respetuosa de la privacidad (Plausible, Umami o Cloudflare Web Analytics, que no usan cookies). Así no necesitas aviso de cookies.
- **Dominio propio** (ej. `constanzaflores.cl`): activar bloqueo de transferencia y 2FA en el registrador (NIC Chile u otro), y DNSSEC si el proveedor lo ofrece.
- Agregar `/.well-known/security.txt` con un correo de contacto, para que quien encuentre un problema sepa cómo avisarte. Es opcional.

## 4. Ley chilena de datos personales

- La **Ley 21.719** reemplaza a la Ley 19.628 y crea la Agencia de Protección de Datos Personales. Su entrada en vigencia está fijada para el **1 de diciembre de 2026**, pero hay un proyecto en el Congreso para **postergarla a 2027**, todavía sin publicar.
- **Qué significa para ti:** como el portafolio no recolecta datos de visitantes (sin formularios, cuentas ni cookies de seguimiento), la ley prácticamente no te exige nada. Esto cambiaría si agregas un formulario, un boletín o analítica con cookies; en ese caso convendría una página corta de **política de privacidad**.
- Tus propios datos los publicas tú voluntariamente. Por eso conviene decidir conscientemente qué mostrar (por ejemplo, sin teléfono).

## 5. Lista para mañana

1. [ ] Decidir: ¿repositorio privado o público limpio (sin teléfono en el historial)?
2. [ ] Crear el CV público sin teléfono y reemplazarlo en `public/assets/`.
3. [ ] Activar 2FA en GitHub, más Dependabot, secret scanning y protección de `main`.
4. [ ] Elegir hosting (recomendado: Cloudflare Pages o Vercel).
5. [x] Agregar el archivo de cabeceras de seguridad (`_headers` o `vercel.json`) con CSP, HSTS, etc. ✅ (sesión 2)
6. [x] `robots.txt` ✅ (sesión 2; luego abierto a robots de IA para visibilidad)
7. [x] Alojar las fuentes en el sitio. ✅ (sesión 2)
8. [x] Codificar el correo en el código. ✅ (sesión 2)
9. [ ] Agregar el aviso de derechos de autor en el pie.
10. [ ] Preparar las imágenes reales: tamaño web, sin GPS, con autoría en metadatos y marca de agua en las piezas clave.
11. [ ] Después de publicar: revisar la nota de seguridad del sitio en [MDN HTTP Observatory](https://developer.mozilla.org/en-US/observatory) y [securityheaders.com](https://securityheaders.com).

## Fuentes

- Ley 21.719, vigencia y proyecto de postergación: [Diario Constitucional](https://www.diarioconstitucional.cl/2026/06/12/la-ley-21-719-entra-en-vigor-el-1-de-diciembre-y-expone-vacios-en-regulacion-de-pequenas-empresas/), [Garrigues](https://www.garrigues.com/es_ES/noticia/chile-redefine-marco-privacidad-ciberseguridad-nuevas-reglas-cumplimiento-cambios), [Carey](https://www.carey.cl/api/archivo/gobierno-ingresa-proyecto-de-ley-que-posterga-en-un-ano-entrada-en-vigor-de-la-ley-sobre-proteccion-de-datos-personales?lang=es), [Academia Judicial](https://academiajudicial.cl/recursos/actualizaciones-normativas/ley-21-719-que-regula-la-proteccion-y-el-tratamiento-de-los-datos-personales-y-crea-la-agencia-de-proteccion-de-datos-personales/)
- GitHub Pages sin cabeceras propias y límites del CSP en `<meta>`: [GitHub Community #54257](https://Www.GitHub.com/orgs/community/discussions/54257), [HTMHell](https://htmhell.dev/adventcalendar/2023/7/), [Scott Helme](https://scotthelme.co.uk/launching-report-uri-js/), [DEV Community](https://dev.to/jacobandrewsky/how-to-set-content-security-policy-with-a-meta-tag-5gfm)
- Cabeceras en Vercel: [Mintlify (vercel.json)](https://github.com/mintlify/docs/pull/1090/files), [Trevor Lasn](https://trevorlasn.com/blog/csp-headers-astro), [DEV Community](https://dev.to/pocketportfolio/hardening-a-vercel-app-csp-cors-and-service-workers-that-dont-bite-1k2m)
- Bloqueo de robots de IA en Cloudflare: [Cloudflare](https://www.cloudflare.com/lp/pg-security-block-ai-bots/), [Cloudflare Docs (plan gratis)](https://4f1c5cd2.previews.developers.cloudflare.com/bots/plans/free/index.md), [Engadget](https://www.engadget.com/cloudflare-is-taking-a-stand-against-ai-website-scrapers-220030471.html?src=rss), [WebNots](https://www.webnots.com/how-to-block-ai-bots-with-cloudflare/)
- Protección de imágenes (límites del bloqueo de clic derecho, marcas de agua, tamaño): [Pixpa](https://help.pixpa.com/kb/right-click-protection/), [BoldBrush](https://support.boldbrush.com/faso-images-copyright/right-click-disabler), [dgrin](https://dgrin.com/discussion/comment/1949196), [UK Business Forums](https://www.ukbusinessforums.co.uk/threads/protecting-images.10458/post-39493)
- Revisión de cabeceras: [MDN HTTP Observatory](https://github.com/mdn/mdn-http-observatory/wiki)
