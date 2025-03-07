class Animal {
 constructor (nome, idade) {
  this.nome = nome;
  this.idade = idade;
 }
 fazerSom() {
  throw new Error("Método 'fazerSom' deve ser implementado na subclasse.");
 }
}

class Cachorro extends Animal {
 fazerSom() {
  return "Au Au!";
 }
}

class Gato extends Animal {
 fazerSom() {
  return "Miau!";
 }
}

class Passaro extends Animal {
 fazerSom() {
  return "Piu piu!";
 }
}

const rex = new Cachorro("Rex", 3)
const mia = new Gato("Mia", 3)
const buddy = new Passaro("Buddy", 3)

console.log(`${rex.nome} diz: ${rex.fazerSom()}`)
console.log(`${mia.nome} diz: ${mia.fazerSom()}`)
console.log(`${buddy.nome} diz: ${buddy.fazerSom()}`)
