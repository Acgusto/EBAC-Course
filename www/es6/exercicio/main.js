
const alunos = [
 { nome: "João", nota: 4.5 },
 { nome: "Maria", nota: 9.0 },
 { nome: "Pedro", nota: 7.5 },
 { nome: "Ana", nota: 5.0 },
 { nome: "Lucas", nota: 6.0 }
];

function alunosAprovados(alunos) {
 return alunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = alunosAprovados(alunos);
console.log(aprovados);