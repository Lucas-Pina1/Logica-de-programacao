const cliente = {
	codigo: 16532,
	nome: 'Ana',
	vip: true,
	edereco: {
		logradouro: 'Rua ABC',
		numero: 123,
		complemento: 'Apto 101 Bloco B',
		pontosRef: [
			'Hospital X',
			'Shopping Y',
		],
	},
	nomeFilhos: ['Bia', 'Carlos', 'Gabriel']
};


console.log(cliente.endereco.logradouro);
console.log(cliente.pontosRef[0]);