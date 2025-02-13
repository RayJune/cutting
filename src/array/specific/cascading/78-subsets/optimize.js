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
 * Cascading, [[]] -> [[], [1]] -> [[], [1], [2], [1, 2]]
 *
 * Time Complexity: O(2 ** n * n) = 遍历次数 O(2 ** n) * 复制单个 subset 到结果数组中 O(n)
 * Space complexity: O(2 ** n * n) = subsets 个数 (2 ** n) * 单个 subset 长度 O(n)
 * Auxiliary complexity: O(1)
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */
function subsets(nums) {
    const subsets = [[]];

    for (const char of nums) {
        subsets.forEach(arr => {
            subsets.push(arr.concat(char));
        });
    }

    return subsets;
}

// the reason why use forEach -> https://stackoverflow.com/questions/25243586/javascript-add-value-to-array-while-looping-that-will-then-also-be-included-in#answer-25243688

export default subsets;
