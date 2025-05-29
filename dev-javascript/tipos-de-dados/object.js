//BOOLEAN

//Quando definir um objeto, colocar variáveis demanda um tempo e esforço maior, por isto, é recomendado adicionar propiedades por meio de {}, definindo uma variavel geral

const person = { // variavel de bloco geral
    name: "Dhayveson",
    age: 18,
    sex: "male",
    height: 1.76,
    address: {
        street: "Avenida Brasil, Divinéia",
        number: 74, 
        country: "Brasil"
    }
}

console.log(person)//Acesssar a raiz

console.log(person.sex)
//Quiser acessar algo dentro, adicione o "."

console.log(person.address.street)
//Quiser algo mais profundo ainda, adicione "."