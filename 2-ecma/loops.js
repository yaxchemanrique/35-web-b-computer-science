const array1 = ['a', 'b', 'c'];


// for (let i= 0; i < array1.length; i++) {
//   const element = array1[i];
//   console.log(element);
// }

for (const element of array1) {
  console.log(element);
}

const precios = [12.50, 5.99, 8.75, 20];
let total = 0;
for (const precio of precios) {
  // total = total + precio;
  console.log(`total: ${total}, precio: ${precio}, acumulado: ${total + precio}`)
  total += precio;
}

console.log(`El monto a pagar es ${total}`);