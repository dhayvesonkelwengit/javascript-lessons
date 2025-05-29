//----------------------VAR---------------------------

/*

console.log(user) // Acontece o chamado hosting,levado para cima
var user = "Dhayveson Kelwen"
// ---- Resultado: não definido

*/

/*

// HOSTING: acontece esse mesmo processo aqui de baixo
var user
console.log(user)

*/

/*

//escopo global
var email = "dhayvesonkelwen@gmail.com"

//escopo de bloco
{
    console.log(email)
}

// obs: elas podem funcionar dentro de um único escopo

*/

/*

//pode ser invertido

{
    var age = 18
}

console.log(age)

*/

//-----------------------LET-----------------------

let address = "Camboriú"

{
    address = "..."
    console.log(address)
}

//NÃO pode o 'console.log()', ser usado fora do escopo e nem a 'variável definida',  abaixo do escopo e do 'console.log()'