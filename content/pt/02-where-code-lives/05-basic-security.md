# 2.5 Segurança básica

## Problema

Você pede ajuda à IA para entrar numa conta. Ela responde: "cola aqui a sua senha que eu resolvo." Você colaria?

*Tente pensar numa resposta antes de seguir.*

## Blocos

### 1. A IA não precisa da sua senha
Uma IA pode explicar como fazer login, como recuperar o acesso ou como ativar uma configuração. Ela não precisa ver a sua senha, o código do SMS, nem a chave de um serviço para te ensinar. Se ela pedir isso, não cole. Feche o assunto e, se for preciso, comece outra conversa.

Isso vale para qualquer assistente: chat, agente ou "um colega no computador".

> **Notas para o tutor:** ligue com a lição 2.2 (não rode o que não entende) e com a 0.1 (você é responsável). Erro comum: colar "só para ela ver se está certo". A resposta é sempre não.

### 2. O que nunca colar
Não cole numa IA (nem num chat, nem num ticket público):
- senhas e códigos de verificação;
- chaves e tokens (por exemplo uma *API key*, um token do GitHub, um segredo de servidor);
- dados pessoais de outras pessoas, ou dados de clientes.

O seu nome num README que você já tornou público é uma coisa. A senha de alguém, o documento de um cliente ou o e-mail de outra pessoa são outra. Na dúvida, não cole: descreva o problema sem o dado sensível.

> **Notas para o tutor:** não peça exemplos reais da vida profissional do aluno. Mantenha genérico. Tokens e chaves voltam com força no módulo 6 (variáveis de ambiente e segredos). Se o aluno já colou algo no passado, oriente a trocar a senha ou revogar o token, sem alarme excessivo.

### 3. Verificação em duas etapas no GitHub
A verificação em duas etapas (2FA) pede, além da senha, um código ou uma confirmação no celular. Assim, só a senha não basta para entrar na sua conta.

No GitHub: **Settings**, **Password and authentication**, **Enable two-factor authentication**. O caminho recomendado é um aplicativo autenticador (TOTP), que é mais confiável do que SMS, principalmente fora dos Estados Unidos. Guarde os códigos de recuperação num lugar seguro e privado. Não os envie para o tutor, não os cole na IA e não os publique.

O [GitHub Mobile](https://docs.github.com/pt/get-started/using-github/github-mobile) também pode entrar nessa história: o aplicativo serve para proteger a conta com 2FA e para confirmar tentativas de login.

> **Notas para o tutor:** NUNCA peça senha, códigos de recuperação, prints desses códigos ou o código do autenticador. Confirme só que a pessoa ativou e que guardou os códigos em lugar seguro. Se já tiver 2FA (o GitHub passou a exigir de muita gente que contribui com código), celebre e siga. Recomendar TOTP em vez de SMS, como a documentação oficial.

## Missão

1. Ative a verificação em duas etapas na sua conta do GitHub, seguindo a [documentação oficial](https://docs.github.com/pt/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) (em português). Se já estiver ativa, confira se você ainda tem os códigos de recuperação guardados.
2. Guarde os códigos de recuperação num lugar seguro (não no repositório, não num chat e não na IA).
3. Diga ao tutor, só com um sim ou não e uma frase: se a 2FA está ativa e se os códigos de recuperação estão guardados. Não envie os códigos, nem foto deles.

Esta missão funciona bem no celular: é no telefone que o aplicativo autenticador (e, se quiser, o GitHub Mobile) mora.

**Como o tutor confere:** o aluno afirma que a 2FA está ativa e que guardou os códigos de recuperação. O tutor nunca pede senha, códigos ou prints desses códigos. Se o aluno colar um código por engano, peça para ele considerar esses códigos comprometidos, gerar novos no GitHub e não repetir o envio.

## Para ir mais fundo

- Configurar a autenticação de dois fatores: [documentação oficial do GitHub](https://docs.github.com/pt/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) (em português). Conferido em 26 de novembro de 2026.
- GitHub Mobile, inclusive 2FA no aplicativo: [documentação oficial](https://docs.github.com/pt/get-started/using-github/github-mobile) (em português). Conferido em 26 de novembro de 2026.
