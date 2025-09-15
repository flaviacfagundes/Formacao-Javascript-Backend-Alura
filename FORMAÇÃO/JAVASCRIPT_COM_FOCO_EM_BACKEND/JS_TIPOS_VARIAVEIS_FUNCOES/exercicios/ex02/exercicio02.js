
//? EXERCICIO 01
console.log('');

const frase = 'Verificando o tamanho dessa frase';

console.log(frase.toLocaleUpperCase());
console.log(frase.length);

//? EXERCICIO 02
console.log('');

let variavelUm;
let variavelDois = null;

console.log(variavelUm);
console.log(variavelDois);

//? EXERCICIO 03
console.log('');

const filme = 'A Volta Dos Que Não Foram';
const ano = '1900';
const existe = false;
const infoFilme = `O Filme: ${filme} do ano ${ano}, realmente existe? ${existe}`;
console.log(infoFilme);

//? EXERCICIO 04
console.log('');

let textoNumero = '10';
let numeroTexto = 50;

console.log(`O tipo da variável textoNumero(${textoNumero}) é: `, typeof textoNumero);
console.log(`O tipo da variável numeroTexto(${numeroTexto}) é: `, typeof numeroTexto);

console.log('');

textoNumero = Number(textoNumero);
numeroTexto = String(numeroTexto);

console.log(`O tipo da variável textoNumero(${textoNumero}) é: `, typeof textoNumero);
console.log(`O tipo da variável numeroTexto(${numeroTexto}) é: `, typeof numeroTexto);

//? EXERCICIO 05
console.log('');

let fraseString = 'Bom dia, bom dia, o sol já nasceu lá na fazendinha!';
console.log(fraseString);

fraseString = fraseString.toLocaleUpperCase();
console.log(fraseString);

fraseString = fraseString.toLocaleLowerCase();
console.log(fraseString);

fraseString = fraseString.split(',');
console.log(fraseString);

fraseString = fraseString.slice(0, 1);
console.log(fraseString);

console.log('');
