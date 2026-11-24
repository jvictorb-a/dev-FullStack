// Pilar - Encapsulamento
class Carro {
    constructor(){
        this.modelo = "Gol"
        this.cor = "Vermelho"
    }
    frear(){
        console.log("parar carro")
    }
}

const carro = new Carro()