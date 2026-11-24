// Encapsulamento, modificadores de acesso e 
// getters e setters

class ContaBancaria {
    construtor() {
        this._numeroConta = 0
        this._saldo = 0
    }
    get numeroConta() {
        return this._numeroConta
    }
    set numeroConta(numero) {
        if (numero > 0) {
            this._numeroConta = numero + 1
        }
    }
    get saldo() {
        return this._saldo
    }
    set saldo(novoSaldo) {
        if (novoSaldo > 0) {
            this._numeroConta = novoSaldo
        }
    }
    sacar(valorSaque){
        this._saldo -= valorSaque
    }
    depositar(valorDeposito){
        this._saldo -= valorDeposito
    }
}

const conta = new ContaBancaria()
conta.numeroConta = 60

console.log(conta._numeroConta)