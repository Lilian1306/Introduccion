// Objetos - Como unir dos objetos 

const producto = {
    nombre : "tablet",
    precio : 1306,
    disonible: true
}

const cliente = {
    nombre : "Holly",
    premium : true
}

// const carrito =  {
//     cantidad : 1,
//     ...producto   // Spread operator
// }

 // Este codigo realiza una copia de los dos objetos
// const nuevoObjeto = {
//     producto,
//     cliente 
// }
// console.log(nuevoObjeto)


// ESTE CODIGO UNE LOS DOS OBJETOS EN UNO SOLO
const nuevoObjeto = {
    ...producto,
    ...cliente 
}
console.log(nuevoObjeto)



const nuevoObjeto2 = Object.assign(producto, cliente)
console.log(nuevoObjeto2)