// Eventos del DOM - Clicks

const heading = document.querySelector(".heading")
const enlaces = document.querySelectorAll(".navegacion a")

// heading.addEventListener("mouseenter", () => {
//     heading.textContent = "Nuevo Heading al dar click..."
// })

enlaces.forEach( enlace => {
    enlace.addEventListener("click", (e) => {
        e.preventDefault()
        e.target.textContent = "Diste Click..."
    })
})