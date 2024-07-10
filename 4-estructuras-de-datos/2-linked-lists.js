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

  getHead() {
    console.log(this.head.value)
  }

  push(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    // this.length = this.length + 1
    // this.length += 1
    this.length++
  }
}

const ll = new LinkedList(5);
console.log(ll)
// console.log(ll.tail === ll.head) //true
ll.push(10)
ll.push(12)
ll.push(67)
// ll.printList()
ll.getHead()

/*
* Hagan un metodo getTail() -> imprimir en consola el valor de tail
* Hagan un metodo length() -> imprimir la longitud de la lista ligada
*/
