let filmes = [

    // Criando objeto dentro dos arrays

    {
        nome: "Naruto",
        dataLancamento: "21 de Junho 2025",
        NumeroEpisodio: 15,
        NumeroTemporada: 9

    },

    {
        nome: "Naruto",
        dataLancamento: "30 de Dezembro 2010",
        NumeroEpisodio: 22,
        NumeroTemporada: 3

    },

    {
        nome: "Naruto",
        dataLancamento: "4 de Maio 2015",
        NumeroEpisodio: 7,
        NumeroTemporada: 1

    },

    {
        nome: "Naruto",
        dataLancamento: "21 de Junho 2018",
        NumeroEpisodio: 20,
        NumeroTemporada: 7


    }

];












/* CREATE (esta ferramenta permite o usuário
adicionar filmes) e UPDATE (esta ferramenta permite o usuário
ver filmes) */




let nomeFilme = prompt("Qual é o nome do Filme")
let dataLancamentoFilme = prompt("Qual é a data de lancamento do Filme")
let NumeroEpisodioFilme = prompt("Qual é o número de episódio") 
let NumTemporadaFilme = prompt("Qual é a temporada")

let NovoFilme = {
     
    nome: nomeFilme,
    dataLancamento: dataLancamentoFilme,
    NumeroEpisodio: NumeroEpisodioFilme,
    NumTemporada: NumTemporadaFilme,

};

filmes.unshift(NovoFilme)

listartudo =""

filmes.forEach(function(filmes){

 listartudo += `Esses são os fimes disponíveis no momento\n\nNome: ${filmes.nome}\nData de Lançamento:
${filmes.dataLancamento}\nNúmero de episódio: ${filmes.NumeroEpisodio}\nNúmeros de temporadas:
 ${filmes.NumeroTemporada}`

});

console.log(listartudo)



/* DELETE (esta ferramenta permite o usuário
adicionar filmes) */

let apagar = prompt("Qual Filme deseja apagar,\n coloque o nome do filme")
let index = filmes.findIndex(function(value){
        return value.nome === apagar;
        
});



/*EDIT (esta ferramenta permite o usuário
adicionar filmes) */




