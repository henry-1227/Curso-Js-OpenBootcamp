
class Estudiante{
    constructor(nombre){
        this.nombre= nombre,
        this.asignaturas= ["Javascript", "HTML", "CSS"]
    }
    obtenDatos(){
        let respuesta = {nombre: `${this.nombre}`, asignaturas: `${this.asignaturas}`}
        return respuesta;
    }
}
const Alexander = new Estudiante("Alexander")
console.log(Alexander.obtenDatos()); 