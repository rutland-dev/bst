import Node from "./node";
import MergeSort from "./merge-sort";

export default class Tree {
    constructor(array) {
        // Sort array and remove duplicates
        this.sortedArray = MergeSort(array);
        this.root = this.buildTree(this.sortedArray, 0, this.sortedArray.length - 1);
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

        if (value < root.data) {
            return this.find(value, root.left);
        }
        if (value > root.data) {
            return this.find(value, root.right);
        }

        return null;
    }
}
