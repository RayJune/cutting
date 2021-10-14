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
 * 回溯法：探索所有可能得候选解来找出结果，每次找到候选解后返回到上一个状态再继续找
 *
 * Time Complexity: O(n^2*n!) = for 循环 O(n) * concat 方法 O(n) * backtrack 的调用次数 O(n!)
 * Space complexity: O(n*n!) = 单个排列的长度 O(n) * 排列个数 O(n!)
 * Auxiliary complexity: O(n) = backtrack 函数调用栈的深度 O(n) + currentPermutation 的长度 O(n)
 * (n 代表输入参数 nums 数组的长度)
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */
function permute(nums) {
    const permutations = [];
    const backtrack = (candidates, currentPermutation = []) => {
        const len = candidates.length;

        if (len === 0) {
            permutations.push(currentPermutation.slice());
        } else {
            for (let i = 0; i < len; i++) {
                const remainingCandidates = candidates.slice(0, i).concat(candidates.slice(i + 1));

                currentPermutation.push(candidates[i]);
                backtrack(remainingCandidates, currentPermutation);
                currentPermutation.pop();
            }
        }
    };

    backtrack(nums);

    return permutations;
}

module.exports = permute;
