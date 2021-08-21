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
 * Backtracking
 *
 * O(n*n!) time | O(n*n!) space, n 代表输入参数 nums 数组的长度
 *
 * @param {number[]} nums
 * @return {number[][]} permutations
 */
function permute(nums) {
    const permutations = [];
    const len = nums.length;
    const backtrack = (depth = 0) => {
        if (depth === len - 1) {
            permutations.push(nums.slice());
        } else {
            for (let i = depth; i < len; i++) {
                swap(nums, i, depth);
                backtrack(depth + 1);
                swap(nums, depth, i);
            }
        }
    };

    backtrack();

    return permutations;
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
