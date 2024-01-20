//Ex1
console.log("Boas Vindas!");

//Ex2
let nome = 'Mayara';
console.log(`Olá, ${nome}!`);

//Ex3
let nomezinho = 'Mayara';
alert(`Olá, ${nomezinho}!`);

//Ex4
let linguagem = prompt('Qual a linguagem de Programação que você mais gosta?');
console.log(linguagem);

//Ex5
let valor1 = 2;
let valor2 = 3;

let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

//Ex6
let val1 = 8;
let val2 = 3;
let res = valor1 - val2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

//Ex7
let idade = prompt("Digite sua idadade:");

if(idade >= 18){
    alert('Você é maior de idade!');
} else{ 
    alert('Você é menor de idade.');
}

//Ex8
let numero = parseFloat(prompt('Digite um número:'));

if(numero == 0){
    alert('O número é igual a zero');
} if(numero > 0){
    alert('O número é positivo');
} else{
    alert('O número é negativo');
}

//Ex9
let contador = 1;

while (contador <= 10) {
    console.log(`O número atual é: ${contador}`);
    contador++;
}

//Ex10
let nota = prompt('Digite uma nota:');

if(nota >= 7){
    alert('Aluno Aprovado!');
} else{
    alert('Aluno Reporvado! :(');
}

//Ex11
let aleatorio = Math.random;
console.log(aleatorio);

//Ex12
let numAleatorio =  parseInt(Math.random * 10 + 1);
console.log(numAleatorio);

//Ex12
let numeroAleatorio =  parseInt(Math.random * 1000 + 1);
console.log(numeroAleatorio);
