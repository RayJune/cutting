/*
 * 40. Combination Sum II
 *
 * Given a collection of candidates numbers (candidates) and a target number (target),
 * find all unique combinations in candidates where the candidate numbers sum to target.
 *
 * Each number in candidates may only be used once in the combination.
 *
 * Note: The solution set must not contain duplicate combinations.
 *
 * Example 1:
 * Input: candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
 * Output: [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]];
 *
 * Example 2:
 * Input: candidates = [2, 5, 2, 1, 2], target = 5
 * Output: [[1, 2, 2], [5]]
 *
 * Constraints:
 * 1 <= candidates.length <= 100
 * 1 <= candidates[i] <= 50
 * 1 <= target <= 30
 *
 * https://leetcode.com/problems/combination-sum-ii/
*/

/**
 * Backtracking + signs/sorting 剪枝
 *
 * Time Complexity: O(2 ** n * n) = backtrack 执行次数 O(2 ** n) * backtrack 时间复杂度 O(n) + 排序 O(n * log(n))
 * Space complexity: O(2 ** n * n) = combinations 所占空间 O(2 ** n * n) + backtrack 函数调用栈深度 O(n) + 排序 O(log(n))
 * Auxiliary complexity: O(n) = backtrack 函数调用栈深度 O(n) + 排序 O(log(n))
 * 其中 n 是 candidates 的长度
 *
 * @param {number[]} candidates
 * @param {number} target
 * @returns {number[][]}
 */
function combinationSum2(candidates, target) {
    const combinations = [];
    const signs = [];
    const backtrack = (currentTarget, arr, i) => {
        if (i < candidates.length) {
            if (candidates[i] === candidates[i - 1] && !signs[i - 1]) {
                backtrack(currentTarget, arr, i + 1);
            } else {
                const remain = currentTarget - candidates[i];

                if (remain === 0) {
                    combinations.push(arr.concat(candidates[i]));
                }
                if (remain > 0) {
                    signs[i] = true;
                    backtrack(remain, arr.concat(candidates[i]), i + 1);
                    signs[i] = false;
                    backtrack(currentTarget, arr, i + 1);
                }
            }
        }
    };

    candidates.sort((a, b) => a - b);
    backtrack(target, [], 0);

    return combinations;
}

module.exports = combinationSum2;
