/**
 * Quick Sort
 *
 * Time Complexity: O(n * log(n))
 * Space complexity: O(n)
 * Auxiliary complexity: O(n)
 *
 * @param {number[]} arr
 * @param {number} [left=0]
 * @param {number} [right=arr.length - 1]
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);

        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

/**
 * 把 pivot 先 swap 到末尾，再进行分区处理
 *
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
function partition(arr, left, right) {
    const {pivot, pivotIndex} = getMedian(arr, left, right);
    let i = left;

    swap(arr, pivotIndex, right);
    for (let j = i; j < right; j++) {
        if (arr[j] < pivot) {
            swap(arr, i, j);
            i += 1;
        }
    }
    swap(arr, i, right);

    return i;
}

/**
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 * @returns {{pivot: number, pivotIndex: number}}
 */
function getMedian(arr, left, right) {
    let pivot = arr[left];
    let pivotIndex = left;
    const mid = left + Math.floor((right - left) / 2);

    if ((arr[mid] < arr[right] && arr[mid] > arr[left])
        || (arr[mid] > arr[right] && arr[mid] < arr[left])) {
        pivot = arr[mid];
        pivotIndex = mid;
    } else if ((arr[right] < arr[mid] && arr[right] > arr[left])
        || (arr[right] > arr[mid] && arr[right] < arr[left])) {
        pivot = arr[right];
        pivotIndex = right;
    }

    return {
        pivot,
        pivotIndex
    };
}

/**
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

module.exports = quickSort;
