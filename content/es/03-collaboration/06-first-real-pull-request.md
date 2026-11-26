# 3.6 Tu primera contribución de verdad

## Problema

En el módulo 0 abriste una issue contando algo confuso del curso. Ahora ya sabes crear una rama, hacer un commit y abrir un pull request. En lugar de solo avisar, ¿podrías corregirlo?

## Bloques

### 1. De la issue al pull request
Una issue dice "esto tiene que cambiar". Un pull request dice "aquí está el cambio". En un equipo, las dos cosas van juntas: la issue registra el problema y la conversación, y el PR trae la solución. Cualquier persona del equipo puede proponer una corrección, no solo quien escribió el original.

> **Notas para el tutor:** conecta con la lección 0.4. Si la issue que abrió el estudiante ya se resolvió, puede elegir otra mejora pequeña en el contenido del curso.

### 2. Empieza por algo pequeño
El mejor primer PR es pequeño: un error de tipeo, una frase confusa, un enlace roto. Es rápido de revisar, fácil de entender y enseña todo el camino. Una sola cosa por PR.

> **Notas para el tutor:** desaconseja un primer PR grande ("reescribí la lección entera"). Sugiere cambios en el texto del curso en `content/` (la carpeta de su idioma, o `content/pt/` para el original). No sugieras tocar el código del sitio en el primer PR.

### 3. Sigue las reglas de la casa
Cada proyecto tiene sus acuerdos. En allerac-academy:
- todo cambio entra por una rama y un pull request, **nunca directo en `main`**;
- el código, los nombres de archivo y los mensajes de commit van en inglés;
- el texto del curso se escribe primero en portugués y después se traduce;
- el merge lo hace el equipo de Allerac, después de la revisión.

> **Notas para el tutor:** el editor del sitio puede ofrecer "Commit directly to the main branch". Indica siempre elegir "Create a new branch for this commit and start a pull request". Si el estudiante hace el commit en `main` por error, no es el fin del mundo: que avise al equipo en el chat del curso y siga.

### 4. Conversar dentro de GitHub
La conversación sobre el cambio queda en el propio PR, no en una aplicación de mensajes: así todo el equipo la ve y queda registrada. Algunas herramientas:
- escribe `Closes #12` en la descripción para vincular el PR a la issue número 12. Cuando el PR entre, la issue se cierra sola;
- usa `@nombre` para llamar a una persona específica;
- responde a los comentarios de la revisión, aunque sea solo "listo, ¡gracias!".

> **Notas para el tutor:** la palabra clave (`Closes`, `Fixes`, `Resolves`) solo funciona cuando el PR va a la rama predeterminada (`main`). Pide al estudiante que no etiquete a personas sin motivo. El tono ideal es el de la lección 3.3: específico y amable.

### 5. La revisión es parte del camino
Puede que quien revisa pida un ajuste. Es el proceso funcionando, no un rechazo. Haces el ajuste en la misma rama (un commit nuevo entra en el mismo PR) y respondes al comentario. Cuando todo esté bien, el equipo hace el merge, y tu nombre queda en el historial de un proyecto real.

> **Notas para el tutor:** celebra el merge como un hito: es la primera contribución real del estudiante en un proyecto de Allerac. Para ajustar un PR desde el sitio, se abre **Files changed**, se usa el menú del archivo y se elige editar, haciendo el commit en la misma rama.

## Misión

**Desde el sitio de GitHub (el camino más sencillo, en cualquier dispositivo):**

1. Elige una mejora pequeña en el texto del curso: puede ser tu issue del módulo 0, un error de tipeo o una frase confusa. El texto del curso está en `content/` (una carpeta por idioma).
2. En [allerac-academy](https://github.com/Allerac/allerac-academy), abre el archivo de la lección y haz clic en el botón de editar.
3. Haz el cambio. Al confirmar, escribe un mensaje de commit en inglés y elige **Create a new branch for this commit and start a pull request**. No elijas el commit directo en `main`.
4. En el PR, escribe un título claro y una descripción con qué, por qué y cómo revisarlo. Si hay una issue, escribe `Closes #` seguido de su número.
5. Sigue la revisión y responde a los comentarios. No hagas el merge por tu cuenta: lo hace el equipo.
6. Mándale al tutor el enlace del PR.

**En la computadora, con Codespaces (opcional):** si tienes acceso para crear un codespace en allerac-academy, puedes hacer el mismo cambio ahí: crea una rama, edita, haz el commit, publica la rama y abre el PR desde el Control de código fuente.

**Desde la tableta o el teléfono:** el camino por el sitio funciona en el navegador. Después de abrir el PR, GitHub Mobile es una buena forma de recibir el aviso de la revisión y responder a los comentarios.

**Cómo lo revisa el tutor:** existe un PR del estudiante en Allerac/allerac-academy, de una rama hacia `main`, con un cambio pequeño y enfocado, un título claro, una descripción con qué y por qué (y `Closes #` si hay una issue), y el estudiante respondió a los comentarios de la revisión.

## Para profundizar

- Editar archivos y proponer cambios desde el sitio: [documentación oficial de GitHub](https://docs.github.com/es/repositories/working-with-files/managing-files/editing-files) (en español). Revisado el 26 de noviembre de 2026.
- Vincular un pull request a una issue: [documentación oficial de GitHub](https://docs.github.com/es/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) (en español). Revisado el 26 de noviembre de 2026.
- Comentar en un pull request: [documentación oficial de GitHub](https://docs.github.com/es/pull-requests/how-tos/review-pull-requests/commenting-on-a-pull-request) (en español). Revisado el 26 de noviembre de 2026.
