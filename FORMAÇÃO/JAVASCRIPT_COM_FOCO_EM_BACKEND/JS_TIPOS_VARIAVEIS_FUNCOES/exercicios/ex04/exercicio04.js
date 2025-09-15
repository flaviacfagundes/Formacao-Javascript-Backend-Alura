
//? EXERCICIO 01
function saudacao(nome) {
    console.log(`\nOlá ${nome}. Seja muito bem-vindo(a)!`);
}

saudacao("Flávia");


//? EXERCICIO 02
const idadeValida = function (idade) {
    if (idade >= 18) {
        return `\nÉ maior de idade! (${idade})`;
    } else {
        return `\nÉ menor de idade! (${idade})`
    }
}

console.log(idadeValida(20));
console.log(idadeValida(12));


//? EXERCICIO 03
function palindromo(palavra) {
    console.log('');
    const arrayPalavra = palavra.split('');
    const inverterArray = arrayPalavra.reverse();
    const palavraPalindromo = inverterArray.join('');
    
    if (palavra == palavraPalindromo) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromo('ovo'));

//? EXERCICIO 04
const validarValores = function (valor1, valor2, valor3) {
    if (valor1 > valor2 && valor1 > valor3) {
        return `\nO maior valor é o ${valor1}`;
    } else if (valor2 > valor1 && valor2 > valor3) {
        return `\nO maior valor é o ${valor2}`;
    } else if (valor3 > valor1 && valor3 > valor2) {
        return `\nO maior valor é o ${valor3}`;
    } else {
        return "\nAlguns valores são iguais."
    }
}

console.log(validarValores(10, 20, 30));

//? EXERCICIO 05
const calculaPotencia = (base, expoente) => base ** expoente;

console.log('')
console.log(calculaPotencia(2, 3));
console.log('')
