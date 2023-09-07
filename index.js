/*um objeto guarda meus valores com um nome
//===para criar 
const professor = { 
    nome: 'Vitor',
    idade: 27
    email: 'vitor@gmail.com'
}
//=== para acessar
console.log(professor.idade)
//OU
console.log(professor["nome"])
//alterar
professor.nome = 'Mika'
professor['email'] = 'profmika@gmail.com'
*/
//exercicio
let cinema = {
    nomeDaObra: 'Aranha-Verso',
    diretor: 'Zezinho',
    anoLançado: '2023',
    elenco: ['João', 'Carlos', 'Maria'],
    visto: Boolean(true),
}
console.log(cinema.nomeDaObra, cinema.diretor, cinema.anoLançado)
console.log(cinema['elenco'], cinema["visto"])
//2
let persona = {
    nome: 'Camila',
    idade: 17,
    generoMusica: 'green day',
}
console.log("O nome dessa pessoa é", persona.nome, 'ela tem', persona.idade, 'anos e gosta muito de', persona.generoMusica)

//Acessando objetos dentro de objetos
const donoDoPet = {
    nome: "Vitor Hugo",
    pet: {
    nomeDoPet: "Wanda",
    raca: "Vira-lata",
    idade: 1
    }
    }
console.log(donoDoPet.pet.nomeDoPet)

//Acessando arrays dentro de objetos {[ ]}
const curso = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
    }

console.log(curso.linguagens[0]) // SERÁ IMPRESSO 'JS'

//Array de objetos
const professores = [
    {nome: 'Andrei', modulo: 1},
    {nome: 'Vitor', modulo:2},
    {nome:'Mina', modulo: 3},
]
console.log(professores[1].nome)

//Adicionar propriedade
/*const curso = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
    }
    */
    //notação de PONTO
curso.numeroDeEstudantes = 50
    //notação de COLCHETES
curso['numeroDeCadeiras'] = 50
//3.
/*let cinema = {
    nomeDaObra: 'Aranha-Verso',
    diretor: 'Zezinho',
    anoLançado: '2023',
    elenco: ['João', 'Carlos', 'Maria'],
    visto: Boolean(true),
}
console.log(cinema.nomeDaObra, cinema.diretor, cinema.anoLançado)
console.log(cinema['elenco'], cinema["visto"])*/
cinema.personagens  = ['Miles', 'gatuno','mary jane']
console.log(cinema.elenco[0], 'interpreta o personagem', cinema.personagens[0], ',', cinema.elenco[1], 'interpreta o personagem', cinema.personagens[1], cinema.elenco[2], 'e interpreta o personagem', cinema.personagens[2])

cinema.elenco[0] = 'xuxa'
console.log(cinema.nomeDaObra, cinema.diretor, cinema.anoLançado, cinema.elenco, cinema.visto)

//ESPALHAMENTO OU SPREAD
/*spread é simbolizado por três pontos = ... 
const usuario = {
nome: 'Prof',
idade: 25,
email: 'prof@senacrs.com.br',
cidade: ‘São Paulo’,
}

****espalhando

const novoUsuario = {
...usuario,
nome: ‘João’,   
idade: 28,  // se declarado uma propriedade com o mesmo nome, ele é redefinido
} 
**Fica então
const novoUsuario = {
nome: ‘João’,
idade: 28,
email: 'prof@senacrs.com.br',
cidade: ‘São Paulo’
}

*/
//Espalhando arrays
const listaDeNomes = ["Mika", "Paula", "Vitor"]

//**espalhando
const copiaListaDeNomes = [...listaDeNomes]

console.log(copiaListaDeNomes)   //["Mika", "Paula", "Vitor"] 

//Sobrescrevemos valores através do seu index
copiaListaDeNomes[0] = 'vitor'  //["Vitor", "Paula", "Vitor"]

//4.
/*
let persona = {
    nome: 'Camila',
    idade: 17,
    generoMusica: 'green day',
    */

    function people(pessoa) {
        let novoObjeto = {...pessoa, 
        comidasFav: ['banana' , 'cenoura' , 'muffin'],
        BFF: {
        nome: 'João Paulo',
        idade: 22,
        }
        }
        console.log("O nome da pessoa é", novoObjeto.nome, "e suas comidas preferidas são", novoObjeto.comidasFav[0], ",", novoObjeto.comidasFav[1],
"e", novoObjeto.comidasFav[2],'.', 'Seu melhor amigo se chama', novoObjeto.BFF.nome, 'e tem', novoObjeto.BFF.idade, "anos");
        }  
people(persona);
