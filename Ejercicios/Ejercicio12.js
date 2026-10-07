let numero = Number(prompt("Introduce un número: "));

function esMultiplo(numero) {
  if (numero % 5 == 0) {
    return true;
  } else {
    return false;
  }
}
if (esMultiplo(numero)) {
  console.log("El número " + numero + " es múltiplo de 5");
} else {
  console.log("El número " + numero + " NO es múltiplo de 5");
}
