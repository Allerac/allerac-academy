# 2.3 Tu editor de código

## Problema

Ya sabes qué es un archivo y qué es una terminal. Pero abrir el proyecto en un sitio, editarlo en otro y ejecutar comandos en un tercero es agotador. ¿Dónde puede estar todo junto, en un solo lugar, sin instalar nada en tu computadora?

## Bloques

### 1. El editor es tu mesa de trabajo
Un editor de código es el programa en el que ves las carpetas, abres archivos, editas el texto y, muchas veces, tienes una terminal integrada. Visual Studio Code (VS Code) es el editor más usado del mundo. En esta lección vas a usar la versión que funciona en el navegador, así que no necesitas instalar nada.

> **Notas para el tutor:** no compares editores. La idea es "una sola mesa". La instalación local queda al final, como opcional.

### 2. GitHub Codespaces: el editor en el navegador
GitHub Codespaces abre tu repositorio en un VS Code dentro del navegador, con las carpetas, la búsqueda y una terminal de verdad listas. La cuenta personal de GitHub incluye una cuota gratuita al mes. No necesitas memorizar números: la [documentación oficial](https://docs.github.com/es/billing/concepts/product-billing/github-codespaces) explica la cuota, y puede cambiar.

Para no gastar la cuota sin necesidad:
- cuando termines, detén el codespace (cerrar la pestaña no basta);
- cuando ya no lo vayas a usar, elimina el codespace.

En la próxima lección vuelves a usar el mismo entorno. Si la cuota se acaba y no hay forma de pago, GitHub bloquea el uso hasta el mes siguiente.

> **Notas para el tutor:** no menciones horas exactas (cambian). Señala la documentación. Destaca: cerrar la pestaña no lo detiene. Detenerlo deja de gastar cómputo; eliminarlo deja de gastar almacenamiento. El estudiante usa el repositorio personal `my-academy-journal`, así que la cuota es la de la cuenta personal.

### 3. Orientarte: archivos, búsqueda y terminal
Cuando se abra Codespaces, fíjate en tres piezas:
- a la izquierda, el explorador de archivos (la lista de carpetas y archivos);
- la búsqueda (icono de lupa), para encontrar un texto en cualquier archivo;
- abajo, la terminal integrada, donde ejecutas `pwd` y `ls`.

Haz clic en `index.html` y en `README.md` para verlos. Es el mismo repositorio del módulo 0, ahora con una mesa de trabajo completa.

Los menús de VS Code salen en inglés por defecto. En el curso usamos esos nombres en inglés (como **Terminal** o **Source Control**), así que no hace falta cambiar nada; si prefieres verlo en español, puedes pedirle a la IA que te explique cómo cambiar el idioma de VS Code.

> **Notas para el tutor:** los iconos pueden variar un poco, pero explorador, búsqueda y terminal siempre están en VS Code. Si la terminal no aparece: menú Terminal, o el panel de abajo. Si el codespace tarda, es normal la primera vez. Cambiar el idioma no es necesario; si la persona lo pide, el comando es "Configure Display Language" e instalar el paquete de idioma español.

### 4. Desde la tableta o el teléfono
La documentación de GitHub lo confirma: se puede trabajar en un codespace desde una tableta. Funciona mejor con teclado. La pantalla de un teléfono se queda pequeña y no es un buen lugar para el editor completo.

En el teléfono (y en la tableta, si Codespaces no ayuda), usa **github.dev**: en el repositorio, cambia `github.com` por `github.dev` en la barra de direcciones. Si tienes teclado, también puedes pulsar la tecla `.` (punto). Es el mismo tipo de editor, se abre al instante y es gratis, pero **no tiene terminal y no ejecuta el proyecto**. Puedes ver carpetas, abrir archivos y buscar texto.

También puedes navegar y editar archivos en el propio sitio github.com, desde el navegador del teléfono. Y la aplicación **GitHub Mobile** (Android e iOS) sirve para mirar el repositorio, las issues y los pull requests, no para sustituir al editor.

> **Notas para el tutor:** sé honesto sobre los límites. github.dev es VS Code for the Web: sin cómputo y sin terminal, según la documentación oficial. Codespaces en tableta es oficial ("trabaja en tu computadora, en la computadora de un amigo o en una tableta"). En el teléfono, acepta el explorador y la búsqueda en github.dev o en github.com, sin exigir terminal. Pulsar `.` en el teléfono es difícil; cambiar la URL es el camino más realista.

### 5. Opcional: VS Code en tu computadora
Si quieres, puedes [instalar VS Code](https://code.visualstudio.com/) en tu computadora y abrir el proyecto allí, o conectar tu VS Code local a Codespaces. No es necesario para este curso: el camino principal sigue siendo el editor en el navegador.

> **Notas para el tutor:** que sea corto. No enseñes a clonar con `git clone` ahora. Si la persona ya tiene VS Code, genial; si no, no insistas.

## Misión

**En la computadora (camino principal):**

1. Abre el repositorio `my-academy-journal` en GitHub.
2. Haz clic en el botón **Code**, abre la pestaña **Codespaces** y crea un codespace (puedes usar las opciones predeterminadas). La primera vez puede tardar uno o dos minutos.
3. En el editor, encuentra `index.html` en el explorador de archivos, abre `README.md` y usa la búsqueda para encontrar una palabra que escribiste en el README.
4. Abre la terminal integrada y ejecuta `pwd` y `ls`. Comprueba que la lista se parece a los archivos del repositorio.
5. Cuando termines esta sesión, detén el codespace en [github.com/codespaces](https://github.com/codespaces) (menú **...**, luego **Stop codespace**).
6. Cuéntale al tutor qué viste con `pwd` y `ls`, y si encontraste la palabra con la búsqueda.

**Desde la tableta o el teléfono:**

- **En la tableta:** si puedes, sigue el camino de Codespaces de arriba, mejor con teclado. Si la pantalla molesta, usa el camino del teléfono.
- **En el teléfono:** abre `my-academy-journal` en el navegador y cambia `github.com` por `github.dev` en la URL (o edita desde el propio github.com). Abre `index.html` y `README.md`, y usa la búsqueda si aparece. Cuéntale al tutor qué encontraste. No intentes ejecutar `pwd` ni `ls`: github.dev no tiene terminal. Si solo quieres revisar el repositorio, [GitHub Mobile](https://docs.github.com/es/get-started/using-github/github-mobile) también sirve para mirar archivos, issues y cómo va el trabajo.

**Cómo lo revisa el tutor:** en el camino principal, el estudiante abrió el repositorio en el editor, encontró los dos archivos, usó la búsqueda y ejecutó `pwd` y `ls`. En el camino móvil, encontró los mismos archivos en github.dev o en github.com y explica el límite (sin terminal).

## Para profundizar

- Cómo crear un codespace: [documentación oficial de GitHub](https://docs.github.com/es/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository) (en español). Revisado el 26 de noviembre de 2026.
- Cómo detener y reanudar un codespace: [detener e iniciar](https://docs.github.com/es/codespaces/developing-in-a-codespace/stopping-and-starting-a-codespace) (en español). Revisado el 26 de noviembre de 2026.
- El editor en el navegador, sin terminal: [VS Code for the Web en GitHub (github.dev)](https://docs.github.com/es/codespaces/the-githubdev-web-based-editor) (en español). Revisado el 26 de noviembre de 2026.
- La interfaz de VS Code: [User interface](https://code.visualstudio.com/docs/editing/getting-started/userinterface) (documentación oficial, en inglés). Revisado el 26 de noviembre de 2026.
