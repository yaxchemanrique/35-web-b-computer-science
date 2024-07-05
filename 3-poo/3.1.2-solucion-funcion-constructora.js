const Car = function (marca, modelo, velocidad) {
  this.marca = marca;
  this.modelo = modelo;
  this.velocidad = velocidad;
}

Car.prototype.acelera = function () {
  // this.velocidad = this.velocidad + 10
  this.velocidad += 10
  console.log(`Aceleracion | La velocidad de este carro es: ${this.velocidad}`);
}

Car.prototype.frena = function () {
  this.velocidad -= 5;
  console.log(`Frenado | La velocidad de este carro es: ${this.velocidad}`);
}

const bmw = new Car("BMW", 2005, 120);
/* console.log(bmw)
bmw.acelera()
bmw.acelera()
bmw.frena()
bmw.frena()
bmw.acelera()
bmw.frena() */

const mercedes = new Car("Mercedes", 2020, 95);
console.log(mercedes)
mercedes.acelera()
mercedes.acelera()
mercedes.frena()
