# 3.5 Leer código que no escribiste

## Problema

Llegas a un proyecto con cientos de archivos, y alguien te pide: "cambia el texto de ese botón". Nunca viste ese código. ¿Por dónde empiezas a buscar?

*Intenta pensar en una respuesta antes de seguir.*

## Bloques

### 1. No necesitas entenderlo todo
Nadie lee un proyecto entero antes de empezar, ni siquiera quien trabaja en él desde hace años. Para una tarea, basta con entender la parte que toca. El objetivo es encontrar esa parte y entender lo suficiente para cambiarla con seguridad.

> **Notas para el tutor:** quita el peso. Analogía: llegar a una ciudad nueva. No memorizas todo el mapa; buscas la dirección que necesitas.

### 2. Empieza por el README
El README suele explicar qué es el proyecto, cómo está organizado y dónde está cada parte. En allerac-academy, por ejemplo, el README dice que el contenido del curso está en `content/` y el sitio en `app/`. Eso ya corta la búsqueda a la mitad.

> **Notas para el tutor:** muestra también `app/README.md`, que tiene un mapa de las carpetas del sitio. Los README están en inglés: anima a usar la IA para traducir fragmentos si hace falta.

### 3. Busca lo que ves en la pantalla
El texto que aparece en la pantalla casi siempre está escrito en algún archivo. Usa la búsqueda: en GitHub, el cuadro de búsqueda del repositorio; en el editor, la lupa. Busca el texto exacto del botón, por ejemplo `Lo intenté, sigamos`, y mira en qué archivo aparece.

> **Notas para el tutor:** en allerac-academy, los textos de la interfaz están en `app/public/i18n/es.js` (y `pt.js`, `en.js` para los otros idiomas). La búsqueda de código de GitHub funciona en repositorios a los que el estudiante tiene acceso. Si no encuentra nada, prueba con un fragmento más corto del texto.

### 4. Pídele a la IA que explique, con contexto
Copia el archivo (o un fragmento) en la IA y dale contexto: "Este archivo es de un sitio de cursos. Explica con palabras sencillas qué hace y para qué sirve cada parte." Pregunta también: "¿Qué pasaría si cambio esta línea?"

> **Notas para el tutor:** refuerza la lección 2.5: antes de pegar código en la IA, comprueba que no haya contraseñas, claves ni datos de personas. Los archivos de textos de la interfaz de allerac-academy no tienen nada de eso. En proyectos de otras empresas, sigue las reglas del equipo sobre qué se puede compartir.

### 5. Comprueba la explicación
La IA puede inventar (lección 1.2). Comprueba lo que dijo en el propio código: ¿el nombre que mencionó existe en el archivo? ¿La explicación coincide con lo que ves en la pantalla? Si algo no coincide, vuelve a preguntar o pregúntale al equipo.

> **Notas para el tutor:** una buena prueba: pedirle a la IA que señale la línea exacta que hace lo que describió, y que el estudiante encuentre esa línea en el archivo.

## Misión

Esta misión es solo de lectura: no cambias nada en allerac-academy.

**En la computadora (camino principal):**

1. Abre el repositorio [Allerac/allerac-academy](https://github.com/Allerac/allerac-academy) y lee el README.
2. Abre el editor github.dev (cambia `github.com` por `github.dev` en la URL o presiona la tecla `.`). Para leer código, alcanza: es gratis y no gasta la cuota de Codespaces.
3. Usa la búsqueda para encontrar el archivo donde está el texto `Lo intenté, sigamos`.
4. Copia ese archivo en la IA y pídele una explicación sencilla de lo que hace.
5. Comprueba al menos una cosa que dijo la IA, encontrando la línea en el archivo.
6. Cuéntale al tutor: la ruta del archivo, qué hace y qué comprobaste.

**Desde la tableta o el teléfono:** abre el repositorio en el navegador y usa la búsqueda del propio github.com para encontrar el texto. Abre el archivo, copia el fragmento en la IA y sigue desde el paso 4. En el teléfono, el archivo completo es largo: un fragmento de 10 a 20 líneas alcanza.

**Cómo lo revisa el tutor:** el estudiante indica la ruta `app/public/i18n/es.js`, explica con sus propias palabras que el archivo guarda los textos de la interfaz, y menciona una cosa que comprobó en el código.

## Para profundizar

- El editor github.dev: [documentación oficial de GitHub](https://docs.github.com/es/codespaces/the-githubdev-web-based-editor) (en español). Revisado el 26 de noviembre de 2026.
- Búsqueda de código en GitHub: [sintaxis de búsqueda](https://docs.github.com/es/search-github/github-code-search/understanding-github-code-search-syntax) (en español). Revisado el 26 de noviembre de 2026.
