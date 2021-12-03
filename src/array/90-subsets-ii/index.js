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
 * Backtracking
 *
 * Time Complexity: O(2 ** n * n) = backtrack 执行次数 O(2 ** n) * backtrack 时间复杂度 O(n) + 排序 O(n * log(n))
 * Space complexity: O(2 ** n * n) = subsets 个数 (2 ** n) * 单个 subset 长度 O(n) + backtrack 函数调用栈深度 O(n) + 排序 O(log(n))
 * Auxiliary complexity: O(n) = 函数调用栈深度 O(n) + 排序 O(log(n))
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */
function subsetsWithDup(nums) {
    let isPrevSelected = false;
    const subsets = [];
    const len = nums.length;
    const backtrack = (arr, i) => {
        if (i === len) {
            subsets.push(arr);
        } else {
            if (!(nums[i] === nums[i - 1] && !isPrevSelected)) {
                isPrevSelected = true;
                backtrack(arr.concat(nums[i]), i + 1);
            }
            isPrevSelected = false;
            backtrack(arr.slice(), i + 1);
        }
    };

    nums.sort();
    backtrack([], 0);

    return subsets;
}

module.exports = subsetsWithDup;
