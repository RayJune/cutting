/*
 * 46. Permutations
 *
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
*/

/**
 * Backtracking
 *
 * Time Complexity: O(n! * n) = 遍历次数 O(n!) * 拷贝单个排列到答案数组中 O(n)
 * Space complexity: O(n! * n) = 排列个数 O(n!) * 单个排列的长度 O(n) + backtrack 函数调用栈深度 O(n) + newCandidates 长度 O(n)
 * Auxiliary complexity: O(n) = backtrack 函数调用栈深度 O(n) + newCandidates 长度 O(n)
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    const permutations = [];
    const len = nums.length;
    const backtrack = (candidates, arr) => {
        if (arr.length === len) {
            permutations.push(arr);
        } else {
            for (let i = 0; i < candidates.length; i++) {
                const newCandidates = candidates.slice();

                newCandidates.splice(i, 1);
                backtrack(newCandidates, arr.concat(candidates[i]));
            }
        }
    };

    backtrack(nums, []);

    return permutations;
}

module.exports = permute;
