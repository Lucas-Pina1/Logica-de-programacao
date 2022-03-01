function executar(param) {
  if (typeof param === "function") {
    console.log(param());
  }
}

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}
