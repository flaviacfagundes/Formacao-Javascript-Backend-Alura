
# Eventos e Arquitetura Baseada em Eventos

Evento é um acontecimento, algo que ocorre em determinado momento. No navegador, os eventos estão muitas vezes relacionados a ações do usuário, como por exemplo um clique em um botão, preenchimento de um input ou qualquer outro tipo de interação. São eventos disparados por elementos `HTML`, por objetos globais do navegador como `window` e etc.

## Event emitters eEvent Listeners

No Node.js, objetos podem ter métodos como instâncias de `EventEmitter`, que emitem eventos em situações determinadas, normalmente quando acontece algo no programa (por exemplo, uma requisição **HTTP**). Estes eventos, uma vez emitidos, são “escutados” por `event listeners`, que por sua vez disparam funções **callback** relacionadas a cada `listener`.

## Componentes

- **Core API** (“API essencial”) do JavaScript, responsável pela implementação do Node.js em alto nível;

- **C++ bindings**, responsáveis por englobar e expor bibliotecas e métodos em C++ que são utilizados através do Node.js;

- **V8**, o motor de execução que faz com que o Node.js consiga compreender o código escrito em JavaScript. Escrito em C++, V8 recebe uma string de código em JavaScript, interpreta e executa.

- **libuv**, é uma biblioteca escrita em C++ que faz a parte de manipulação de eventos e o manejo de processos assíncronos como timers e funções. Esta lib dá acesso do Node.js ao sistema operacional, ao sistema de arquivos (o conhecido fs - *file system*), conexões e etc. Além disso, delega a execução de algumas partes do programa ao sistema operacional, caso necessário. A libuv também implementa duas funcionalidades muito importantes: o loop de eventos e a thread pool;

- **Outras APIs** como http-parser, zlib, openSSL e c-ares, que fazem parte do ambiente Node.js mas não fazem parte da V8.

## Processos

Podemos chamar de processo a execução de um conjunto de instruções de um programa. Normalmente, um computador tem vários processos sendo executados ao mesmo tempo - podemos pensar nos diversos programas que estão sendo continuamente executados pelo computador no *background*.

No caso de programas executados pelo Node.js, os processos são responsáveis por “escutar” eventos e responder de acordo.

## Threads

As chamadas threads de execução são a menor unidade de processamento de um programa; são a forma como as instruções de um programa são separadas e “agendadas” para serem processadas pelo computador.

A quantidade de threads disponíveis para serem utilizadas por um programa depende de alguns fatores: 

- A forma como o programa é escrito; 
- A forma como é processado;
- A capacidade da CPU do computador de processar (ou não) uma determinada quantidade de threads ao mesmo tempo.

As threads podem funcionar como componentes de um processo (o chamado parent process ou “processo pai”) e compartilhar espaços de memória entre si, ao contrário de processos que não compartilham memória. Como uma thread de execução só pode executar uma instrução por vez, dividir um processo em mais de uma thread é uma estratégia para que o programa não fique “bloqueado” enquanto determinada parte dele é processada.

## Call Stack

O Node.js trabalha apenas com uma thread de execução, o que significa que temos apenas uma call stack, que serve para registrar em que ponto o programa se encontra em dado momento e a ordem de execução do código. Então, quando o programa chama uma função ela entra na pilha, e quando a função retorna ela sai do topo da pilha, e assim sucessivamente até que a pilha se esvazie.

O que temos aqui é justamente uma estrutura de dados do tipo “pilha” ou stack, e a característica principal desta estrutura é o conceito de **LIFO**, ou last in, first out; ou seja, o último item colocado na pilha é o primeiro a sair.

Ao contrário da pilha, que segue o conceito **LIFO** (*last in, first out*), as filas são estruturas de dados que seguem o conceito **FIFO** (*first in, first out*), ou seja, o primeiro item a entrar é o primeiro a sair.

## Loops de Eventos

- O loop de eventos recebe eventos externos e os converte em chamadas de **callbacks** para serem processados, além de executar sub-tasks que estejam em fila;
- O loop acessa **callbacks** de eventos que estão na *task queue* (que também é chamada de *event queue*) e empurra os callbacks para a call stack;
- O loop de eventos executa tarefas começando da mais antiga, ou que chegou primeiro à fila - **princípio FIFO**;
- É parte de um panorama maior da arquitetura do node, que envolve o V8 e outras APIs. `setTimeout()`, por exemplo, não faz parte do V8, e sim das APIs do ecossistema;
- O loop de eventos também não faz parte do código do V8, e sim da biblioteca libuv.

Funcionalidades:

- É um loop infinito, que aguarda tarefas, as executa e então entra em espera até o recebimento de novas tarefas;
- O loop pega e executa tarefas da task queue APENAS quando a call stack está vazia. Ou seja, quando não há tarefas em andamento (funções sendo executadas pela pilha).

---

# Artigos

- [Arquitetura do Node.js: entenda o loop de eventos](https://www.alura.com.br/artigos/arquitetura-node-js-entenda-loop-de-eventos)
- [Arquitetura do Node.js: conheça seus componentes](https://www.alura.com.br/artigos/arquitetura-node-js-seus-componentes)
- [Arquitetura do Node.js: entenda threads e processos](https://www.alura.com.br/artigos/arquitetura-node-js-threads-e-processos)
- [Arquitetura do Node.js: o Node.js é single-threaded?](https://www.alura.com.br/artigos/arquitetura-node-js-single-threaded)
