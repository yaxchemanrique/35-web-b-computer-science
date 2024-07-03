/* (Better Comments)
* 1. Función constructora
* 2. Clases de ES06
* 3. Object.create() 
*/

/* Tipos de datos primitivos // NO son objetos en JS
* numeros
* strings
* booleanos
*/

const arr = [1, 3, 6, 9];
// console.log(arr);

/* 
* Declaraciones son "oraciones completas" 
    * -> let x = 25;
* Expresiones son "palabras"
    * -> x, 25, `Hola ${username}`
*/

const user = {
  username: 'Yaxche',
  password: 'contrasena',
  isPremium: false,
  age: 2024 - 1993,

  sayHello: function () {
    console.log(`Hola, mi nombre es ${user.username}`);
  }
}
// user.sayHello()

// user -> email: yaxche@MediaList.com
user.email = "yaxche@mail.com";
user.isPremium = true;

arr.push(12);
// console.log(arr);

/* 
* Funcion constructora de Persona (Plano)

? Palabra reservada: new
* 1. Se crea un objeto vacio {}
* 2. Se ejecuta a la función constructora, this = {}
* 3. {} (this) se liga al prototipo
* 4. la funcion constructora nos regresa el objeto creado
*/
const THIS_YEAR = 2024; // PI, NO_MESES, 
const Person = function (firstName, birthYear) {
  // console.log(this)
  // persona -> nombre
  this.firstName = firstName;
  this.birthYear = birthYear;

  // ⬇️ Es una muuuuy mala práctica
  /* this.calcAge = function () {
    console.log(THIS_YEAR - this.birthYear);
  } */
}

const yaxche = new Person('Yaxche', 1993);
const jesus = new Person('Jesus', 2005);
const luis = new Person('Luis', 2009);

console.log(yaxche);
console.log(jesus);
console.log(luis);
/*
yaxche.calcAge()
jesus.calcAge()
luis.calcAge() */

console.log(Person.prototype)

Person.prototype.calcAge = function () {
  console.log(THIS_YEAR - this.birthYear);
}

Person.prototype.species = 'Homo Sapiens';

console.log('Person.prototype :')
console.log(Person.prototype)
jesus.calcAge();

console.log('yaxche.__proto__ :')
console.log(yaxche.__proto__)
console.log(jesus.__proto__)

console.log(yaxche.__proto__ === jesus.__proto__);
console.log(yaxche.__proto__ === Person.prototype);
// Prototype es el prototipo que les va a asignar a las instancias de Persona
// Person.prototypeOfInstance

const student1 = {
  name: "Adriana"
}

const student2 = {
  name: "Adriana"
}

// console.log(student1 == student2)

console.log(jesus.__proto__.__proto__) // Objeto
console.log(jesus.__proto__.__proto__.__proto__) // null

// const h1 = document.querySelector('h1')
// h1.__proto__
