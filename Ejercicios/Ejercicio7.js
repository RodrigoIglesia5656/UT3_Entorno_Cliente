let a = Number(prompt("Introduce el primer número"));
let b = Number(prompt("Introduce el segundo número"));
let c = Number(prompt("Introduce el tercer número"));

function esMayor(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log("El numero mayor es: " + esMayor(a, b, c));