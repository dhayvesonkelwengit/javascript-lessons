//ARRAY - VETOR - LISTA

const numbers = [10, 5, 234, 576] //usa-se [] ate no console
console.log(numbers[3]) //acessar determinada posição com []
//em progamação, tudo começa no número "0"

const numbers2 = [0, 'kelwen']
//pode ser usado strings e objetos tambem
console.log(numbers2[1])//acessou o numero 1="kelwen"


// E pode ser usado objetos tambem, como aqui abaixo:
const people = [{ 
    name: "Dhayveson",
    age: 18,
    sex: "male",
    height: 1.76,
    address: {
        street: "Avenida Brasil, Divinéia",
        number: 74, 
        country: "Brasil"
    }
},

    { 
    name: "José",
    age: 19,
    sex: "male",
    height: 1.90,
    address: {
        street: "Rua do egito",
        number: 80, 
        country: "Egito"
    }
},

    { 
    name: "Maria",
    age: 18,
    sex: "female",
    height: 1.68,
    address: {
        street: "Washigton, Estados Unidos da Ámerica",
        number: 74, 
        country: "USA"
    }
},

    { 
    name: "Caio",
    age: 20,
    sex: "male",
    height: 2.00,
    address: {
        street: "São Paulo, São Paulo",
        number: 74, 
        country: "Brasil"
    }
}
]

console.log( "Está é a cliente Maria: ", people[2])
