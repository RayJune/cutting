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
 * Backtracking + map 去重
 *
 * Time Complexity: O(n*2^n) = 单个 subset push 次数 O(n) * backtrack 执行次数 O(2^n) + 排序 O(n*log(n))
 * Space complexity: O(n*2^n) = 单个 subset 长度 O(n) * subset 的个数 O(2^n) + O(n) backtrack 函数调用栈深度 + map 长度 O(2^n) + currentLength 长度 O(n) + 排序 O(log(n))
 * Auxiliary complexity: O(2^n) = currentLength 长度 O(n) + backtrack 函数调用栈深度 O(n) + map 长度 O(2^n) + 排序 O(log(n))
 *
 * @param {number[]} nums
 * @returns {number[][]} subsets
 */
function subsetsWithDup(nums) {
    let subsetLength = 0;
    const subsets = [];
    const map = {};
    const len = nums.length;
    const backtrack = (position = 0, currentSubset = []) => {
        const currentLength = currentSubset.length;

        if (currentLength === subsetLength) {
            if (map[currentSubset] === undefined) {
                subsets.push(currentSubset.slice());
                map[currentSubset] = true;
            }
        } else {
            for (let i = position; i < len; i++) {
                if (len - i + currentLength < subsetLength) {
                    break;
                }
                currentSubset.push(nums[i]);
                backtrack(i + 1, currentSubset);
                currentSubset.pop();
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
