import "./style.css";
import Tree from "./tree";

function createArray(length) {
  const array = [];

  for (let i = 0;i < length;i++) {
    array.push(Math.floor(Math.random() * 100));
  }

  return array;
}

let tree = new Tree(createArray(25));

function addNumbers(length) {
  for (let i = 0; i < length; i++) {
    const n = (Math.floor(((Math.random() * 10) + 2) * 100));
    tree.insert(n, tree.root);
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

prettyPrint(tree.root);

console.log(tree.isBalanced());

console.log(tree.inOrder(null, tree.root));
console.log(tree.preOrder(null, tree.root));
console.log(tree.postOrder(null, tree.root));

addNumbers(4);

prettyPrint(tree.root);

console.log(tree.isBalanced());

tree = tree.rebalance();

prettyPrint(tree.root);

console.log(tree.isBalanced());

console.log(tree.inOrder(null, tree.root));
console.log(tree.preOrder(null, tree.root));
console.log(tree.postOrder(null, tree.root));
