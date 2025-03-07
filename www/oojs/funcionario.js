function Pessoa(nome) {
 this.nome = nome;
 this.dizOi = function() {
  console.log(this.nome + ' diz olá');
 }
 this.dizCargo = function() {
  console.log(this.cargo);
 }
}

function Funcionario(nome, cargo, salario) {
 this.cargo = cargo;
 /* this.salario = salario; */
 let _salario = salario;
 this.getSalario = function() {
  return _salario;
 }
 this.setSalario = function(valor) {
  if (typeof valor === 'number') {
   _salario = valor;
  }
 }
 this.aumento = function() {
  const novoSalario = _salario * 1.1;
  _salario = novoSalario;
 }
 Pessoa.call(this, nome);
}

function Estagiario(nome) {
 Funcionario.call(this, nome, 'estagiario', 2000)
 this.aumento = function() {
  const novoSalario = this.getSalario() * 1.07;
  this.setSalario(novoSalario);
 }
}

function Gerente(nome) {
 Funcionario.call(this, nome, 'gerente', 10000)
 this.aumento = function() {
  const novoSalario = this.getSalario() * 1.15;
  this.setSalario(novoSalario);
 }
}

const funcionarioUm = new Funcionario('Maria', 'dev front-end', 5000);
const funcionarioDois = new Estagiario('Pedro');
const funcionarioTres = new Gerente('Paula');

funcionarioUm.aumento();
console.log(funcionarioUm.getSalario());
funcionarioDois.aumento();
console.log(funcionarioDois.getSalario());
funcionarioTres.aumento();
console.log(funcionarioTres.getSalario());