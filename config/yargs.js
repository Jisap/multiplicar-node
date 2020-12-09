
const opts = {
    base: {
            demand: true, // Cuando pongamos en consola node app listar requerirá que aparezca el argumento base
            alias: 'b'    // En lugar de poner listar --base solo tendremos que poner node app listar/crear -b 5
            },
            limite: {
            alias: 'l',   //Alias 'l'
            default: 10   // El límite por defecto será de 10. node app listar/crear -l 10 -b 5
            }
}

const argv = require('yargs')
              .command('listar', 'Imprime en consola la tabla de multiplicar',opts)
              .command('crear', 'Genera un archivo con la tabla de multiplicar',opts)
              .help()
              .argv;

module.exports = {
    argv
}