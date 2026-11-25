// Funções construtoras

const Hotel = function(){
    this.nome = "Hotel do Paraíba"
    this.quantidadeSuites = 30
    this.suitesOcupadas = 25

    this.reservar = function(){
        this.suitesOcupadas++
        console.log("Ocupadas: " + this.suitesOcupadas)
    }
}

const hotel = new Hotel()
hotel.reservar()


/*console.log(typeof Produto)
const produto = new Produto()
console.log(typeof produto)*/