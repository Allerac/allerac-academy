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
Puedes crear la rama y editar el archivo en github.com, haciendo un commit por paso en esa rama. Lo que no puedes es ejecutar la página: github.dev y el editor del sitio no tienen terminal. Para una vista previa, pídele a Claude que muestre la página (un artefacto) con el HTML final, o compruébala después en una pantalla más grande. Escribe en el PR lo que no pudiste probar.

> **Notas para el tutor:** los mismos límites de la lección 2.4. Acepta la vista previa de la IA en el camino móvil, pero exige que el estudiante diga en el PR cómo lo comprobó y qué quedó sin probar. Confirma que la rama correcta está seleccionada antes de cada commit.

## Misión

**En la computadora (camino principal):**

1. En el codespace de `my-academy-journal`, actualiza `main` y crea una rama para la issue de las lecciones anteriores.
2. Para cada paso de la lista: pídele a la IA solo ese paso, lee la diferencia, aplícala, ejecuta la página y comprueba. Haz un commit por paso y marca el paso en la issue.
3. Al final, comprueba cada criterio de **Terminado cuando** y mira la página en una ventana estrecha.
4. Publica la rama y abre un PR hacia `main`, con qué, por qué, **cómo comprobar** (lo que probaste) y `Closes #` con el número de la issue.
5. Todavía no hagas el merge: eso queda para la próxima lección.
6. Envíale al tutor el enlace del PR.

**Desde la tableta o el teléfono:** crea la rama desde el menú de ramas de github.com, edita `index.html` en esa rama con ayuda de la IA, un commit por paso. Usa un artefacto de Claude como vista previa. Abre el PR en el navegador y di en la descripción lo que no pudiste probar.

**Cómo lo revisa el tutor:** existe una rama con commits de mensajes claros (idealmente uno por paso), los pasos están marcados en la issue, y hay un PR abierto hacia `main` con `Closes #` y una parte **Cómo comprobar** que dice lo que se probó de verdad.

## Para profundizar

- Vincular un pull request a una issue: [documentación oficial de GitHub](https://docs.github.com/es/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) (en español). Revisado el 27 de noviembre de 2026.
- Reenviar puertos en Codespaces: [documentación oficial de GitHub](https://docs.github.com/es/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace) (en español). Revisado el 27 de noviembre de 2026.
