
# VARIÁVEIS

Normalmente quando guardamos um valor em uma variável no computador, não queremos que esse valor possa ser alterado em outras partes do código.

O Javascript permite que a gente "proteja" uma variável de alguma alteração usando outra palavra de criação, ao invés de `let` usa-se `const`. Outra diferença entre `let` e `const` é que você pode declarar uma variável `let` sem precisar atribuir um valor a ela, já quando se usa `const` você obrigatóriamente precisa declarar um valor para aquela variável.

`let` e `const` não são variáveis originais do Javascript, elas foram criadas depois. A maneira original de declarar variáveis no JS era com a palavra `var`. `var` e `let` trabalham de forma similar, ambas podem ser reatribuídas. 

> É mais indicado que se use `const`

Usa-se o `let` quando você realmente precisa trocar o valor de uma variável. Do contrário, usa-se `const` sempre.

> Se você criar uma variável sem as palavras `var`, `let` ou `const`, o **Javascript** atribui automáticamente a palavra de criação `var`.

---
