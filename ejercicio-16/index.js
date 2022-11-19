const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".section")


parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event=>{
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
    })
    parrafo.addEventListener("dragend", ()=>{
        //console.log("He terminado de arrastrar");
        parrafo.classList.remove("dragging")
    } )
});

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover", event=>{
        event.preventDefault()
    })
    seccion.addEventListener("drop",event=>{
        const idParrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(idParrafo)
        seccion.appendChild(parrafo)
    })
})
const papelera = document.querySelector(".papelera")
papelera.addEventListener("dragover", event=>{
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", event=>{
    const idParrafo = event.dataTransfer.getData("id")
    document.getElementById(idParrafo).remove()
})