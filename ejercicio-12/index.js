function fib (num){
    let lista = []
    if (num === 1) return lista=[1]
    if (num === 2) return lista=[1,1]
    lista = [1,1]
    for (let i = 2; i < num; i++) {
        lista.push(lista[i-1]+lista[i-2])
    }
    return lista
}
console.log(fib(4));