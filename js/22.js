// Optional Chining (? ) Nos permitira acceder a las propiedades de un objeto

const alumno = {
    nombre: "Juan",
    clase: "Programacion 1",
    aprobado : true,
    examenes : {
        examen1: 100
    }
}

console.log(alumno.examenes?.examen1)
console.log("Despues de alumno")



// Nullish coalescing operator ?? : Es un operador logico que retorna el valor que esta al lado derecho cuando el valor del lado izquierdo es nulo
 const pagina  = null ?? 1