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
 * https://leetcode.com/problems/permutations/
 *
*/

/**
 * 回溯法 + signs 标记数组
 *
 * Time Complexity: O(n*n!) = for 循环次数 O(n) * backtrack 执行次数 O(n!)
 * Space complexity: O(n*n!) = 单个排列长度 O(n) * 排列总个数 O(n!) + signs 长度 O(n) + currentPermutation 长度 O(n) + backtrack 函数执行栈深度
 * Auxiliary complexity: O(n) = signs 长度 O(n) + currentPermutation 长度 O(n) + backtrack 函数执行栈深度
 *
 * @param {number[]} nums
 * @returns {number[][]} permutations
 */
function permute(nums) {
    const permutations = [];
    const len = nums.length;
    const signs = new Array(len);
    const backtrack = (currentPermutation = []) => {
        if (currentPermutation.length === len) {
            permutations.push(currentPermutation.slice());
        } else {
            for (let i = 0; i < len; i++) {
                if (signs[i]) {
                    continue;
                }
                currentPermutation.push(nums[i]);
                signs[i] = true;
                backtrack(currentPermutation);
                currentPermutation.pop();
                signs[i] = false;
            }
        }
    };

    backtrack();

    return permutations;
}

module.exports = permute;
