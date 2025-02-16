// Objetos - Destructuring de dos o mas objesto

const producto = {
    nombre : "Tablet",
    precio : 1306,
    disponible : true
}

const cliente = {
    nombre : "Tony",
    premium: true,
    direccion : {
        calle: "Ciudad de Mexico"
    }
}

const { nombre } = producto
const { nombre : nombreCliente, direccion: {calle}} = cliente  // Para obtener los valores de dos objetos con el mismo nombre, debemos de renombrar el valor para obtener el dato.

console.log(nombre)
console.log(nombreCliente)
console.log(calle)