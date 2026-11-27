# 2.2 La terminal sin miedo

## Problema

Un tutorial dice: "ejecuta esto en la terminal". Aparece una pantalla negra (o casi) que pide un comando. Te bloqueas. ¿Qué es esto? ¿Y qué harías *antes* de ejecutar cualquier cosa?

*Intenta pensar en una respuesta antes de seguir.*

## Bloques

### 1. La terminal es una conversación por texto
La terminal es una forma de hablar con la computadora escribiendo comandos, en lugar de hacer clic en carpetas y botones. Escribes un pedido corto, pulsas Enter y te responde con texto. No es un lugar "demasiado avanzado": es solo otra puerta de entrada a las mismas carpetas y archivos de la lección anterior.

> **Notas para el tutor:** tranquiliza. Analogía: pedir las cosas por mensaje en lugar de ir hasta el armario. Error común: creer que un comando equivocado "rompe la computadora". Los comandos de esta lección solo miran y crean carpetas.

### 2. Cuatro comandos para empezar
Con estos cuatro comandos basta para orientarte:
- `pwd` — "¿dónde estoy?": muestra la ruta de la carpeta actual
- `ls` — "¿qué hay aquí?": enumera archivos y carpetas
- `cd` — "vamos a otra carpeta": cambia la carpeta actual, por ejemplo `cd pages`
- `mkdir` — "crea una carpeta": por ejemplo `mkdir notes`

Un extra útil: `cat` muestra el contenido de un archivo de texto, por ejemplo `cat README.md`.

En la próxima lección vas a escribir esto de verdad en el editor. Por ahora, lo importante es reconocer qué hace cada uno.

> **Notas para el tutor:** no enseñes opciones (`ls -la`, `cd ..`) salvo que el estudiante pregunte. Si pregunta: `cd ..` sube una carpeta, `cd ~` va a la carpeta personal. `mkdir` no borra nada.

### 3. Pídele a la IA que lo explique antes de ejecutarlo
Siempre que un tutorial (o la propia IA) te dé un comando que no conoces, cópialo y pregunta: "¿Qué hace este comando, paso a paso? ¿Cambia o borra algo?" Ejecútalo solo cuando la explicación tenga sentido para ti.

> **Notas para el tutor:** este es el hábito central de la lección. La IA también puede equivocarse o sugerir un comando peligroso: por eso se pregunta *antes* y se lee la respuesta. Buenos ejemplos de pregunta: "¿esto solo lee?" y "¿cómo lo deshago si sale mal?".

### 4. No ejecutes lo que no entiendes
Un comando puede borrar archivos, instalar cosas o enviar datos fuera. Si no lo entendiste, no lo ejecutes. Esto vale para tutoriales, compañeros y para la IA. Pedir otra explicación, o esperar para preguntarle al tutor, es la decisión correcta.

> **Notas para el tutor:** no le des al estudiante una lista de comandos peligrosos para memorizar, para no invitar a experimentar. Si el estudiante trae un comando que asusta, explícalo y pídele que no lo ejecute. Refuerza que "no lo sé" es una respuesta profesional.

### 5. Desde la tableta o el teléfono
La terminal es más cómoda en la computadora. En la tableta, GitHub Codespaces se abre en el navegador y la terminal funciona, sobre todo si tienes teclado. En el teléfono la pantalla se queda pequeña, y un editor ligero como github.dev **no tiene terminal**: solo edita archivos, no ejecuta comandos. Si hoy estás en el teléfono, haz la misión alternativa: el hábito de pedir una explicación ya vale la lección. La próxima vez que tengas una pantalla más grande, practicas los comandos de verdad.

> **Notas para el tutor:** sé honesto y anima. No finjas que el teléfono sustituye a la terminal. Si la persona solo tiene el teléfono, acepta la misión alternativa y acuerden practicar la terminal más adelante. La documentación oficial de GitHub confirma que se puede trabajar en un codespace desde una tableta.

## Misión

1. Pídele a la IA que te explique, en español y con palabras sencillas, qué hacen `pwd`, `ls`, `cd` y `mkdir`.
2. Elige un comando que *no* conozcas (por ejemplo, uno que aparezca en un tutorial) y pregunta: "¿Qué hace este comando? ¿Cambia o borra algo?"
3. Cuéntale al tutor, con tus palabras, qué hace cada uno de los cuatro comandos y qué entendiste del comando desconocido. Di si lo ejecutarías o no, y por qué.

En la lección siguiente, en Codespaces, practicas `pwd` y `ls` de verdad.

**Desde la tableta o el teléfono:** haz los tres pasos de arriba. Hoy no hace falta ejecutar comandos. Si estás en una tableta con teclado y quieres probar la terminal en Codespaces, adelante; si algo parece confuso, para y vuelve a la explicación de la IA.

**Cómo lo revisa el tutor:** el estudiante explica los cuatro comandos con sus propias palabras y muestra el hábito de preguntar antes de ejecutar, incluso diciendo "no lo ejecutaría" cuando no lo entendió.

## Para profundizar

*Por definir.*
