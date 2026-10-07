let a = Number(prompt("Introduce el primer número: "));
let b = Number(prompt("Introduce el segundo número: "));
let c = Number(prompt("Introduce el tercer número: "));

function obtenerMayorYMenor(a, b, c) {
  let mayor = a;
  let menor = a;

  if (b > mayor) mayor = b;
  if (c > mayor) mayor = c;
    
  if (b < menor) menor = b;
  if (c < menor) menor = c;

  return { mayor, menor };
}
