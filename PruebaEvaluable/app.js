let cantidad = prompt("¿Cuántos números quieres introducir?");
let numeros = [];

for (let i = 0; i < cantidad; i++) {
  let entrada = prompt("Introduce el número:");
  numeros[i] = +entrada;
}
console.log("Números del array:");
console.log(numeros);
//----------------//
let inverso = [];
for (let i = numeros.length - 1; i >= 0; i--) {
  inverso.push(numeros[i]);
}
console.log("Array en orden inverso:");
console.log(inverso);
//----------------//
let multiplicacion = 1;
for (let i = 0; i < numeros.length; i++) {
  multiplicacion = multiplicacion * numeros[i];
}
console.log("El producto de los números es: ");
console.log(multiplicacion);
//---------------//
let multiplo = false;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 7 == 0) {
    multiplo = true;
  }
}
console.log("Multiplo de 7: " + multiplo);

//---------------//
let mayor = Number(prompt("Introduce el número mayor: "));
let mayores = [];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayores.push(numeros[i]);
  }
}
console.log("Números mayores que " + mayor + ":", mayores);

//------------------//
for (let i = 0; i < numeros.length; i++) {
  numeros[i] = numeros[i] * 3;
  console.log("Triple: " + numeros[i]);
}
//------------------//
let buscado = Number(prompt("Introduce el número que buscas"));
for (let i = 0; i < numeros.length; i++) {
  if ((numeros[i] = buscado)) {
    console.log("Número encontrado: " + numeros[i]);
    break;
  } else {
    console.log("El número no se encuentra en el array");
  }
}
//-----------------//
let max = numeros[0];
let min = numeros[0];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > max) {
    max = numeros[i];
  }
  if (numeros[i] < min) {
    min = numeros[i];
  }
}
console.log("El número mayor es: " + max);
console.log("El número menor es: " + min);
//--------------------//
let esPrimo = (num) => {
  if (num <= 1){
    return false;
  } 

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let primos = [];

for (let i = 0; i < numeros.length; i++) {
  if (esPrimo(numeros[i])) {
    primos.push(numeros[i]);
  }
}

console.log("Números primos:", primos);
