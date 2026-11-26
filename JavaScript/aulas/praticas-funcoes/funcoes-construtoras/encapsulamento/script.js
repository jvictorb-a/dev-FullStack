const Hotel = function(){
    this.nome = "Hotel do Paraíba"
    this.quantidadeSuites = 30
    let suitesOcupadas = 25

    this.reservar = function(){
        if(this.suitesOcupadas < this.quantidadeSuites){
            suitesOcupadas++
            console.log("ocupadas: " + suitesOcupadas)
        } else {
            console.log("Estamos ocupados")
        }
    }
}

const hotel = new Hotel()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.suitesOcupadas = 20
hotel.reservar()