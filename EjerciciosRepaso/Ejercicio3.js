let precio = 100;
let porcentaje = 10;
function calcularDescuento(precio, porcentaje) {
  return precio - (precio * porcentaje) / 100;
}

console.log("El precio total es: " + calcularDescuento(precio, porcentaje));
