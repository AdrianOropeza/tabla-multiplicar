const { crearTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

console.log(argv);


//Crear tabla
crearTabla( argv.b, argv.l)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'.bgCyan))
    .catch(err => console.log(err));
