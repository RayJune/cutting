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
 * https://leetcode-cn.com/problems/combinations/
 *
*/

/**
 * Binary Sorted
 * Complexity Analyzation -> optimize.md
 *
 * @param {number} n
 * @param {number} k
 * @returns combinations
 */
function combine(n, k) {
    const combinations = [];
    const currentCombination = [];

    for (let i = 1; i <= k; i++) {
        currentCombination.push(i);
    }
    currentCombination.push(n + 1);

    let i = 0;

    while (i < k) {
        combinations.push(currentCombination.slice(0, k));
        i = 0;
        while (currentCombination[i] + 1 === currentCombination[i + 1]) {
            currentCombination[i] = i + 1;
            i += 1;
        }
        currentCombination[i] += 1;
    }

    return combinations;
}

combine(5, 3);


module.exports = combine;
