/*
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1, 2, 3]
 * Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
 *
 * Example 2:
 * Input: nums = [0, 1]
 * Output: [[0, 1]]
 *
 * Example 3:
 * Input: nums = [1]
 * Output: [[1]]
 *
 * Constraints:
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * All the integers of nums are unique
 *
 * https://leetcode-cn.com/problems/permutations/
 *
*/

/**
 * DFS
 *
 * O(n^2*n!) time | O(n*n!) space
 *
 * @param {number[]} nums
 * @return {number[][]} permutations
 */
function permute(nums) {
    const permutations = [];

    permutationsHelper(nums, [], permutations);

    return permutations;
}

/**
 *
 * @param {number[]} nums
 * @param {number[]} currentPermutation
 * @param {number[][]} permutations
 */
function permutationsHelper(nums, currentPermutation, permutations) {
    if (nums.length) {
        for (let i = 0; i < nums.length; i++) {
            const modifiedArr = nums.slice(0, i).concat(nums.slice(i + 1));
            const newPermutation = currentPermutation.concat(nums[i]);

            permutationsHelper(modifiedArr, newPermutation, permutations);
        }
    } else {
        permutations.push(currentPermutation);
    }
}


module.exports = permute;
