import Node from "./node";
import MergeSort from "./merge-sort";

export default class Tree {
    constructor(array) {
        // Sort array and remove duplicates
        this.sortedArray = MergeSort(array);
        this.root = this.buildTree(this.sortedArray, 0, this.sortedArray.length - 1);
        this.level = null;
    }

    buildTree(array, start, end) {

        if (start > end) return null;

        const middle = Math.floor((start + end) / 2);
        const root = new Node(array[middle]);

        root.left = this.buildTree(array, start, middle - 1);
        root.right = this.buildTree(array, middle + 1, end);

        return root;
    }

    insert(value, root) {
        if (root == null) return new Node(value);

        if (value < root.data) {
            root.left = this.insert(value, root.left);
        } else {
            root.right = this.insert(value, root.right);
        }

        return root;
    }

    delete(value, root) {
        if (root == null) {
            return root;
        }

        if (value < root.data) {
            root.left = this.delete(value, root.left);
            return root;
        }

        if (value > root.data) {
            root.right = this.delete(value, root.right);
            return root;
        }

        if (root.left == null) {
            const temp = root.right;
            root = null;
            return temp
        }

        if (root.right == null) {
            const temp = root.left;
            root = null;
            return temp;
        }

        let parent = root;

        let child = root.right;
        while (child.left != null) {
            parent = child;
            child = child.left;
        }

        if (parent !== root) {
            parent.left = child.right;
        } else {
            parent.right = child.right;
        }

        root.data = child.data;

        parent = null;
        return root;
    }

    find(value, root) {
        if (value === root.data) return root;

        this.level += 1;

        if (value < root.data) {
            return this.find(value, root.left);
        }
        if (value > root.data) {
            return this.find(value, root.right);
        }

        return null;
    }

    levelOrder(callback, root, queue = [], outputArray = []) {
        if (root == null) return root;

        if (root.left != null) {
            queue.push(root.left);
        }

        if (root.right != null) {
            queue.push(root.right);
        }

        if (typeof(callback) === "function" && callback()) {
            console.log(root.data + callback());
            if (queue.length) {
                return this.levelOrder(callback, queue.shift(), queue);
            }
        } else {
            outputArray.push(root.data);
            this.levelOrder(callback, queue.shift(), queue, outputArray);
            return outputArray;
        }
    }

    inOrder(callback, root, outputArray = []) {
        if (root == null) return root;

        if (root.left != null) {
            this.inOrder(callback, root.left, outputArray);
        }

        if (typeof(callback) === "function" && callback()) {
            return root.data + callback();
        }
        
        outputArray.push(root.data);

        if (root.right != null) {
            this.inOrder(callback, root.right, outputArray);
        }

        return outputArray;
    }

    preOrder(callback, root, outputArray = []) {
        if (root == null) return root;

        if (typeof(callback) === "function" && callback()) {
            return root.data + callback();
        }
        
        outputArray.push(root.data);

        if (root.left != null) {
            this.preOrder(callback, root.left, outputArray);
        }

        if (root.right != null) {
            this.preOrder(callback, root.right, outputArray);
        }

        return outputArray;
    }

    postOrder(callback, root, outputArray = []) {
        if (root == null) return root;

        if (root.left != null) {
            this.postOrder(callback, root.left, outputArray);
        }

        if (root.right != null) {
            this.postOrder(callback, root.right, outputArray);
        }

        if (typeof(callback) === "function" && callback()) {
            return root.data + callback();
        }
        
        outputArray.push(root.data);

        return outputArray;
    }

    height(node) {
        if (node == null) return node;
        let leftCounter = 0;
        let rightCounter = 0;
        let leftNode = node.left;
        let rightNode = node.right;

        while (leftNode != null) {
            leftCounter += 1;
            leftNode = leftNode.left;
        }

        while (rightNode != null) {
            rightCounter += 1;
            rightNode = rightNode.right;
        }

        if (leftCounter >= rightCounter) {
            return leftCounter;
        }
        
        return rightCounter;

    }

    depth(node) {
        this.level = 0;
        this.find(node.data, this.root);
        return this.level;
    }

    isBalanced() {
        const node = this.root;
        if (node == null) return node;
        let leftCounter = 0;
        let rightCounter = 0;
        let leftNode = node.left;
        let rightNode = node.right;

        while (leftNode != null) {
            leftCounter += 1;
            leftNode = leftNode.left;
        }

        while (rightNode != null) {
            rightCounter += 1;
            rightNode = rightNode.right;
        }

        if (leftCounter === rightCounter) return true;

        let difference;

        if (leftCounter > rightCounter) {
            difference = leftCounter - rightCounter;
        } else {
            difference = rightCounter - leftCounter;
        }

        if (difference > 1) return false;

        return true;
    }

    rebalance() {
        return new Tree(this.inOrder(null, this.root));
    }

}
