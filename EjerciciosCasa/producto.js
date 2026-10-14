class producto{
    constructor(codigo, nombre, categoria, precio, stock){
        this.codigo = codigo;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
    calcularValor(){
    return this.precio * this.stock;
}
}

