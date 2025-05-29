//BIBLIOTECA MATH

/*Math > Iniciar letra maiuscula*/

//---- 1. Funções matemáticas básicas -------------------

console.log(Math.abs(-10));        // 10 (valor absoluto)
console.log(Math.sqrt(9));         // 3 (raiz quadrada)
console.log(Math.pow(2, 3));       // 8 (potência 2³)
console.log(Math.round(4.7));      // 5 (arredonda)
console.log(Math.floor(4.9));      // 4 (arredonda para(baixo)
console.log(Math.ceil(4.1));       // 5 (arredonda para cima)
console.log(Math.max(1, 5, 3));    // 5 (maior valor)
console.log(Math.min(1, 5, 3));    // 1 (menor valor)

//-------- 2. Constantes matemáticas -----------------

console.log(Math.PI);       // 3.141592653589793 (PI)
console.log(Math.E);        // 2.718281828459045 (E)

//--------- 3. Aleatoriedade -------------------------

console.log(Math.random());              
// Número aleatório entre 0 e 1
console.log(Math.floor(Math.random() * 10));  
// Inteiro aleatório de 0 a 9

// -------------------------------------------------------

/*Importante:
 Você não precisa instalar nenhuma biblioteca externa para usar Math. Basta escrever:*/

let valor = Math.sqrt(16);
console.log(valor); // 4