
//? EXERCICIO 01

numeros = [1, 35, 62, 29, 17, 48];
console.log(numeros);

numeros.splice(1, 0, 91);
numeros.splice(3, 0, 74);
numeros.splice(5, 0, 86);

console.log(numeros);

//? EXERCICIO 02

nums = [1, 2, 3, 4, 5];
console.log(nums);
nums.splice(0, 0, 0);
console.log(nums);

//? EXERCICIO 03 | 04

meuArray = [];
console.log(meuArray);

meuArray.push(10);
meuArray.push(20);
meuArray.push(30);
console.log(meuArray);

valorPrimeiroItem = meuArray[0];
novoValor = valorPrimeiroItem * 2;

meuArray.splice(0, 1, novoValor);
console.log(meuArray);

//? EXERCICIO 05

clinica = [];
console.log(clinica);

clinica.push('Cachorro');
clinica.push('Gato');
clinica.push('Coelho')
console.log(clinica);

clinica.pop();
console.log(clinica);

clinica.pop();
console.log(clinica);

clinica.pop();
console.log(clinica);
