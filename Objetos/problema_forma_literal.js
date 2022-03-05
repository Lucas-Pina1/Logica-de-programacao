const d1 = {
	dia: 21,
	mes: 8,
	ano: 1995,
	exibir: function () {
		return `${this.dia}/${this.mes}/${this.ano}`;
	}
};

const d2 = {
	dia: 23,
	mes: 8,
	ano: 1999,
	exibir: function () {
		return `${this.dia}/${this.mes}/${this.ano}`;
	}
};

const d3 = {
	dia: 20,
	mes: 6,
	ano: 1995,
	exibir: function () {
		return `${this.dia}/${this.mes}/${this.ano}`;
	}
};

console.log(d1, d2, d3);
