console.log("Prueba");

// const readLine= require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readLine.question("Como te llamas?", (name) => {
//     console.log(`Hola ${name}`);
//     readLine.close();
// });


//EJEMPLO CON LIBRERIA

const prompt =  require("prompt-sync") ();
const name = prompt("Como te llamas? ")
console.log(`Hola ${name}`);