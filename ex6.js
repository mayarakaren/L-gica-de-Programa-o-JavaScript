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
