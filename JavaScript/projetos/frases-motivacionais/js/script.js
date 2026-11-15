const phrases = [
    "Tudo começa com uma decisão",
    "Foque e avance",
    "Nada muda se você não mudar",
    "A ação é o segredo para transformar sonhos em realidade",
    "O futuro depende do que você faz hoje",
    "Não desista, supere",
    "A persistência realiza o impossível",
    "Feito é melhor que perfeito",
    "A vida começa onde termina a sua zona de conforto",
    "Não pare quando estiver cansado, pare quando tiver terminado",
    "O sucesso é constância, não sorte",
    "Sonhe grande, comece pequeno",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia",
    "Desista de ser mediano, escolha ser extraordinário"
]  

function choosePhrase () {
    let randomIndex = Math.floor(Math.random() * phrases.length);
    const phrase = phrases[randomIndex];
    document.getElementById('phrase').innerHTML = phrase;
}