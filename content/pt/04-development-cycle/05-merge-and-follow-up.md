# 4.5 Merge e acompanhar o resultado

## Problema

O pull request foi aprovado e entrou. Todo mundo passa para a próxima tarefa. Uma semana depois, alguém percebe que a mudança nunca apareceu para quem usa, ou que ela quebrou outra coisa. De quem era o trabalho de conferir?

## Blocos

### 1. Uma última olhada antes do merge
Antes de clicar em **Merge pull request**, releia a aba **Files changed** como se fosse a pessoa revisora. Em muitos projetos aparecem também verificações automáticas no PR, com um ✓ verde ou um ✗ vermelho. Com tudo verde e a revisão aprovada, a mudança pode entrar.

> **Notas para o tutor:** no allerac-academy, a `main` é protegida: só entra mudança por PR com uma aprovação, e ninguém envia direto para a `main`. As verificações automáticas (CI) são assunto do módulo 5; aqui basta saber que elas existem.

### 2. O merge fecha a issue
Se a descrição do PR tem `Closes #` com o número da issue, o merge fecha a issue sozinho e deixa as duas ligadas. Depois do merge, o GitHub oferece apagar a branch: pode apagar, o trabalho já está na `main`.

> **Notas para o tutor:** se a issue não fechou, provavelmente a palavra-chave estava escrita errado ou o PR não foi para a `main`. O aluno pode fechar a issue à mão e citar o PR num comentário.

### 3. Conferir depois do merge
"Funcionou na minha branch" não é o mesmo que "funciona na `main`". Depois do merge, confira a versão que as pessoas vão usar. Num time com deploy automático, espere o deploy terminar (na aba **Actions**), abra o site no ar e passe de novo pelos critérios de **Pronto quando**. No seu repositório pessoal, volte para a `main`, atualize e rode a página.

> **Notas para o tutor:** no allerac-academy, isso quer dizer esperar o "Deploy" ficar verde na aba Actions e abrir o academy.allerac.ai. Publicar a página pessoal na internet fica para o módulo 6.

### 4. Se algo deu errado
Acontece, até com gente experiente. Mantenha a calma e escolha um caminho:
- se a correção é pequena e óbvia, abra uma issue e um PR novo com o ajuste;
- se a mudança atrapalha quem usa, desfaça: num PR com merge, o botão **Revert** cria um PR novo que desfaz aquela mudança.

Nada se perde: o histórico guarda tudo, inclusive o que foi desfeito.

> **Notas para o tutor:** o **Revert** não apaga o histórico, ele cria uma mudança nova que desfaz a anterior, e essa mudança também passa por PR. Tranquilize: desfazer rápido é sinal de maturidade, não de fracasso.

### 5. Fechar o ciclo com o time
Um comentário curto na issue ou no PR avisa a todo mundo: "Entrou e está no ar. Conferi a seção nova no celular e no computador." Quem pediu a tarefa fica sabendo, e quem chegar depois entende o que aconteceu. Aí sim você pega a próxima tarefa.

> **Notas para o tutor:** o tom é o das lições 3.3 e 3.6: específico e breve. Não precisa marcar ninguém num repositório pessoal.

### 6. Pelo tablet ou celular
Fazer o merge, apagar a branch, ver se a issue fechou e comentar funcionam no site do GitHub pelo navegador. O GitHub Mobile ajuda a acompanhar os avisos e responder aos comentários. Sem terminal, você não roda a página da `main` no celular: abra o `index.html` da `main` no github.com e use um artefato do Claude como prévia, ou confira depois numa tela maior.

> **Notas para o tutor:** aceite a conferência pela prévia no caminho móvel, desde que o aluno diga como conferiu. Não prometa que o app faz tudo que o site faz.

## Missão

**No computador (caminho principal):**

1. No PR da lição 4.4, faça uma última revisão na aba **Files changed**.
2. Faça o merge e apague a branch.
3. Confira que a issue fechou sozinha e que a lista de passos está toda marcada.
4. No codespace, volte para a `main`, atualize, rode a página e confira de novo cada critério de **Pronto quando**.
5. Deixe um comentário curto na issue dizendo o que você conferiu depois do merge.
6. Mande ao tutor o link da issue.

**Extra (opcional):** se o seu PR da lição 3.6 no allerac-academy já entrou, abra a aba **Actions** do repositório, encontre o "Deploy" que rodou depois do merge e procure a sua mudança no [academy.allerac.ai](https://academy.allerac.ai).

**Pelo tablet ou celular:** faça o merge e apague a branch pelo navegador, confira a issue e use um artefato do Claude com o `index.html` da `main` como prévia. No comentário, diga como conferiu.

**Como o tutor confere:** o PR está com merge, a issue fechou ligada a ele, a branch foi apagada, e há um comentário na issue dizendo o que foi conferido depois do merge (e como, no caminho móvel).

## Para ir mais fundo

- Reverter um pull request: [documentação oficial do GitHub](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request) (em português). Conferido em 27 de novembro de 2026.
- Verificações de status num pull request: [documentação oficial do GitHub](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) (em português). Conferido em 27 de novembro de 2026.
