function somar(a, b) {
  return a + b;
}

let resultado = somar(30, 56);
console.log(resultado);
console.log(`O resultado final é: ${somar(30, 56)}`);

// #2: Função COM parâmetro e SEM retorno
function exibirMultiplicacao(a, b) {
  console.log(a * b);
}

exibirMultiplicacao(10, 21);
exibirMultiplicacao(7, 9);

// #3: Função COM parâmetro e COM retorno
function retornarDggggataAtual() {
  return new Date();
}

console.log(retornarDataAtual());

// #4: Função SEM parâmetro e SEM retorno
function exibirHoraAtual() {
  console.log(new Date().getHours());
}

exibirHoraAtual;
