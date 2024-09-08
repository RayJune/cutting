/*
 * 136. Single Number
 *
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 *
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 * Example 1:
 * Input: nums = [2, 2, 1]
 * Output: 1
 *
 * Example 2:
 * Input: nums = [4, 1, 2, 1, 2]
 * Output: 4
 *
 * Example 3:
 * Input: nums = [1]
 * Output: 1
 *
 * Constraints:
 * 1 <= nums.length <= 3 * 10 ** 4
 * -3 * 10 ** 4 <= nums[i] <= 3 * 10 ** 4
 * Each element in the array appears twice except for one element which appears only once.
 *
 * https://leetcode.com/problems/single-number/
*/

/**
 * XOR
 *
 * Time Complexity: O(n) = for..of 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number[]} nums
 * @returns {number}
 */
function singleNumber(nums) {
    let targetNum = 0;

    for (const num of nums) {
        targetNum ^= num;
    }

    return targetNum;
}

export default singleNumber;
