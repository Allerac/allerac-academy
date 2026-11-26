# 3.2 Branches: testar sem quebrar

## Problema

A sua página está funcionando. Você quer testar um visual totalmente novo, mas não tem certeza de que vai ficar bom. Se der errado, a versão que funciona precisa continuar intacta. Como você testaria sem arriscar?

*Tente pensar numa resposta antes de seguir.*

## Blocos

### 1. Uma branch é uma linha paralela
Uma branch (ramo) é uma linha de trabalho separada dentro do mesmo repositório. Você cria uma branch a partir da versão atual, muda o que quiser nela, e a versão principal não é tocada. Se o teste der certo, você junta depois. Se der errado, é só abandonar a branch.

> **Notas para o tutor:** analogia: fazer um rascunho numa cópia do documento, em vez de riscar o original. Diferente de uma cópia comum, a branch lembra de onde saiu, e por isso dá para juntar depois.

### 2. A `main` é a versão que funciona
Quase todo repositório tem uma branch principal, normalmente chamada `main`. Num time, a combinação é simples: a `main` é a versão que funciona e que todo mundo usa. Trabalho novo vai numa branch e só entra na `main` depois de revisado.

> **Notas para o tutor:** é exatamente assim que este curso é feito: toda mudança no allerac-academy entra por uma branch e um pull request, nunca direto na `main`. Use isso como exemplo real.

### 3. Dê um nome que explique
O nome da branch diz o que está sendo feito, em inglês, com hífens no lugar de espaços:
- `try-new-colors`
- `fix-readme-typo`
- `add-contact-section`

Um nome como `teste2` não diz nada para quem vê a lista de branches.

> **Notas para o tutor:** alguns times usam prefixos (`feature/`, `fix/`). Mencione só se o aluno perguntar. O importante é ser descritivo e sem espaços.

### 4. Criar e trocar de branch no Codespaces
No Codespaces, o nome da branch atual aparece na barra de status, embaixo à esquerda. Clique nele, digite o nome da nova branch e escolha **Create new branch** (criar nova branch). A partir daí, os seus commits vão para essa branch. Ao enviar pela primeira vez, o editor oferece publicar a branch no GitHub (*Publish Branch*).

Para voltar para a `main`, clique de novo no nome da branch e escolha `main`. Os arquivos mudam para a versão daquela branch.

> **Notas para o tutor:** pelo terminal, o equivalente é `git switch -c try-new-colors`. Mostre só se o aluno preferir o terminal. Se a pessoa estranhar que os arquivos "mudaram sozinhos" ao trocar de branch, explique que cada branch tem a sua versão.

### 5. Pelo tablet ou celular
No site do GitHub dá para criar uma branch pelo navegador: na página do repositório, abra o menu de branches (onde aparece `main`), digite o nome novo e escolha criar a branch. Depois, com essa branch selecionada, edite o arquivo pelo botão de editar e faça o commit nela. Também funciona no navegador do celular, só fica mais apertado.

> **Notas para o tutor:** a documentação oficial descreve a criação de branches pelo site (menu suspenso de branches). Confirme com o aluno que a branch certa está selecionada antes do commit: no celular é fácil fazer o commit na `main` sem querer.

## Missão

**No computador (caminho principal):**

1. No codespace do `my-academy-journal`, crie uma branch chamada `try-new-colors`.
2. Peça à IA uma mudança de cores ou de visual no `index.html` e aplique.
3. Faça o commit com uma mensagem clara e publique a branch (*Publish Branch* / *push*).
4. No GitHub, alterne entre `main` e `try-new-colors` e veja que o `index.html` da `main` não mudou.
5. Conte ao tutor o nome da branch e qual é a diferença entre as duas versões.

**Pelo tablet ou celular:** crie a branch `try-new-colors` pelo menu de branches do github.com, edite o `index.html` nessa branch (com a ajuda da IA, colando a mudança) e faça o commit nela. Depois compare com a `main`.

**Como o tutor confere:** a branch `try-new-colors` existe no repositório, tem pelo menos um commit com mensagem clara, e a `main` continua com a versão anterior. O aluno explica por que a `main` não mudou.

## Para ir mais fundo

- Criar e excluir branches no site: [documentação oficial do GitHub](https://docs.github.com/pt/pull-requests/how-tos/commit-changes/managing-branches-within-your-repository) (em português). Conferido em 26 de novembro de 2026.
- Branches, commits e push no Codespaces: [controle de versão no seu codespace](https://docs.github.com/pt/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace) (em português). Conferido em 26 de novembro de 2026.
