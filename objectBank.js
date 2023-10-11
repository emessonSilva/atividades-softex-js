function Banco(conta, saldo, tipoConta, agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipoConta = tipoConta;
    this.agencia = agencia;

    this.buscarSaldo = function() {
        console.log(`Saldo: ${this.saldo}`);
    }

    this.deposito = function(num) {
        this.saldo += num;
        console.log(`Novo saldo após depósito: ${this.saldo}`);
    }

    this.saque = function(num) {
        this.saldo -= num;
        console.log(`Novo saldo após saque: ${this.saldo}`);
    }

    this.NumConta = function() {
        return this.conta;
    }
}

const minhaConta = new Banco('123456', 1000, 'Corrente', '7890');

console.log('Informações da conta:');

// Exibe o saldo inicial
minhaConta.buscarSaldo(); 

// Realizando um depósito de 500
minhaConta.deposito(500);

// Realizando um saque de 200
minhaConta.saque(200);

// Obtendo o número da conta
console.log(`Número da conta: ${minhaConta.NumConta()}`);
