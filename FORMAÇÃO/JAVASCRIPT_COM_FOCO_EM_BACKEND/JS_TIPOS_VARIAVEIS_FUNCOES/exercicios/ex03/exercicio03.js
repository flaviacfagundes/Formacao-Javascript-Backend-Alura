
//? EXERCICIO 01
function exercicio1() {
    console.log('');
    let saldo = 1000;
    const deposito = 500;
    const saque = 1200;
    console.log(`Saldo atual: ${saldo}`);

    let operacao = saldo + deposito;
    console.log(`Saldo após deposito: ${operacao}`);

    operacao = saldo - saque;
    console.log(`Saldo apoós saque: ${operacao}`);
}

exercicio1();

//? EXERCICIO 02
function exercicio2(valor) {
    console.log('');
    const verificacao = valor %2 === 0? 'O número é Par' : 'O número é Impar';
    console.log(verificacao);
}

exercicio2(1001);

//? EXERCICIO 03
function exercicio3() {
    let user = 'Flávia';
    let password = '123456789';
    let acessoAdm = true;

    if (acessoAdm) {
        if (user === 'Flávia' && password === '123456789'){
            console.log('\nAcesso Permitido!');
        } else {
            console.log('\nLogin ou senha incorretos!');
        }
    } else {
        console.log('\nAcesso Negado!');
    }
}

exercicio3();

//? EXERCICIO 04
function exercicio4() {
    const acessoParaEditar = true;
    const acessoParaExcluir = false;

    if (acessoParaEditar || acessoParaExcluir) {
        console.log('\nPossuí acesso a plataforma!');
    } else {
        console.log('\nNão possuí acesso a plataforma!');
    }
}

exercicio4();

//? EXERCICIO 05
function exercicio5() {
    const idadeMinima = 21;
    const idadeUsuario = 21;

    if (idadeUsuario >= idadeMinima) {
        console.log('\nUsuário pode realizar a compra!');
    } else {
        console.log('\nUsuário não tem idade suficiente para realizar a compra!');
    }
}

exercicio5();
console.log('')
