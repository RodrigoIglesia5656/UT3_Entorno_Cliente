console.log("Inicio del ejercicio");

let edad = Number(prompt("Introduce tu edad: "));

function esMayor(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

if (esMayor(edad)) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

console.log("Fin del ejercicio");
