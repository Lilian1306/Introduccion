// Templates Strings y Concatenacion.    Concatenacion significa unir dos variables con otras o mezclarlas

const producto = "Tablet de 12 pulgadas"
const precio = 400
const marca = "orange"

console.log("El producto es:", producto) // Concatenamos con un singo de + o con una coma , 
console.log(`El producto es: ${producto}`) // Esto se hace ahora, para concatenar usamos los backticks para unir dos variables

console.log(producto + " $" + precio + " Dolares, marca: " + marca) // Concatenamos con la forma anterior y este codigo es el mismo que el de abajo. 
console.log(`${producto} $${precio} Dolares, marca: ${marca}`)  // Concatenamos con backtick y unimos el producto el precio y la marca