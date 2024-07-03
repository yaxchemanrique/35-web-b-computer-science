const array1 = ['a', 'b', 'c'];


// for (let i= 0; i < array1.length; i++) {
//   const element = array1[i];
//   console.log(element);
// }

/* for (const element of array1) {
  console.log(element);
}

const precios = [12.50, 5.99, 8.75, 20];
let total = 0;
for (const precio of precios) {
  // total = total + precio;
  console.log(`total: ${total}, precio: ${precio}, acumulado: ${total + precio}`)
  total += precio;
}

console.log(`El monto a pagar es ${total}`); */

// console.log('FOR IN⁄ ------------------------')

let user = {
  id: 1,
  name: 'Yaxche',
  isMillennial: true,
  noPets: 1,
  job: 'sensei',
  insta: 'YaxcheManrique'
}
// const prop = prompt("que info necesitas de este usuario");

// console.log(user.name) //-> "Yaxche"
// console.log(`La propiedad ${prop} tiene un valor de: ${user[prop]}`)


/* for (const prop in user) {
  console.log(`La propiedad ${prop} tiene el valor de: ${user[prop]}`);
} */

/* for (const prop in precios) {
  console.log(`La propiedad ${prop} tiene el valor de: ${precios[prop]}`);
}

for (const prop of precios) {
  console.log(prop);
}

console.log(precios.indexOf(20))
console.log(precios.length) */

const numeros = [12.50, 5.99, 8.75, 20];

const cuadrados = numeros.map(
  numero => {
    console.log(numero)
    let a = 0;
    return numero * numero;
  });

const incremento = numeros.map(numero => numero + 5);
console.log(cuadrados);
console.log(incremento);

const tempCelsius = [0, 10, 20, 30];
const tempFahreheit = tempCelsius.map(temp => temp * 9 / 5 + 32);
console.log(tempFahreheit)

// * ['pepe', 'juan', 'maria', 'pablo']
/* 
  [<li>Pepe</li>, <li>Juan</li>, <li>Maria</li>, <li>Pablo</li>]

  <ul>
    <li>Pepe</li>
    <li>Juan</li>
    <li>Maria</li>
    <li>Pablo</li>
  </ul>

*/

function addArrayOfUlElements(arr) {
  const arrOfLi = arr.map(stringLi => `<li>${stringLi.charAt(0).toUpperCase() + stringLi.slice(1).toLowerCase()}</li>`);
  const ul = document.createElement('ul');
  let innerHtmlString = '';
  for (const li of arrOfLi) {
    innerHtmlString += li
  }
  ul.innerHTML = innerHtmlString;
  document.querySelector('body').appendChild(ul);
}

const names = ['pEpe', 'juan', 'maRIa', 'pablO'];
const web35B = ['Jesus', 'Ronald', 'Juan', 'kevin', 'Blanca']

addArrayOfUlElements(names)
addArrayOfUlElements(web35B);