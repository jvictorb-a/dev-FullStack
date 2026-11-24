/*Paradigma -> exemplo ou padrão a ser seguido,não
se trata de uma linguagem, mas a forma como você
soluciona problemas usando uma linguagem de programação*/

//Javascript é multi paradigma

//Procedual
/*let quartos = 20;
let ocupados = 5;

function verificarDisponibilidade(quartos, ocupados){
    let res = quartos - ocupados;
    console.log("Disponíveis: " + res);
}*/  



//Orientado a objetos

const hotel = {
    quartos: 20,
    ocupados: 0,
    verificarDisponibilidade: function(){
        let res = this.quartos - this.ocupados
        console.log(res)
    }
}
//hotel.ocupados = 5;
hotel.verificarDisponibilidade
