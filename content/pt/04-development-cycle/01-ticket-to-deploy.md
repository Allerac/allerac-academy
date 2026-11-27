# 4.1 Do ticket ao deploy

## Problema

Um aplicativo que você usa todo dia ganhou um botão novo. Alguém teve a ideia, alguém fez, alguém conferiu, e um dia aquilo apareceu na sua tela. Que etapas você imagina entre "alguém teve a ideia" e "está no ar"?

*Tente pensar numa resposta antes de seguir.*

## Blocos

### 1. Toda mudança percorre um caminho
Num time, quase toda mudança passa pelas mesmas etapas:
1. **Ticket:** alguém registra o que precisa ser feito.
2. **Branch:** alguém pega a tarefa e trabalha numa linha separada.
3. **Teste:** quem fez confere se funciona.
4. **Revisão:** outra pessoa olha num pull request.
5. **Merge:** a mudança entra na `main`.
6. **Deploy:** a versão nova vai para o ar.
7. **Acompanhar:** alguém confere se deu certo de verdade.

Você já fez várias dessas etapas nos módulos 0 e 3. Este módulo junta tudo num ciclo só.

> **Notas para o tutor:** esse fluxo é parecido com o que o GitHub chama de "GitHub flow". Ligue cada etapa a algo que o aluno já fez: a issue (0.4), a branch (3.2), o PR e a revisão (3.3). Não decore a lista: o objetivo é ver o caminho inteiro.

### 2. O ticket: onde tudo começa
Um ticket é o registro de uma tarefa: o que precisa mudar e por quê. No GitHub, o ticket é uma **issue**. Ela guarda a conversa, mostra quem está cuidando e, no fim, fica ligada ao pull request que resolveu o problema. Assim, qualquer pessoa consegue descobrir depois por que uma mudança existe.

> **Notas para o tutor:** outros times usam ferramentas como Jira, Linear ou Trello. O nome muda, a ideia é a mesma. Não entre em detalhes dessas ferramentas.

### 3. Do código à revisão
Com o ticket em mãos, você cria uma branch, faz a mudança, testa e abre um pull request. Isso você já conhece. A novidade é que agora tudo fica ligado ao ticket: a branch tem um nome que lembra a tarefa, e o PR diz qual issue ele resolve.

> **Notas para o tutor:** reforce que testar vem **antes** de pedir revisão. A lição 4.4 trata disso. Testes automáticos ficam para o módulo 5.

### 4. Merge não é o fim
Depois do merge, a mudança está na `main`, mas ainda não chegou a quem usa. Para isso existe o **deploy**: colocar a versão nova no ar. Em muitos times o deploy é automático: um robô roda sozinho a cada merge na `main` e publica a versão nova em poucos minutos. No GitHub, esse robô costuma ser o **GitHub Actions**.

> **Notas para o tutor:** é assim que este curso funciona: depois de cada merge na `main` do allerac-academy, o workflow "Deploy" roda na aba **Actions** e atualiza o academy.allerac.ai. Ele só roda quando o merge mexe no site ou no conteúdo do curso (pastas `app/`, `content/` ou `tutor/`). Não explique servidores aqui: isso é o módulo 6.

### 5. Acompanhar fecha o ciclo
O trabalho só termina quando alguém confere a mudança no ar: funcionou? Quebrou outra coisa? Se deu certo, o ticket fecha e o time sabe. Se não deu, abre-se um ticket novo e o ciclo recomeça. Esse ciclo se repete o tempo todo, em tarefas grandes e pequenas.

> **Notas para o tutor:** o ponto principal é a responsabilidade: "fiz o merge" não é o mesmo que "está funcionando para quem usa". A lição 4.5 aprofunda.

## Missão

1. No seu `my-academy-journal`, confirme que a `main` tem o `index.html` da lição 2.4. Use um repositório público de exercício e confira se os arquivos e o histórico podem ser publicados antes de habilitar o Pages.
   Se você precisar de um repositório público novo, crie uma cópia de exercício com apenas um `index.html` simples, sem dados pessoais, e use essa cópia nas próximas lições.
2. Em **Settings → Pages**, escolha **Deploy from a branch**, selecione `main` e `/ (root)`, e clique em **Save**.
3. Na aba **Actions**, acompanhe a publicação. Volte a **Settings → Pages**, abra **Visit site** e guarde a URL. Essa é a produção do seu diário: qualquer pessoa com o link pode abrir.
4. Confira que a página atual carrega. Nas próximas missões, você vai abrir uma issue, mudar o diário e publicar uma nova versão nesse mesmo endereço.

O caminho funciona no navegador do computador, tablet ou celular. Se a publicação falhar, abra a execução em **Actions** e leia o primeiro passo com erro.

## Para ir mais fundo

- O fluxo de trabalho do GitHub (GitHub flow): [documentação oficial do GitHub](https://docs.github.com/pt/get-started/using-github/github-flow) (em português). Conferido em 27 de novembro de 2026.
- O que é o GitHub Actions: [documentação oficial do GitHub](https://docs.github.com/pt/actions/get-started/understand-github-actions) (em português). Conferido em 27 de novembro de 2026.
