// Fetch API con promises: Que es fetch PAI proporciona una interfez para recuperar recursos para poder obtener datos atravez de la rec. 


// const url = "https://jsonplaceholder.typicode.com/comments"

// fetch(url)
//     .then((response) => {
//         if(response.ok) {
//             return response.json()
//         }
//        throw new Error("Hubo Un error...")
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error))



// FETCH API PUEDE SER USADO CON FUNCION O SIN FUNCION . 
const url = "https://jsonplaceholder.typicode.com/comments"

const  consultarAPI =  () => {
    fetch(url)
    .then((response) => {
        if(response.ok) {
            return response.json()
        }
       throw new Error("Hubo Un error...")
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

consultarAPI()