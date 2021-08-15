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
 * O(n^2*n!) time | O(n*n!) space
 *
 * @param {number[]} nums
 * @return {number[][]} permutations
 */
function permute1(nums) {
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
function permutationsHelper1(nums, currentPermutation, permutations) {
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

// /******************************** */

/**
 * O(n*n!) time | O(n*n!) space, n 代表输入参数 nums 数组的长度
 *
 * @param {number[]} nums
 * @return {number[][]} permutations
 */
function permute(nums) {
    const permutations = [];

    permutationsHelper(nums, 0, permutations);

    return permutations;
}

/**
 *
 * @param {number[]} nums
 * @param {number} targetIndex
 * @param {number[][]} permutations
 */
function permutationsHelper(nums, targetIndex, permutations) {
    const len = nums.length;

    if (targetIndex === len - 1) {
        permutations.push(nums.slice());
    } else {
        for (let i = targetIndex; i < len; i++) {
            swap(nums, i, targetIndex);
            permutationsHelper(nums, targetIndex + 1, permutations);
            swap(nums, targetIndex, i);
        }
    }
}

/**
 *
 * @param {Array} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

module.exports = permute;
