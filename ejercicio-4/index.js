let nombre = "Henry Alexander"
let apellido = "Agustin Perez"
let estudiante = "estudiante " + `${nombre} ` + `${apellido}`
console.log(estudiante);
let estudianteMay = estudiante.toUpperCase()
console.log(estudianteMay);
let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus);
let nLetras = estudiante.length
console.log(nLetras); //40
let primeraLetra = nombre.slice(0,1)
console.log(primeraLetra);
console.log(apellido.length);
let ultimaLetra = apellido.slice(12,13)
console.log(ultimaLetra);
console.log(estudiante.replace(/ /g, ""))
let boolean = estudiante.includes(nombre,0)
console.log(boolean) //true
