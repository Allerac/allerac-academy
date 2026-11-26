# 2.5 Seguridad básica

## Problema

Le pides ayuda a la IA para entrar en una cuenta. Te responde: "pega aquí tu contraseña y lo soluciono." ¿La pegarías?

*Intenta pensar en una respuesta antes de seguir.*

## Bloques

### 1. La IA no necesita tu contraseña
Una IA puede explicarte cómo iniciar sesión, cómo recuperar el acceso o cómo activar una configuración. No necesita ver tu contraseña, el código del SMS ni la clave de un servicio para enseñarte. Si te lo pide, no lo pegues. Cierra el tema y, si hace falta, empieza otra conversación.

Esto vale para cualquier asistente: chat, agente o "un compañero en la computadora".

> **Notas para el tutor:** conéctalo con la lección 2.2 (no ejecutes lo que no entiendes) y con la 0.1 (tú eres responsable). Error común: pegarlo "solo para que vea si está bien". La respuesta es siempre no.

### 2. Lo que nunca debes pegar
No pegues en una IA (ni en un chat, ni en un ticket público):
- contraseñas y códigos de verificación;
- claves y tokens (por ejemplo una *API key*, un token de GitHub, un secreto de servidor);
- datos personales de otras personas, o datos de clientes.

Tu nombre en un README que ya hiciste público es una cosa. La contraseña de alguien, el documento de un cliente o el correo de otra persona son otra. Ante la duda, no lo pegues: describe el problema sin el dato sensible.

> **Notas para el tutor:** no pidas ejemplos reales de la vida profesional del estudiante. Mantenlo genérico. Los tokens y las claves vuelven con fuerza en el módulo 6 (variables de entorno y secretos). Si el estudiante ya pegó algo en el pasado, oriéntalo para cambiar la contraseña o revocar el token, sin alarmar de más.

### 3. Verificación en dos pasos en GitHub
La verificación en dos pasos (2FA) pide, además de la contraseña, un código o una confirmación en el teléfono. Así, la contraseña sola no basta para entrar en tu cuenta.

En GitHub: **Settings**, **Password and authentication**, **Enable two-factor authentication**. El camino recomendado es una aplicación de autenticación (TOTP), que es más fiable que el SMS, sobre todo fuera de Estados Unidos. Guarda los códigos de recuperación en un lugar seguro y privado. No se los envíes al tutor, no los pegues en la IA y no los publiques.

[GitHub Mobile](https://docs.github.com/es/get-started/using-github/github-mobile) también puede formar parte de esto: la aplicación sirve para proteger la cuenta con 2FA y para confirmar intentos de inicio de sesión.

> **Notas para el tutor:** NUNCA pidas la contraseña, los códigos de recuperación, capturas de esos códigos ni el código de la aplicación de autenticación. Confirma solo que la persona lo activó y que guardó los códigos en un lugar seguro. Si ya tiene 2FA (GitHub empezó a exigirlo a mucha gente que contribuye con código), celébralo y sigue. Recomienda TOTP en lugar de SMS, como la documentación oficial.

## Misión

1. Activa la verificación en dos pasos en tu cuenta de GitHub, siguiendo la [documentación oficial](https://docs.github.com/es/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) (en español). Si ya está activa, comprueba que todavía tienes guardados los códigos de recuperación.
2. Guarda los códigos de recuperación en un lugar seguro (no en el repositorio, no en un chat y no en la IA).
3. Dile al tutor, solo con un sí o un no y una frase: si la 2FA está activa y si los códigos de recuperación están guardados. No envíes los códigos ni una foto de ellos.

Esta misión funciona bien en el teléfono: es en el teléfono donde vive la aplicación de autenticación (y, si quieres, GitHub Mobile).

**Cómo lo revisa el tutor:** el estudiante afirma que la 2FA está activa y que guardó los códigos de recuperación. El tutor nunca pide contraseña, códigos ni capturas de esos códigos. Si el estudiante pega un código por error, pídele que considere esos códigos comprometidos, genere otros nuevos en GitHub y no vuelva a enviarlos.

## Para profundizar

- Configurar la autenticación en dos fases: [documentación oficial de GitHub](https://docs.github.com/es/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) (en español). Revisado el 26 de noviembre de 2026.
- GitHub Mobile, incluida la 2FA en la aplicación: [documentación oficial](https://docs.github.com/es/get-started/using-github/github-mobile) (en español). Revisado el 26 de noviembre de 2026.
