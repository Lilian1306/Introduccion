// Performance y Multiple Async Await


//Medir el performance de la consulta de una API
const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/todos"
const url3 = ("https://jsonplaceholder.typicode.com/albums")

const consultarAPI  = async () => {
   try {
    const inicio = performance.now()
    const response = await fetch(url)
    if(!response.ok) {
        throw new Error ("hubo un error...")
    }
    const data = await response.json()
    console.log(data)

     const fin = performance.now()
     console.log(`El resultado es de la PRIMERA FUNCION : ${fin - inicio} ms`)
   }catch (error){
     console.log(error.message)
   }
}

consultarAPI()


//Como manejar multiples consultas

const consultarAPI2  = async () => {
   try {
    const inicio = performance.now()
    const [response, response2, response3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)]) 

    const [data, data2, data3] = await Promise.all([response.json(), response2.json(), response3.json()])
    
    console.log(data)
    console.log(data2)
    console.log(data3)

     const fin = performance.now()
     console.log(`El resultado es de la SEGUNDA FUNCION: ${fin - inicio} ms`)
   }catch (error){
     console.log(error.message)
   }
}

consultarAPI2()