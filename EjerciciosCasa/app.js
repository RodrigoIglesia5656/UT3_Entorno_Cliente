/*let inventario = [];
inventario.push(new producto(1, "Lavadora", "Electrodomesticos", 300, 0));
inventario.push(new producto(2, "Martillo", "Herramienta", 20, 7));
inventario.push(new producto(3, "Plato", "Vajilla", 7, 20));

/*function detectarSinStock(inventario) {
  let hayStock = true;
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].stock == 0) {
      return hayStock = false;
    }
  }
  return hayStock;
}*/

/*function detectarSinStock(inventario) {
  return inventario.filter((producto) => producto.stock === 0);
}

function calcularValorInventario(inventario) {
  return inventario.reduce(
    (acc, producto) => acc + producto.calcularValor(),
    0,
  );
}

function buscarPorCodigo(inventario) {
  let codigoBuscado = Number(prompt("Introduce que codigo buscas: "));
  return inventario.find((producto) => producto.codigo === codigoBuscado);
}

console.log("Valor total del invetario: ", calcularValorInventario(inventario));
console.log("Productos sin stock:", detectarSinStock(inventario));
console.log("Prducto encontrado: ", buscarPorCodigo(inventario));*/

let clase = new Curso("Desarrollo Web");
clase.agregarAlumno("Jose", 2);
clase.agregarAlumno("Rodrigo", 10);
clase.agregarAlumno("Juan", 6);

console.log("Curso y alumnado ", clase);
console.log("Media de notas:", clase.obtenerNotaMedia());
console.log("Aprobados:", clase.obtenerAprobados());
console.log("El mejor alumno es:", clase.obtenerMejorAlumno());
console.log("El porcentaje de aprobados es: ", clase.obtenerPorcentajeAprobados() + " %");