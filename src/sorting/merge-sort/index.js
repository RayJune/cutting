/**
 * Merge Sort
 *
 * Time Complexity: O(n * log(n)) (这里略过 shift 操作的时间复杂度)
 * Space complexity: O(n)
 * Auxiliary complexity: O(n)
 * 其中 n 是 arr 数组的长度
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.splice(0, mid);

    return merge(mergeSort(left), mergeSort(arr));
}

function merge(left, right) {
    const sorted = [];

    while (left.length && right.length) {
        sorted.push(left[0] > right[0] ? right.shift() : left.shift());
    }

    return sorted.concat(left, right);
}

export default mergeSort;
