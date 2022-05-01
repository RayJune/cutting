/*
 * 260. Single Number III
 *
 * Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.
 *
 * You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.
 *
 * Example 1:
 * Input: nums = [1, 2, 1, 3, 2, 5]
 * Output: [3, 5]
 *
 * Example 2:
 * Input: nums = [-1, 0]
 * Output: [-1, 0]
 *
 * Example 2:
 * Input: nums = [0, 1]
 * Output: [0, 1]
 *
 * Constraints:
 * 2 <= nums.length <= 3 * 10 ** 4
 * (-2) ** 31 <= nums[i] <= 2 ** 31 - 1
 * Each integer in nums will appear twice, only two integers will appear once.
 *
 * https://leetcode.com/problems/single-number-iii/
*/

/**
 * Bit Mask，利用 rightMost1
 *
 * Time Complexity: O(n) = for 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function singleNumber(nums) {
    const bitMask = nums.reduce((prev, curr) => prev ^ curr);
    const rightMost1 = bitMask & -bitMask;
    let x = 0;

    for (const num of nums) {
        if (num & rightMost1) {
            x ^= num;
        }
    }

    return [x, bitMask ^ x];
}

module.exports = singleNumber;
