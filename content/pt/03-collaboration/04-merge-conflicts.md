# 3.4 Quando duas mudanças se encontram

## Problema

Você e uma colega editaram a mesma frase do mesmo arquivo, cada uma de um jeito, em branches diferentes. Na hora de juntar, o GitHub avisa: "This branch has conflicts". Qual das duas versões está certa? E quem decide?

*Tente pensar numa resposta antes de seguir.*

## Blocos

### 1. O que é um conflito
Quase sempre o Git junta branches sozinho: se vocês mudaram partes diferentes, ele combina tudo. O conflito acontece quando as duas branches mudaram **as mesmas linhas** de jeitos diferentes. Aí o Git não adivinha: ele para e pede que uma pessoa decida.

> **Notas para o tutor:** tranquilize: conflito não é erro de ninguém nem "quebra" o projeto. É sinal de que duas pessoas trabalharam no mesmo lugar. Num time, acontece toda semana.

### 2. Ler as marcas de conflito
O arquivo mostra as duas versões, separadas por marcas:

```
<<<<<<< try-new-title
# My learning journey
=======
# My Academy Journal
>>>>>>> main
```

Entre `<<<<<<<` e `=======` está uma versão; entre `=======` e `>>>>>>>`, a outra. O nome ao lado da marca diz de qual branch veio cada parte.

> **Notas para o tutor:** o nome da branch nas marcas varia conforme a ferramenta. O importante é entender que são dois lados. As marcas precisam ser apagadas no final: se sobrar uma, o arquivo fica com lixo.

### 3. Três saídas possíveis
Para cada conflito, você escolhe:
- ficar com a versão de um lado;
- ficar com a versão do outro lado;
- escrever uma terceira versão que combina as duas.

Depois, apaga as marcas `<<<<<<<`, `=======` e `>>>>>>>`. A decisão é de uma pessoa, porque depende do que o projeto precisa, não de qual linha é mais nova.

> **Notas para o tutor:** num time de verdade, quando a escolha não for óbvia, a pessoa conversa com quem fez a outra mudança antes de decidir. Ligue com a lição 3.3: o PR é o lugar dessa conversa.

### 4. A IA explica, você decide
Cole o trecho em conflito numa conversa com a IA e pergunte: "Explique o que cada lado deste conflito muda e sugira uma versão que combine os dois." Leia a explicação, confira se a sugestão faz sentido e escolha. A IA não sabe o que o time combinou; você sabe, ou pergunta.

> **Notas para o tutor:** reforce a lição 2.5: não cole senhas, chaves ou dados de clientes junto com o trecho. Num conflito de código, peça para a IA explicar em português o que cada lado faz antes de sugerir.

### 5. Resolver no próprio GitHub
Para conflitos simples (linhas mudadas dos dois lados), o GitHub tem um editor de conflitos no navegador. No PR, clique em **Resolve conflicts**, edite o arquivo, apague as marcas, clique em **Mark as resolved** e depois em **Commit merge**. Conflitos mais complicados pedem o editor do Codespaces ou a linha de comando, e aí vale pedir ajuda ao time.

> **Notas para o tutor:** a documentação oficial diz que o editor do GitHub resolve "conflitos simples de alteração de linha concorrente"; outros casos vão para a linha de comando. Se o botão **Resolve conflicts** estiver desativado, é um conflito complexo: não force, peça ajuda. No Codespaces, o VS Code também mostra os conflitos com botões para aceitar um lado ou o outro.

### 6. Pelo tablet ou celular
O editor de conflitos do GitHub funciona no navegador, então dá para resolver um conflito simples no tablet. No celular também abre, mas a tela pequena dificulta ver as duas versões: se puder, faça esta lição numa tela maior. Nunca resolva um conflito sem ler os dois lados até o fim.

> **Notas para o tutor:** não exija o celular. Se a pessoa só tiver o celular, aceite que ela crie o conflito e o resolva com calma no navegador, rolando a tela; confira o resultado final junto.

## Missão

Você vai criar um conflito de propósito no seu repositório, para ver um de perto num lugar seguro.

**No computador (caminho principal):**

1. No `my-academy-journal`, crie a branch `try-new-title` e mude a primeira linha do `README.md` (o título) para um texto novo. Faça o commit e envie.
2. Volte para a `main` e mude **a mesma linha** para outro texto. Faça o commit na `main` (no seu repositório pessoal, e só para este exercício, tudo bem).
3. Abra um PR de `try-new-title` para `main`. O GitHub vai avisar que há conflito.
4. Clique em **Resolve conflicts**. Cole o trecho na IA e peça para explicar os dois lados e sugerir uma combinação.
5. Escolha a versão final, apague as marcas, clique em **Mark as resolved** e **Commit merge**. Depois, faça o merge do PR.
6. Conte ao tutor quais eram os dois lados, o que você escolheu e por quê.

**Pelo tablet ou celular:** faça os mesmos passos pelo site do GitHub: crie a branch e edite pelo menu de branches e pelo botão de editar, e resolva o conflito no editor de conflitos do navegador. No celular, role com calma para ver os dois lados inteiros.

**Como o tutor confere:** o PR teve um conflito, foi resolvido sem sobrar marcas `<<<<<<<`, `=======` ou `>>>>>>>` no `README.md`, e o aluno explica os dois lados e a decisão que tomou.

## Para ir mais fundo

- Resolver um conflito no GitHub: [documentação oficial](https://docs.github.com/pt/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-on-github) (em português). Conferido em 26 de novembro de 2026.
