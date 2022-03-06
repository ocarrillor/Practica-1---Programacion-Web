var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
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