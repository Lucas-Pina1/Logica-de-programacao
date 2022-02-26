let temdinheiro = true;
let estaEnsolarado = true;
let carroEstaNaGaragem =true;

let resultadoE = '#1 (and) -vai pro shopping?'
resultadoE += temdinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = '#2 (or) - vai pro shopping?'
resultadoOU += estaEnsolarado || carroEstaNaGaragem
console.log(resultadoOU);

console.log(true !== false);
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);

console.log('Não verdadeiro: ' + !true);
console.log('Não false: ' + !true);