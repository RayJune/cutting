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
 * DFS
 *
 * O(n^2*n!) time | O(n*n!) space, 其中 n 代表输入参数 arr 的数组长度
 *
 * @param {number[]} arr
 * @return {number[][]} permutations
 */
function getPermutations(arr) {
    const permutations = [];

    permutationsHelper(arr, [], permutations);

    return permutations;
}

/**
 * 辅助构建 permutations
 *
 * @param {number[]} arr
 * @param {number[]} currentPermutation
 * @param {number[][]} permutations
 */
function permutationsHelper(arr, currentPermutation, permutations) {
    if (arr.length || currentPermutation.length === 0) {
        for (let i = 0; i < arr.length; i++) {
            const modifiedArr = arr.slice(0, i).concat(arr.slice(i + 1));
            const newPermutation = currentPermutation.concat(arr[i]);

            permutationsHelper(modifiedArr, newPermutation, permutations);
        }
    } else {
        permutations.push(currentPermutation);
    }
}

module.exports = getPermutations;
