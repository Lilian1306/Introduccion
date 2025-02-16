// Funciones que retornan valores


// Como declararlo en function expression; retornando valores
// const sumar = function(number1 = 0, number2 = 0){
//     return number1 + number2
// }
// const resultado = sumar (10, 30)
// console.log(resultado)



// Como declararlo en function declaration: retornando valores
// function sumar(number1 =0, number2 =  0){
//     return number1 + number2
// }
// const resultado = sumar(10, 20)
// console.log(resultado)


// Como declarlo con arrow function: retornando valores/ Esta sintaxi funciona nada mas cuando es en una linea. 
const sumar = (number1 = 0, number2 = 0) => number1 + number2
const resultado = sumar(10, 67)
console.log(resultado)