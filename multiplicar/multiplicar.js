const fs = require('fs');
const  colors = require('colors');

let listarTabla = (base , limite = 10) => { // Valor por defecto del límite de 10

    console.log('==================='.green);
    console.log(`tabla del ${base}`.green);
    console.log('==================='.green);

    for (let i=1; i<=limite;i++){
            resultado = (base*i);
            console.log(`${base} * ${i} = ${resultado}`);    
        }
}

let crearArchivo = (base, limite=10) => {

    return new Promise((resolve, reject) =>{

        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`);         //Si el parámetro no es un número -> Mensaje
            return;                                                         //Se acaba la ejecución del programa.
        }

        let data='';
        
        for (let i=1; i<=limite; i++){
            resultado = (base*i);
            data+=(`${base} * ${i} = ${resultado}\n`);    //Concatenamos el resultado dentro de data
        }
        
        //fs.writeFile(file, data[, options], callback)
        
        fs.writeFile(`tablas/Tabla-${base}-al-${limite}.txt`, data, (err) => {

          if (err) 
            reject(err);                                                        //Si hay error se muestra a traves del reject
          else 
            resolve(`tabla-${base}-al-${limite}.txt`)                           //Sino se resuelve la promesa devolviendo  
            //console.log(`El archivo tabla-${base}.txt ha sido creado`);       //el nombre del archivo con la tabla de multiplicar
        });

    })

}

module.exports = {
    crearArchivo,        //Exportamos la función crearArchivo
    listarTabla
}
