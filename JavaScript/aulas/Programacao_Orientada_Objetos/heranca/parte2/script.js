class Animal {
    constructor() {
        this.cor = ""
        this.tamanho = 0
        this.peso = 0
    }
    correr() {
        console.log("correr")
        console.log("como")
        console.log("um")
    }
    dormir() {
        console.log("dormir")
    }
}

class Cao extends Animal{
    constructor(){
        super()
        this.tamanhoOrelha = 0
    }
    correr() {
        super.correr()
        console.log("cao")
    }
    latir() {
        console.log("latir")
    }
}

class Passaro extends Animal{
    correr() {
        super.correr()
        console.log("passaro")
    }
    voar() {
        console.log("voar")
    }
}

class Papagaio extends Passaro{
    falar(){
        console.log("falar")
    }
}

const cao = new Cao()
const passaro = new Passaro()
const papagaio = new Papagaio()

/*passaro.correr()
passaro.cor = "amarelo"
passaro.voar()*/

papagaio.correr()
//papagaio.falar()
