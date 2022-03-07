let greet = require('./greet1');
// let greet2 = require('./greet2').greet;
let greet2a = require('./greet2');

greet(); //Invocamos la funcion "greet" que esta en el archivo "greet1" (lo cual imprime el mensaje que contiene).
// greet2(); //Hacemos lo anterior pero ahora con "greet2".

greet2a.greet();// Invocamos a "greet2" pero ahora como una propiedad de "greet2a".

const greet3 = require('./greet3'); //objeto construido/instanciado.
console.log(greet3); //Imprimimos lo que contiene el objeto que hay en "greet3".
greet3.greet(); //Invocamos a "greet3" y lo que hace es imrpimir su respectivo mensaje.
greet3.greeting = "Hello from the App" // Asignamos un nuevo mensaje a la propiedad "greeting" de "greet3".

// A continuacion creamos la variable "greet3b" para mandar llamar el mensaje que escribimos antes en "greet3".
let greet3b = require('./greet3');
greet3b.greet();

// A continuacion creamos una instancia del objeto de "greet4" y luego invocamos a la propiedad "greet".
const Greet4 = require('./greet4'); //constructor.
let myGreet = new (Greet4);
myGreet.greet();

// Mandamos llamar la funcion que hay en "greet5" mediante la propiedad "greet".
const greet5 = require('./greet5');
greet5.greet();