//Descendentes de Object

Object.prototype

const obj = {

}

//console.log(obj.toString())
//console.log(obj.__proto__ == Object.prototype)
//console.log(obj.__proto__)






class Carro {
    constructor(){
        this.placa = "AMP-1230"
    }
}

class Bmw extends Carro {
    constructor(){
        super()
        this.nome = "BMW 320i"
    }
}

/*
const objBmw = new Bmw()
console.log(objBmw.placa)
console.log(objBmw.nome)
*/

const veiculo = {
    motor: "50 cavalos"
}

const carro = {
    placa: "AMP-1230",
    acelerar: function(){
        console.log("Acelerar")
    },
    __proto__: veiculo
}
const bmw = {
    nome: "BMW 320i",
    __proto__: carro
}

console.log(bmw.placa)
bmw.acelerar()
console.log(bmw.motor)