# Protocolo de trabajo con Git

Reglas simples para mantener el historial ordenado.

## Ramas

| Rama | Para qué sirve |
| --- | --- |
| `main` | Versión estable. Siempre debe compilar (`npm run build`). No se trabaja directo aquí. |
| `feat/<tema>` | Funcionalidad nueva. Ej.: `feat/etapa-2-universos` |
| `fix/<tema>` | Corrección de un error. Ej.: `fix/menu-movil` |
| `content/<tema>` | Textos, imágenes o CV. Ej.: `content/fotos-reales` |
| `docs/<tema>` | Solo documentación. |

Flujo: crear la rama desde `main` → hacer commits → abrir un Pull Request → revisar → fusionar en `main` → borrar la rama.

## Mensajes de commit

Formato [Conventional Commits](https://www.conventionalcommits.org/es/), en español y en modo imperativo:

```
tipo(alcance): resumen corto en minúscula
```

| Tipo | Cuándo |
| --- | --- |
| `feat` | Algo nuevo en el sitio |
| `fix` | Corrige un error |
| `style` | Cambios visuales/CSS sin cambiar comportamiento |
| `refactor` | Reorganiza código sin cambiar lo que se ve |
| `content` | Textos, imágenes, CV |
| `docs` | Documentación |
| `chore` | Configuración, dependencias, herramientas |

Ejemplos:

```
feat(universo): agrega proyectos orbitales en Diseño
fix(nav): corrige foco de teclado en menú móvil
content(assets): reemplaza retrato demo por foto final
```

## Antes de cada commit

1. `npm run build` termina sin errores.
2. No se suben `node_modules/`, `dist/` ni archivos `.env`.
3. Un commit = un cambio con sentido (no mezclar diseño con contenido).

## Versiones

Se usa `version` de `package.json` y etiquetas de git por etapa: `v0.2.0` = etapa 1 (portada + transición). Al cerrar cada etapa se crea una etiqueta nueva (`v0.3.0`, …).
