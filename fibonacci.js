function Fibonacci(numero)
{
    if (numero==0 || numero==1){
        return numero
    }
    else{
        return Fibonacci(numero-2) + Fibonacci(numero-1)
    }
}

const fs = require('fs');

fs.readFile('numeros.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Fibonacci(", data ,")", "=", Fibonacci(data));
});

//console.log(Fibonacci(10))

