const Nombre = "Henry"
const Apellido = "Agustin"
const obj = {nombre: Nombre, apellido: Apellido}

//sessionStorage.setItem("persona", JSON.stringify(obj))
console.log(JSON.parse(sessionStorage.getItem("persona")));
//localStorage.setItem("persona", JSON.stringify(obj))
console.log(JSON.parse(localStorage.getItem("persona")));

//document.cookie = "datosCookie=Nombre"

const now = new Date()
//document.cookie = `datos=${JSON.stringify(obj)};expires=${new Date(now.getTime() + 2 * 60000)}`