/*
 * Given two integers `n` and `k`, return all possible combinations of k numbers out of the range [1, n].
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
 * https://leetcode-cn.com/problems/combinations/
 *
*/

/**
 * 剪枝
 *
 * Complexity Analyzation -> index.md
 *
 * @param {number} n
 * @param {number} k
 * @returns {number[][]} combinations
 */
function combine(n, k) {
    const combinations = [];
    const backtrack = (i = 1, currentCombination = []) => {
        if (i === n + 1) {
            return;
        }
        for (let j = i; j <= n; j++) {
            if (n - j + currentCombination.length + 1 < k) {
                break;
            }
            currentCombination.push(j);
            if (currentCombination.length === k) {
                combinations.push(currentCombination.slice());
            }
            backtrack(j + 1, currentCombination);
            currentCombination.pop();
        }
    };

    backtrack();

    return combinations;
}

module.exports = combine;
