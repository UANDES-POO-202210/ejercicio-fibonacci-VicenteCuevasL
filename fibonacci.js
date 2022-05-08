function Fibonacci(numero)
{
    if (numero==0 || numero==1){
        return numero
    }
    else{
        return Fibonacci(numero-2) + Fibonacci(numero-1)
    }
}


//Lo de leer txt en node.js lo saque de aqui: https://nodejs.dev/learn/reading-files-with-nodejs
//si quieres cambiar el numero tienes que cambiarlo desde el archivo numeros.txt :)
const fs = require('fs');

fs.readFile('numeros.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Fibonacci(", data ,")", "=", Fibonacci(data));
});