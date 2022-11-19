const boton = document.querySelector(".btn")

boton.addEventListener("click", (evento)=>{
    console.log(evento);
    alert("Click en el boton")
})
$(()=>{
    $(".btn").click(()=>{
        console.log("Hola, estoy utilizando jQuery");
    })
})