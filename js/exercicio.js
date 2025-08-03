// Exercício 1

function apresentarExercicio1Console() {
    console.log("SuperDev 7ª Edição");
}

function apresentarE1Alert() {
    alert("SuperDev 7ª Edição");
}

// Exercício 1

// Exercício 2

function apresentarExercicio2Console() {
    let nome = "Carlos";
    let nomeComposto = "Eduardo";
    let sobrenome = "Felix";
    let nomeCompleto = nome + " " + nomeComposto + " " + sobrenome;
    let idade = 21;
    let peso = 56.00;
    let altura = 1.73;
    console.log(
        "Nome: " + nomeCompleto +
        "\nIdade: " + idade + " " + "anos" +
        "\nPeso: " + peso + " " + "quilos" +
        "\nAltura: " + altura + "m");
}

function apresentarE2Alert() {
    let nome = prompt("Digite seu nome");
    let sobrenome = prompt("Digite seu sobrenome");
    let nomeCompleto = nome + " " + sobrenome;
    let idade = prompt("Digite sua idade");
    let peso = prompt("Digite seu peso");
    let altura = prompt("Digite sua altura");
    alert(
        "Nome: " + nomeCompleto +
        "\nIdade: " + idade + " " + "anos" +
        "\nPeso: " + peso + "Kg" +
        "\nAltura: " + altura + "m");
}

// Exercício 2

// Exercício 3

function apresentarExercicio3Console() {
    let personagem = "Aatrox";
    let raca = "Darkin";
    let skillQ = "A Espada Darkin";
    let skillW = "Correntes Infernais";
    let skillE = "Avanço Umbral";
    let skillR = "Aniquilidor de Mundo";
    let origem = "Runeterra";
    let rota = "Topo";
    console.log(
        "Personagem: " + personagem +
        "\nRaca: " + raca +
        "\nSkill Q: " + skillQ +
        "\nSkill W: " + skillW +
        "\nSkill E: " + skillE +
        "\nUltimate: " + skillR +
        "\nLugar de Origem: " + origem +
        "\nRota Jogada: " + rota);


    let personagem2 = "LeBlanc";
    let raca2 = "Humana";
    let skill2Q = "Sigilo de Malícia";
    let skill2W = "Distorção";
    let skill2E = "Correntes Etéreas";
    let skill2R = "Mímica";
    let origem2 = "Noxus";
    let rota2 = "Meio";
    console.log(
        "Personagem: " + personagem2 +
        "\nRaca: " + raca2 +
        "\nSkill Q: " + skill2Q +
        "\nSkill W: " + skill2W +
        "\nSkill E: " + skill2E +
        "\nUltimate: " + skill2R +
        "\nLugar de Origem: " + origem2 +
        "\nRota Jogada: " + rota2);

    let personagem3 = "Caitlyn";
    let raca3 = "Humana";
    let skill3Q = "Pacificadora de Piltover";
    let skill3W = "Armadilha Mecânica de Yordle";
    let skill3E = "Rede Calibre 90";
    let skill3R = "Ás na Manga";
    let origem3 = "Piltover";
    let rota3 = "Atirador";
    console.log(
        "Personagem: " + personagem3 +
        "\nRaca: " + raca3 +
        "\nSkill Q: " + skill3Q +
        "\nSkill W: " + skill3W +
        "\nSkill E: " + skill3E +
        "\nUltimate: " + skill3R +
        "\nLugar de Origem: " + origem3 +
        "\nRota Jogada: " + rota3);
}

function apresentarE3Alert() {
    let personagem = "Aatrox";
    let raca = "Darkin";
    let skillQ = "A Espada Darkin";
    let skillW = "Correntes Infernais";
    let skillE = "Avanço Umbral";
    let skillR = "Aniquilidor de Mundo";
    let origem = "Runeterra";
    let rota = "Topo";
    alert(
        "Personagem: " + personagem +
        "\nRaca: " + raca +
        "\nSkill Q: " + skillQ +
        "\nSkill W: " + skillW +
        "\nSkill E: " + skillE +
        "\nUltimate: " + skillR +
        "\nLugar de Origem: " + origem +
        "\nRota Jogada: " + rota);


    let personagem2 = "LeBlanc";
    let raca2 = "Humana";
    let skill2Q = "Sigilo de Malícia";
    let skill2W = "Distorção";
    let skill2E = "Correntes Etéreas";
    let skill2R = "Mímica";
    let origem2 = "Noxus";
    let rota2 = "Meio";
    alert(
        "Personagem: " + personagem2 +
        "\nRaca: " + raca2 +
        "\nSkill Q: " + skill2Q +
        "\nSkill W: " + skill2W +
        "\nSkill E: " + skill2E +
        "\nUltimate: " + skill2R +
        "\nLugar de Origem: " + origem2 +
        "\nRota Jogada: " + rota2);

    let personagem3 = "Caitlyn";
    let raca3 = "Humana";
    let skill3Q = "Pacificadora de Piltover";
    let skill3W = "Armadilha Mecânica de Yordle";
    let skill3E = "Rede Calibre 90";
    let skill3R = "Ás na Manga";
    let origem3 = "Piltover";
    let rota3 = "Atirador";
    alert(
        "Personagem: " + personagem3 +
        "\nRaca: " + raca3 +
        "\nSkill Q: " + skill3Q +
        "\nSkill W: " + skill3W +
        "\nSkill E: " + skill3E +
        "\nUltimate: " + skill3R +
        "\nLugar de Origem: " + origem3 +
        "\nRota Jogada: " + rota3);
}

