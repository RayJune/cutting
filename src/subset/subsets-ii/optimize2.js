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
 * Backtracking + isPreNumSelected
 *
 * Time Complexity: O(n*2^n) = 单个 subset push 次数 O(n) * backtrack 执行次数 O(2^n) + 排序 O(n*log(n))
 * Space complexity: O(n*2^n) = 单个 subset 长度 O(n) * subset 的个数 O(2^n) + O(n) backtrack 函数调用栈深度 + currentLength 长度 O(n) + 排序 O(log(n))
 * Auxiliary complexity: O(n) = currentLength 长度 O(n) + backtrack 函数调用栈深度 O(n) + 排序 O(log(n))
 *
 * @param {number[]} nums
 * @returns {number[][]} subsets
 */
function subsetsWithDup(nums) {
    const subsets = [];
    const backtrack = (position = 0, currentSubset = [], isPreNumSelected = false) => {
        if (position === nums.length) {
            subsets.push(currentSubset.slice());
        } else {
            backtrack(position + 1, currentSubset);
            if (!isPreNumSelected && position > 0 && nums[position] === nums[position - 1]) {
                return;
            } else {
                currentSubset.push(nums[position]);
                backtrack(position + 1, currentSubset, true);
                currentSubset.pop();
            }
        }
    };

    nums.sort();
    backtrack();

    return subsets;
}

module.exports = subsetsWithDup;
