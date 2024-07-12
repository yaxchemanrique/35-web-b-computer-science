class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  hash(key) { //caja transformadora
    let hash = 0;
    for(let i = 0; i < key.length; i++){
      // console.log('hash:', hash)
      // console.log('key.charCodeAt(i):', key.charCodeAt(i))
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
      // console.log('hash:', hash)
    }
    return hash;
  }

  set(key, value) {
    let index = this.hash(key);
    // console.log(index);
    if(!this.dataMap[index]) this.dataMap[index] = [];

    this.dataMap[index].push([key, value]);
    // console.log(this.dataMap[index]);
  }

  get(key) {
    let index = this.hash(key);
    if(this.dataMap[index]) {
      for(let i = 0; i < this.dataMap[index].length; i++) {
        if(this.dataMap[index][i][0] === key) {
          // console.log(this.dataMap[index][i][1])
          return this.dataMap[index][i][1];
        }
      }
    } 
    return undefined;
  }
}

/* switch (key) {
  case 'harina':
    return 100;

  case 'queso':
    return 76

  case 'jamon':
    
    break;

  default:
    break;
} */

// 23 / 7 = 3 ( residuo=2 )

const ht = new HashTable();
console.log(ht)
// ht.hash('harina');
ht.set('harina', 100)
ht.set('queso', 76)
ht.set('huevo', 75)
ht.set('shampoo', 32)
ht.set('jamon', 78)

ht.get('shampoo')
// debugger
ht.get('queso')
/* 

new Array -> []
new Array(1, 4, 7, 10) -> [1, 4, 7, 10]
new Array(3) -> [undefined, undefined, undefined] 

const ht = new HashTable()
ht = {} 
ht.dataMap = []

ht = {
  dataMap: [0, 1, 3, 4, 5...]
}

ht = {
  dataMap: [
      undefined, 
      [['harina', 100], ['queso', 36]], 
      2, 
      3, 
      4, 
      5...
    ]
}

*/


/* 
Tarea:
* Realizar un metodo printTable que imprima en consola 
  * 1: [['harina', 100], ['queso', 76]]
  * 2: [[['jamon', 78]]]
* Realizar un método keys() que imprima en consola todas las llaves que existen en la HT
  * harina, queso, jamon, huevo, shampoo
*/