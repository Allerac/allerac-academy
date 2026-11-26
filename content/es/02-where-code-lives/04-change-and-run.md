# 2.4 Cambiar algo con la IA y verlo funcionar

## Problema

Mejoraste tu página con la ayuda de la IA, pero en GitHub el archivo sigue siendo el antiguo. ¿Cómo ves la página de verdad en el navegador, compruebas que quedó bien y guardas la nueva versión?

## Bloques

### 1. Pedir un ajuste y revisar el archivo
Vuelve a abrir el codespace de `my-academy-journal` (o crea uno, si no lo tienes). Pídele a la IA (Claude en otra pestaña, o el chat del editor, si aparece) una mejora concreta en `index.html`: un color, un texto, una sección nueva. Pega la sugerencia en el archivo, o deja que la IA la aplique, y **lee la diferencia** antes de seguir. Quien firma el cambio eres tú.

> **Notas para el tutor:** conéctalo con las lecciones 1.2 y 1.5: revisar e iterar. No exijas Claude Code ni Copilot. Basta con un chat en una pestaña al lado. Una mejora pequeña es suficiente.

### 2. Ver la página funcionando
En la terminal de Codespaces, en la carpeta del proyecto, ejecuta:

```
python3 -m http.server 8000
```

Este comando levanta un servidor sencillo en el puerto 8000 y sirve los archivos de la carpeta. Codespaces suele reenviar el puerto solo y mostrar un botón para abrirlo en el navegador. Si no aparece, abre el panel **Ports** y abre el puerto 8000.

Mira la página con calma. Si algo se ve raro, vuelve a la IA, ajusta y recarga. Si el comando no funciona, pídele a la IA que te explique el mensaje de error; no ejecutes un comando alternativo que no entendiste.

> **Notas para el tutor:** la imagen predeterminada de Codespaces normalmente tiene Python. Si no lo tiene, la persona pide ayuda a la IA, sin inventar herramientas. El reenvío automático de puertos está en la documentación oficial. No enseñes GitHub Pages aquí (queda para el módulo 6). Para detener el servidor: Ctrl+C en la terminal.

### 3. Guardar y enviar la versión nueva
Cuando la página esté como quieres, haz un commit y envíalo a GitHub. En Codespaces, lo más sencillo es el icono de **Source Control** (control de código fuente, a la izquierda): escribe un mensaje claro en inglés, por ejemplo `Improve personal web page`, confirma y haz el *push* (Sync / Push) al repositorio.

Es el mismo "guardar con historial" del módulo 0, ahora desde dentro del editor. Las ramas (branches) y los pull requests quedan para el módulo 3: en este repositorio personal, hacer commit en la rama principal está bien.

Al final, detén el codespace para no gastar cuota.

> **Notas para el tutor:** no profundices en git (status, add, branch). La interfaz de Source Control es suficiente. Si quieren usar la terminal: `git add index.html`, `git commit -m "Improve personal web page"`, `git push`. Mensajes en inglés. Confirma que el archivo en GitHub cambió.

### 4. Desde la tableta o el teléfono
En la tableta, si Codespaces es usable (mejor con teclado), sigue el camino principal: editar, ver la página en el puerto 8000 y hacer el commit.

En el teléfono, el camino realista es otro. Edita `index.html` en github.com (botón de editar el archivo) o en github.dev (cambia `github.com` por `github.dev` en la URL), pídele la mejora a la IA, pégala y revísala, y haz el commit desde ahí. github.dev **no tiene terminal**, así que no puedes ejecutar `python3 -m http.server` ni ver el servidor local.

Para hacerte una idea del resultado en el teléfono, pídele a Claude que te muestre la página (un artefacto) con el HTML final, o abre el archivo más tarde en una computadora o tableta. Es una vista previa, no lo mismo que ver el archivo servido de verdad. [GitHub Mobile](https://docs.github.com/es/get-started/using-github/github-mobile) ayuda a revisar el commit después, no a ejecutar la página.

> **Notas para el tutor:** no recomiendes servicios de vista previa de terceros. Sé explícito: sin terminal no hay servidor local. Acepta el artefacto de Claude o la revisión visual del HTML como vista previa, y el commit en GitHub como la parte obligatoria. En la tableta con Codespaces, pide la vista previa de verdad.

## Misión

**En la computadora (camino principal):**

1. Abre el codespace de `my-academy-journal`.
2. Pídele a la IA una mejora en `index.html` y aplica al menos un cambio que hayas entendido.
3. Ejecuta `python3 -m http.server 8000`, abre la página en el navegador y revisa el resultado.
4. Haz el commit con un mensaje claro en inglés y envíalo (*push*) a GitHub.
5. Detén el codespace.
6. Envía al tutor el enlace del archivo en GitHub y cuenta qué cambió y qué viste en el navegador.

**Desde la tableta o el teléfono:**

- **En la tableta:** si Codespaces funciona, sigue el camino principal.
- **En el teléfono:** edita `index.html` en github.com o en github.dev, con ayuda de la IA, y haz el commit. Para la vista previa, usa un artefacto de Claude con el HTML final (o míralo después en una pantalla más grande). Cuéntale al tutor el enlace del archivo, qué cambió, cómo lo revisaste y que no fue posible ejecutar el servidor en el teléfono.

**Cómo lo revisa el tutor:** `index.html` en el repositorio tiene un commit nuevo, con un mensaje claro, y el estudiante describe el cambio. En el camino principal, además vio la página servida en el navegador. En el camino móvil, explica cómo la revisó (vista previa de la IA o pantalla más grande) y el límite de la terminal.

## Para profundizar

- Reenviar puertos en Codespaces: [documentación oficial de GitHub](https://docs.github.com/es/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace) (en español). Revisado el 26 de noviembre de 2026.
- Editar archivos en GitHub: [documentación oficial](https://docs.github.com/es/repositories/working-with-files/managing-files/editing-files) (en español). Revisado el 26 de noviembre de 2026.
