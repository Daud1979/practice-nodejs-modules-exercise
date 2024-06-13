// Leer README
const { match } = require('assert');
const os = require('os');
console.log(`NOMBRE DEL EQUIPO: ${os.hostname()} \n Edision/Version del sistema operativo ${os.version()} \n memoria RAM total ${Math.round(os.totalmem()/1073741824)} GB`);