const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibirNomeENota(nome){
    if(lista[0].includes(nome)){
        const indice = lista[0].indexOf(nome);
        const mediaAluno = lista[1][indice];
        console.log(`${nome} tem a média igual a ${mediaAluno}`);
    } else {
        console.log(`${nome} não foi encontrado(a) na lista de alunos.`);
    }
}

exibirNomeENota('Flávia');
exibirNomeENota('João');
