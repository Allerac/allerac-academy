# 2.3 Seu editor de código

## Problema

Você já sabe o que é um arquivo e o que é um terminal. Mas abrir o projeto num lugar, editar no outro e rodar comandos num terceiro é cansativo. Onde tudo isso pode ficar junto, num só lugar, sem instalar nada no computador?

## Blocos

### 1. O editor é a sua mesa de trabalho
Um editor de código é o programa em que você vê as pastas, abre arquivos, edita o texto e, muitas vezes, tem um terminal embutido. O Visual Studio Code (VS Code) é o editor mais usado no mundo. Nesta lição você vai usar a versão dele que roda no navegador, então não precisa instalar nada.

> **Notas para o tutor:** não compare editores. O ponto é "uma mesa só". A instalação local fica no final, como opcional.

### 2. GitHub Codespaces: o editor no navegador
O GitHub Codespaces abre o seu repositório num VS Code dentro do navegador, já com as pastas, a busca e um terminal de verdade. A conta pessoal do GitHub inclui uma cota grátis por mês. Você não precisa decorar números: a [documentação oficial](https://docs.github.com/pt/billing/concepts/product-billing/github-codespaces) explica a cota, e ela pode mudar.

Para não gastar a cota à toa:
- quando terminar, interrompa o codespace (fechar a aba não basta);
- quando não for mais usar, exclua o codespace.

Na próxima lição você volta a usar o mesmo ambiente. Se a cota acabar e não houver forma de pagamento, o GitHub bloqueia o uso até o mês seguinte.

> **Notas para o tutor:** não cite horas exatas (elas mudam). Aponte a documentação. Destaque: fechar a aba não interrompe. Interromper para de gastar computação; excluir para de gastar armazenamento. O aluno usa o repositório pessoal `my-academy-journal`, então a cota é da conta pessoal.

### 3. Se achar: arquivos, busca e terminal
Quando o Codespaces abrir, preste atenção em três peças:
- à esquerda, o explorador de arquivos (a lista de pastas e arquivos);
- a busca (ícone de lupa), para achar um texto em qualquer arquivo;
- embaixo, o terminal integrado, onde você roda `pwd` e `ls`.

Clique no `index.html` e no `README.md` para vê-los. É o mesmo repositório do módulo 0, agora com uma mesa de trabalho completa.

> **Notas para o tutor:** os ícones podem variar um pouco, mas explorador, busca e terminal estão sempre no VS Code. Se o terminal não aparecer: menu Terminal, ou o painel embaixo. Se o codespace demorar, é normal na primeira vez.

### 4. Pelo tablet ou celular
A documentação do GitHub confirma: dá para trabalhar num codespace a partir de um tablet. Funciona melhor com um teclado. A tela de um celular fica apertada e não é um bom lugar para o editor completo.

No celular (e no tablet, se o Codespaces não ajudar), use o **github.dev**: no repositório, troque `github.com` por `github.dev` na barra de endereço. Se tiver teclado, também pode pressionar a tecla `.` (ponto). É o mesmo tipo de editor, abre na hora e é grátis, mas **não tem terminal e não roda o projeto**. Dá para ver pastas, abrir arquivos e buscar texto.

Você também pode navegar e editar arquivos no próprio site github.com, pelo navegador do celular. E o aplicativo **GitHub Mobile** (Android e iOS) é bom para olhar o repositório, issues e pull requests, não para substituir o editor.

> **Notas para o tutor:** seja honesto sobre os limites. O github.dev é o VS Code for the Web: sem computação e sem terminal, segundo a documentação oficial. Codespaces em tablet é oficial ("trabalhe no seu computador, no laptop de um amigo ou num tablet"). No celular, aceite explorador e busca no github.dev ou no github.com, sem exigir terminal. Pressionar `.` no celular é difícil; trocar a URL é o caminho mais realista.

### 5. Opcional: VS Code no computador
Se quiser, você pode [instalar o VS Code](https://code.visualstudio.com/) no computador e abrir o projeto ali, ou conectar o VS Code local ao Codespaces. Não é preciso para este curso: o caminho principal continua sendo o editor no navegador.

> **Notas para o tutor:** mantenha curto. Não ensine a clonar com `git clone` agora. Se a pessoa já tiver o VS Code, ótimo; se não, não pressione.

## Missão

**No computador (caminho principal):**

1. Abra o repositório `my-academy-journal` no GitHub.
2. Clique no botão **Code**, abra a aba **Codespaces** e crie um codespace (pode usar as opções padrão). A primeira vez pode levar um ou dois minutos.
3. No editor, encontre o `index.html` pelo explorador de arquivos, abra o `README.md`, e use a busca para achar uma palavra que você escreveu no README.
4. Abra o terminal integrado e rode `pwd` e `ls`. Confira se a lista parece com os arquivos do repositório.
5. Quando terminar esta sessão, interrompa o codespace em [github.com/codespaces](https://github.com/codespaces) (menu **...**, depois **Parar codespace** / *Stop codespace*).
6. Conte ao tutor o que você viu no `pwd` e no `ls`, e se achou a palavra na busca.

**Pelo tablet ou celular:**

- **No tablet:** se possível, faça o caminho do Codespaces acima, de preferência com um teclado. Se a tela atrapalhar, use o caminho do celular.
- **No celular:** abra o `my-academy-journal` no navegador e troque `github.com` por `github.dev` na URL (ou edite pelo próprio github.com). Abra o `index.html` e o `README.md`, e use a busca se ela aparecer. Conte ao tutor o que você encontrou. Não tente rodar `pwd` ou `ls`: o github.dev não tem terminal. Se quiser só revisar o repositório, o [GitHub Mobile](https://docs.github.com/pt/get-started/using-github/github-mobile) também serve para olhar arquivos, issues e o andamento do trabalho.

**Como o tutor confere:** no caminho principal, o aluno abriu o repositório no editor, achou os dois arquivos, usou a busca e rodou `pwd` e `ls`. No caminho móvel, achou os mesmos arquivos no github.dev ou no github.com e explica o limite (sem terminal).

## Para ir mais fundo

- Como criar um codespace: [documentação oficial do GitHub](https://docs.github.com/pt/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository) (em português). Conferido em 26 de novembro de 2026.
- Como interromper e retomar um codespace: [parar e iniciar](https://docs.github.com/pt/codespaces/developing-in-a-codespace/stopping-and-starting-a-codespace) (em português). Conferido em 26 de novembro de 2026.
- Editor no navegador, sem terminal: [VS Code for the Web no GitHub (github.dev)](https://docs.github.com/pt/codespaces/the-githubdev-web-based-editor) (em português). Conferido em 26 de novembro de 2026.
- Interface do VS Code: [User interface](https://code.visualstudio.com/docs/editing/getting-started/userinterface) (documentação oficial, em inglês). Conferido em 26 de novembro de 2026.
