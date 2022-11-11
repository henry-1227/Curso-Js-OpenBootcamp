function mifuncion(){
    return true
}
console.log(mifuncion());

async function damePromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

function* generarIndice(){
    let indice = 0
    while(true){
        // indice ++
        // indice ++
        yield indice +=2
    }
    
}
const listaIndice = generarIndice()
console.log(listaIndice.next());
console.log(listaIndice.next());
console.log(listaIndice.next());
console.log(listaIndice.next());
console.log(listaIndice.next());