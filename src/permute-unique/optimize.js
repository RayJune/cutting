/*
 * Given a collection of numbers, nums, that might contain duplicates,
 * return all possible unique permutations in any order.
 *
 * Example 1:
 * Input: nums = [1, 1, 2]
 * Output: [[1, 1, 2], [1, 2, 1], [2, 1, 1]]
 *
 * Example 2:
 * Input: nums = [1, 2, 3]
 * Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
 *
 * Constraints:
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
 *
 * https://leetcode-cn.com/problems/permutations-ii/
 *
*/

/**
 * Backtracking + signs
 * O(n*n!) time | O(n*n!) space
 *
 * @param {number} nums
 * @returns {number[][]} permutations
 */
function permuteUnique(nums) {
    const permutations = [];
    const signs = new Array(nums.length);

    backtrack(nums.sort(), [], permutations, signs);

    return permutations;
}

/**
 *
 * @param {number[]} nums
 * @param {number[]} currentPermutation
 * @param {number[][]} permutations
 * @param {Array} signs
 */
function backtrack(nums, currentPermutation, permutations, signs) {
    const len = nums.length;

    if (currentPermutation.length === len) {
        permutations.push(currentPermutation.slice());
    } else {
        for (let i = 0; i < len; i++) {
            if (signs[i] || (i > 0 && nums[i] === nums[i - 1] && !signs[i - 1])) {
                continue;
            }
            currentPermutation.push(nums[i]);
            signs[i] = true;
            backtrack(nums, currentPermutation, permutations, signs);
            signs[i] = false;
            currentPermutation.pop();
        }
    }
}

module.exports = permuteUnique;
