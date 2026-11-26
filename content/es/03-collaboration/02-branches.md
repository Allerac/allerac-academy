# 3.2 Ramas: probar sin romper

## Problema

Tu página funciona. Quieres probar un diseño completamente nuevo, pero no sabes si va a quedar bien. Si sale mal, la versión que funciona tiene que seguir intacta. ¿Cómo lo probarías sin arriesgarte?

*Intenta pensar en una respuesta antes de seguir.*

## Bloques

### 1. Una rama es una línea paralela
Una rama (en inglés, *branch*) es una línea de trabajo separada dentro del mismo repositorio. Creas una rama a partir de la versión actual, cambias lo que quieras en ella, y la versión principal no se toca. Si la prueba sale bien, la unes después. Si sale mal, simplemente abandonas la rama.

> **Notas para el tutor:** analogía: hacer un borrador en una copia del documento en lugar de tachar el original. A diferencia de una copia común, la rama recuerda de dónde salió, y por eso se puede unir después.

### 2. `main` es la versión que funciona
Casi todos los repositorios tienen una rama principal, normalmente llamada `main`. En un equipo, el acuerdo es simple: `main` es la versión que funciona y que todos usan. El trabajo nuevo va en una rama y solo entra en `main` después de revisarlo.

> **Notas para el tutor:** así se construye exactamente este curso: todo cambio en allerac-academy entra por una rama y un pull request, nunca directo en `main`. Úsalo como ejemplo real.

### 3. Ponle un nombre que explique
El nombre de la rama dice lo que se está haciendo, en inglés, con guiones en lugar de espacios:
- `try-new-colors`
- `fix-readme-typo`
- `add-contact-section`

Un nombre como `prueba2` no le dice nada a quien mira la lista de ramas.

> **Notas para el tutor:** algunos equipos usan prefijos (`feature/`, `fix/`). Menciónalos solo si el estudiante pregunta. Lo importante es que sea descriptivo y sin espacios.

### 4. Crear y cambiar de rama en Codespaces
En Codespaces, el nombre de la rama actual aparece en la barra de estado, abajo a la izquierda. Haz clic en él, escribe el nombre de la rama nueva y elige **Create new branch** (crear rama nueva). A partir de ahí, tus commits van a esa rama. La primera vez que envíes los cambios, el editor te ofrece publicar la rama en GitHub (**Publish Branch**).

Para volver a `main`, haz clic otra vez en el nombre de la rama y elige `main`. Los archivos cambian a la versión de esa rama.

> **Notas para el tutor:** en la terminal, el equivalente es `git switch -c try-new-colors`. Muéstralo solo si el estudiante prefiere la terminal. Si le sorprende que los archivos "cambiaron solos" al cambiar de rama, explica que cada rama tiene su propia versión.

### 5. Desde la tableta o el teléfono
En el sitio de GitHub puedes crear una rama desde el navegador: en la página del repositorio, abre el menú de ramas (donde aparece `main`), escribe el nombre nuevo y elige crear la rama. Después, con esa rama seleccionada, edita el archivo con el botón de editar y haz el commit en ella. También funciona en el navegador del teléfono, solo que más apretado.

> **Notas para el tutor:** la documentación oficial describe cómo crear ramas en el sitio (menú desplegable de ramas). Confirma con el estudiante que la rama correcta está seleccionada antes del commit: en el teléfono es fácil hacer el commit en `main` sin querer.

## Misión

**En la computadora (camino principal):**

1. En el codespace de `my-academy-journal`, crea una rama llamada `try-new-colors`.
2. Pídele a la IA un cambio de colores o de diseño en `index.html` y aplícalo.
3. Haz el commit con un mensaje claro y publica la rama (**Publish Branch** / *push*).
4. En GitHub, alterna entre `main` y `try-new-colors` y comprueba que el `index.html` de `main` no cambió.
5. Cuéntale al tutor el nombre de la rama y cuál es la diferencia entre las dos versiones.

**Desde la tableta o el teléfono:** crea la rama `try-new-colors` desde el menú de ramas de github.com, edita `index.html` en esa rama (con ayuda de la IA, pegando el cambio) y haz el commit en ella. Después compárala con `main`.

**Cómo lo revisa el tutor:** la rama `try-new-colors` existe en el repositorio, tiene al menos un commit con un mensaje claro, y `main` sigue con la versión anterior. El estudiante explica por qué `main` no cambió.

## Para profundizar

- Crear y eliminar ramas en el sitio: [documentación oficial de GitHub](https://docs.github.com/es/pull-requests/how-tos/commit-changes/managing-branches-within-your-repository) (en español). Revisado el 26 de noviembre de 2026.
- Ramas, commits y push en Codespaces: [control de versiones en tu codespace](https://docs.github.com/es/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace) (en español). Revisado el 26 de noviembre de 2026.
