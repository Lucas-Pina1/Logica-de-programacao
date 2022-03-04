const numeros = [10, 20, 30];

numeros.forEach(function(element, indice, array) {
	console.log(element, indice, array);
});

numeros.forEach(function(_, i) {
	console.log(i);
});