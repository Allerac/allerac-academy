# 4.3 Pasos pequeños

## Problema

Tu tarea es "Añadir una sección con los módulos completados". Le pides todo de una vez a la IA, te devuelve doscientas líneas nuevas, las pegas, y la página se rompe. ¿Dónde está el error? ¿Cómo habrías trabajado para no llegar nunca a esa situación?

*Intenta pensar en una respuesta antes de seguir.*

## Bloques

### 1. Paso pequeño, error pequeño
Cuando cambias un poco cada vez y compruebas después de cada cambio, un error solo puede estar en el último paso. En lugar de buscar en doscientas líneas, buscas en diez. Trabajar en pasos pequeños parece más lento, pero casi siempre termina antes.

> **Notas para el tutor:** analogía: montar un mueble comprobando cada paso del manual, en lugar de apretar todos los tornillos al final y descubrir que una pieza entró al revés.

### 2. Cada paso termina en algo que funciona
Un buen paso deja la página funcionando y es fácil de comprobar. Por ejemplo:
1. Añadir el título de la sección.
2. Añadir la lista de módulos.
3. Ajustar el estilo para pantallas estrechas.

Después de cada uno, abres la página y ves el resultado. Si te detienes a mitad de camino, lo que ya está hecho sigue en pie.

> **Notas para el tutor:** un paso que deja la página rota ("primero borro la sección vieja, después escribo la nueva") es señal de que se puede dividir de otra forma.

### 3. La IA ayuda a dividir
Pega el texto de la issue en una conversación con la IA y pide: "Divide esta tarea en 3 a 5 pasos pequeños. Cada paso debe dejar la página funcionando y ser fácil de comprobar." Después revisa: ¿el orden tiene sentido? ¿Algún paso sigue siendo grande? ¿Alguno sobra?

> **Notas para el tutor:** la IA suele sugerir demasiados pasos o cosas fuera del alcance ("añade pruebas automatizadas", "configura un framework"). Anima al estudiante a recortar. El plan lo decide él o ella.

### 4. La lista de pasos dentro de la issue
En GitHub, puedes escribir una lista de tareas en la descripción de la issue:

```
- [ ] Add section title
- [ ] Add list of modules
- [ ] Adjust style for narrow screens
```

GitHub muestra casillas que marcas a medida que avanzas, y la issue muestra el progreso. Todo el mundo ve en qué punto está la tarea.

> **Notas para el tutor:** la sintaxis es `- [ ]` (con un espacio dentro de los corchetes) y `- [x]` para marcado. Los puntos pueden estar en español o en inglés. Para tareas grandes, GitHub también tiene sub-issues; menciónalas solo si el estudiante pregunta.

### 5. Un paso, un commit
Cada paso suele convertirse en un commit, con un mensaje claro (lección 3.1). Así el historial cuenta la historia de la tarea, y si un paso sale mal puedes deshacer solo ese.

> **Notas para el tutor:** no seas rígido: a veces un paso se convierte en dos commits, o dos pasos pequeños en uno. El hábito importante es comprobar y hacer commits con frecuencia.

## Misión

**Desde el sitio de GitHub (en cualquier dispositivo):**

1. Abre la issue que creaste en la lección 4.2.
2. Pega su texto en una conversación con la IA y pídele que divida la tarea en 3 a 5 pasos pequeños. Recorta, junta o reordena lo que haga falta.
3. Edita la descripción de la issue y añade una sección **Pasos** con una lista de tareas (`- [ ] ...`).
4. Cuéntale al tutor por qué elegiste ese orden y cómo vas a comprobar cada paso.

**Desde la tableta o el teléfono:** editar la issue funciona en el navegador. En el teléfono, escribir `- [ ]` es incómodo, pero funciona: comprueba en la vista previa (**Preview**) que aparecieron las casillas.

**Cómo lo revisa el tutor:** la issue tiene una lista de 3 a 5 pasos con casillas, cada paso es pequeño y deja la página funcionando, y el estudiante explica el orden y cómo va a comprobar cada uno.

## Para profundizar

- Listas de tareas en GitHub: [documentación oficial de GitHub](https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#task-lists) (en español). Revisado el 27 de noviembre de 2026.
