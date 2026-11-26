# 3.4 Cuando dos cambios se encuentran

## Problema

Tú y una compañera editaron la misma frase del mismo archivo, cada una de una forma distinta, en ramas diferentes. A la hora de unirlas, GitHub avisa: "This branch has conflicts". ¿Cuál de las dos versiones es la correcta? ¿Y quién decide?

*Intenta pensar en una respuesta antes de seguir.*

## Bloques

### 1. Qué es un conflicto
Casi siempre Git une las ramas solo: si cambiaron partes distintas, combina todo. El conflicto ocurre cuando las dos ramas cambiaron **las mismas líneas** de formas diferentes. Entonces Git no adivina: se detiene y pide que una persona decida.

> **Notas para el tutor:** tranquiliza: un conflicto no es error de nadie ni "rompe" el proyecto. Es una señal de que dos personas trabajaron en el mismo lugar. En un equipo, pasa todas las semanas.

### 2. Leer las marcas de conflicto
El archivo muestra las dos versiones, separadas por marcas:

```
<<<<<<< try-new-title
# My learning journey
=======
# My Academy Journal
>>>>>>> main
```

Entre `<<<<<<<` y `=======` está una versión; entre `=======` y `>>>>>>>`, la otra. El nombre junto a la marca dice de qué rama vino cada parte.

> **Notas para el tutor:** el nombre de la rama en las marcas varía según la herramienta. Lo importante es entender que hay dos lados. Las marcas se borran al final: si queda alguna, el archivo queda con basura.

### 3. Tres salidas posibles
Para cada conflicto, eliges:
- quedarte con la versión de un lado;
- quedarte con la versión del otro lado;
- escribir una tercera versión que combine las dos.

Después, borras las marcas `<<<<<<<`, `=======` y `>>>>>>>`. La decisión es de una persona, porque depende de lo que necesita el proyecto, no de cuál línea es más nueva.

> **Notas para el tutor:** en un equipo real, cuando la elección no es obvia, la persona habla con quien hizo el otro cambio antes de decidir. Conecta con la lección 3.3: el PR es el lugar de esa conversación.

### 4. La IA explica, tú decides
Pega el fragmento en conflicto en una conversación con la IA y pregunta: "Explica qué cambia cada lado de este conflicto y sugiere una versión que combine los dos." Lee la explicación, comprueba que la sugerencia tenga sentido y elige. La IA no sabe lo que acordó el equipo; tú lo sabes, o lo preguntas.

> **Notas para el tutor:** refuerza la lección 2.5: no pegues contraseñas, claves ni datos de clientes junto con el fragmento. En un conflicto de código, pide a la IA que explique con palabras sencillas qué hace cada lado antes de sugerir.

### 5. Resolverlo en el propio GitHub
Para conflictos sencillos (líneas cambiadas de los dos lados), GitHub tiene un editor de conflictos en el navegador. En el PR, haz clic en **Resolve conflicts**, edita el archivo, borra las marcas, haz clic en **Mark as resolved** y después en **Commit merge**. Los conflictos más complicados necesitan el editor de Codespaces o la línea de comandos, y ahí conviene pedir ayuda al equipo.

> **Notas para el tutor:** la documentación oficial dice que el editor de GitHub resuelve "conflictos sencillos de cambios de línea en competencia"; los demás casos van a la línea de comandos. Si el botón **Resolve conflicts** está desactivado, es un conflicto complejo: no lo fuerces, pide ayuda. En Codespaces, VS Code también muestra los conflictos con botones para aceptar un lado u otro.

### 6. Desde la tableta o el teléfono
El editor de conflictos de GitHub funciona en el navegador, así que puedes resolver un conflicto sencillo en la tableta. En el teléfono también abre, pero la pantalla pequeña dificulta ver las dos versiones: si puedes, haz esta lección en una pantalla más grande. Nunca resuelvas un conflicto sin leer los dos lados completos.

> **Notas para el tutor:** no exijas el teléfono. Si el estudiante solo tiene teléfono, acepta que cree el conflicto y lo resuelva con calma en el navegador, desplazándose por la pantalla; revisen juntos el resultado final.

## Misión

Vas a crear un conflicto a propósito en tu repositorio, para ver uno de cerca en un lugar seguro.

**En la computadora (camino principal):**

1. En `my-academy-journal`, crea la rama `try-new-title` y cambia la primera línea de `README.md` (el título) por un texto nuevo. Haz el commit y envíalo.
2. Vuelve a `main` y cambia **la misma línea** por otro texto. Haz el commit en `main` (en tu repositorio personal, y solo para este ejercicio, está bien).
3. Abre un PR de `try-new-title` hacia `main`. GitHub va a avisar que hay un conflicto.
4. Haz clic en **Resolve conflicts**. Pega el fragmento en la IA y pídele que explique los dos lados y sugiera una combinación.
5. Elige la versión final, borra las marcas, haz clic en **Mark as resolved** y **Commit merge**. Después, haz el merge del PR.
6. Cuéntale al tutor cuáles eran los dos lados, qué elegiste y por qué.

**Desde la tableta o el teléfono:** sigue los mismos pasos en el sitio de GitHub: crea la rama y edita con el menú de ramas y el botón de editar, y resuelve el conflicto en el editor de conflictos del navegador. En el teléfono, desplázate con calma para ver los dos lados completos.

**Cómo lo revisa el tutor:** el PR tuvo un conflicto, se resolvió sin que quedaran marcas `<<<<<<<`, `=======` ni `>>>>>>>` en `README.md`, y el estudiante explica los dos lados y la decisión que tomó.

## Para profundizar

- Resolver un conflicto en GitHub: [documentación oficial](https://docs.github.com/es/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-on-github) (en español). Revisado el 26 de noviembre de 2026.
