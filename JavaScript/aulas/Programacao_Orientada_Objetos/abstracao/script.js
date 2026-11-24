//Pilar 1 - Abstração
/*
Modelo, Entidade, Identidade,
Características e Ações
*/

class Carro {

    constructor(){
        this.marca = "Volkswagen",
        this.modelo = "Gol",
        this.cor = "prata",
        this.placa = "EMJ-2565"
    }

    ligar(){

    }

}

const carro = new Carro()
carro.modelo = "Golf"
console.log(carro.modelo);

//Loja Virtual
class Produto {

    constructor(){
        //roupas
        this.tamanho = "M",
        this.cor = "Vermelho",
        this.preco = "45,90"

        //eletrônicos
        this.altura = "50cm",
        this.largura = "30cm" 
    }

}