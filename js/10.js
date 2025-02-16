

const tecnologias = ["HTML", "TailwindCss", "JavaScript", "React.js", "Node.js"]
// tecnologias.push("Nest.js")    // el metodo push modifica nuestro arreglo y no se recomienda usar este metodo en REACT

// const nuevoArreglo = [...tecnologias, "Nest.js"]
// console.table(nuevoArreglo)

// // COMO ELIMINAR UNA VARIABLE DENTRO DE UN ARREGLO
// tecnologias.shift("HTML")
// console.log(tecnologias)

// const tecnologias2 = tecnologias.filter(function(tech){  // Usamos filter para recorer todos los elementos del arreglo, filter toma una funcion de devolucion de llamda callbakc como argumenteo. Esta funcion se ejecuta para cada elemento del arrelgo tecnlogias. 
//      if (tech === "HTML"){  // si  tech (quiere decir los elementos de tecnoligas) es igual a "HTML"
//         return tech         // que retorne solo "HTML"
//      }
// })

// const tecnologias2 = tecnologias.filter(function(tech){  // Usamos filter para recorer todos los elementos del arreglo, filter toma una funcion de devolucion de llamda callbakc como argumenteo. Esta funcion se ejecuta para cada elemento del arrelgo tecnlogias. 
//     if (tech !== "HTML"){  // si  tech (quiere decir los elementos de tecnoligas) es diferente a "HTML" que regrese los demnas elementos sin el "HTML"
//        return tech         // que retorne solo "HTML"
//     }
// })

const tecnologias2 = tecnologias.map(function(tech){  // Usando map estamos iterando (se refiere a recorrer o procesar cada elemento) con todos los elementos de nuestro arreglo 
      if (tech === "Node.js"){                        // Usamos map cuando queremos modificar los elementos de un arreglo
        return "Nest.js"
      }else {
        return tech
      }
})
console.log(tecnologias2)