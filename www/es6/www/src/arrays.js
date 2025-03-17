const redesSociais = ['Facebook', 'Instagram', 'Twitter']

for (let i = 0; i < redesSociais.length; i++) {
 console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
 console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula', "Wagner"]

const alunosDois = alunos.map(function(itemAtual) {
 return {
  nome: itemAtual,
  curso: 'Frontend'
 }
})

console.log(alunosDois)

const paula = alunosDois.find(function(item) {
 return item.nome == 'Paula'
})

console.log(paula)

const indiceDaPaula = alunosDois.findIndex(function(item) {
 return item.nome == 'Paula'
})

console.log(indiceDaPaula)

const todosAlunosSaoDeFrontend = alunosDois.every(function(item) {
 return item.curso === 'Frontend'
})

alunosDois.push({
 nome: 'Lucio',
 curso: 'Backend'
})

console.log(todosAlunosSaoDeFrontend)

const existeAlgumAlunoDeBackend = alunosDois.some(function(item) {
 return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeAlgumAlunoDeBackend)

function filtraAlunosDeBackend(aluno) {
 return aluno.curso === 'Backend'
}

const filtraAlunosDeBackendDois = aluno => aluno.curso === 'Backend'

const alunosDeBackend = alunosDois.filter(filtraAlunosDeBackend)

console.log(alunosDeBackend)

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual) {
 acumulador += itemAtual
 return acumulador
}, 0)

console.log(soma)

const nomesDosAlunos = alunosDois.reduce(function(acumulador, itemAtual) {
 acumulador += `${itemAtual.nome} `
 return acumulador
}, '')

console.log(nomesDosAlunos)