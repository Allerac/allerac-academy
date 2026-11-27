# 4.3 Passos pequenos

## Problema

A sua tarefa é "Adicionar uma seção com os módulos concluídos". Você pede tudo de uma vez para a IA, ela devolve duzentas linhas novas, você cola, e a página quebrou. Onde está o erro? Como você teria trabalhado para nunca chegar nessa situação?

*Tente pensar numa resposta antes de seguir.*

## Blocos

### 1. Passo pequeno, erro pequeno
Quando você muda um pouco de cada vez e confere depois de cada mudança, um erro só pode estar no último passo. Em vez de procurar em duzentas linhas, você procura em dez. Trabalhar em passos pequenos parece mais lento, mas quase sempre termina antes.

> **Notas para o tutor:** analogia: montar um móvel conferindo cada etapa do manual, em vez de apertar todos os parafusos no fim e descobrir que uma peça entrou ao contrário.

### 2. Cada passo termina em algo que funciona
Um bom passo deixa a página funcionando e é fácil de conferir. Por exemplo:
1. Adicionar o título da seção.
2. Adicionar a lista com os módulos.
3. Ajustar o estilo para telas estreitas.

Depois de cada um, você abre a página e vê o resultado. Se parar no meio, o que já foi feito continua de pé.

> **Notas para o tutor:** um passo que deixa a página quebrada ("primeiro apago a seção antiga, depois escrevo a nova") é um sinal de que dá para dividir de outro jeito.

### 3. A IA ajuda a quebrar
Cole o texto da issue numa conversa com a IA e peça: "Quebre esta tarefa em 3 a 5 passos pequenos. Cada passo deve deixar a página funcionando e ser fácil de conferir." Depois revise: a ordem faz sentido? Algum passo ainda é grande? Algum é desnecessário?

> **Notas para o tutor:** a IA costuma sugerir passos demais ou coisas fora do escopo ("adicione testes automatizados", "configure um framework"). Incentive o aluno a cortar. Quem decide o plano é ele.

### 4. A lista de passos dentro da issue
No GitHub, você pode escrever uma lista de tarefas na descrição da issue:

```
- [ ] Add section title
- [ ] Add list of modules
- [ ] Adjust style for narrow screens
```

O GitHub mostra caixinhas que você marca conforme avança, e a issue mostra o progresso. Todo mundo vê em que pé está a tarefa.

> **Notas para o tutor:** a sintaxe é `- [ ]` (com espaço dentro dos colchetes) e `- [x]` para marcado. Os itens podem ser em português ou inglês. Para tarefas grandes, o GitHub também tem sub-issues; mencione só se o aluno perguntar.

### 5. Um passo, um commit
Cada passo costuma virar um commit, com uma mensagem clara (lição 3.1). Assim o histórico conta a história da tarefa, e se um passo der errado dá para desfazer só ele.

> **Notas para o tutor:** não seja rígido: às vezes um passo vira dois commits, ou dois passos pequenos viram um. O hábito importante é conferir e fazer o commit com frequência.

## Missão

**Pelo site do GitHub (em qualquer dispositivo):**

1. Abra a issue que você criou na lição 4.2.
2. Cole o texto dela numa conversa com a IA e peça para quebrar a tarefa em 3 a 5 passos pequenos. Corte, junte ou reordene o que precisar.
3. Edite a descrição da issue e acrescente uma seção **Passos** com uma lista de tarefas (`- [ ] ...`).
4. Conte ao tutor por que escolheu essa ordem e como vai conferir cada passo.

**Pelo tablet ou celular:** editar a issue funciona no navegador. No celular, digitar `- [ ]` é chato, mas funciona: confira na prévia (*Preview*) se as caixinhas apareceram.

**Como o tutor confere:** a issue tem uma lista de 3 a 5 passos com caixinhas, cada passo é pequeno e deixa a página funcionando, e o aluno explica a ordem e como vai conferir cada um.

## Para ir mais fundo

- Listas de tarefas no GitHub: [documentação oficial do GitHub](https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#task-lists) (em português). Conferido em 27 de novembro de 2026.
