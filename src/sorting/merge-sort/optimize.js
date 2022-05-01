/**
 * Merge Sort, 用 push 代替 shift
 *
 * Time Complexity: O(n * log(n))
 * Space complexity: O(n)
 * Auxiliary complexity: O(n)
 * 其中 n 是 arr 数组的长度
 *
 * @param {number[]} arr
 * @return {number[]}
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
        const leftValue = left[left.length - 1];
        const rightValue = right[right.length - 1];

        sorted.push(leftValue > rightValue ? left.pop() : right.pop());
    }

    return sorted.concat(left.reverse(), right.reverse()).reverse();
}

module.exports = mergeSort;
