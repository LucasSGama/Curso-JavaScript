function primeiraFuncao() {

    console.log("Hello world das funções");

}

primeiraFuncao();

function dizerNome(nome) {

    console.log("O nome é: " + nome);
    
}

dizerNome("Matheus");
dizerNome("Pedro");
dizerNome("Xavier");

var NomeDoBancoDeDados = "João";

dizerNome(NomeDoBancoDeDados);

function soma(a, b) {
    var soma = a + b;
    return soma;
}

var somaUm = soma(2, 5);

console.log(somaUm);

var SomaDois = soma(5, 5);

console.log(SomaDois);

console.log(soma(4, 5))