let obj = {
    nombre: 'Carlos',
    edad: 44,
    apellido: 'Ulibarri',

    keypress: function () {
        console.log('Se ha presionado una tecla');
    },
    mouseOver: function () {
        console.log('El puntero del mouse esta arriba');
    }
}

console.log(obj.nombre); //Llamamos a la propiedad "nombre" del objeto directamente con el punto.
console.log(obj['nombre']); //Llamamos a la propiedad "nombre" del objeto pero ahora con un string.

let myKey = 'nombre' //Definimos una key que en este caso se encargara de mencionar la propiedad "nombre".
console.log(obj[myKey]); //Ponemos la key en lugar de "nombre" y vemos que funciona igual.


//A continuacion invocamos los 2 metodos que creamos, asignandolos a "myKey" y despues poniendo esta variable despues de "obj".
myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());


//A continuacion creamos un array y lo llenamos con diferentes tipos de datos(un numero, un string, un objeto y una funcion) y luego la imprimimos en consola.
let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
    console.log("hola desde el array");
})
console.log(myArray);

console.log(myArray[2].mouseOver()); //Mandamos llamar el metodo "mouseOver" del objeto "obj" pero desde el array en el que se encuentra.

console.log(myArray[3]()); //Invocamos la funcion anonima(sin nombre) que se encuentra en el array.


//A continuacion creamos un array que contendra solamente funciones y lo llenaremos con tres de las mismas. 
let funcArray = [];

funcArray.push(() => {
    console.log("Function 1");
});

funcArray.push(() => {
    console.log("Function 2");
});

funcArray.push(() => {
    console.log("Function 3");
});

//Y ahora mandamos llamar todas las funciones que contiene el array, utilizando un ciclo forEach.
funcArray.forEach((item) => {
    item();
})