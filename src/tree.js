import Node from "./node";
import MergeSort from "./merge-sort";

export default class Tree {
    constructor(array) {
        // Sort array and remove duplicates
        const sortedArray = MergeSort(array);
        this.root = this.buildTree(sortedArray);
    }

    
}
