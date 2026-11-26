# 3.3 Pull requests y revisión

## Problema

Tu diseño nuevo está listo en la rama. Antes de que entre en la versión principal, quieres que alguien del equipo lo mire, comente y diga "puede entrar". ¿Cómo ve esa persona exactamente qué cambió y conversa contigo sobre eso, sin mandarse archivos por mensaje?

## Bloques

### 1. Un pull request es una propuesta
Un pull request (PR) es un pedido: "por favor, une mi rama en `main`". Muestra todos los cambios, guarda la conversación sobre ellos y queda abierto hasta que alguien lo aprueba y hace el merge (lo une), o lo cierra.

> **Notas para el tutor:** analogía: entregarle un borrador a un colega para que lo revise antes de publicarlo, con espacio para comentarios al margen. El nombre es raro; no pierdas tiempo con su origen.

### 2. Una buena descripción
El título del PR dice lo que hace (como un commit). La descripción responde tres preguntas:
- ¿**Qué** cambió?
- ¿**Por qué** cambió?
- ¿**Cómo revisarlo?** (qué debe mirar o probar quien revisa)

Puedes pedirle a la IA un borrador de la descripción a partir de los cambios, y después ajustarlo con tus palabras.

> **Notas para el tutor:** muestra un PR real de este curso en allerac-academy como ejemplo (los títulos y descripciones están en inglés). Error común: descripción vacía o "ver commits".

### 3. Revisar: leer la diferencia
En la pestaña **Files changed** (archivos modificados), GitHub muestra la diferencia: líneas eliminadas en rojo y líneas nuevas en verde. Quien revisa lee con calma, puede comentar en una línea específica y, al final, envía la revisión: solo comentarios, aprobación o pedido de cambios.

> **Notas para el tutor:** recalca que una revisión no es un examen: es una conversación. En el repositorio personal, el estudiante revisa su propio PR para aprender el camino. En el próximo PR real, alguien de Allerac lo revisa.

### 4. Comentar con amabilidad y claridad
Un buen comentario habla del código, no de la persona, y es específico: "Este texto se corta en el teléfono, ¿podemos achicar la letra?" es mejor que "quedó mal". Cuando recibes un comentario, responde, ajusta y agradece. Que te pidan cambios es normal, incluso en el código de gente con experiencia.

> **Notas para el tutor:** para quien empieza, recibir "request changes" puede doler. Normalízalo: es el proceso funcionando. Sugiere preguntas en lugar de órdenes ("¿qué te parece si...?").

### 5. Merge y limpieza
Cuando el PR está aprobado, alguien hace clic en **Merge pull request**. Los cambios entran en `main` y el historial guarda todo el PR, con la conversación. Después, la rama se puede borrar: el trabajo ya está en `main`.

> **Notas para el tutor:** en allerac-academy, el merge lo hace el equipo de Allerac, no quien abrió el PR. En el repositorio personal, el propio estudiante hace el merge.

### 6. Desde la tableta o el teléfono
Abrir, revisar y comentar un PR funciona en el sitio de GitHub desde el navegador. La aplicación **GitHub Mobile** también permite leer, revisar y comentar pull requests, y editar archivos en un PR. Es una buena forma de seguir las revisiones desde el teléfono.

> **Notas para el tutor:** la documentación oficial de GitHub Mobile menciona "leer, revisar y colaborar en issues y pull requests" y "editar archivos en pull requests". No prometas que la aplicación hace todo lo que hace el sitio.

## Misión

**En la computadora (camino principal):**

1. En `my-academy-journal`, abre un pull request de la rama `try-new-colors` hacia `main` (GitHub muestra un aviso amarillo con el botón **Compare & pull request**, o usa el ícono de PR en el Control de código fuente de Codespaces).
2. Escribe un título claro y una descripción con qué, por qué y cómo revisarlo.
3. En la pestaña **Files changed**, deja al menos un comentario en una línea, como si fueras quien revisa.
4. Si te gusta el resultado, haz el merge. Si no, cierra el PR sin merge: también es una decisión válida.
5. Mándale al tutor el enlace del PR.

**Desde la tableta o el teléfono:** abre el PR en el sitio de GitHub desde el navegador, escribe la descripción y comenta una línea en **Files changed**. Si prefieres, usa GitHub Mobile para leer y comentar.

**Cómo lo revisa el tutor:** el PR existe, tiene un título claro, una descripción con qué, por qué y cómo revisarlo, y al menos un comentario de línea. El estudiante explica si hizo el merge o lo cerró, y por qué.

## Para profundizar

- Crear un pull request: [documentación oficial de GitHub](https://docs.github.com/es/pull-requests/how-tos/create-pull-requests/creating-a-pull-request) (en español). Revisado el 26 de noviembre de 2026.
- Revisar cambios en un pull request: [documentación oficial de GitHub](https://docs.github.com/es/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request) (en español). Revisado el 26 de noviembre de 2026.
- GitHub Mobile: [documentación oficial](https://docs.github.com/es/get-started/using-github/github-mobile) (en español). Revisado el 26 de noviembre de 2026.
