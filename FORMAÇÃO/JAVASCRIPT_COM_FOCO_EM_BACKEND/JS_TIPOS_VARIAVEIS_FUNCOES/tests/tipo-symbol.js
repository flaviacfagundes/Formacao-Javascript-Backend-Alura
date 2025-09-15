const meuSimbolo = Symbol();
const simboloDescricao = Symbol('descricao_do_simbolo');
const outroSimbolo = Symbol();

console.log('');
console.log(meuSimbolo === outroSimbolo);

const obj = {
    [meuSimbolo]: 'valor_do_simbolo'
};

console.log(obj[meuSimbolo]);
console.log('');
