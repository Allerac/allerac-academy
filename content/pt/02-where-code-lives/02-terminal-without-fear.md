# 2.2 O terminal sem medo

## Problema

Um tutorial diz: "rode isto no terminal". Aparece uma tela preta (ou quase) pedindo um comando. Você trava. O que é isso? E o que você faria *antes* de rodar qualquer coisa?

*Tente pensar numa resposta antes de seguir.*

## Blocos

### 1. O terminal é uma conversa por texto
O terminal é um jeito de conversar com o computador escrevendo comandos, em vez de clicar em pastas e botões. Você digita um pedido curto, aperta Enter, e ele responde com texto. Não é um lugar "avançado demais": é só outra porta de entrada para as mesmas pastas e arquivos da lição anterior.

> **Notas para o tutor:** acalme. Analogia: pedir as coisas por mensagem, em vez de ir até o armário. Erro comum: achar que um comando errado "quebra o computador". Os comandos desta lição só olham e criam pastas.

### 2. Quatro comandos para começar
Estes quatro comandos bastam para se achar:
- `pwd` — "onde estou?": mostra o caminho da pasta atual
- `ls` — "o que tem aqui?": lista arquivos e pastas
- `cd` — "vamos para outra pasta": muda a pasta atual, por exemplo `cd pages`
- `mkdir` — "crie uma pasta": por exemplo `mkdir notes`

Um bônus útil: `cat` mostra o conteúdo de um arquivo de texto, por exemplo `cat README.md`.

Na próxima lição você vai digitar isso de verdade no editor. Por enquanto, o importante é reconhecer o que cada um faz.

> **Notas para o tutor:** não ensine flags (`ls -la`, `cd ..`) a não ser que o aluno pergunte. Se perguntar: `cd ..` volta uma pasta, `cd ~` vai para a pasta pessoal. `mkdir` não apaga nada.

### 3. Peça para a IA explicar antes de rodar
Sempre que um tutorial (ou a própria IA) mandar um comando que você não conhece, copie o comando e pergunte: "O que este comando faz, passo a passo? Ele altera ou apaga alguma coisa?" Só rode quando a explicação fizer sentido para você.

> **Notas para o tutor:** este é o hábito central da lição. A IA também pode errar ou sugerir um comando perigoso: por isso a pessoa pergunta *antes* e lê a resposta. Exemplos bons de pergunta: "isto é só leitura?" e "como eu desfaço se der errado?".

### 4. Não rode o que você não entende
Um comando pode apagar arquivos, instalar coisas ou enviar dados para fora. Se você não entendeu, não rode. Isso vale para tutoriais, colegas e para a IA. Pedir outra explicação, ou esperar para perguntar ao tutor, é a escolha certa.

> **Notas para o tutor:** não dê no texto do aluno uma lista de comandos perigosos para memorizar, para não convidar experimentação. Se o aluno trouxer um comando assustador, explique e peça para não rodar. Reforce que "não sei" é uma resposta profissional.

### 5. Pelo tablet ou celular
O terminal é mais confortável no computador. No tablet, o GitHub Codespaces abre no navegador e o terminal funciona, principalmente se você tiver um teclado. No celular a tela fica apertada, e um editor leve como o github.dev **não tem terminal**: ele só edita arquivos, não roda comandos. Se você estiver no celular hoje, faça a missão alternativa: o hábito de pedir explicação já vale a lição. Na próxima oportunidade com tela maior, você pratica os comandos de verdade.

> **Notas para o tutor:** seja honesto e encorajador. Não finja que o celular substitui o terminal. Se a pessoa tiver só o celular, aceite a missão alternativa e combine praticar o terminal depois. A documentação oficial do GitHub confirma que dá para trabalhar num codespace a partir de um tablet.

## Missão

1. Peça à IA para explicar, em português e com palavras simples, o que fazem `pwd`, `ls`, `cd` e `mkdir`.
2. Escolha um comando que você *não* conhece (por exemplo, um que apareça num tutorial) e pergunte: "O que este comando faz? Ele altera ou apaga alguma coisa?"
3. Conte ao tutor, com suas palavras, o que cada um dos quatro comandos faz e o que você entendeu do comando desconhecido. Diga se rodaria ou não, e por quê.

Na lição seguinte, no Codespaces, você pratica `pwd` e `ls` de verdade.

**Pelo tablet ou celular:** faça os três passos acima. Não é preciso rodar comandos hoje. Se estiver no tablet com teclado e quiser tentar o terminal no Codespaces, pode; se algo parecer confuso, pare e volte à explicação da IA.

**Como o tutor confere:** o aluno explica os quatro comandos com palavras próprias e demonstra o hábito de perguntar antes de rodar, inclusive dizendo "não rodaria" quando não entendeu.

## Para ir mais fundo

*A definir.*
