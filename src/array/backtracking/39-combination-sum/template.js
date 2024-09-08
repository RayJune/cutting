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

export default combinationSum;
