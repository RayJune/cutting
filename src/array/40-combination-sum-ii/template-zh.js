/*
 * 40. 组合总和 II
 *
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 *
 * candidates 中的每个数字在每个组合中只能使用一次。
 *
 * 注意：解集不能包含重复的组合。 
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

module.exports = combinationSum2;
