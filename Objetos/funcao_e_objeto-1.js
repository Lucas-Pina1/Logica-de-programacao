function criarData(dia, mes, ano) {
	return {
		dia: dia,
		mes: mes,
		ano: ano,
		exibir: function () {
			return `${this.dia}/${this.mes}/${this.ano}`;
		}
	};
}

const d1 = criarData(9, 10, 2010);
const d2 = criarData(21, 8, 1995);
const d3 = criarData(7, 11, 2000);

console.log(d1, d2, d3);
