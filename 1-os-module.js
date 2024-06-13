// Leer README
const { match } = require('assert');
const os = require('os');
console.log(`Nombre del equipo: ${os.hostname()} \nEdision/Version del sistema operativo ${os.version()} \nmemoria RAM total ${Math.round(os.totalmem()/1073741824)} GB`);