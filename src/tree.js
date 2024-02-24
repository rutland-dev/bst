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
}
