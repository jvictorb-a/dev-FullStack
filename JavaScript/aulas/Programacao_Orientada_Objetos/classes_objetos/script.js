// Notação Literal
/*const hotel = {
    quartos: 20,
    ocupados: 10,
    piscinas: 2,
    verificarDisponibilidade: function(){
        let res = this.quartos - this.ocupados
        console.log(res)
    }
}

hotel.quartos = 25
hotel['quartos'] = 30
delete hotel.piscinas
console.log(hotel.piscinas);*/

//Notação de Construtor
/*const hotel = new Object()
hotel.quartos = 20
hotel.ocupados = 10
hotel.verificarDisponibilade = function(){
        let res = this.quartos - this.ocupados
        console.log(res)
    }
hotel.quartos = 25
console.log(hotel.quartos);*/

//Criando classes 
class Hotel {

    constructor(){
        this.quartos = 20
        this.ocupados = 10
    }

    verificarDesponibilidade(){
        let res = this.quartos - this.ocupados
        return "Disponível: " + res
    }
}

const hotel = new Hotel()
hotel.verificarDesponibilidade(20)
//console.log(hotel.quartos) 