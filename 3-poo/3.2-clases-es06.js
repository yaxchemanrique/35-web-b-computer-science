// Expresiones
// const Person = class {}

// Declaraciones
class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }

  //* ⬇️ Directamente se agregan al prototype de la clase Person
  metodo1() {
    console.log('metodo 1');
  }
  metodo2() {
    console.log('metodo 2');
  }
}

const yaxche = new Person('Yaxche');
console.log(yaxche)

/* console.log(Person.prototype);
yaxche.metodo1()
yaxche.metodo2() */

/* 
* Convertir el ejercico de los carros a clases de ES06

? By: Jesús Omar 
*/
class Car{
  constructor(marca, modelo, velocidad){
      this.marca = marca;
      this.modelo = modelo;
      this.velocidad = velocidad;
  }
  acelerar(){
      this.velocidad +=10;
      console.log('Aceleracion | La velocidad de este carro es:'+this.velocidad)
  }
  frenar(){
      this.velocidad -=5;
      console.log('Frenado | La velocidad de este carro es:'+this.velocidad)
  }
  
}
const bmw = new Car("BMW", 2005, 120)
/* console.log(bmw);
bmw.acelerar();
bmw.acelerar();
bmw.frenar(); */

console.log(Car.prototype);