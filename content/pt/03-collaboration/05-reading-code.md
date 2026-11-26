# 3.5 Ler código que você não escreveu

## Problema

Você chega num projeto com centenas de arquivos, e alguém pede: "muda o texto daquele botão". Você nunca viu esse código. Por onde você começa a procurar?

*Tente pensar numa resposta antes de seguir.*

## Blocos

### 1. Você não precisa entender tudo
Ninguém lê um projeto inteiro antes de começar, nem quem trabalha nele há anos. Para uma tarefa, basta entender o pedaço que ela toca. O objetivo é achar esse pedaço e entender o suficiente para mudar com segurança.

> **Notas para o tutor:** tire o peso. Analogia: chegar numa cidade nova. Você não decora o mapa inteiro; procura o endereço de que precisa.

### 2. Comece pelo README
O README costuma explicar o que é o projeto, como ele é organizado e onde fica cada parte. No allerac-academy, por exemplo, o README diz que o conteúdo do curso fica em `content/` e o site fica em `app/`. Isso já corta a procura pela metade.

> **Notas para o tutor:** mostre também o `app/README.md`, que tem um mapa das pastas do site. Os READMEs estão em inglês: incentive usar a IA para traduzir trechos, se precisar.

### 3. Procure pelo que você vê na tela
O texto que aparece na tela quase sempre está escrito em algum arquivo. Use a busca: no GitHub, a caixa de busca do repositório; no editor, a lupa. Procure o texto exato do botão, por exemplo `Tentei, vamos lá`, e veja em que arquivo ele aparece.

> **Notas para o tutor:** no allerac-academy, os textos da interface estão em `app/public/i18n/pt.js` (e `en.js`, `es.js` para os outros idiomas). A busca de código do GitHub funciona em repositórios a que o aluno tem acesso. Se a busca não achar, tente um pedaço menor do texto.

### 4. Peça para a IA explicar, com contexto
Copie o arquivo (ou um trecho) para a IA e dê contexto: "Este arquivo é de um site de cursos. Explique, em português e com palavras simples, o que ele faz e para que serve cada parte." Peça também: "O que aconteceria se eu mudasse esta linha?"

> **Notas para o tutor:** reforce a lição 2.5: antes de colar código na IA, confira que não há senhas, chaves ou dados de pessoas no trecho. Os arquivos de texto da interface do allerac-academy não têm nada disso. Em projetos de outras empresas, siga as regras do time sobre o que pode ser compartilhado.

### 5. Confira a explicação
A IA pode inventar (lição 1.2). Confira o que ela disse no próprio código: o nome de que ela falou existe no arquivo? A explicação bate com o que você vê na tela? Se algo não bater, pergunte de novo ou pergunte ao time.

> **Notas para o tutor:** um bom teste: pedir para a IA apontar a linha exata que faz o que ela descreveu, e o aluno achar essa linha no arquivo.

## Missão

Esta missão é só de leitura: você não muda nada no allerac-academy.

**No computador (caminho principal):**

1. Abra o repositório [Allerac/allerac-academy](https://github.com/Allerac/allerac-academy) e leia o README.
2. Abra o editor github.dev (troque `github.com` por `github.dev` na URL ou pressione a tecla `.`). Para ler código, ele basta: é grátis e não gasta a cota do Codespaces.
3. Use a busca para achar o arquivo onde está o texto `Tentei, vamos lá`.
4. Copie esse arquivo para a IA e peça uma explicação simples do que ele faz.
5. Confira pelo menos uma coisa que a IA disse, achando a linha no arquivo.
6. Conte ao tutor: qual é o caminho do arquivo, o que ele faz e o que você conferiu.

**Pelo tablet ou celular:** abra o repositório no navegador e use a busca do próprio github.com para achar o texto. Abra o arquivo, copie o trecho para a IA e siga do passo 4 em diante. No celular, o arquivo inteiro é longo: um trecho de 10 a 20 linhas já basta.

**Como o tutor confere:** o aluno informa o caminho `app/public/i18n/pt.js`, explica com as próprias palavras que o arquivo guarda os textos da interface, e cita uma coisa que conferiu no código.

## Para ir mais fundo

- Editor github.dev: [documentação oficial do GitHub](https://docs.github.com/pt/codespaces/the-githubdev-web-based-editor) (em português). Conferido em 26 de novembro de 2026.
- Busca de código no GitHub: [sintaxe da busca](https://docs.github.com/pt/search-github/github-code-search/understanding-github-code-search-syntax) (em português). Conferido em 26 de novembro de 2026.
