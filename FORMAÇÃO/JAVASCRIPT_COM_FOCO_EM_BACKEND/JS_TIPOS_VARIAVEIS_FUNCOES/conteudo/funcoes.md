
# FUNÇÕES

Funções são blocos de código essenciais em programação.

## Parâmetros

- Os parâmetros servem como `inputs` da função, é por onde uma função recebe os valores que precisa para executar corretamente;
- Podem ser qualquer tipo de dado válido do **JavaScript**: `números`, `strings`, `booleanos`, `arrays`, `objetos`;
- É possível passar qualquer quantidade de parâmetros a uma função, separados por vírgula. Caso a função não precise receber nenhum parâmetro, declare apenas `()`;
- Os parâmetros devem ser passados para a função no momento de execução, na ordem em que estão declarados.

## Retorno

- O valor de retorno serve como `output` da função. Ele representa o resultado final obtido após a função executar o código dentro do bloco;
- Para que a função retorne um valor, é utilizada a palavra-chave `return` seguida do valor que se deseja *retornar*. Se nenhum valor for informado, a função por padrão retorna `undefined`;
- A linha do retorno é sempre a última linha do bloco. Qualquer código escrito abaixo dessa linha se torna `unreachable` (*inalcançável*) para o **JavaScript**;
- Nem todas as funções retornam valores; dependendo do caso, uma função pode executar diversas instruções sem a necessidade de retornar nenhum valor no final.

É possível que uma função tenha mais de um `return`, pois estão em blocos diferentes e excludentes: de acordo com a nossa lógica, a função obrigatoriamente vai executar ou o `if` ou `else`, e cada um dos blocos `{}` contém seu próprio `return` sendo a última instrução.

---

# Funções de Expressão

Uma função de expressão é definida como parte de uma expressão, geralmente atribuída a uma variável.

~~~
const minhaFuncao = function(parametro1, parametro2) {
  // Corpo da função
  return resultado;
};
~~~

## Hoisting 

Funções de expressão não são *içadas* (**hoisted**). Isso significa que você deve declarar a função antes de usá-la no código. A função só estará disponível após a linha de código onde foi definida. A função é criada em tempo de execução, quando a expressão é avaliada.

## Diferenças Principais:

- **Hoisting**:

    - Funções padrão são **hoisted**, permitindo que você as chame antes de declarar.
    - Funções de expressão não são **hoisted**, exigindo que você as declare antes de usar.

- **Contexto de Criação**:

    - `Funções padrão` são criadas durante a fase de **compilação**.
    - `Funções de expressão` são criadas em tempo de **execução**.

- **Nome**:

    - Funções padrão sempre têm um nome.
    - Funções de expressão podem ser anônimas ou ter um nome.

---

# Arrow Function

- A principal característica das **arrow functions** é a sua sintaxe mais curta em comparação com as funções tradicionais. Em vez de usar a palavra-chave `function`, utilizamos `=>` para definir a função.
- Os parâmetros da função são definidos entre parênteses `()`. Se houver apenas um parâmetro, os parênteses podem ser omitidos. Se não houver parâmetros, os parênteses são obrigatórios.
- O corpo da função é delimitado por chaves `{}`. Se a função tiver apenas uma expressão, as chaves e a palavra-chave return podem ser omitidas, e o resultado da expressão é implicitamente retornado.
- `this` Léxico: Uma das diferenças mais importantes entre **arrow functions** e funções tradicionais é o comportamento do `this`. Em **arrow functions**, o `this` é resolvido lexicalmente, ou seja, ele herda o valor do contexto em que a função foi definida. Isso evita problemas comuns de escopo do `this` em **callbacks** e outras situações.

### Função com um parâmetro e retorno implícito

~~~
const quadrado = numero => numero * numero;
console.log(quadrado(5)); // Output: 25
~~~

### Função com múltiplos parâmetros e corpo com várias linhas

~~~~
const soma = (a, b) => {
  const resultado = a + b;
  return resultado;
};
console.log(soma(2, 3)); // Output: 5
~~~~

### Função sem parâmetros

~~~~
const mensagem = () => {
  return "Olá, mundo!";
};
console.log(mensagem()); // Output: Olá, mundo!
~~~~

## Considerações

- Não adequadas para todos os casos. Embora as **arrow functions** sejam convenientes em muitos casos, elas não são adequadas para todos os cenários. Por exemplo, elas não devem ser usadas como métodos de objetos se você precisar acessar o `this` do objeto.
- Em alguns casos, a sintaxe concisa das **arrow functions** pode tornar o código menos legível, especialmente para iniciantes. É importante usar com moderação e garantir que o código permaneça claro e compreensível.

---
