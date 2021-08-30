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
 * Cascading
 *
 * Time Complexity: O(2^n) = slice 方法 O(n) * 遍历次数 O(2^n)
 * Space complexity: O(n*2^n) = 单个 subset 长度 O(n) * subset 个数 O(2^n)
 * Auxiliary complexity: O(1)
 *
 * @param {number[]} nums
 * @returns {number[][]} subsets
 */
function subsets(nums) {
    const subsets = [[]];

    for (let i = 0; i < nums.length; i++) {
        const currentLen = subsets.length;

        for (let j = 0; j < currentLen; j++) {
            const newSubset = subsets[j].slice();

            newSubset.push(nums[i]);
            subsets.push(newSubset);
        }
    }

    return subsets;
}

module.exports = subsets;
