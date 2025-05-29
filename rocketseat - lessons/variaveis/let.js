const { useSyncExternalStore } = require("react")

//Declara uma variável sem valor
let value
console.log("sem valor")

//Declara uma variável com valor
let user = "dhayveson" //let é consistente e não permite se mudar
console.log(user)

user = "kelwen" //sobrescrevendo pq é um estilo cascata
console.log(user)  