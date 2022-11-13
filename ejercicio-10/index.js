import * as operaciones from "./module/controller.js";
import chalk from 'chalk';

const sum1 = operaciones.suma(1,2)
const sum2 = operaciones.suma(5,4)
const resultado = operaciones.multiplica(sum1,sum2)
console.log(sum1, sum2);
console.log(chalk.green(resultado));
