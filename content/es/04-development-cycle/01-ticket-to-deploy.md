# 4.1 Del ticket al despliegue

## Problema

Una aplicación que usas todos los días tiene un botón nuevo. Alguien tuvo la idea, alguien lo hizo, alguien lo revisó, y un día apareció en tu pantalla. ¿Qué etapas te imaginas entre "alguien tuvo la idea" y "está en línea"?

*Intenta pensar en una respuesta antes de seguir.*

## Bloques

### 1. Todo cambio recorre un camino
En un equipo, casi todo cambio pasa por las mismas etapas:
1. **Ticket:** alguien registra lo que hay que hacer.
2. **Rama:** alguien toma la tarea y trabaja en una línea separada.
3. **Prueba:** quien lo hizo comprueba que funciona.
4. **Revisión:** otra persona lo mira en un pull request.
5. **Merge:** el cambio entra en `main`.
6. **Despliegue (deploy):** la versión nueva sale en línea.
7. **Seguimiento:** alguien comprueba que de verdad funcionó.

Ya hiciste varias de estas etapas en los módulos 0 y 3. Este módulo las junta en un solo ciclo.

> **Notas para el tutor:** este flujo se parece a lo que GitHub llama "GitHub flow". Relaciona cada etapa con algo que el estudiante ya hizo: la issue (0.4), la rama (3.2), el PR y la revisión (3.3). No hay que memorizar la lista: el objetivo es ver el camino completo.

### 2. El ticket: donde empieza todo
Un ticket es el registro de una tarea: qué tiene que cambiar y por qué. En GitHub, el ticket es una **issue**. Guarda la conversación, muestra quién se encarga y, al final, queda vinculada al pull request que resolvió el problema. Así, cualquiera puede descubrir después por qué existe un cambio.

> **Notas para el tutor:** otros equipos usan herramientas como Jira, Linear o Trello. El nombre cambia, la idea es la misma. No entres en detalles de esas herramientas.

### 3. Del código a la revisión
Con el ticket en la mano, creas una rama, haces el cambio, lo pruebas y abres un pull request. Eso ya lo conoces. Lo nuevo es que ahora todo queda vinculado al ticket: la rama tiene un nombre que recuerda la tarea, y el PR dice qué issue resuelve.

> **Notas para el tutor:** refuerza que probar va **antes** de pedir revisión. La lección 4.4 trata de eso. Las pruebas automáticas quedan para el módulo 5.

### 4. El merge no es el final
Después del merge, el cambio está en `main`, pero todavía no ha llegado a quien lo usa. Para eso existe el **despliegue** (*deploy*): poner la versión nueva en línea. En muchos equipos el despliegue es automático: un robot se ejecuta solo después de cada merge en `main` y publica la versión nueva en pocos minutos. En GitHub, ese robot suele ser **GitHub Actions**.

> **Notas para el tutor:** así funciona este curso: después de cada merge en `main` de allerac-academy, el workflow "Deploy" se ejecuta en la pestaña **Actions** y actualiza academy.allerac.ai. Solo se ejecuta cuando el merge toca el sitio o el contenido del curso (las carpetas `app/`, `content/` o `tutor/`). No expliques servidores aquí: eso es el módulo 6.

### 5. El seguimiento cierra el ciclo
El trabajo solo termina cuando alguien comprueba el cambio en línea: ¿funcionó? ¿Rompió otra cosa? Si salió bien, el ticket se cierra y el equipo lo sabe. Si no, se abre un ticket nuevo y el ciclo vuelve a empezar. Este ciclo se repite todo el tiempo, en tareas grandes y pequeñas.

> **Notas para el tutor:** el punto principal es la responsabilidad: "hice el merge" no es lo mismo que "funciona para quien lo usa". La lección 4.5 lo profundiza.

## Misión

**Desde el sitio de GitHub (en cualquier dispositivo):**

1. En [allerac-academy](https://github.com/Allerac/allerac-academy), abre la pestaña **Pull requests**, haz clic en **Closed** y elige un PR con la etiqueta morada **Merged**.
2. Lee el título y la descripción: ¿qué cambió y por qué? ¿Hay una issue vinculada?
3. Mira los commits y la pestaña **Files changed**.
4. Abre la pestaña **Actions** del repositorio y encuentra el "Deploy" que se ejecutó justo después de ese merge. Un icono verde significa que salió bien.
5. Si el cambio es visible, encuéntralo en [academy.allerac.ai](https://academy.allerac.ai).
6. Cuéntale al tutor, con tus palabras, el camino de ese cambio: cuál era el problema, dónde se hizo, quién lo revisó, cuándo entró y cómo llegó a estar en línea.

**Desde la tableta o el teléfono:** todo funciona en el navegador. GitHub Mobile ayuda a leer el PR y la conversación. Para la pestaña **Actions**, usa el navegador.

**Cómo lo revisa el tutor:** el estudiante envía el enlace de un PR con merge y describe las etapas con detalles reales de ese PR (el problema, la rama, la revisión, el merge y el despliegue en la pestaña Actions). Si el PR no tiene issue o revisión, se da cuenta y lo dice.

## Para profundizar

- El flujo de trabajo de GitHub (GitHub flow): [documentación oficial de GitHub](https://docs.github.com/es/get-started/using-github/github-flow) (en español). Revisado el 27 de noviembre de 2026.
- Qué es GitHub Actions: [documentación oficial de GitHub](https://docs.github.com/es/actions/get-started/understand-github-actions) (en español). Revisado el 27 de noviembre de 2026.
