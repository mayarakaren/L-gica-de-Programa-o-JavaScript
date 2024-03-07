//Ex1
function calcularIMC(altura, peso) {
  if (altura <= 0 || peso <= 0) {
    return "Altura e peso devem ser valores positivos.";
  }

  const imc = peso / (altura * altura);
  const imcArredondado = Math.round(imc * 100) / 100;
  return `O seu IMC é ${imcArredondado}.`;
}

const altura = 1.75;
const peso = 70;

const resultadoIMC = calcularIMC(altura, peso);
console.log(resultadoIMC);

//Ex2
function calcularFatorial(numero) {
  if (numero < 0) {
    return "O fatorial é indefinido para números negativos.";
  }

  if (numero === 0) {
    return 1;
  }
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }

  return resultado;
}
const numero = 5;
const resultadoFatorial = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultadoFatorial}.`);

//Ex3
function converterDolarParaReais(valorEmDolar) {
  if (isNaN(valorEmDolar) || valorEmDolar < 0) {
    return "Por favor, insira um valor válido em dólar.";
  }

  const cotacaoDolar = 4.80;
  const valorEmReais = valorEmDolar * cotacaoDolar;
  const valorEmReaisArredondado = Math.round(valorEmReais * 100) / 100;

  return `O valor equivalente em reais é R$${valorEmReaisArredondado}.`;
}
const valorEmDolar = 50;
const resultadoConversao = converterDolarParaReais(valorEmDolar);
console.log(resultadoConversao);

//Ex4
function calcularAreaEPerimetro(altura, largura) {
  if (altura <= 0 || largura <= 0) {
    console.log("Altura e largura devem ser valores positivos.");
    return;
  }

  const area = altura * largura;
  const perimetro = 2 * (altura + largura);

  console.log(`Área da sala: ${area} metros quadrados.`);
  console.log(`Perímetro da sala: ${perimetro} metros.`);
}

const alturaSala = 3;
const larguraSala = 5;

calcularAreaEPerimetro(alturaSala, larguraSala);

//Ex5
function calcularAreaEPerimetroSalaCircular(raio) {
  if (raio <= 0) {
    console.log("O raio deve ser um valor positivo.");
    return;
  }

  const pi = 3.14;
  const area = pi * Math.pow(raio, 2);
  const perimetro = 2 * pi * raio;

  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

const raioDaSalaCircular = 4;

calcularAreaEPerimetroSalaCircular(raioDaSalaCircular);

//Ex6
function exibirTabuada(numero) {
  if (isNaN(numero)) {
    console.log("Por favor, insira um número válido.");
    return;
  }

  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

const numeroParaTabuada = 7;
exibirTabuada(numeroParaTabuada);
