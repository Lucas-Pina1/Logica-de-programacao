//Função construtora -> objeto
function Data(dia = 1, mes = 1, ano = 2021) {
	this.dia = dia;
	this.mes = mes;
	this.ano = ano;

	this.exibir = function() {
		return `${this.dia}/${this.mes}/${this.ano}`;
	};
}

const d1 = new Data();
const d2 = new Data(24, 12, 2022);
const d3 = new Data(21, 12, 2014);

console.log(d1);
console.log(d2);
console.log(d3);