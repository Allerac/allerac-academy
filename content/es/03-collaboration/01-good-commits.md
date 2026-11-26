# 3.1 Commits que cuentan una historia

## Problema

Abres el historial de un proyecto para averiguar cuándo cambió un texto. La lista dice: "update", "fix", "cambios", "asdf", "ahora sí". ¿Cuál de esos commits cambió el texto? ¿Cómo los escribirías para que la respuesta fuera obvia?

*Intenta pensar en una respuesta antes de seguir.*

## Bloques

### 1. El historial es para el futuro
Cada commit es una foto del trabajo con un mensaje. Quien lee ese mensaje casi nunca eres tú hoy: es alguien del equipo dentro de un mes, o tú dentro de un año, intentando entender qué pasó. Un buen mensaje le ahorra tiempo a esa persona.

> **Notas para el tutor:** conecta con la lección 0.3, donde el estudiante hizo su primer commit. Analogía: etiquetas en cajas de mudanza. "Cosas" no ayuda; "Cocina: platos y vasos" sí.

### 2. Un título corto que dice lo que hiciste
La primera línea del commit es el título. Es corta (unos 50 caracteres), en inglés, y empieza con un verbo en imperativo, como si completara la frase "este commit va a...":
- `Add contact section to personal page`
- `Fix typo in README introduction`
- `Change page title color to dark blue`

Y no: `update`, `fix`, `changes`.

> **Notas para el tutor:** el imperativo (Add, Fix, Change, Remove) es la convención más común. No seas estricto con el límite de caracteres: lo importante es ser claro y específico. Si el estudiante se traba con el inglés, puede pedirle ayuda a la IA.

### 3. El porqué, cuando no es obvio
Después del título, puedes dejar una línea en blanco y escribir un cuerpo corto que explique **por qué** hiciste el cambio. El "qué" ya lo muestra el código; el "porqué" solo lo sabes tú. No todos los commits necesitan cuerpo: úsalo cuando la razón no sea obvia.

> **Notas para el tutor:** ejemplo: título `Make buttons larger on small screens`, cuerpo `Users on phones were tapping the wrong button.` Codespaces y el sitio de GitHub tienen un campo de descripción para esto.

### 4. Un commit, una idea
Si corregiste un error de tipeo y además cambiaste todo el diseño, son dos ideas. En dos commits es más fácil entenderlas, revisarlas y, si hace falta, deshacer solo una.

> **Notas para el tutor:** no exijas perfección a quien empieza. La meta es el hábito: antes de hacer el commit, preguntarse "¿esto es una sola cosa?".

### 5. La IA ayuda a escribir, tú revisas
Puedes mostrarle a la IA lo que cambió y pedirle: "Escribe un mensaje de commit corto en inglés, en imperativo." Después léelo: ¿el mensaje describe de verdad lo que hiciste? La IA no conoce tu porqué si no se lo cuentas.

> **Notas para el tutor:** en Codespaces puede aparecer un botón para sugerir el mensaje con IA. Está bien usarlo, siempre que el estudiante lo lea y lo ajuste. Error común: aceptar un mensaje genérico que la IA inventó.

## Misión

**En la computadora (camino principal):**

1. Abre el codespace de `my-academy-journal`.
2. En `README.md`, agrega una línea sobre algo que aprendiste en el módulo 2.
3. Haz el commit con un título claro en inglés, en imperativo (por ejemplo, `Add Module 2 learning to README`). Si quieres, pídele ayuda a la IA para escribirlo y después revísalo.
4. Envía los cambios (*push*) y abre el historial de commits del repositorio en GitHub.
5. Mándale al tutor tu mensaje y reescribe de una forma mejor estos tres mensajes malos: `update`, `fix`, `cambios en la página`. Para estos, inventa un cambio plausible.

**Desde la tableta o el teléfono:** edita `README.md` directamente en github.com (botón de editar el archivo), escribe el mensaje en el campo del commit y confirma. El resto de la misión es igual.

**Cómo lo revisa el tutor:** el commit nuevo existe, con un título específico en inglés, y los tres mensajes reescritos dicen claramente qué cambió.

## Para profundizar

- Acerca de Git y el historial de versiones: [documentación oficial de GitHub](https://docs.github.com/es/get-started/using-git/about-git) (en español). Revisado el 26 de noviembre de 2026.
