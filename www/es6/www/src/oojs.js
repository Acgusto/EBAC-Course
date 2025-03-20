/* function Pokemon(nomeDoPokemon, tipoDoPokemon) {
 this.nome = nomeDoPokemon
 this.tipo = tipoDoPokemon
}

const pikachu = new Pokemon('Pikachu', 'Elétrico') */

class Pokemon {
 #hp = 100

 constructor(nomeDoPokemon, tipoDoPokemon) {
  this.nome = nomeDoPokemon
  this.tipo = tipoDoPokemon
 }

 atacar(nomeDoAtaque) {
  console.log(`${this.nome} atacou com ${nomeDoAtaque }`)
 }

 recebeuAtaque() {
  this.#hp -= 10
 }

 exibeHp() {
  console.log(this.#hp)
 }
}

class Pikachu extends Pokemon {
 constructor() {
  super('Pikachu', 'Elétrico')
 }
 atacar() {
  console.log(`${this.nome} atacou com Choque do Trovão`)
 }
}

const pikachuDoAsh = new Pikachu()

pikachuDoAsh.recebeuAtaque()

console.log(pikachuDoAsh.hp)

pikachuDoAsh.atacar()

pikachuDoAsh.exibeHp()

const pikachu = new Pokemon('Pikachu', 'Elétrico')

/* pikachu.atacar('choque do trovão') */

console.log(pikachu)
console.log(pikachuDoAsh)

console.log(pikachuDoAsh instanceof Pikachu)
console.log(pikachuDoAsh instanceof Pokemon)