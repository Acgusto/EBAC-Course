"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Julia', 'Paula', "Wagner"];
var alunosDois = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunosDois);
var paula = alunosDois.find(function (item) {
  return item.nome == 'Paula';
});
console.log(paula);
var indiceDaPaula = alunosDois.findIndex(function (item) {
  return item.nome == 'Paula';
});
console.log(indiceDaPaula);
var todosAlunosSaoDeFrontend = alunosDois.every(function (item) {
  return item.curso === 'Frontend';
});
alunosDois.push({
  nome: 'Lucio',
  curso: 'Backend'
});
console.log(todosAlunosSaoDeFrontend);
var existeAlgumAlunoDeBackend = alunosDois.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend';
});
console.log(existeAlgumAlunoDeBackend);
function filtraAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend';
}
var filtraAlunosDeBackendDois = function filtraAlunosDeBackendDois(aluno) {
  return aluno.curso === 'Backend';
};
var alunosDeBackend = alunosDois.filter(filtraAlunosDeBackend);
console.log(alunosDeBackend);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var nomesDosAlunos = alunosDois.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);