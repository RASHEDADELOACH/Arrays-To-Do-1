class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addFront(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
    return this.head;
  }

  removeFront() {
    if (!this.head) {
      return null;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.size--;
      return this.head;
    }
  }

  front() {
    if (!this.head) {
      return null;
    } else {
      return this.head.data;
    }
  }

  display() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data.toString();
      if (current.next) {
        result += ", ";
      }
      current = current.next;
    }
    return result;
  }
}

// Testing
let SLL1 = new SLL();
console.log(SLL1.addFront(18)); // Node { data: 18, next: null }
console.log(SLL1.addFront(5)); // Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.addFront(73)); // Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

console.log(SLL1.removeFront()); // Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.removeFront()); // Node { data: 18, next: null }

console.log(SLL1.front()); // 18
console.log(SLL1.removeFront()); // null
console.log(SLL1.front()); // null

SLL1.addFront(76);
SLL1.addFront(2);
console.log(SLL1.display()); // "2, 76"
SLL1.addFront(11.41);
console.log(SLL1.display()); // "11.41, 2, 76"
