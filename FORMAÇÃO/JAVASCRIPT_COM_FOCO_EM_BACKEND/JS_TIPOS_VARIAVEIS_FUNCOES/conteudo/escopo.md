
# ESCOPOS 

## Escopo Global

Variáveis declaradas fora de qualquer função ou bloco (como `if`, `for`, etc.) pertencem ao **escopo global**. Elas podem ser acessadas e modificadas de qualquer lugar no seu código, tanto dentro de funções quanto fora delas.

## Escopo de Função

Variáveis declaradas dentro de uma função pertencem ao escopo dessa função. Elas só podem ser acessadas e modificadas dentro da função em que foram declaradas.

## Escopo de Bloco

Variáveis declaradas dentro de um bloco (delimitado por chaves `{}`) com `let` ou `const` pertencem ao escopo desse bloco. Elas só podem ser acessadas e modificadas dentro do bloco em que foram declaradas.

---

# O QUE SÃO BLOCOS?

Um bloco de código em **JavaScript** é uma sequência de zero ou mais declarações agrupadas dentro de um par de chaves `{}`. Os blocos de código são usados para definir um conjunto de instruções que devem ser executadas juntas.

## Onde os blocos de código são usados?

- **Funções**: O corpo de uma função é um bloco de código.
- **Estruturas de controle de fluxo**: `if`, `else`, `for`, `while`, `do...while`, `switch`.
- **Declarações try...catch**: O bloco `try` e o bloco `catch` são blocos de código.

## Características importantes dos blocos de código

- **Agrupamento**: Permitem agrupar várias declarações em uma única unidade lógica.
- **Escopo**: Criam um novo escopo quando usados com `let` e `const`. Variáveis declaradas com `let` ou `const` dentro de um bloco só são acessíveis dentro desse bloco.
- **Organização**: Ajudam a organizar o código, tornando-o mais legível e fácil de entender.

---
