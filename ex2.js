//Ex 1
if (prompt('Qual é o dia da semana:') === 'Sábado' || prompt('Qual é o dia da semana:') === 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}
//-----------------------------------------------------
//Ex2
if (prompt('Digite um número:') >= 0){
    alert('O número é positivo!');
} else{
    alert('O número é negativo!');
}
//-----------------------------------------------------
//Ex3
if(prompt('Digite a pontuação:') >= 100){
    alert('Parabéns, você venceu!');
} else{
    alert('Tente novamente para ganhar.');
}
//-----------------------------------------------------
//Ex4
saldoConta = 1000;
alert(`O saldo da conta é: R$${saldoConta}.`);

//Ex5
let nome = prompt('Digite o seu nome:');
alert(`Bem-Vindo(a) ${nome}.`)