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

1. En tu `my-academy-journal`, comprueba que `main` tiene el `index.html` de la lección 2.4. Usa un repositorio público de práctica y comprueba que sus archivos y su historial se pueden publicar.
   Si necesitas un repositorio público nuevo, crea una copia de práctica con un `index.html` sencillo y sin datos personales, y úsala en las siguientes lecciones.
2. En **Settings → Pages**, elige **Deploy from a branch**, selecciona `main` y `/ (root)`, y haz clic en **Save**.
3. Sigue el despliegue en **Actions**. Vuelve a **Settings → Pages**, abre **Visit site** y guarda la URL. Ese es el sitio de producción de tu diario. Cualquiera con el enlace puede abrirlo.
4. Comprueba que la página actual carga. En las siguientes misiones vas a crear una issue, cambiar el diario y publicar una nueva versión en la misma dirección.

Puedes hacerlo desde el navegador de una computadora, tableta o teléfono. Si el despliegue falla, abre la ejecución en **Actions** y lee el primer paso con error.

## Para profundizar

- El flujo de trabajo de GitHub (GitHub flow): [documentación oficial de GitHub](https://docs.github.com/es/get-started/using-github/github-flow) (en español). Revisado el 27 de noviembre de 2026.
- Qué es GitHub Actions: [documentación oficial de GitHub](https://docs.github.com/es/actions/get-started/understand-github-actions) (en español). Revisado el 27 de noviembre de 2026.
