let saludo = "hola mundo";

console.log(saludo.substr(0,3))
console.log(saludo.substr(3,3))
console.log(saludo.substr(0,3) ==="Hol")


const mood = "Happy "
console.log(mood.repeat(30));

/*
* Rafael•••••••••"55 12 12 12 56"
* Jesenia••••••••"55 12 23 23 23"
* Marcela••••••••"55 98 98 98 98"
*/

const names = ["Rafael", "Jesenia", "Marcela", "Ronald C."];
const numbers = ["55 12 12 12 56", "55 12 23 23 23", "55 98 98 98 98", "55 98 98 98 98"]

for(let i = 0; i < names.length; i++) {
  let numPuntos = 15 - names[i].length;
  console.log(`${names[i]} ${" ".repeat(numPuntos)} ${numbers[i]}`);
}

for(let i = 0; i < names.length; i++) {
  console.log(`${names[i].padEnd(15, "📓")} ${numbers[i]}`); 
}