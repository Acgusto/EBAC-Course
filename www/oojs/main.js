const carroDoJoao = {
 modelo: 'Fiesta',
 fabricante: 'Ford',
 anoModelo: 2020,
 anoFabricacao: 2019,
 acelerar: function() {
  console.log('vruum');
 }
}

const carroDaMaria = {
 modelo: 'Ka',
 fabricante: 'Ford',
 anoModelo: 2021,
 anoFabricacao: 2020,
 acelerar: function() {
  console.log('vruum');
 }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
 this.modelo = modelo;
 this.fabricante = fabricante;
 this.anoModelo = anoModelo;
 this.anoFabricacao = anoFabricacao;
	this.acelerar = function() {
		console.log("acelerar");
	}
}

const carroDoPedro = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaGabi = new Carro("Ka", "Ford", 2021, 2020);

console.log(carroDoPedro);
console.log(carroDaGabi);


const nome = "Leandro";
const sobrenome = 'Mello';
const idade = 17;
const eMaiorDeIdade = false;
const conhecimentos = ["html", "css", "javascript"];

const pessoa =  {
	nome: nome,
	sobrenome: sobrenome,
	idade: idade,
	eMaiorDeIdade: eMaiorDeIdade,
	conhecimentos: conhecimentos,
}

Object.freeze(pessoa);

function exibeAtributo(nomeAtributo) {
	console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome');

if (pessoa.sobrenome) {
	console.log('a pessoa tem um sobrenome')
}

if ('sobrenome' in pessoa) {
	console.log('a pessoa tem um sobrenome')
}

console.log(Object.keys(pessoa).length)
console.log(Object.values(pessoa))