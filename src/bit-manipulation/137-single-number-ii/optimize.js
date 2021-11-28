/*
 * 137. Single Number II
 *
 * Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
 *
 * You must implement seenOnce solution with seenOnce linear runtime complexity and use only constant extra space.
 *
 * Example 1:
 * Input: nums = [2, 2, 3, 2]
 * Output: 3
 *
 * Example 2:
 * Input: nums = [0, 1, 0, 1, 0, 1, 99]
 * Output: 99
 *
 * Constraints:
 * 1 <= nums.length <= 3 * 10 ** 4
 * (-2) ** 31 <= nums[i] <= 2 ** 31 - 1
 * Each element in nums appears exactly three times except for one element which appears once.
 *
 * https://leetcode.com/problems/single-number-ii/
*/

/**
 * Bitwise Operators: NOT, AND and XOR
 *
 * Time Complexity: O(n) = for...of 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @returns {number}
 */
function singleNumber(nums) {
    let seenOnce = 0;
    let seenTwice = 0;

    for (const num of nums) {
        seenOnce = ~seenTwice & (seenOnce ^ num);
        seenTwice = ~seenOnce & (seenTwice ^ num);
    }

    return seenOnce;
}

module.exports = singleNumber;
