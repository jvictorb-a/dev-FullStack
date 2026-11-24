// Herança - Reutilização e manutenção
// Classe: Cao Passaro

class Animal { //superclasse - pai
    constructor() {
        this.cor = ""
        this.tamanho = 0
        this.peso = 0
    }
    correr() {
        console.log("correr")
    }
    dormir() {
        console.log("dormir")
    }
}

class Cao extends Animal{// subclasse - filha
    latir() {
        console.log("latir")
    }
}

class Passaro extends Animal{// subclasse - filha
    voar() {
        console.log("voar")
    }
}

const cao = new Cao()
const passaro = new Passaro()

passaro.correr()
passaro.cor = "amarelo"
passaro.voar()
