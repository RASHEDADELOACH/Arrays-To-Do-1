class BTNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(val) {
    const node = new BTNode(val);
    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;
    while (current) {
      if (val < current.val) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      } else {
        return this;
      }
    }
  }
}

const bst = new BST();

bst.add(50);
bst.add(30);
bst.add(70);
bst.add(40);
bst.add(60);
bst.add(80);
bst.add(20);
bst.add(10);
bst.add(90);

console.log(bst);
