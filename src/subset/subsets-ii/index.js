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
 * 用回溯法来做，每个元素都有选和不选两种状态，注意在遇到重复元素的时候剪枝
 *
 * Time Complexity: O(n * 2^n) = backtrack 执行次数 O(2^n) * backtrack 函数内 array.concat 和 array.slice 方法时间复杂度 O(n + n) + 排序 O(n * log(n))
 * Space complexity: O(n * 2^n) = 所有子集的个数 O(2^n) * 子集长度 O(n) + backtrack 函数调用栈深度 O(n) + 排序 O(log(n))
 * Auxiliary complexity: O(n) = backtrack 函数调用栈深度 O(n) + 排序 O(log(n))
 *
 * @param {number[]} nums
 * @returns {number[][]} subsets
 */
function subsetsWithDup(nums) {
    const subsets = [];
    const len = nums.length;
    let isPreNumSelected = false;
    const backtrack = (currentSubset = [], i = 0) => {
        if (i === len) {
            subsets.push(currentSubset);
        } else {
            if (!(i > 0 && nums[i] === nums[i - 1] && !isPreNumSelected)) {
                isPreNumSelected = true;
                backtrack(currentSubset.concat(nums[i]), i + 1);
            }
            isPreNumSelected = false;
            backtrack(currentSubset.slice(), i + 1);
        }
    }

    nums.sort();
    backtrack();

    return subsets;
}

module.exports = subsetsWithDup;
