const multiplica = (a: number, b: number): void => console.log(a * b);
const dizOla = (nome: string): void => console.log("Olá " + nome);

function multiplicaDois(a: number, b: number): void {
 return console.log(a * b);
}

function dizOlaDois(nome: string): void {
 return console.log("Olá " + nome);
}

multiplica(2, 2);
dizOla('Carlos');

multiplicaDois(8, 8);
dizOlaDois('Roberto');
