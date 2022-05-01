/*
 * 90. Subsets II
 *
 * Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
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
*/

/**
 * Cascading, [[]] -> [[], [1]] -> [[], [1], [2], [1, 2]] -> [[], [1], [2], [1, 2], [2, 2], [1, 2, 2]]
 * 如果出现重复元素的话，只对上一次新添加的子集们进行相加处理得到新子集们
 *
 * Time Complexity: Time Complexity: O(2 ** n * n) = 遍历次数 O(2 ** n) * 复制单个 subset 到结果数组中 O(n) + 排序 O(n * log(n))
 * Space complexity: O(2 ** n * n) = subsets 个数 (2 ** n) * 单个 subset 长度 O(n) + 排序 O(log(n))
 * Auxiliary complexity: O(log(n)) = 排序
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
    const subsets = [[]];
    const len = nums.length;
    let subsetsLen = 0;

    nums.sort();
    for (let i = 0; i < len; i++) {
        const start = nums[i] === nums[i - 1] ? subsetsLen : 0;

        subsetsLen = subsets.length;
        for (let j = start; j < subsetsLen; j++) {
            subsets.push(subsets[j].concat(nums[i]));
        }
    }

    return subsets;
}

module.exports = subsetsWithDup;
