// Objetos literais - melhorias 
let nome = "Notebook"
let preco = 1200

const produto = {
    nome: nome,
    preco: preco,
    exibirProduto: function(){
        console.log(`${this.nome}, ${this.preco}, ${this.preco}`)
    }
}

const pro = produto
pro.preco= 2000



/*
produto.categoria = "Eletrônicos"
produto.nome = "Notebook"
produto.exibirPreco = function(){
    console.log(`Preço: ${this.nome}`)
}
 produto.exibirProduto()*/