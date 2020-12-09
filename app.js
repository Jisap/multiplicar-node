//const fs = require('fs');           //Requerimos una libreria que ya existe en node
//const fs = require('express');      //Requerimos una libreria que no es de node
//const fs = require('./archivo');    //Requerimos archivos de nuestro pc


//--------------------SIN OPTIMIZACIÓN DEL ARGV

// const argv = require('yargs')
//               .command('listar', 'Imprime en consola la tabla de multiplicar',{
//                 base: {
//                   demand: true, // Cuando pongamos en consola node app listar requerirá que aparezca el argumento base
//                   alias: 'b'    // En lugar de poner listar --base solo tendremos que poner node app listar -b 5
//                 },
//                 limite: {
//                   alias: 'l',   //Alias 'l'
//                   default: 10   // El límite por defecto será de 10. node app listar -l 10 -b 5
//                 }
//               })  
//               .command('crear', 'Genera un archivo con la tabla de multiplicar',{
//                 base: {
//                   demand: true, // Cuando pongamos en consola node app listar requerirá que aparezca el argumento base
//                   alias: 'b'    // En lugar de poner listar --base solo tendremos que poner node app listar -b 5
//                 },
//                 limite: {
//                   alias: 'l',   //Alias 'l'
//                   default: 10   // El límite por defecto será de 10. node app listar -l 10 -b 5
//                 }
//               })
//               .help()
//               .argv
              
const argv = require('./config/yargs').argv;//Con optimización de argv
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // Del archivo multiplicar desestructuramos lo que necesitamos

let command = argv._[0];

switch(command){

  case 'listar':
    listarTabla(argv.base, argv.limite)
  break;
  
  case 'crear':
    crearArchivo(argv.base,argv.limite)
     .then( archivo => console.log(`Archivo creado:`, colors.green(archivo)))
     .catch(e => console.log(e));
  break;

  default: 
    console.log('Comando no reconocido');

}

//node app listar --limite 30 -b 3 ----> Imprimiría por consola la tabla del 3 con limite de 30
//node app crear --limite 30 -b 3 -----> Crearía un archivo con la tabla del 3 con limite de 30
//nodemon app listar -l5 -b7
//


//npm i yargs --save