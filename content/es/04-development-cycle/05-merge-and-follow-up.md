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
Después del merge, espera el despliegue de GitHub Pages en **Actions**. Abre la URL pública del diario y vuelve a comprobar los criterios de aceptación.

> **Notas para el tutor:** Pide los enlaces al PR, al despliegue y a la página publicada. Compara lo que cubre la prueba con lo que el estudiante comprobó en el navegador.

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
En el navegador del teléfono puedes hacer el merge, seguir el despliegue, abrir el sitio publicado y comentar en la issue.

> **Notas para el tutor:** Pide los enlaces al PR, al despliegue y a la página publicada. Compara lo que cubre la prueba con lo que el estudiante comprobó en el navegador.

## Misión

1. En el PR de la lección 4.4, comprueba **Files changed**, la revisión si la hubo y el resultado en verde en **Checks**. Haz el merge en `main` y confirma que la issue se cerró.
2. En **Actions**, abre el despliegue de Pages iniciado por el merge. Si falla, lee el paso con error y anota qué falta corregir.
3. Cuando termine el despliegue, abre la misma URL de la lección 4.1. Comprueba que la sección nueva aparece, que muestra un módulo completado y que el contenido anterior sigue visible. Abre la página en un teléfono o estrecha la ventana.
4. Comenta en la issue con enlaces al PR, a la ejecución del despliegue y a la página pública. Indica qué comprobaste en el sitio publicado.

**En una tableta o un teléfono:** sigue los mismos pasos en el navegador y abre la página publicada en el dispositivo.

## Para profundizar

- Revertir un pull request: [documentación oficial de GitHub](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request) (en español). Revisado el 27 de noviembre de 2026.
- Comprobaciones de estado en un pull request: [documentación oficial de GitHub](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) (en español). Revisado el 27 de noviembre de 2026.
