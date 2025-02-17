// Ternarios 

const auth = true

const saldo = 1000
const pagar = 1220
const tarjeta = false


// Usamos la sintaxis if de esta manera
// if(auth ){
//     console.log("Usuario autenticado")
// }else {
//     console.log("no autenticado, ir a login")
// }

// auth ? 
// console.log("Usuario autenticado")  :  
// console.log("no autenticado, ir a login")

saldo > pagar || tarjeta ?
console.log("Si Puedes Pagar") : 
console.log("No puedes paagar")