/*
 * 77. Combinations
 *
 * Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].
 *
 * You may return the answer in any order.
 *
 * Example 1:
 * Input: n = 4, k = 2
 * Output: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]];
 *
 * Example 2:
 * Input: n = 1, k = 1
 * Output: [[1]]
 *
 * Constraints:
 * 1 <= n <= 20
 * 1 <= k <= n
 *
 * https://leetcode.com/problems/combinations/
*/

/**
 * Backtracking + 剪枝
 *
 * Time Complexity: O(C(n, k) * k) = backtrack 执行次数 O(C(n, k)) * backtrack 时间复杂度 O(k)
 * Space complexity: O(C(n, k) * k) = combinations 所占空间 O(C(n, k) * k) + backtrack 函数调用栈深度 O(k)
 * Auxiliary complexity: O(O(k)) = backtrack 函数调用栈深度 O(k)
 *
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
function combine(n, k) {
    const combinations = [];
    const backtrack = (arr, i) => {
        if (i <= n + 1) {
            const len = arr.length;

            if (len === k) {
                combinations.push(arr);
            }
            if (len < k && len + n - i + 1 >= k) {
                backtrack(arr.concat(i), i + 1);
                backtrack(arr, i + 1);
            }
        }
    }

    backtrack([], 1);

    return combinations;
}

module.exports = combine;
