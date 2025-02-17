// Fetch API con Async / Await

// Con async await para detectar un error usamos try catch

const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI  = async () => {
   try {
    const response = await fetch(url)
    if(!response.ok) {
        throw new Error ("hubo un error...")
    }
    const data = await response.json()
    console.log(data)
   }catch (error){
     console.log(error.message)
   }
}

consultarAPI()