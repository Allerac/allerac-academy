# 3.6 Sua primeira contribuição de verdade

## Problema

No módulo 0 você abriu uma issue contando algo confuso no curso. Agora você já sabe criar uma branch, fazer um commit e abrir um pull request. Em vez de só avisar, você conseguiria corrigir?

## Blocos

### 1. Da issue ao pull request
Uma issue diz "isto precisa mudar". Um pull request diz "aqui está a mudança". Num time, as duas coisas andam juntas: a issue registra o problema e a conversa, e o PR traz a solução. Qualquer pessoa do time pode propor uma correção, não só quem escreveu o original.

> **Notas para o tutor:** ligue com a lição 0.4. Se a issue que o aluno abriu já foi resolvida, ele pode escolher outra melhoria pequena no conteúdo do curso.

### 2. Comece pequeno
O melhor primeiro PR é pequeno: um erro de digitação, uma frase confusa, um link quebrado. É rápido de revisar, fácil de entender e ensina todo o caminho. Uma coisa por PR.

> **Notas para o tutor:** desencoraje um primeiro PR grande ("reescrevi a lição inteira"). Sugira mudanças em `content/pt/` (texto do curso). Não sugira mexer em código do site no primeiro PR.

### 3. Siga as regras da casa
Cada projeto tem combinados. No allerac-academy:
- toda mudança entra por branch e pull request, **nunca direto na `main`**;
- código, nomes de arquivos e mensagens de commit são em inglês;
- o texto do curso é escrito em português primeiro;
- quem faz o merge é o time da Allerac, depois da revisão.

> **Notas para o tutor:** o editor do site pode oferecer "Commit directly to the main branch". Oriente sempre a escolher "Create a new branch for this commit and start a pull request". Se o aluno fizer o commit na `main` por engano, não é o fim do mundo: avise o time no chat do curso e siga.

### 4. Conversar dentro do GitHub
A conversa sobre a mudança fica no próprio PR, não no WhatsApp: assim todo o time vê e ela fica registrada. Algumas ferramentas:
- escreva `Closes #12` na descrição para ligar o PR à issue número 12. Quando o PR entrar, a issue fecha sozinha;
- use `@nome` para chamar alguém específico;
- responda aos comentários da revisão, mesmo que seja só "feito, valeu!".

> **Notas para o tutor:** a palavra-chave (`Closes`, `Fixes`, `Resolves`) só funciona quando o PR vai para a branch padrão (`main`). Peça para o aluno não marcar pessoas sem motivo. O tom ideal é o da lição 3.3: específico e gentil.

### 5. A revisão faz parte
Talvez a pessoa revisora peça um ajuste. Isso é o processo funcionando, não uma reprovação. Você faz o ajuste na mesma branch (um commit novo entra no mesmo PR) e responde ao comentário. Quando estiver tudo certo, o time faz o merge, e o seu nome fica no histórico de um projeto real.

> **Notas para o tutor:** celebre o merge como marco: é a primeira contribuição real do aluno num projeto da Allerac. Para ajustar um PR pelo site, a pessoa abre **Files changed**, usa o menu do arquivo e escolhe editar, fazendo o commit na mesma branch.

## Missão

**Pelo site do GitHub (o caminho mais simples, em qualquer dispositivo):**

1. Escolha uma melhoria pequena no texto do curso: pode ser a sua issue do módulo 0, um erro de digitação ou uma frase confusa. O texto em português fica em `content/pt/`.
2. No [allerac-academy](https://github.com/Allerac/allerac-academy), abra o arquivo da lição e clique no botão de editar.
3. Faça a mudança. Ao confirmar, escreva uma mensagem de commit em inglês e escolha **Create a new branch for this commit and start a pull request**. Não escolha o commit direto na `main`.
4. No PR, escreva um título claro e uma descrição com o que, por que e como conferir. Se houver uma issue, escreva `Closes #` seguido do número dela.
5. Acompanhe a revisão e responda aos comentários. Não faça o merge por conta própria: o time faz.
6. Mande ao tutor o link do PR.

**No computador, pelo Codespaces (opcional):** se você tiver acesso para criar um codespace no allerac-academy, pode fazer a mesma mudança lá: crie uma branch, edite, faça o commit, publique a branch e abra o PR pelo Controle do código-fonte.

**Pelo tablet ou celular:** o caminho pelo site funciona no navegador. Depois de abrir o PR, o GitHub Mobile é uma boa forma de receber o aviso da revisão e responder aos comentários.

**Como o tutor confere:** existe um PR do aluno no Allerac/allerac-academy, de uma branch para a `main`, com uma mudança pequena e focada, título claro, descrição com o que e por que (e `Closes #` se houver issue), e o aluno respondeu a qualquer comentário da revisão.

## Para ir mais fundo

- Editar arquivos e propor mudanças pelo site: [documentação oficial do GitHub](https://docs.github.com/pt/repositories/working-with-files/managing-files/editing-files) (em português). Conferido em 26 de novembro de 2026.
- Ligar um pull request a uma issue: [documentação oficial do GitHub](https://docs.github.com/pt/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) (em português). Conferido em 26 de novembro de 2026.
- Comentar num pull request: [documentação oficial do GitHub](https://docs.github.com/pt/pull-requests/how-tos/review-pull-requests/commenting-on-a-pull-request) (em português). Conferido em 26 de novembro de 2026.
