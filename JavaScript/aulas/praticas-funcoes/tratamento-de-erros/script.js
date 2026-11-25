// Tratamento de erros com Try Catch

function contarQuantidadeLetras(produto){
    try {
        console.log(produto.nome.length)
        console.log("teste")
    } catch(erro){
        console.log("Erro ao processar, código erro: 164")
        //tratarErro(erro)
    } /*finally {
        console.log("finally")
    }*/
}

function tratarErro(erro){
    throw new Error("Código de erro: 164 ")
}

const produto = {
    nome: "Notebook",
    preco: 1200
}

contarQuantidadeLetras(produto)

// (try -> tentar) executar 