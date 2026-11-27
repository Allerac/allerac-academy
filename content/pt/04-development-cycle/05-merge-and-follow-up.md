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
Depois do merge, espere o deploy do GitHub Pages terminar em **Actions**. Abra a URL pública do seu diário e repita os critérios de **Pronto quando**.

> **Notas para o tutor:** Peça ao aluno os links do PR, do deploy e da página publicada. Compare o que o teste cobre com o que ele conferiu no navegador.

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
No navegador do celular, você pode fazer o merge, acompanhar o deploy, abrir o site publicado e comentar na issue.

> **Notas para o tutor:** Peça ao aluno os links do PR, do deploy e da página publicada. Compare o que o teste cobre com o que ele conferiu no navegador.

## Missão

1. No PR da lição 4.4, confira **Files changed**, a revisão se houver e o resultado verde em **Checks**. Faça o merge na `main` e confirme que a issue foi fechada.
2. Em **Actions**, abra a execução de publicação do Pages disparada pelo merge. Se falhar, leia o passo com erro e registre o que falta corrigir.
3. Quando a publicação terminar, abra a mesma URL da lição 4.1. Confira que a nova seção aparece, que lista um módulo concluído e que o conteúdo antigo continua visível. Abra também no celular ou estreite a janela.
4. Comente na issue com os links do PR, da execução do deploy e da página pública. Diga o que você conferiu no site.

**Pelo tablet ou celular:** faça os mesmos passos no navegador e abra a página publicada no próprio aparelho.

## Para ir mais fundo

- Reverter um pull request: [documentação oficial do GitHub](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request) (em português). Conferido em 27 de novembro de 2026.
- Verificações de status num pull request: [documentação oficial do GitHub](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) (em português). Conferido em 27 de novembro de 2026.
