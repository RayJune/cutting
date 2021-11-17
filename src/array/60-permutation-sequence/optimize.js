/*
 * The set [1, 2, 3, ..., n] contains a total of n! unique permutations.
 *
 * By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
 *
 * 1. "123"
 * 2. "132"
 * 3. "213"
 * 4. "231"
 * 5. "312"
 * 6. "321"
 *
 * Given n and k, return the No.k permutation sequence.
 *
 * Example 1:
 * Input: n = 3, k = 3
 * Output: "213"
 *
 * Example 2:
 * Input: n = 4, k = 9
 * Output: "2314"
 *
 * Example 3:
 * Input: n = 3, k = 1
 * Output: "123"
 *
 * Constraints:
 * 1 <= n <= 9
 * 1 <= k <= n!
 *
 * https://leetcode.com/problems/permutation-sequence/
 *
*/

/**
 * 用 nextPermutation 来做
 *
 * Time Complexity: O(k*n) = for 循环次数 O(n) + for 循环次数 O(k) * nextPermutation 时间复杂度 O(n) + join 方法 O(n)
 * Space complexity: O(n) = permutation 长度 O(n)
 * Auxiliary complexity: O(1)
 *
 * @param {number} n
 * @param {number} k
 * @returns {string}
 */
function getPermutation(n, k) {
    const permutation = [];

    for (let i = 1; i <= n; i++) {
        permutation.push(i);
    }
    for (let i = 2; i <= k; i++) {
        nextPermutation(permutation);
    }

    return permutation.join('');
}

/**
 *
 * @param {number[]} permutation
 */
function nextPermutation(permutation) {
    const len = permutation.length;
    let smallerIndex = len - 2;

    while (permutation[smallerIndex] >= permutation[smallerIndex + 1]) {
        smallerIndex -= 1;
    }

    if (smallerIndex >= 0) {
        let biggerIndex = len - 1;

        while (permutation[smallerIndex] >= permutation[biggerIndex]) {
            biggerIndex -= 1;
        }
        swap(permutation, smallerIndex, biggerIndex);
    }
    reverse(permutation, smallerIndex + 1);
}

/**
 *
 * @param {Array} arr
 * @param {number} startIndex
 */
function reverse(arr, startIndex) {
    let endIndex = arr.length - 1;

    while (startIndex < endIndex) {
        swap(arr, startIndex, endIndex);
        startIndex += 1;
        endIndex -= 1;
    }
}

/**
 *
 * @param {Array} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

module.exports = getPermutation;
