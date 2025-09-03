
# JAVASCRIPT

Um dos principais pontos do Javascript é que se trata de uma linguagem de programação multiparadigma, o que significa que a linguagem não está restrita a uma única forma de fazer as coisas. É possível utilizar diferentes paradigmas de programação, como **orientado a objetos**. **funcional** ou **procedural**.

O Javascript é uma linguagem interpretada, isso significa que o código fonte é executado diretamete por um interpretador, que analisa o código *linha por linha* e executa as instruções em tempo real.

O JavaScript oferece uma abordagem mais leve e ágil, isso porque é uma **linguagem fracamente tipada** e de **tipagem dinâmica**, em que os tipos são inferidos durante a execução do programa, não sendo necessário declarar explicitamente o tipo das variáveis.

> Link para o artigo sobre compilação: [O que é Compilação e qual o papel dos Compiladores?](https://www.alura.com.br/artigos/o-que-e-compilacao)

---

# NODE JS

O **Node.js** pode ser definido como um ambiente de execução JavaScript **server-side**. Isso significa que ele permite que o código JavaScript seja executado no servidor, em vez de apenas no navegador do usuário.

Com o **Node.js**, o JavaScript ganha a capacidade de sair do navegador e ser executado diretamente no servidor. Isso abre um leque de possibilidades, permitindo que os desenvolvedores usem JavaScript para construir aplicações web completas, desde o front-end até o back-end.

É uma ferramenta poderosa que expande as capacidades do JavaScript, permitindo que ele seja usado para construir aplicações web completas e escaláveis.

---

# INTERPRETADORES


### Node

Como vimos, **Node.j** é um ambiente de execução de código JavaScript no “lado do servidor”, ou runtime, funcionando fora do navegador. Ele usa o motor (também chamado de *engine*) V8 do Google Chrome para executar o código e oferece uma ampla gama de funcionalidades para criar aplicativos web e servidores. Tem como características-chave:

- Suporte a bibliotecas e frameworks variados;
- Uso do NPM para gerenciamento de pacotes;
- Arquitetura baseada em eventos e assíncrona;
- Popular para construção de servidores web e APIs.

### Deno

**Deno** é outro ambiente de execução para JavaScript e TypeScript, desenvolvido pelo mesmo criador do **Node.js**, Ryan Dahl. Ele foi criado para abordar algumas limitações do Node.js, com foco em segurança e desenvolvimento moderno. As características-chave do Deno são:

- Sistema de segurança baseado em permissões;
- Suporte nativo a TypeScript;
- Não depende do NPM para gerenciar pacotes;
- Módulos importados diretamente via URL.

Ao contrário do Node.js, no qual os scripts têm permissões amplas por padrão, o Deno adota uma abordagem que prioriza a segurança, exigindo que as pessoas desenvolvedoras concedam permissões explicitamente para operações potencialmente confidenciais, como acesso ao sistema de arquivos ou conectividade de rede.

### Bun

**Bun**, o mais recente dos interpretadores, lançou sua versão 1.0 em setembro de 2023. O **Bun** é outro ambiente de execução JavaScript criado do zero usando a linguagem de programação **Zig**, com foco em inicialização rápida e execução eficiente de código. Ele fornece ferramentas e recursos para otimizar e agilizar o desenvolvimento de aplicativos JavaScript e foi projetado para ser compatível com ecossistemas JavaScript existentes.

Até o momento as características que mais têm chamado atenção são:

- Alta velocidade no tempo de execução do código;
- Design leve, resultando em uma base de código menor e menos requisitos de recursos, permitindo melhor desempenho em termos de velocidade e uso de memória em comparação com outros runtimes;
- Otimização de desempenho, pois em vez de depender do **motor V8**, **Bun** utiliza o **JavaScriptCore do WebKit**, que é amplamente reconhecido por seu desempenho superior;
- Funcionalidade integrada ao oferecer ferramentas e recursos nativos que agilizam o processo de desenvolvimento. Ele inclui um empacotador integrado, substituindo a necessidade de ferramentas externas como **Webpack**, bem como um transpilador nativo que suporta a escrita direta de código TypeScript. Além disso, o **Bun** incorpora um **executor de testes semelhante ao Jest** e carrega automaticamente variáveis de ambiente sem exigir instalações adicionais de pacotes como o **dotenv**.

---
