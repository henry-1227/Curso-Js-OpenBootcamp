const datosPersonales = {
    nombre: "Henry",
    apellido: "Agustin",
    edad: 20,
    altura: 1.63,
    eresDesarrollador: true
}
const amigos = [
    datosPersonales, 
    {nombre: "Emiliano",
    apellido: "Garcia",
    edad: 21,
    altura: 1.70,
    eresDesarrollador: false},
    {nombre: "Jasmin",
    apellido: "Turcios",
    edad: 19,
    altura: 1.70,
    eresDesarrollador: false}
]
const lista = amigos.sort((ant,sig) => sig.edad - ant.edad)
console.log(amigos);