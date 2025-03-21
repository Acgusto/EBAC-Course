function calculaArea(base: number, altura: number): number {
 return base * altura  
}

const calculaAreaDois = (base: number, altura: number): number => base * altura

function somar(...numeros: number[]): void {
 console.log(numeros)
}

function teste(): string | number {
 if (10 > 5) {
  return 'Dez maior que cinco'
 } else {
  return 5
 }
}

const resultadoDeTeste: string | number = teste()