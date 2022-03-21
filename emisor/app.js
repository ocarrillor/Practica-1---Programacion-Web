// var Emitter = require('./emitter');
var Emitter = require('events'); // Se crea una instancia del objeto que hay en "events".

const config = require('./config'); //Se inyecta la dependencia.
var emtr = new Emitter();

emtr.on(config.events.GREET, () => { //Ahora utilizamos el concepto de las "magic strings" para llamar a la funcion.
    console.log('Somewhere, someone said hello.');
});

emtr.on(config.events.GREET, () => {
    console.log('A greeting occurred!');
});

// Despues de imprimir el mensaje "Hello", mandamos llamar las dos funciones que hemos creado previamente.
console.log('Hello!');
emtr.emit('greet'); //Invocamos a ambas con una misma llamada porque ambas se llaman igual.

// Ahora agregamos una nueva funcion llamada "jump" y que imprime un mensaje.
emtr.on('jump', () => {
    console.log('someone jumped!');
});

console.log(emtr) // Imprimimos las funciones que contiene la variable "emtr"(que en este caso son solo "greet" y "jump").
emtr.emit('jump'); // Invocamos la funcion "jump".