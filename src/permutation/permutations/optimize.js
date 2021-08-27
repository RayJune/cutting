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
 *
 * Time Complexity: O(n*n!) = for 循环次数 O(n) * backtrack 执行次数 O(n!)
 * Space complexity:  O(n*n!) = 排列长度 O(n) * 排列个数 O(n!)
 * Auxiliary complexity: O(n) = backtrack 函数调用栈深度
 * (n 代表输入参数 arr 数组的长度)
 *
 * @param {number[]} arr
 * @return {number[][]} permutations
 */

function getPermutations(arr) {
    const permutations = [];
    const len = arr.length;
    const backtrack = (depth = 0) => {
        if (depth === len - 1) {
            permutations.push(arr.slice());
        } else {
            for (let i = depth; i < len; i++) {
                swap(arr, i, depth);
                backtrack(depth + 1);
                swap(arr, depth, i);
            }
        }
    };

    backtrack();

    return permutations;
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
