// Iterar dentro de los arreglos


const tecnologias = [ "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Nest.js", "TypeScript"]

// COMO USAR EL FOR
// for(let i = 0; i < tecnologias.length; i++ ) { // Se inicializa la variable i con un valor de 0, Condición: mientras i sea menor que 5, el bucle seguirá ejecutándose, Incremento: en cada iteración, i aumenta en 1, Si no agregamos i++, el valor de i se quedará en 0 y el bucle se ejecutará indefinidamente (bucle infinito).
//     console.log(tecnologias[i])
// }  


//FOR EACH NOS SIRVE PARA ITERAR, for each solo ejecuta una funcion dada por la cantidad de veces que tiene un arreglo
// COMO USAR EL FOR EACH, el metodo forEach ejecuta la funcion indica. 
tecnologias.forEach(function(tech) {
     console.log(tech)
})


// MAP NOS SIRVER PARA CREAR UN NUEVO ARREGLO, mientras que map nos genera un arreglo nuevo en base a la condicion o la funcion que le estamos pasando
//Map sirve para iterarar pero su caracteristica principal es que crea un nuevo arreglo en base a las condiciones de la funcion
const arrayMap = tecnologias.map(function(tech){
    return tech
})
console.log(arrayMap)

//Diferencia entre un map y un forEach: La diferencia esque map te genera un nuevo arreglo, si iterra, pero su caracteristica principal es generar un nuevo arreglo. Y el forEach nos sirve para iterar para el for loop


// FOR ...OF 
for (let tech of tecnologias ){
   console.log(tech)
}