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
 * Space complexity: O(n*2^n) = 单个 subset 长度 O(n) * subset 的个数 O(2^n) + O(n) backtrack 函数调用栈深度 + currentLength 长度 O(n)
 * Auxiliary complexity: O(n) = currentLength 长度 O(n) + backtrack 函数调用栈深度 O(n)
 *
 * @param {number[]} nums
 * @returns {number[][]} subsets
 */
function subsetsWithDup(nums) {
    let subsetLength = 0;
    const subsets = [];
    const len = nums.length;
    const backtrack = (i = 0, currentSubset = [], isPreNumSelected = false) => {
        const currentLength = currentSubset.length;

        if (currentLength === subsetLength) {
            subsets.push(currentSubset.slice());
        } else {
            for (let j = i; j < len; j++) {
                if (len - j + currentLength < subsetLength) {
                    break;
                }
                if (!isPreNumSelected && j > 0 && nums[j] === nums[j - 1]) {
                    continue;
                }
                currentSubset.push(nums[j]);
                backtrack(j + 1, currentSubset, true);
                currentSubset.pop();
                isPreNumSelected = false;
            }
        }
    };

    nums.sort();
    while (subsetLength <= len) {
        backtrack();
        subsetLength += 1;
    }

    return subsets;
}

module.exports = subsetsWithDup;
