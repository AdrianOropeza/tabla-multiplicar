const argv = require('yargs')
                            .option('b', {
                               alias: 'base', 
                               type: 'number',
                               demandOption: true,
                               describe: "Base de la tabla de multiplicar a crear"
                            })
                            .option('l',{
                                alias: 'listar',
                                type: 'boolean',
                                demandOption: false, 
                                describe: "Muestra o no la tabla en consola"
                            })
                            .check((argv, options) => {
                                if (isNaN (argv.b)) {
                                    throw 'La base tiene que ser un numero';
                                }
                                return true;
                            })
                            .argv;

module.exports = argv;