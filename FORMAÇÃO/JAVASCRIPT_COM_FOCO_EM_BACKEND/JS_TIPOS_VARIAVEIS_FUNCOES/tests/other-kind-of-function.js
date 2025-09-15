
//? FUNÇÃO DE EXPRESSÃO

const estudanteRepreovou = function (notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
        return false;
    } else {
        return true;
    }
}

console.log('');
console.log(estudanteRepreovou(10, 2));
console.log(estudanteRepreovou(6, 5));
console.log('');

//? ARROW FUNCTION

const alunoRepreovou = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4) {
        return false;
    } else {
        return true;
    }
}

console.log(alunoRepreovou(10, 2));
console.log(alunoRepreovou(6, 5));
console.log('');
