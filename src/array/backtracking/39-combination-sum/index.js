/*
 * 39. Combination Sum
 *
 * Given an array of distinct integers candidates and a target integer target.
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
 *
 * Example 2:
 * Input: nums = [3, 2, 1]
 * Output: [1, 2, 3]
 *
 * Example 3:
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
 * https://leetcode.com/problems/combination-sum/
*/

/**
 * Backtracking + sorting 剪枝
 *
 * Time Complexity: O(n ** (t / m) * (t / m)) = backtrack 函数调用次数/n 叉树的节点数上限 O(n ** (t / m)) * backtrack 时间复杂度/单个 combination 的长度 O(t / m) + 排序 O(n * log(n))
 * Space complexity: O(n ** (t / m) * (t / m)) = combinations 占用空间上限 O(n ** (t / m) * (t / m)) + backtrack 函数调用栈深度 O(t / m) + 排序 O(log(n))
 * Auxiliary complexity: O(t / m + log(n)) = backtrack 函数调用栈深度 O(t / m) + 排序 O(log(n))
 * 其中 n 是 candidates 的长度，t 是 target，m 是 candidates 中的最小值
 *
 * @param {number[]} candidates
 * @param {number} target
 * @returns {number[][]}
 */
function combinationSum(candidates, target) {
    const combinations = [];
    const backtrack = (currentTarget, arr, i) => {
        if (i < candidates.length) {
            const remain = currentTarget - candidates[i];

            if (remain === 0) {
                combinations.push(arr.concat(candidates[i]));
            }
            if (remain > 0) {
                backtrack(remain, arr.concat(candidates[i]), i);
                backtrack(currentTarget, arr, i + 1);
            }
        }
    };

    candidates.sort((a, b) => a - b);
    backtrack(target, [], 0);

    return combinations;
}

module.exports = combinationSum;
