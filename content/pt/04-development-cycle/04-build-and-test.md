# 4.4 Fazer e testar antes da revisão

## Problema

Você terminou a tarefa, abriu o pull request e pediu revisão. Dez minutos depois chega a resposta: "A página nem abre". Faltava fechar uma tag. Como evitar que a revisão seja o primeiro lugar onde alguém testa o seu trabalho?

## Blocos

### 1. Uma branch para a tarefa
Comece da `main` atualizada e crie uma branch com um nome que lembre a tarefa, como `add-modules-section`. Alguns times colocam o número da issue no nome (`12-add-modules-section`), o que ajuda a achar a tarefa depois.

> **Notas para o tutor:** ligue com a lição 3.2. Lembre de atualizar a `main` antes (no Codespaces, o botão de sincronizar no Controle do código-fonte), para começar da versão mais recente.

### 2. Um passo de cada vez com a IA
Para cada passo da lista, dê contexto à IA: o texto da issue, qual passo você está fazendo e o arquivo atual. Peça **só aquele passo**. Leia a diferença antes de aceitar: você assina a mudança.

> **Notas para o tutor:** ligue com a lição 1.3 (contexto). Se a IA reescrever o arquivo inteiro para um passo pequeno, oriente o aluno a pedir de novo, limitando o pedido: "mude só a seção X, não mexa no resto".

### 3. Teste você primeiro
Depois de cada passo, abra a página rodando (`python3 -m http.server 8000`, da lição 2.4) e confira:
- o passo funcionou?
- o que já funcionava continua funcionando?

No fim da tarefa, passe pela lista de **Pronto quando** item por item. Para ver como fica no celular, estreite a janela do navegador até ela ficar fina como uma tela de celular.

> **Notas para o tutor:** isso é teste manual, e é o mínimo antes de pedir revisão. O módulo 5 aprofunda com roteiros de teste e testes automáticos. Se o aluno conhecer as ferramentas de desenvolvedor do navegador (modo de dispositivo), ótimo, mas não é obrigatório.

### 4. Anote o que você testou
O que você conferiu vai para a descrição do PR, na parte **Como conferir**. Por exemplo: "Abri a página, vi a seção nova com os módulos 0 a 3, estreitei a janela e o texto continuou legível." Quem revisa sabe o que já foi visto e pode focar no resto.

> **Notas para o tutor:** "testei e funciona" não ajuda quem revisa. Peça o que foi feito e o que foi visto. Também vale escrever o que **não** deu para testar.

### 5. O PR ligado à issue
Faça um commit por passo e marque o passo na issue. Quando terminar, abra o PR para a `main` e escreva `Closes #` seguido do número da issue na descrição. No merge, a issue fecha sozinha e fica ligada ao PR.

> **Notas para o tutor:** ligue com a lição 3.6. A palavra-chave só funciona quando o PR vai para a branch padrão (`main`). Se o PR resolver só parte da tarefa, o aluno pode citar a issue sem a palavra-chave (por exemplo, "Part of #12"), e ela não fecha.

### 6. Pelo tablet ou celular
No navegador, os commits são gravados diretamente na branch remota. Abra o PR e acompanhe o teste em **Checks**. Depois do merge, você poderá conferir a página publicada no celular.

> **Notas para o tutor:** Peça ao aluno os links do PR, do deploy e da página publicada. Compare o que o teste cobre com o que ele conferiu no navegador.

## Missão

1. No Codespaces, atualize a `main` e crie uma branch para a issue. Copie o [workflow de teste](/exercises/journal-check.yml) para `.github/workflows/journal-check.yml`. Faça commit só do workflow, publique com **Publish Branch** (ou `git push -u origin HEAD`) e abra um PR para a `main`. Inclua `Closes #N`, trocando `N` pelo número da issue.
2. No PR, abra **Checks** e leia o erro de **Check journal**. O teste busca uma seção com o ID `completed-modules` no HTML. O primeiro resultado deve ficar vermelho porque a seção ainda falta.
3. Na mesma branch, adicione `<section id="completed-modules">` com um título e pelo menos um módulo concluído. Rode a página, confira o conteúdo anterior e teste numa janela estreita. Faça um segundo commit e envie com **Push** (ou `git push`). Veja o mesmo PR receber o commit e o teste passar.
4. Na descrição do PR, anote o que você conferiu manualmente. O teste automático verifica a presença da seção. A lista de módulos e a leitura no celular precisam da sua conferência.
5. Abra a URL publicada e confirme que a seção ainda não está lá. Peça uma revisão se tiver alguém disponível e deixe o PR aberto para a próxima lição.

**Pelo tablet ou celular:** crie a branch e os dois commits no editor do github.com. Cada commit feito ali já fica na branch remota. Confira o teste na aba **Checks** e faça a conferência visual depois do deploy.

## Para ir mais fundo

- Ligar um pull request a uma issue: [documentação oficial do GitHub](https://docs.github.com/pt/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) (em português). Conferido em 27 de novembro de 2026.
- Encaminhar portas no Codespaces: [documentação oficial do GitHub](https://docs.github.com/pt/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace) (em português). Conferido em 27 de novembro de 2026.
