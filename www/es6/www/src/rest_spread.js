// REST
function somar (a, b, c, d) {
 let soma = 0

 for (let i = 0; i < arguments.length; i++) {
  soma += arguments[i]
 }

 return soma

 /* console.log(arguments) */
 /* return a + b + c */
}

console.log(somar(10, 20, 30))

function somarComRest(nome, sobrenome, ...numeros) {
 const soma = numeros.reduce((total, numeroAtual) => {
  total += numeroAtual
  return total
 }, 0)
 return soma
}

console.log(somarComRest(10, 20, 30))

// SPREAD
const numeros =  [1, 2, 3, 4]

console.log(...numeros)

const timesDeFutebolDeSaoPaulo = ['santos', 'palmeiras', 'bragantino', 'sao paulo']
const timesDeFutebolDoRio = ['vasco', 'botafogo', 'flamengo', 'fluminense']

/* const timesDeFutebol = timesDeFutebolDeSaoPaulo.concat(timesDeFutebolDoRio); */
const timesDeFutebol = [...timesDeFutebolDeSaoPaulo, ...timesDeFutebolDoRio]

console.log(timesDeFutebol)

const carroDaJulia = {
 modelo: 'gol',
 marca: 'vw',
 motor: 1.6
}

const carroDaAna = {
 ...carroDaJulia,
 motor: 1.8
}

console.log(carroDaAna)

// DESESTRUTURAÇÃO
/* const motorDoCarroDaAna = carroDaAna.motor */

const {motor: motorDoCarroDaAna} = carroDaAna
const {motor: motorDoCarroDaJulia} = carroDaJulia

console.log(motorDoCarroDaAna)
console.log(motorDoCarroDaJulia)

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol

console.log(item1)
console.log(item2)
console.log(item3)
console.log(...outrosTimes)