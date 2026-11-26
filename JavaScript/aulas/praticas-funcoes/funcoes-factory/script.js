// Factory - Design Pattern (padrão de design ou padrão de projetos)
// Padrão de projetos -. forma comum de resolver problemas

const produto1 = {
    nome: "Notebook",
    preco: 1200
}


const ProdutoFactory = function(nome, preco){

    //dados

    return {
        nome,
        preco,
        recuperarAvaliacoes(){
            console.log(`Avaliações para ${this.nome}`)
        }
    }
}

const produto = ProdutoFactory("Camisa do mengão", 70)
console.log(produto)

const produtoNovo = ProdutoFactory("Camisa do Palmeiras",  70)
console.log(produtoNovo)