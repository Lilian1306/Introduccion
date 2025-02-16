
// Objetos  - Manipulacion

const  producto = {
    nombre : "Tablet",
    precio : 1306,
    disponible: false
}

//Object.freeze(producto) // Este codigo hace que no se pueda modificar el objeto, no se puede añadir y agreagar una  propiedad. 

//Object.seal(producto)  // Este codigo hace que podamos modificar propiedades existentes mas no agrear ni eliminar propiedades. 


// Rescribir un valor
producto.disponible = "true"

// Sino existe una propiedad, lo va a añadir
producto.imagen = "imagen.jpg"

// Eliminar una propiedad
delete producto.precio

console.log(producto)