let n1 = Number(
  prompt(
    "Introduce un número y devolvere el doble, triple , el cuadrado y si es par: ",
  ),
);
function vaias_operaciones(n) {
  let operaciones = [];
  operaciones[0] = n * 2;
  operaciones[1] = n * 3;
  operaciones[2] = n ** 2;
  operaciones[3] = n % 2 === 0;
  return operaciones;
}
console.log(
  "El resultado del as operaciones de " + n1 + " es : ",
  vaias_operaciones(n1),
);
