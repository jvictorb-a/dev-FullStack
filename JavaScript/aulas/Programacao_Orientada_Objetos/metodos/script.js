//Métodos - parâmetros e retornos
class Usuario {
    constructor(){
        this.email = ""
        this.senha = ""
        this.subtotalCompra = 0
    }
    logar(){
        let emailBD = "ja@gmail.com"
        let senhaBD = "1234"

        if(emailBD == this.email){
            if(senhaBD == this.senha){
                return "Senha válida"
            }
        } else {
            return "Senha inválida"
        }

    }

    calcularDesconto(cupom){
        let desconto = 0
        if (cupom == "DESC20"){
            desconto = 20
        } else if (cupom == "FESTA10"){
            desconto = 10
        }

        return this.subtotalCompra - desconto
    }
}

/*const usuario = new Usuario()
usuario.email = "ja@gmail.com"
usuario.senha = "1234"

let mensagem = usuario.logar()
console.log(mensagem)*/

const usuario = new Usuario()
usuario.subtotalCompra = 500
usuario.calcularDesconto("DESC20")