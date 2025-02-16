// Arrow Methods

const tecnologias = ["HTML", "JavaScript", "TailwdindCSS", "Node.js", "React.js"]
const numeros = [ 10, 25, 30]


// FILTER: Crea un nuevo array con los elemntos ya existentes de un array. No modifica el array original. 
// const nuevoArray = tecnologias.filter((tech) => tech  !== "HTML") // cuando solo es un paramentro podemos eliminar el parentesis
// console.log(nuevoArray)
// Filter tambien podemos usarlo si tenemos un array de numeros. 
// const resultado = numberos.filter((numero) => numero !== 10)
// console.log(resultado)

// SOME: Devuelve si al menos uno cumple con la condicion. 
// const resultado = numeros.some(numero => numero > 15)
// console.log(resultado)

// Deferencia entre .filter() y .some()
// .filter(): Devuelte un nuevo array, con los elemento que cumplen una condicion.
//            Si ningun elemnto cumple la condicion, devuelte un arary vacio. 
//            Simpre recorre todo el array. 


// .some(): Devuelve un true of false, dependiendo si al menos un elemto cumple la condicion
//          Se detiene en le primer true encontrad, sin recorre todo el array si no es necesario. 
//          No modifica el array original y no devuelve un nuevo array. 

// En conclusion .filter() cuando quieres obtener un subconjunto de datos. 
//               .some() cuando solo necesitas comprobar si un elemento cumle la condicion. 


// INCLUDES: Verifica si un valor existe dentro del array o no. 
// const resultado = tecnologias.includes("Node.js")
// console.log(resultado)

// FIND: Devuelve el primer elemento que cumpla una condicion
// const resultado = numeros.find(numero => numero < 15)
// console.log(resultado )

// Some es como una version booleana a filter 


// Every: Retoran true o false si todos cumplenm la condicion. 
// const resultado = numeros.every(numero => numero  < 5)
//     console.log (resultado )

// Reduce: Retorna un acumula del total
const resultado = numeros.reduce( (total,  numero) => total + numero, 0)
console.log(resultado)

