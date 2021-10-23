/*
 * Given an array of distinct integers `candidates` and a target integer `target`.
 * Return a list of all unique combinations of candidates where the chosen numbers sum to target.
 * You may return the combinations in any order.
 *
 * The same number may be chosen from candidates an unlimited number of times.
 * Two combinations are unique if the frequency of at least one of the chosen numbers is different.
 *
 * It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 *
 * Example 1:
 * Input: candidates = [2, 3, 6, 7], target = 7
 * Output: [[2, 2, 3], 7];
 * Explanation:
 * 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times. 7 is a candidate, and 7 = 7. These are the only two combinations.
 *
 * Example 2:
 * Input: candidates = [2, 3, 5], target = 8
 * Output: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
 *
 * Example 3:
 * Input: candidates = [2], target = 1
 * Output: []
 *
 * Example 4:
 * Input: candidates = [1], target = 1
 * Output: [[1]]
 *
 * Example 5:
 * Input: candidates = [1], target = 2
 * Output: [[1, 1]]
 *
 * Constraints:
 * 1 <= candidates.length <= 30
 * 1 <= candidates[i] <= 200
 * All elements of candidates are distinct.
 * 1 <= target <= 500
 *
 * https://leetcode-cn.com/problems/combination-sum/
*/

/**
 * Backtracking + 排序剪枝
 *
 * O(s) time | O(s) space, s 代表所有可行解的长度之和
 *
 * @param {number[]} candidates
 * @param {number} target
 * @returns {number[][]}
 */
function combinationSum(candidates, target) {
    const combinations = [];
    const len = candidates.length;
    const backtrack = (currentTarget, currentCombination = [], i = 0) => {
        if (i === len) {
            return;
        }

        const remainingTarget = currentTarget - candidates[i];

        if (remainingTarget > 0) {
            currentCombination.push(candidates[i]);
            backtrack(remainingTarget, currentCombination, i);
            currentCombination.pop();
            backtrack(currentTarget, currentCombination, i + 1);
        } else if (remainingTarget === 0) {
            currentCombination.push(candidates[i]);
            combinations.push(currentCombination.slice());
            currentCombination.pop();
        }
    };

    candidates.sort((a, b) => a - b);
    backtrack(target);

    return combinations;
}

module.exports = combinationSum;
