# 4.5 Merge y seguimiento del resultado

## Problema

El pull request se aprobó y entró. Todo el mundo pasa a la siguiente tarea. Una semana después, alguien se da cuenta de que el cambio nunca llegó a quien lo usa, o de que rompió otra cosa. ¿De quién era el trabajo de comprobarlo?

## Bloques

### 1. Una última mirada antes del merge
Antes de hacer clic en **Merge pull request**, vuelve a leer la pestaña **Files changed** como si fueras la persona revisora. En muchos proyectos también aparecen comprobaciones automáticas en el PR, con un ✓ verde o una ✗ roja. Con todo en verde y la revisión aprobada, el cambio puede entrar.

> **Notas para el tutor:** en allerac-academy, `main` está protegida: los cambios solo entran por un PR con una aprobación, y nadie envía cambios directamente a `main`. Las comprobaciones automáticas (CI) son tema del módulo 5; aquí basta con saber que existen.

### 2. El merge cierra la issue
Si la descripción del PR tiene `Closes #` con el número de la issue, el merge cierra la issue solo y deja las dos vinculadas. Después del merge, GitHub ofrece borrar la rama: puedes borrarla, el trabajo ya está en `main`.

> **Notas para el tutor:** si la issue no se cerró, probablemente la palabra clave estaba mal escrita o el PR no fue a `main`. El estudiante puede cerrar la issue a mano y mencionar el PR en un comentario.

### 3. Comprobar después del merge
"Funcionó en mi rama" no es lo mismo que "funciona en `main`". Después del merge, comprueba la versión que la gente va a usar. En un equipo con despliegue automático, espera a que termine el despliegue (en la pestaña **Actions**), abre el sitio en línea y vuelve a recorrer los criterios de **Terminado cuando**. En tu repositorio personal, vuelve a `main`, actualízala y ejecuta la página.

> **Notas para el tutor:** en allerac-academy, eso significa esperar a que "Deploy" se ponga en verde en la pestaña Actions y abrir academy.allerac.ai. Publicar la página personal en internet queda para el módulo 6.

### 4. Si algo salió mal
Pasa, incluso a gente con experiencia. Mantén la calma y elige un camino:
- si la corrección es pequeña y obvia, abre una issue y un PR nuevo con el ajuste;
- si el cambio estorba a quien lo usa, deshazlo: en un PR con merge, el botón **Revert** crea un PR nuevo que deshace ese cambio.

Nada se pierde: el historial lo guarda todo, incluso lo que se deshizo.

> **Notas para el tutor:** **Revert** no borra el historial; crea un cambio nuevo que deshace el anterior, y ese cambio también pasa por un PR. Tranquiliza al estudiante: deshacer rápido es señal de madurez, no de fracaso.

### 5. Cerrar el ciclo con el equipo
Un comentario corto en la issue o en el PR avisa a todos: "Ya entró y está en línea. Comprobé la sección nueva en el teléfono y en la computadora." Quien pidió la tarea se entera, y quien llegue después entiende lo que pasó. Entonces sí, tomas la siguiente tarea.

> **Notas para el tutor:** el tono es el de las lecciones 3.3 y 3.6: específico y breve. No hace falta mencionar a nadie en un repositorio personal.

### 6. Desde la tableta o el teléfono
Hacer el merge, borrar la rama, ver si la issue se cerró y comentar funcionan en el sitio de GitHub desde el navegador. GitHub Mobile ayuda a seguir los avisos y responder a los comentarios. Sin terminal, no puedes ejecutar la página de `main` en el teléfono: abre el `index.html` de `main` en github.com y usa un artefacto de Claude como vista previa, o compruébalo después en una pantalla más grande.

> **Notas para el tutor:** acepta la comprobación con la vista previa en el camino móvil, siempre que el estudiante diga cómo lo comprobó. No prometas que la app hace todo lo que hace el sitio.

## Misión

**En la computadora (camino principal):**

1. En el PR de la lección 4.4, haz una última revisión en la pestaña **Files changed**.
2. Haz el merge y borra la rama.
3. Comprueba que la issue se cerró sola y que la lista de pasos está toda marcada.
4. En el codespace, vuelve a `main`, actualízala, ejecuta la página y comprueba otra vez cada criterio de **Terminado cuando**.
5. Deja un comentario corto en la issue diciendo qué comprobaste después del merge.
6. Envíale al tutor el enlace de la issue.

**Extra (opcional):** si tu PR de la lección 3.6 en allerac-academy ya entró, abre la pestaña **Actions** del repositorio, encuentra el "Deploy" que se ejecutó después del merge y busca tu cambio en [academy.allerac.ai](https://academy.allerac.ai).

**Desde la tableta o el teléfono:** haz el merge y borra la rama desde el navegador, comprueba la issue y usa un artefacto de Claude con el `index.html` de `main` como vista previa. En el comentario, di cómo lo comprobaste.

**Cómo lo revisa el tutor:** el PR tiene merge, la issue se cerró vinculada a él, la rama se borró, y hay un comentario en la issue que dice qué se comprobó después del merge (y cómo, en el camino móvil).

## Para profundizar

- Revertir un pull request: [documentación oficial de GitHub](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request) (en español). Revisado el 27 de noviembre de 2026.
- Comprobaciones de estado en un pull request: [documentación oficial de GitHub](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) (en español). Revisado el 27 de noviembre de 2026.
