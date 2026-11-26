# 3.3 Pull requests e revisão

## Problema

O seu visual novo ficou pronto na branch. Antes de entrar na versão principal, você quer que alguém do time olhe, comente e diga "pode entrar". Como essa pessoa vê exatamente o que mudou e conversa com você sobre isso, sem trocar arquivos por mensagem?

## Blocos

### 1. Um pull request é uma proposta
Um pull request (PR) é um pedido: "por favor, junte a minha branch na `main`". Ele mostra todas as mudanças, guarda a conversa sobre elas e fica aberto até alguém aprovar e fazer o merge (juntar), ou fechar.

> **Notas para o tutor:** analogia: entregar um rascunho para um colega revisar antes de publicar, com espaço para comentários na margem. O nome é estranho ("pedido para puxar"); não gaste tempo com a origem.

### 2. Uma boa descrição
O título do PR diz o que ele faz (como um commit). A descrição responde três perguntas:
- **O que** mudou?
- **Por que** mudou?
- **Como conferir?** (o que a pessoa revisora deve olhar ou testar)

Você pode pedir à IA um rascunho da descrição a partir das mudanças, e depois ajustar com as suas palavras.

> **Notas para o tutor:** mostre um PR real deste curso no allerac-academy como exemplo (os títulos e descrições estão em inglês). Erro comum: descrição vazia ou "ver commits".

### 3. Revisar: ler a diferença
Na aba **Files changed** (arquivos alterados), o GitHub mostra a diferença: linhas removidas em vermelho e linhas novas em verde. Quem revisa lê com calma, pode comentar numa linha específica e, no fim, envia a revisão: só comentários, aprovação, ou pedido de mudanças.

> **Notas para o tutor:** reforce que revisão não é prova: é conversa. No repositório pessoal, o aluno revisa o próprio PR para aprender o caminho. No próximo PR real, alguém da Allerac revisa.

### 4. Comentar com gentileza e clareza
Um bom comentário fala do código, não da pessoa, e é específico: "Esse texto ficou cortado no celular, dá para diminuir a fonte?" é melhor do que "ficou ruim". Ao receber um comentário, responda, ajuste e agradeça. Pedir mudanças é normal, até em código de gente experiente.

> **Notas para o tutor:** para quem está começando, receber "request changes" pode doer. Normalize: é o processo funcionando. Sugira perguntas no lugar de ordens ("o que acha de...?").

### 5. Merge e limpeza
Quando o PR está aprovado, alguém clica em **Merge pull request**. As mudanças entram na `main` e o histórico guarda o PR inteiro, com a conversa. Depois, a branch pode ser apagada: o trabalho já está na `main`.

> **Notas para o tutor:** no allerac-academy, quem faz o merge é o time da Allerac, não quem abriu o PR. No repositório pessoal, o próprio aluno faz o merge.

### 6. Pelo tablet ou celular
Abrir, revisar e comentar um PR funciona no site do GitHub pelo navegador. O aplicativo **GitHub Mobile** também permite ler, revisar e comentar pull requests, e editar arquivos num PR. É uma boa forma de acompanhar revisões pelo celular.

> **Notas para o tutor:** a documentação oficial do GitHub Mobile lista "ler, analisar e colaborar em issues e pull requests" e "editar arquivos em solicitações de pull". Não prometa que o app faz tudo que o site faz.

## Missão

**No computador (caminho principal):**

1. No `my-academy-journal`, abra um pull request da branch `try-new-colors` para a `main` (o GitHub mostra um aviso amarelo com o botão **Compare & pull request**, ou use o ícone de PR no Controle do código-fonte do Codespaces).
2. Escreva um título claro e uma descrição com o que, por que e como conferir.
3. Na aba **Files changed**, deixe pelo menos um comentário numa linha, como se você fosse a pessoa revisora.
4. Se gostar do resultado, faça o merge. Se não gostar, feche o PR sem merge: também é uma decisão válida.
5. Mande ao tutor o link do PR.

**Pelo tablet ou celular:** abra o PR pelo site do GitHub no navegador, escreva a descrição e comente uma linha em **Files changed**. Se preferir, use o GitHub Mobile para ler e comentar.

**Como o tutor confere:** o PR existe, tem título claro, descrição com o que, por que e como conferir, e pelo menos um comentário de linha. O aluno explica se fez o merge ou fechou, e por quê.

## Para ir mais fundo

- Criar um pull request: [documentação oficial do GitHub](https://docs.github.com/pt/pull-requests/how-tos/create-pull-requests/creating-a-pull-request) (em português). Conferido em 26 de novembro de 2026.
- Revisar mudanças num pull request: [documentação oficial do GitHub](https://docs.github.com/pt/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request) (em português). Conferido em 26 de novembro de 2026.
- GitHub Mobile: [documentação oficial](https://docs.github.com/pt/get-started/using-github/github-mobile) (em português). Conferido em 26 de novembro de 2026.
