/*
 * Given an integer array `nums` that may contain duplicates, return all possible subsets (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 *
 * Example 1:
 * Input: nums = [1, 2, 2]
 * Output: [[], [1], [2], [1, 2], [1, 2, 2], [2], [2, 2]];
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [[], [0]]
 *
 * Constraints:
 * 1 <= nums.length <= 10
 * -10 <= k <= 10
 *
 * https://leetcode.com/problems/subsets-ii/
 *
*/

/**
 * Cascading
 *
 * Time Complexity: O(n*2^n) = slice 方法 O(n) * 遍历次数 O(n^2) + 排序 O(n*log(n))
 * Space complexity: O(n*2^n) = 单个 subset 长度 O(n) * subset 个数 O(n^2) + 排序 O(log(n))
 * Auxiliary complexity: O(log(n)) = 排序 O(log(n))
 *
 * @param {number[]} nums
 * @returns {number[][]} subsets
 */
function subsetsWithDup(nums) {
    const subsets = [[]];
    let subsetsLength = 0;

    nums.sort();
    for (let i = 0; i < nums.length; i++) {
        const startIndex = (i > 0 && nums[i] === nums[i - 1]) ? subsetsLength : 0;

        subsetsLength = subsets.length;

        for (let j = startIndex; j < subsetsLength; j++) {
            const newSubset = subsets[j].slice();

            newSubset.push(nums[i]);
            subsets.push(newSubset);
        }
    }

    return subsets;
}

module.exports = subsetsWithDup;


