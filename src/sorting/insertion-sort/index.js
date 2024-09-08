/**
 * Insertion Sort
 *
 * Time Complexity: O(n ** 2)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number[]} arr
 */
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let preIndex = i - 1;
        const current = arr[i];

        while (arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex -= 1;
        }
        arr[preIndex + 1] = current;
    }

    return arr;
}

export default insertionSort;
