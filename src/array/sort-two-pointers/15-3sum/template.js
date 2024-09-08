/*
 * 15. 3Sum
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[small], nums[big]] such that i != small, i != big, and small != big, and nums[i] + nums[small] + nums[big] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 * Example 1:
 * Input: nums = [-1, 0, 1, 2, -1, -4]
 * Output: [[-1, -1, 2], [-1, 0, 1]]
 *
 * Example 2:
 * Input: nums = []
 * Output: []
 *
 * Example 3:
 * Input: nums = [0]
 * Output: []
 *
 * Constraints:
 * 0 <= nums.length <= 3000
 * (-10) ** 5 <= nums[i] <= 10 ** 5
 *
 * https://leetcode.com/problems/3sum/
*/

export default threeSum;
