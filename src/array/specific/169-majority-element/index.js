/*
 * 169. Majority Element
 *
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 *
 * Example 1:
 * Input: nums = [3, 2, 3]
 * Output: 3
 *
 * Example 2:
 * Input: nums = [2, 2, 1, 1, 1, 2, 2]
 * Output: 2
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 5 * 10 ** 4
 * (-2) ** 31 <= nums[i] <= 2 ** 31 - 1
 *
 * https://leetcode.com/problems/majority-element/
*/

/**
 * Boyer-Moore Voting Algorithm
 *
 * Time Complexity: O(n) = for 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    let count = 0;
    let majority = undefined;

    for (const num of nums) {
        if (count === 0) {
            majority = num;
        }
        count += (num === majority) ? 1 : -1;
    }

    return majority;
}

module.exports = majorityElement;
