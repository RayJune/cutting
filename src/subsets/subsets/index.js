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
 * Backtracking + 剪枝 + while loop
 *
 * Time Complexity: O(n*2^n) = push 构造单个 subset 的时间 O(n) * subset 个数 O(2^n)
 * Space complexity:  O(n*2^n) = 单个 subset 的长度 O(n) * subset 个数 O(2^n)
 * Auxiliary complexity:  O(n) = currentSubset 长度 O(n) + backtrack 函数栈空间 O(n)
 *
 * @param {number[]} nums
 * @returns {number[][]} subsets
 */
function subsets(nums) {
    let length = 1;
    const subsets = [[]];
    const len = nums.length;
    const backtrack = (i = 0, currentSubset = []) => {
        if (currentSubset.length === length) {
            subsets.push(currentSubset.slice());
        } else {
            for (let j = i; j < len; j++) {
                if (len - j + currentSubset.length < length) {
                    break;
                }
                currentSubset.push(nums[j]);
                backtrack(j + 1, currentSubset);
                currentSubset.pop();
            }
        }
    };

    while (length <= len) {
        backtrack();
        length += 1;
    }

    return subsets;
}

module.exports = subsets;
