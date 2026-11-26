# 3.1 Commits que contam uma história

## Problema

Você abre o histórico de um projeto para descobrir quando um texto mudou. A lista diz: "update", "fix", "mudanças", "asdf", "agora vai". Qual desses commits mudou o texto? Como você escreveria para que a resposta fosse óbvia?

*Tente pensar numa resposta antes de seguir.*

## Blocos

### 1. O histórico é para o futuro
Cada commit é uma foto do trabalho com uma mensagem. Quem lê essa mensagem quase nunca é você hoje: é alguém do time daqui a um mês, ou você mesmo daqui a um ano, tentando entender o que aconteceu. Uma boa mensagem economiza o tempo dessa pessoa.

> **Notas para o tutor:** ligue com a lição 0.3, onde o aluno fez o primeiro commit. Analogia: etiquetas em caixas de mudança. "Coisas" não ajuda; "Cozinha: pratos e copos" ajuda.

### 2. Um título curto que diz o que você fez
A primeira linha do commit é o título. Ela é curta (umas 50 letras), em inglês, e começa com um verbo no imperativo, como se completasse a frase "este commit vai...":
- `Add contact section to personal page`
- `Fix typo in README introduction`
- `Change page title color to dark blue`

E não: `update`, `fix`, `changes`.

> **Notas para o tutor:** o imperativo (Add, Fix, Change, Remove) é a convenção mais comum. Não seja rígido com o limite de letras: o importante é ser claro e específico. Se o aluno travar no inglês, ele pode pedir ajuda à IA.

### 3. O porquê, quando não é óbvio
Depois do título, você pode deixar uma linha em branco e escrever um corpo curto explicando **por que** fez a mudança. O "o quê" o código já mostra; o "por quê" só você sabe. Nem todo commit precisa de corpo: use quando a razão não for óbvia.

> **Notas para o tutor:** exemplo: título `Make buttons larger on small screens`, corpo `Users on phones were tapping the wrong button.` No Codespaces e no site do GitHub há um campo de descrição para isso.

### 4. Um commit, uma ideia
Se você corrigiu um erro de digitação e também mudou o layout inteiro, são duas ideias. Em dois commits fica mais fácil entender, revisar e, se preciso, desfazer só uma delas.

> **Notas para o tutor:** não exija perfeição de iniciante. A meta é o hábito: antes de fazer o commit, perguntar "isso é uma coisa só?".

### 5. A IA ajuda a escrever, você confere
Você pode mostrar à IA o que mudou e pedir: "Escreva uma mensagem de commit em inglês, curta, no imperativo." Depois leia: a mensagem descreve mesmo o que você fez? A IA não sabe o seu porquê se você não contar.

> **Notas para o tutor:** no Codespaces pode aparecer um botão de sugerir mensagem com IA. Tudo bem usar, desde que o aluno leia e ajuste. Erro comum: aceitar uma mensagem genérica que a IA inventou.

## Missão

**No computador (caminho principal):**

1. Abra o codespace do `my-academy-journal`.
2. No `README.md`, acrescente uma linha sobre algo que você aprendeu no módulo 2.
3. Faça o commit com um título claro em inglês, no imperativo (por exemplo, `Add Module 2 learning to README`). Se quiser, peça ajuda à IA para escrever e depois confira.
4. Envie (*push*) e abra o histórico de commits do repositório no GitHub.
5. Mande ao tutor a sua mensagem e reescreva estas três mensagens ruins de um jeito melhor: `update`, `fix`, `mudanças na página`. Para essas, invente uma mudança plausível.

**Pelo tablet ou celular:** edite o `README.md` direto no github.com (botão de editar o arquivo), escreva a mensagem no campo de commit e confirme. O resto da missão é igual.

**Como o tutor confere:** o commit novo existe, com um título específico em inglês, e as três mensagens reescritas dizem claramente o que mudou.

## Para ir mais fundo

- Sobre o Git e o histórico de versões: [documentação oficial do GitHub](https://docs.github.com/pt/get-started/using-git/about-git) (em português). Conferido em 26 de novembro de 2026.
