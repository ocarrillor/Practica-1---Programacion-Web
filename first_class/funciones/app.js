/*
function greet(){
    console.log('Hello');
}
greet();
*/
let greet = () => console.log('Hello');
greet();

//functions as parameters
/*
function logGreeting(fn){s
    fn();
}

logGreeting(greet);
*/
let logGreeting = fn => fn();
logGreeting(greet);
//estamos pasando la funcion greet como
//parametro e invocandola con el nombre del argumento fn

//function expression
let greetMe = () => console.log('Hello from the function expression');
greetMe();

logGreeting(greetMe);
//functions are first class, pass it as a parameter



