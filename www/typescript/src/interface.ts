class Conta {
 numeroDaConta: number;
 saldo: number = 0;

 constructor(numeroDaConta: number) {
  this.numeroDaConta = numeroDaConta;
 }
}

class ContaSalario extends Conta {
 depositar(valor: number) {
  this.saldo += valor;
 }
}

interface ITransacional {
 transferir: (valor: number, destinatario: Conta) => boolean;
 taxaTransferencia: number;
}

interface IExemploDois {
 cnpj: number;
}

interface IExemploTres extends IExemploDois {
 telefone: number;
}

class ContaCorrente extends Conta implements ITransacional {
 transferir (valor: number, destinatario: Conta) {
  destinatario.saldo += valor;
  return true
 };
 taxaTransferencia: number = 0;
}