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
 * backtracking
 *
 * Time Complexity: O(n^2*n!) = for 循环 O(n) * concat 方法 O(n) * backtrack 的调用次数 O(n!)
 * Space complexity: O(n*n!) = 单个排列的长度 O(n) * 排列个数 O(n!)
 * Auxiliary complexity: O(n) = backtrack 函数调用栈的深度 O(n) + currentPermutation 的长度 O(n)
 * (其中 n 代表输入参数 arr 的数组长度)
 *
 * @param {number[]} arr
 * @return {number[][]} permutations
 */
function getPermutations(arr) {
    const permutations = [];
    const backtrack = (candidates, currentPermutation = []) => {
        const len = candidates.length;

        if (len === 0 && currentPermutation.length) {
            permutations.push(currentPermutation.slice());
        } else {
            for (let i = 0; i < len; i++) {
                const remainingCandidates = candidates.slice(0, i).concat(candidates.slice(i + 1));

                currentPermutation.push(candidates[i]);
                backtrack(remainingCandidates, currentPermutation);
                currentPermutation.pop();
            }
        }
    };

    backtrack(arr);

    return permutations;
}

module.exports = getPermutations;
