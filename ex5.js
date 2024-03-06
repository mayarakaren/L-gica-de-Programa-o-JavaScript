//Ex1
function text(){
    console.log('Olá, Mundo!');
}

//Ex2
let nome = 'Mayara';
function name(nome){
    console.log(`Olá, ${nome}!`);
}

//Ex3
let numero = 8;
function calcularDobro(numero) {
    return numero * 2;
}
var resultadoDobro = calcularDobro(numero);
console.log("O dobro do número " + numero + " é: " + resultadoDobro);

//Ex4
let num1 = 7;
let num2 = 5;
let num3 = 8;

function media(num1, num2, num3){
    return (num1 + num2 + num3)/3;
}

//Ex5
let numero1 = 9;
let numero2 = 5;

function numeroMaior(numero1, numero2){
    if (numero1 > numero2){
        return numero1;
    }
    return numero2;
}

//Ex6
let num4 = 8;

function produto(num4){
    return num4 * num4;
}
