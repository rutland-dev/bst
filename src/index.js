import "./style.css";
import Tree from "./tree";

const orderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21]

// const unorderedArray = [8, 2, 15, 21, 15, 11, 16, 16, 24, 8, 22, 6, 22, 6, 15, 22, 21, 2, 17, 12, 2, 20, 12, 4, 11]


const tree = new Tree(orderedArray);
// const tree = new Tree(unorderedArray);

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

prettyPrint(tree.root = tree.insert(14, tree.root));

prettyPrint(tree.root = tree.delete(12, tree.root));

console.log(tree.find(14, tree.root));

const contextPrint = () => 1;

console.log(tree.levelOrder(null, tree.root));

// console.log(tree.levelOrder(contextPrint, tree.root));

console.log(tree.inOrder(null, tree.root));

// console.log(tree.inOrder(contextPrint, tree.root));

console.log(tree.preOrder(null, tree.root));

// console.log(tree.preOrder(contextPrint, tree.root));

console.log(tree.postOrder(null, tree.root));

// console.log(tree.postOrder(contextPrint, tree.root));