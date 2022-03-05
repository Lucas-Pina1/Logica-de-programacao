const data = {
	dia: 21,
	mes: 8,
	ano: 1995,
	exibir: function () {
		return `${this.dia}/${this.mes}/${this.ano}`;
	}
};

console.log(data.exibir());

