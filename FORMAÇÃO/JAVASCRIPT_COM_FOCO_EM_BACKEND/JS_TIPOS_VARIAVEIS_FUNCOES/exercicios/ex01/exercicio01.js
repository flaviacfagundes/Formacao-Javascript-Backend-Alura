
function primeiro(){
    const nome = "Flávia";
    const idade = 20;
    const booleano = true;

    console.log("");
    console.log(nome);
    console.log(idade);
    console.log(booleano);
}

primeiro();

function segundo(){
    const primeiroNome = "Flávia";
    const segundoNome = "Fagundes";
    const nomeSobrenome = primeiroNome + " " + segundoNome;
    const boasVindas = `\nSeja bem-vindo(a) ${nomeSobrenome}!`;
    console.log(boasVindas);
}

segundo();

function terceiro() {
    const nomeUsuario = "Mariazinha";
    const idadeUsuario = 78;
    const nomeIdadeUsuario = `\nOlá ${nomeUsuario}! Você tem ${idadeUsuario} anos de idade.`;
    console.log(nomeIdadeUsuario);
}

terceiro();

function quarto() {
    let musica = "\nA Day In The Life";
    console.log(musica);
    musica = "\nHere Comes The Sun";
    console.log(musica);
}

quarto();

function quinto() {
    console.log("");
    var cidade = "Curitiba";
    if (10 > 9) {
        console.log(cidade);
    }
    console.log(cidade);
}

quinto()

function sexto() {
    const tempo = "chuva";
    if (tempo === "chuva") {
        console.log("\nEstá chovendo!");
    } else {
        console.log("\nNão está chovendo!");
    }
    console.log(tempo === "chuva");
}

sexto()
console.log("");
