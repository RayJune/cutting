/*
 * Given a collection of candidates numbers (`candidates`) and a target number (`target`),
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
 * https://leetcode-cn.com/problems/combination-sum-ii/
*/

/**
 * Backtracking + signs + 剪枝
 *
 * O(2^n*n) | O(n) space, n 是参数 candidates 数组的长度
 *
 * @param {number[]} candidates
 * @param {number} target
 * @returns {number[][]}
 */
function combinationSum2(candidates, target) {
    const combinations = [];
    const len = candidates.length;
    const signs = new Array(len);
    const backtrack = (currentTarget, currentCombination = [], i = 0) => {
        if (i === len) {
            return;
        }
        for (let j = i; j < len; j++) {
            if (signs[j] || (j > 0 && candidates[j] === candidates[j - 1]) && !signs[j - 1]) {
                continue;
            }

            const remainingTarget = currentTarget - candidates[j];

            if (remainingTarget > 0) {
                signs[j] = true;
                currentCombination.push(candidates[j]);
                backtrack(remainingTarget, currentCombination, j + 1);
                signs[j] = false;
                currentCombination.pop();
            } else if (remainingTarget === 0) {
                currentCombination.push(candidates[j]);
                combinations.push(currentCombination.slice());
                currentCombination.pop();
                break;
            } else {
                break;
            }
        }
    };

    candidates.sort((a, b) => a - b);
    backtrack(target);

    return combinations;
}

combinationSum2([3, 1, 3, 5, 1, 1], 8);

module.exports = combinationSum2;
