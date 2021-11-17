/*
 * 90. Subsets II
 *
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
 * Cascading, [[]] -> [[], [1]] -> [[], [1], [2], [1, 2]] -> [[], [1], [2], [1, 2], [2, 2], [1, 2, 2]]
 * 如果出现重复元素的话，只对上一次新添加的子集们进行相加处理得到新子集们
 *
 * Time Complexity: O(n * 2^n) = 两个 for 循环总遍历次数 O(2^n) * 第二个 for 循环 中的 concat 方法 O(n) + 排序 O(n * log(n))
 * Space complexity: O(n * 2^n) = 所有子集的个数 O(2^n) * 子集长度 O(n) + 排序 O(log(n))
 * Auxiliary complexity: O(log(n)) = 排序 O(log(n))
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */
function subsetsWithDup(nums) {
    const subsets = [[]];
    const len = nums.length;
    let subsetsLength = 0;

    nums.sort();
    for (let i = 0; i < len; i++) {
        const startIndex = i > 0 && nums[i] === nums[i - 1] ? subsetsLength : 0;

        subsetsLength = subsets.length;
        for (let j = startIndex; j < subsetsLength; j++) {
            subsets.push(subsets[j].concat(nums[i]));
        }
    }

    return subsets;
}

module.exports = subsetsWithDup;
