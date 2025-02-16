// Objetos 

 const producto = {    // Este es un Objeto
    // Key     Value
    nombre : "tablet",  // Esto es una propiedad dentro de un objeto
    precio: 200,
    disponible: false
}

// console.log(producto)
// console.table(producto)  // console.table, nos sirve para formatear el objeto y mostrarlo en una tabla. 

//console.log(producto.nombre)  // En un objeto podemos acceder a cada una de sus propiedades de esta manera


// Destructuring: Significa extraer una variable de un objeto
// const { nombre,  precio, disponible } = producto
// console.log(nombre)
// console.log(precio)
// console.log(disponible)

// Objext Literal Enhacement, usamos este tipo de objetos cuando tenemos una funcion
const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado: autenticado,
    usuario: usuario
}

console.log(nuevoObjeto)