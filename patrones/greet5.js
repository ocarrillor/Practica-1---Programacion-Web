//Revealing module pattern.
let greeting = "Hello from greet 5";

let greet = () => {
    console.log(greeting);
}

module.exports = {
    greet: greet
}