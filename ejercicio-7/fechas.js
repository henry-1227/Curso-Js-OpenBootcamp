const hoy = new Date()
console.log(hoy);
const cumpleaños = new Date(2001, 11,27)
console.log(cumpleaños);
const hoyMayorque = hoy > cumpleaños
console.log(hoyMayorque);
const diaNacimiento = cumpleaños.getDay() 
const mesNacimiento = cumpleaños.getMonth()+1
console.log(diaNacimiento, mesNacimiento, );