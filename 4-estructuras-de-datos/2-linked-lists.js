class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// const node1 = new Node(5)
// console.log(node1)

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  
  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getTail() {
    console.log(this.tail.value)
  }

  getLength() {
    console.log(this.length)
  }

  getHead() {
    console.log(this.head.value)
  }

  push(value) {
    const newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // this.length = this.length + 1
    // this.length += 1
    this.length++
    return this.length;
  }

  shift() {
    if(this.length === 0) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if(this.length === 0) this.tail = null;
    temp.next = null;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this.length;
  }

  pop() {
    if(this.length === 0) return undefined;
    let pre = this.head;
    let temp = this.head;

    while(temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
}

const ll = new LinkedList(5);
console.log(ll)
// console.log(ll.tail === ll.head) //true
ll.push(10)
ll.push(12)
ll.push(67)
ll.printList()
// ll.getHead()
console.log('Aqui el shift ⬇️');
// debugger
ll.shift();
ll.printList();
ll.unshift(0);
ll.printList();


/*
* Hagan un metodo getTail() -> imprimir en consola el valor de tail
* Hagan un metodo length() -> imprimir la longitud de la lista ligada
*/

// ll.getTail()
// ll.getLength()

/* 
* shift
* unshift
* pop

De tarea:
* Un metodo get() que haga:
  * recibir un índice y regresar el valor del nodo que se encuntra en ese indice
* set():
  * recibir un indice y un valor, insertando ese valor en el indice que se provee.

? Opcionales:
* insert(indice, valor)
* remove(indice)
*/