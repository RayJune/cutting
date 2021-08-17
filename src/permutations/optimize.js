/*
 * Write a function that takes in an array of unique integers and returns an array of all permutations of those integers in no particular order.
 * If the input array is empty, the function should return an empty array.
 *
 * Sample Input:
 * array = [1, 2, 3]
 * Sample Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
 *
*/

/**
 * Backtracking
 * O(n*n!) time | O(n*n!) space, n 代表输入参数 arr 的数组长度
 *
 * @param {number[]} arr
 * @return {number[][]} permutations
 */

function getPermutations(arr) {
    const permutations = [];

    backtracking(arr, 0, permutations);

    return permutations;
}

/**
 *
 * @param {number[]} arr
 * @param {number} depth
 * @param {number[][]} permutations
 */
function backtracking(arr, depth, permutations) {
    const len = arr.length;

    if (depth === len - 1) {
        permutations.push(arr.slice());
    } else {
        for (let i = depth; i < len; i++) {
            swap(arr, i, depth);
            backtracking(arr, depth + 1, permutations);
            swap(arr, depth, i);
        }
    }
}

/**
 *
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

module.exports = getPermutations;
