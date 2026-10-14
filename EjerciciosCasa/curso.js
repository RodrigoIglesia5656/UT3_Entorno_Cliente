class Curso {
  constructor(nombre) {
    this.nombre = nombre;
    this.alumnos = [];
  }

  agregarAlumno(nombre, nota) {
    this.alumnos.push({ nombre: nombre, nota: nota });
  }

  obtenerNotaMedia() {
    if (this.alumnos.length === 0) return 0; // Evita dividir entre cero si no hay alumnos

    let sumaTotal = this.alumnos.reduce((acc, alumno) => acc + alumno.nota, 0);
    return sumaTotal / this.alumnos.length;
  }
  obtenerAprobados() {
    return this.alumnos.filter((alumno) => alumno.nota >= 5);
  }

  obtenerMejorAlumno() {
    let mejorAlumno = this.alumnos[0];
    for (let i = 1; i < this.alumnos.length; i++) {
      if (this.alumnos[i].nota > mejorAlumno.nota) {
        mejorAlumno = this.alumnos[i];
      }
    }
    return mejorAlumno.nombre;
  }

  obtenerPorcentajeAprobados(){
    let numAprobados = this.obtenerAprobados().length;

    let porcentaje = (numAprobados / this.alumnos.length) * 100;

    return porcentaje;
  }
}
