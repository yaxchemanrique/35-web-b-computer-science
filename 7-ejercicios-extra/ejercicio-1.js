/* 
Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo.
Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en
pantalla o en la consola

* 1. Prompt
* 2. validacion por tipo de dato
* 3. si tipoDeDato === numero => arr.push(dato)
* 4. si usuario introduce 0 => terminar el ciclo
  * 4.1 Imprimir arr en consola
*/

/* 
* Repaso break y continue
for (let i = 0; i < 6; i++) {
  
  if(i === 3) {
    break; // 0, 1, 2
  }

  console.log(i)
} 

for (let i = 0; i < 6; i++) {
  
  if(i === 3) {
    continue; // 0, 1, 2, 4, 5
  }

  console.log(i)
}
*/

let dato = '';
let datoNumero = null;
let arr = [];

do {
  dato = prompt("Ingresa un numero y si deseas terminar el proceso escribe 0");
  // datoNumero = parseFloat(dato);
  datoNumero = Number(dato);
  /* console.log(datoNumero)
  console.log(typeof datoNumero) */

  if (isNaN(datoNumero) || datoNumero === 0) {
    continue;
    // break y continue 
  }

  arr.push(datoNumero);

  console.log(arr);

} while (datoNumero !== 0); 



