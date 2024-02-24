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
        if (root == null) return value;

        if (value === root) {
            if (root.left == null && root.right == null) {
                root = null;
            }
        }
    }
}