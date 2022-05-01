/*
 * 60. Permutation Sequence
 *
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
*/

/**
 * Backtracking
 *
 * Time Complexity: O(n! * n) = 遍历次数 O(n!) * 拷贝单个排列到答案数组中 O(n)
 * Space complexity: O(n) = permutation 长度 O(n) + backtrack 函数调用栈深度 O(n) + signs 长度 O(n)
 * Auxiliary complexity: O(n) = backtrack 函数调用栈深度 O(n) + signs 长度 O(n)
 *
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getPermutation(n, k) {
    let count = 0;
    let permutation = '';
    let endBacktrack = false;
    const signs = [];
    const backtrack = arr => {
        if (endBacktrack) {
            return;
        }
        if (arr.length === n) {
            count += 1;
            if (count === k) {
                permutation = arr.join('');
                endBacktrack = true;
            }
        } else {
            for (let i = 1; i <= n; i++) {
                if (signs[i]) {
                    continue;
                }
                arr.push(i);
                signs[i] = true;
                backtrack(arr);
                arr.pop();
                signs[i] = false;
            }
        }
    };

    backtrack([]);

    return permutation;
}

module.exports = getPermutation;
