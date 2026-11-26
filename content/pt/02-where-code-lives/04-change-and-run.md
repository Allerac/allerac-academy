# 2.4 Mudar algo com a IA e ver rodando

## Problema

Você melhorou a sua página com a ajuda da IA, mas no GitHub o arquivo ainda é o antigo. Como você vê a página de verdade no navegador, confere se ficou boa, e guarda a nova versão?

## Blocos

### 1. Pedir um ajuste e conferir o arquivo
Abra de novo o codespace do `my-academy-journal` (ou crie um, se não tiver). Peça à IA (Claude numa outra aba, ou o chat do editor, se aparecer) uma melhoria concreta no `index.html`: uma cor, um texto, uma seção nova. Cole a sugestão no arquivo, ou deixe a IA aplicar, e **leia a diferença** antes de seguir. Você é quem assina a mudança.

> **Notas para o tutor:** ligue com as lições 1.2 e 1.5: conferir e iterar. Não exija Claude Code nem Copilot. Um chat numa aba ao lado basta. Uma melhoria pequena é suficiente.

### 2. Ver a página rodando
No terminal do Codespaces, na pasta do projeto, rode:

```
python3 -m http.server 8000
```

Esse comando sobe um servidor simples na porta 8000 e serve os arquivos da pasta. O Codespaces costuma encaminhar a porta sozinho e mostrar um botão para abrir no navegador. Se não aparecer, abra o painel **Ports** / **Portas** e abra a porta 8000.

Olhe a página com calma. Se algo estiver estranho, volte à IA, ajuste e recarregue. Se o comando não funcionar, peça à IA para explicar a mensagem de erro; não rode um comando alternativo que você não entendeu.

> **Notas para o tutor:** a imagem padrão do Codespaces normalmente tem Python. Se não tiver, a pessoa pede ajuda à IA — sem inventar ferramentas. O encaminhamento automático de porta está na documentação oficial. Não ensine GitHub Pages aqui (fica para o módulo 6). Para parar o servidor: Ctrl+C no terminal.

### 3. Guardar e enviar a versão nova
Quando a página estiver como você quer, faça um commit e envie para o GitHub. No Codespaces, o jeito mais simples é o ícone de Controle do código-fonte (à esquerda): escreva uma mensagem clara em inglês, por exemplo `Improve personal web page`, confirme e faça o *push* (Sync / Push) para o repositório.

Isso é o mesmo "salvar com histórico" do módulo 0, agora feito de dentro do editor. Branches e pull requests ficam para o módulo 3: neste repositório pessoal, commitar na branch principal está bem.

No fim, interrompa o codespace para não gastar cota.

> **Notas para o tutor:** não aprofunde git (status, add, branch). A interface de Source Control basta. Se quiserem o terminal: `git add index.html`, `git commit -m "Improve personal web page"`, `git push`. Mensagens em inglês. Confirme que o arquivo no GitHub mudou.

### 4. Pelo tablet ou celular
No tablet, se o Codespaces estiver usável (melhor com teclado), siga o caminho principal: editar, ver a página na porta 8000 e fazer o commit.

No celular, o caminho realista é outro. Edite o `index.html` no github.com (botão de editar o arquivo) ou no github.dev (troque `github.com` por `github.dev` na URL), peça a melhoria à IA, cole e confira, e faça o commit por lá. O github.dev **não tem terminal**, então você não consegue rodar o `python3 -m http.server` nem ver o servidor local.

Para ter uma ideia do resultado no celular, peça ao Claude para mostrar a página (um artefato) com o HTML final, ou abra o arquivo mais tarde num computador ou tablet. É uma prévia, não o mesmo que ver o arquivo sendo servido de verdade. O [GitHub Mobile](https://docs.github.com/pt/get-started/using-github/github-mobile) ajuda a conferir o commit depois, não a rodar a página.

> **Notas para o tutor:** não indique serviços de preview de terceiros. Seja explícito: sem terminal, não há servidor local. Aceite o artefato do Claude ou a conferência visual do HTML como prévia, e o commit no GitHub como a parte obrigatória. No tablet com Codespaces, cobre o preview de verdade.

## Missão

**No computador (caminho principal):**

1. Abra o codespace do `my-academy-journal`.
2. Peça à IA uma melhoria no `index.html` e aplique pelo menos uma mudança que você entendeu.
3. Rode `python3 -m http.server 8000`, abra a página no navegador e confira o resultado.
4. Faça o commit com uma mensagem clara em inglês e envie (*push*) para o GitHub.
5. Interrompa o codespace.
6. Mande ao tutor o link do arquivo no GitHub e diga o que mudou e o que você viu no navegador.

**Pelo tablet ou celular:**

- **No tablet:** se o Codespaces funcionar, faça o caminho principal.
- **No celular:** edite o `index.html` no github.com ou no github.dev, com ajuda da IA, e faça o commit. Para a prévia, use um artefato do Claude com o HTML final (ou veja depois numa tela maior). Conte ao tutor o link do arquivo, o que mudou, como você conferiu, e que não foi possível rodar o servidor no celular.

**Como o tutor confere:** o `index.html` no repositório tem um commit novo, com mensagem clara, e o aluno descreve a mudança. No caminho principal, também viu a página servida no navegador. No caminho móvel, explica como conferiu (prévia da IA ou tela maior) e o limite do terminal.

## Para ir mais fundo

- Encaminhar portas no Codespaces: [documentação oficial do GitHub](https://docs.github.com/pt/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace) (em português). Conferido em 26 de novembro de 2026.
- Editar arquivos no GitHub: [documentação oficial](https://docs.github.com/pt/repositories/working-with-files/managing-files/editing-files) (em português). Conferido em 26 de novembro de 2026.
