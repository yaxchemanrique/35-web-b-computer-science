//? ⬇️ Parámetros por defecto

// let userName = prompt("Cuál es tu nombre?")

let userName;
userName = "Yaxche"
function saluda(nombre = "usuario genérico") {
  console.log(`Hola ${nombre}`)
}

saluda(userName)
// saluda("Jorge")

//? ⬇️ Destructuring Objects


let user = {
  fullName: 'Yaxche Manrique',
  email: 'yaxchemanrique1@gmail.com',
  googleAccount: '214C4443-f959-4403-842c-1c247030936',
  isPremium: true,
};

/* 
* let fullName = user.fullName;
* let email = user.email;

console.log(`Hola ${fullName}, tu correro registrado es ${email}`) */


let { fullName: name, email, googleAccount } = user;

console.log(`Hola ${name}, tu correro registrado es ${email}`)
console.log(name)

//? ⬇️ Destructuring Arrays

let users = [
  {
    fullName: 'Yaxche Manrique',
    email: 'yaxchemanrique1@gmail.com',
    googleAccount: '214C4443-f959-4403-842c-1c247030936',
    isPremium: true,
  },
  {
    fullName: 'Juanito Pérez',
    email: 'juanitoperez@gmail.com',
    googleAccount: '214C4443-f959-4403-842c-1c247030936',
    isPremium: false,
  }
];

let [user1, user2] = users;

// console.log(user1)
console.log(user2)

let {email: emailUser2} = user2
console.log(emailUser2)



// Funcion como declaración
function saluda2(nombre) {
  console.log(`Hola ${nombre}`)
}

// Funcion como expresion 
const functionExpression = function (nombre) {
  console.log(`Hola ${nombre}`);
}

// Función flecha
const arrowFunction = (nombre) => {
  console.log(`Hola ${nombre}`)
  if(nombre == "") console.log("Nombre vacio")
};



arrowFunction("");

// function ageCalculator(birthYear) {
//   console.log(`Tines ${2024 - birthYear} años`);
// }

// const arrowfunction = (birthYear) => {
//   console.log(`Hola tienes ${2024 - birthYear} años`)
// }

const ageCalculator = (birthYear) => {
  console.log(`Tienes ${2024 - birthYear} años`)
};

ageCalculator(1993)

//* Escribir la misma funcion como una funcion flecha
// ? Proximamente más sobre "this" y las funciones flecha