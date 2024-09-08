/*
 * 78. Subsets
 *
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
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
*/

/**
 * Backtracking
 *
 * Time Complexity: O(2 ** n * n) = backtrack 执行次数 O(2 ** n) * backtrack 时间复杂度 O(n)
 * Space complexity: O(2 ** n * n) = subsets 个数 (2 ** n) * 单个 subset 长度 O(n) + backtrack 函数调用栈深度 O(n)
 * Auxiliary complexity: O(n) = 函数调用栈深度
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */
function subsets(nums) {
    const subsets = [];
    const len = nums.length;
    const backtrack = (arr, i) => {
        if (i === len) {
            subsets.push(arr);
        } else {
            backtrack(arr.slice(), i + 1);
            backtrack(arr.concat(nums[i]), i + 1);
        }
    };

    backtrack([], 0);

    return subsets;
}

export default subsets;
