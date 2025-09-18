
//? EXERCICIO 01

function concatenarArray(array1, array2) {
    const novoArray = array1.concat(array2);
    return novoArray;
};

const nomes = ['Flávia', 'Maria', 'Josefina'];
const idades = [20, 80, 60];

const arrayUnificado = concatenarArray(nomes, idades);
console.log(arrayUnificado);

//? EXERCICIO 02

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parteNumeros = numeros.slice(2, 7);

console.log(parteNumeros);

//? EXERCICIO 03

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
console.log(frutas);

frutas.splice(2, 2, 'Kiwi', 'Pessêgo');
console.log(frutas);

//? EXERCICIO 04

const menuPrincipal = ['Massa', 'Churrasco', 'Sushi'];
const menuSobremesa = ['Sorvete', 'Bolo', 'Torta'];
const menuCompleto = menuPrincipal.concat(menuSobremesa);

console.log(menuPrincipal);
console.log(menuSobremesa);
console.log(menuCompleto);

//? EXERCICIO 05

const matriz = [];
const valorInicial = 1;

for(let i = 0; i < 3; i++){
    let linha = [];
    for(let j = 0; j < 3; j++){
        linha.push(valorInicial);
    }
    matriz.push(linha);
}

console.log('\nMatriz de três dimensões: ');
console.log(matriz);
matriz.forEach(row => console.log(row));

//? EXERCICIO 06 | 07

console.log("\nElemento na segunda linha e terceira coluna:", matriz[1][2]);

matriz[2][1] = 15;
console.log("\nMatriz atualizada:");
matriz.forEach(row => console.log(row));