// Exercício 3

// Exercício 4

function apresentarExercicio4Console() {
    let nome = "Carlos";
    let sobrenome = "Felix";
    let nomeCompleto = nome + " " + sobrenome;
    let peso = 56;
    let altura = 1.73;
    let alturaImc = altura * altura;
    let imc = peso / alturaImc;
    console.log(
        "Nome: " + nomeCompleto +
        "\nPeso: " + peso + " " + "Kg" +
        "\nAltura: " + altura + "m" +
        "\nSeu IMC: " + imc);
}

function apresentarE4UsuarioConsole() {
    let nome = prompt("Digite seu nome");
    let sobrenome = prompt("Digite seu sobrenome");
    let nomeCompleto = nome + " " + sobrenome;
    let peso = prompt("Digite seu peso. Exemplo: 56, 78, ...");
    let altura = prompt("Digite seu peso. Exemplo: 1.87, 1.78, ...");
    let alturaImc = altura * altura;
    let imc = peso / alturaImc;
    console.log(
        "Nome: " + nomeCompleto +
        "\nPeso: " + peso + " " + "Kg" +
        "\nAltura: " + altura + "m" +
        "\nSeu IMC: " + imc);
}

function apresentarE4UsuarioAlert() {
    let nome = prompt("Digite seu nome");
    let sobrenome = prompt("Digite seu sobrenome");
    let nomeCompleto = nome + " " + sobrenome;
    let peso = prompt("Digite seu peso. Exemplo: 56, 78, ...");
    let altura = prompt("Digite seu peso. Exemplo: 1.87, 1.78, ...");
    let alturaImc = altura * altura;
    let imc = peso / alturaImc;
    alert(
        "Nome: " + nomeCompleto +
        "\nPeso: " + peso + " " + "Kg" +
        "\nAltura: " + altura + "m" +
        "\nSeu IMC: " + imc);
}

//Exercício 4

//Exercício 5

function apresentarExercicio5Console() {
    let numero1 = 23;
    let numero2 = 7;
    let soma = numero1 + numero2;
    console.log(
        "Adição: " +
        "\nNúmero 1: " + numero1 +
        "\nNúmero 2: " + numero2 +
        "\nResultado: " + soma);

    let numero3 = 23;
    let numero4 = 7;
    let sub = numero3 - numero4;
    console.log(
        "Subtração: " +
        "\nNúmero 1: " + numero3 +
        "\nNúmero 2: " + numero4 +
        "\nResultado: " + sub);

    let numero5 = 23;
    let numero6 = 7;
    let multi = numero5 * numero6;
    console.log(
        "Multiplicação: " +
        "\nNúmero 1: " + numero5 +
        "\nNúmero 2: " + numero6 +
        "\nResultado: " + multi);

    let numero7 = 23;
    let numero8 = 7;
    let divi = numero7 / numero8;
    console.log(
        "Divisão: " +
        "\nNúmero 1: " + numero3 +
        "\nNúmero 2: " + numero4 +
        "\nResultado: " + divi);
}

function apresentarExercicio5Alert() {
    let numero1 = 23;
    let numero2 = 7;
    let soma = numero1 + numero2;
    alert(
        "Adição: " +
        "\nNúmero 1: " + numero1 +
        "\nNúmero 2: " + numero2 +
        "\nResultado: " + soma);

    let numero3 = 23;
    let numero4 = 7;
    let sub = numero3 - numero4;
    alert(
        "Subtração: " +
        "\nNúmero 1: " + numero3 +
        "\nNúmero 2: " + numero4 +
        "\nResultado: " + sub);

    let numero5 = 23;
    let numero6 = 7;
    let multi = numero5 * numero6;
    alert(
        "Multiplicação: " +
        "\nNúmero 1: " + numero5 +
        "\nNúmero 2: " + numero6 +
        "\nResultado: " + multi);

    let numero7 = 23;
    let numero8 = 7;
    let divi = numero7 / numero8;
    alert(
        "Divisão: " +
        "\nNúmero 1: " + numero3 +
        "\nNúmero 2: " + numero4 +
        "\nResultado: " + divi);
}
