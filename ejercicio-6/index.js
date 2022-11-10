const listaDeCompra = ["fresas", "uvas", "mangos", "piña", "guineos",]
listaDeCompra.push("aceite de girasol")
console.log(listaDeCompra);
listaDeCompra.pop()
console.log(listaDeCompra);

const peliculasFav = [
    {titulo: "Gladiador", director: "Ridley Scott", fecha:"2000" },
    {titulo: "Piratas del Caribe: en el fin del mundo", director: "Gore Verbinski", fecha:"2007" },
    {titulo: "Spider-Man: lejos de casa", director: "Jon Watts", fecha: "2019"}
]
const pelis2010 = peliculasFav.filter(e => e.fecha > 2010)
console.log(pelis2010);

const directores = peliculasFav.map(e => e.director)
console.log(directores);

const titulos = peliculasFav.map(e => e.titulo)
console.log(titulos);

const directorPelis = directores.concat(titulos)
console.log(directorPelis);

const pelisDirector = [...titulos, ...directores]
console.log(pelisDirector);