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
Dá para criar a branch e editar o arquivo pelo github.com, fazendo um commit por passo nessa branch. O que não dá é rodar a página: o github.dev e o editor do site não têm terminal. Para uma prévia, peça ao Claude para mostrar a página (um artefato) com o HTML final, ou confira depois numa tela maior. Escreva no PR o que não foi possível testar.

> **Notas para o tutor:** mesmos limites da lição 2.4. Aceite a prévia da IA no caminho móvel, mas cobre que o aluno diga no PR como conferiu e o que ficou sem testar. Confirme que a branch certa está selecionada antes de cada commit.

## Missão

**No computador (caminho principal):**

1. No codespace do `my-academy-journal`, atualize a `main` e crie uma branch para a issue das lições anteriores.
2. Para cada passo da lista: peça à IA só aquele passo, leia a diferença, aplique, rode a página e confira. Faça um commit por passo e marque o passo na issue.
3. No fim, confira cada critério de **Pronto quando** e veja a página numa janela estreita.
4. Publique a branch e abra um PR para a `main`, com o que, por que, **como conferir** (o que você testou) e `Closes #` com o número da issue.
5. Ainda não faça o merge: isso fica para a próxima lição.
6. Mande ao tutor o link do PR.

**Pelo tablet ou celular:** crie a branch pelo menu de branches do github.com, edite o `index.html` nessa branch com a ajuda da IA, um commit por passo. Use um artefato do Claude como prévia. Abra o PR pelo navegador e diga na descrição o que não deu para testar.

**Como o tutor confere:** existe uma branch com commits de mensagens claras (de preferência um por passo), os passos estão marcados na issue, e há um PR aberto para a `main` com `Closes #`, e uma parte **Como conferir** que diz o que foi testado de verdade.

## Para ir mais fundo

- Ligar um pull request a uma issue: [documentação oficial do GitHub](https://docs.github.com/pt/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) (em português). Conferido em 27 de novembro de 2026.
- Encaminhar portas no Codespaces: [documentação oficial do GitHub](https://docs.github.com/pt/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace) (em português). Conferido em 27 de novembro de 2026.
