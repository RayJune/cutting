/*
 * Given an integer array `nums` of unique elements, return all possible subsets (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 *
 * Example 1:
 * Input: nums = [1, 2, 3]
 * Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [[], [0]]
 *
 * Constraints:
 * 1 <= nums.length <= 10
 * -10 <= k <= 10
 * All the nums are unique
 *
 * https://leetcode.com/problems/subsets/
 *
*/

/**
 * Bitwise operators
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators
 *
 * Time Complexity: O(n*2^n) = push 构造单个 subset 的时间 O(n) * subset 个数 O(2^n)
 * Space complexity:  O(n*2^n) = 单个 subset 的长度 O(n) * subset 个数 O(2^n)
 * Auxiliary complexity:  O(n) = currentSubset 长度 O(n)
 *
 * @param {number[]} nums
 * @returns {number[][]} subsets
 */
function subsets(nums) {
    const subsets = [];
    const len = nums.length;

    for (let i = 0; i < (1 << len); i++) {
        const currentSubset = [];

        for (let j = 0; j < len; j++) {
            if (i & (1 << j)) {
                currentSubset.push(nums[j]);
            }
        }
        subsets.push(currentSubset);
    }

    return subsets;
}

module.exports = subsets;
