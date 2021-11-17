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
 * 比如 1 在 a1 的位置的组合有 (n-1)! 种，通过 k / (n - 1)! 的方式来计算第一个数字的值。以此类推得出目标组合。
 *
 * Time Complexity: O(n^2) = for 循环 O(n) + while 循环 O(n) * splice 操作 O(n) + join 操作 O(n)
 * Space complexity: O(n) = candidates 长度 O(n) + permutation 长度 O(n)
 * Auxiliary complexity: O(n) = permutation 长度 O(n)
 *
 * @param {number} n
 * @param {number} k
 * @returns {string}
 */
function getPermutation(n, k) {
    const candidates = [];
    const permutation = [];
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        candidates.push(i);
        factorial *= i;
    }

    k -= 1;
    while (candidates.length) {
        factorial /= candidates.length; // (n-x)!

        const index = Math.floor(k / factorial);

        permutation.push(candidates[index]);
        candidates.splice(index, 1);
        k %= factorial;
    }

    return permutation.join('');
}

module.exports = getPermutation;