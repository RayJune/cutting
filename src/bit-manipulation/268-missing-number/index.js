/*
 * 268. 丢失的数字
 *
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
 *
 * Example 1:
 * Input: nums = [3, 0, 1]
 * Output: 2
 *
 * Example 2:
 * Input: nums = [0, 1]
 * Output: 2
 *
 * Example 3:
 * Input: nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
 * Output: 8
 *
 * Example 4:
 * Input: nums = [0]
 * Output: 1
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 10 ** 4
 * 0 <= nums[i] <= n
 * All the numbers of nums are unique.
 *
 * https://leetcode.com/problems/missing-number/
*/

/**
 * OXR
 *
 * Time Complexity: O(n) = for 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
    let targetNum = 0;

    for (let i = 0; i < nums.length; i++) {
        targetNum ^= nums[i] ^ (i + 1);
    }

    return targetNum;
}

module.exports = missingNumber;
