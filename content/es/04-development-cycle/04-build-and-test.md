# 4.4 Hacer y probar antes de la revisión

## Problema

Terminaste la tarea, abriste el pull request y pediste revisión. Diez minutos después llega la respuesta: "La página ni siquiera abre". Faltaba cerrar una etiqueta. ¿Cómo evitas que la revisión sea el primer lugar donde alguien prueba tu trabajo?

## Bloques

### 1. Una rama para la tarea
Empieza desde `main` actualizada y crea una rama con un nombre que recuerde la tarea, como `add-modules-section`. Algunos equipos ponen el número de la issue en el nombre (`12-add-modules-section`), lo que ayuda a encontrar la tarea después.

> **Notas para el tutor:** relaciónalo con la lección 3.2. Recuerda actualizar `main` antes (en Codespaces, el botón de sincronizar en el Control de código fuente), para empezar desde la versión más reciente.

### 2. Un paso a la vez con la IA
Para cada paso de la lista, dale contexto a la IA: el texto de la issue, qué paso estás haciendo y el archivo actual. Pide **solo ese paso**. Lee la diferencia antes de aceptarla: tú firmas el cambio.

> **Notas para el tutor:** relaciónalo con la lección 1.3 (contexto). Si la IA reescribe el archivo entero para un paso pequeño, orienta al estudiante a pedirlo de nuevo, acotando el pedido: "cambia solo la sección X, no toques el resto".

### 3. Prueba tú primero
Después de cada paso, abre la página en ejecución (`python3 -m http.server 8000`, de la lección 2.4) y comprueba:
- ¿el paso funcionó?
- ¿lo que ya funcionaba sigue funcionando?

Al final de la tarea, recorre la lista de **Terminado cuando** punto por punto. Para ver cómo queda en el teléfono, estrecha la ventana del navegador hasta que quede fina como una pantalla de teléfono.

> **Notas para el tutor:** esto es prueba manual, y es lo mínimo antes de pedir revisión. El módulo 5 lo profundiza con guiones de prueba y pruebas automáticas. Si el estudiante conoce las herramientas de desarrollo del navegador (modo dispositivo), genial, pero no es obligatorio.

### 4. Anota lo que probaste
Lo que comprobaste va en la descripción del PR, en la parte **Cómo comprobar**. Por ejemplo: "Abrí la página, vi la sección nueva con los módulos 0 a 3, estreché la ventana y el texto siguió legible." Quien revisa sabe qué ya se vio y puede centrarse en el resto.

> **Notas para el tutor:** "lo probé y funciona" no ayuda a quien revisa. Pide qué se hizo y qué se vio. También vale escribir lo que **no** se pudo probar.

### 5. El PR vinculado a la issue
Haz un commit por paso y marca el paso en la issue. Cuando termines, abre el PR hacia `main` y escribe `Closes #` seguido del número de la issue en la descripción. Al hacer el merge, la issue se cierra sola y queda vinculada al PR.

> **Notas para el tutor:** relaciónalo con la lección 3.6. La palabra clave solo funciona cuando el PR va a la rama predeterminada (`main`). Si el PR resuelve solo una parte de la tarea, el estudiante puede mencionar la issue sin la palabra clave (por ejemplo, "Part of #12"), y no se cierra.

### 6. Desde la tableta o el teléfono
En el navegador, los commits se guardan directamente en la rama remota. Abre el PR y sigue la prueba en **Checks**. Después del merge, podrás comprobar la página publicada en el teléfono.

> **Notas para el tutor:** Pide los enlaces al PR, al despliegue y a la página publicada. Compara lo que cubre la prueba con lo que el estudiante comprobó en el navegador.

## Misión

1. En Codespaces, actualiza `main` y crea una rama para la issue. Copia el [workflow de prueba](/exercises/journal-check.yml) a `.github/workflows/journal-check.yml`. Haz un commit solo con el workflow, publícalo con **Publish Branch** (o `git push -u origin HEAD`) y abre un PR hacia `main`. Añade `Closes #N`, sustituyendo `N` por el número de la issue.
2. En el PR, abre **Checks** y lee el error de **Check journal**. La prueba busca una sección con el ID `completed-modules` en el HTML. La primera ejecución debe fallar porque esa sección todavía no existe.
3. En la misma rama, añade `<section id="completed-modules">` con un título y al menos un módulo completado. Ejecuta la página, comprueba el contenido anterior y prueba en una ventana estrecha. Haz un segundo commit y envíalo con **Push** (o `git push`). Observa cómo el mismo PR recibe el commit y la prueba pasa.
4. En la descripción del PR, anota qué comprobaste manualmente. La prueba automática comprueba que la sección exista. Comprueba tú la lista de módulos y la legibilidad en el teléfono.
5. Abre la URL pública y confirma que la sección todavía no aparece. Pide una revisión si hay alguien disponible y deja el PR abierto para la próxima lección.

**En una tableta o un teléfono:** crea la rama y haz ambos commits en el editor de github.com. Cada commit que haces allí ya queda en la rama remota. Comprueba el resultado en **Checks** y revisa el aspecto de la página después del despliegue.

## Para profundizar

- Vincular un pull request a una issue: [documentación oficial de GitHub](https://docs.github.com/es/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) (en español). Revisado el 27 de noviembre de 2026.
- Reenviar puertos en Codespaces: [documentación oficial de GitHub](https://docs.github.com/es/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace) (en español). Revisado el 27 de noviembre de 2026.
