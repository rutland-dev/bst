export default function MergeSort(array) {
    if (array.length < 2) return array;

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    const merge = (leftArray, rightArray) => {
        const mergedArray = [];

        while (leftArray.length && rightArray.length) {
            if (leftArray[0] < rightArray[0]) {
                mergedArray.push(leftArray.shift());
            } else if (leftArray[0] > rightArray[0]) {
                mergedArray.push(rightArray.shift());
            } else {
                mergedArray.push(leftArray.shift());
                rightArray.shift();
            }
        }

        while (leftArray.length) {
            mergedArray.push(leftArray.shift());
        }

        while (rightArray.length) {
            mergedArray.push(rightArray.shift());
        }

        return mergedArray;
    }

    return merge(MergeSort(left), MergeSort(right));
}