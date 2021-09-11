/*
 * Given an integer array nums, return all the triplets [nums[i], nums[small], nums[big]] such that i != small,
 * i != big, and small != big,and nums[i] + nums[small] + nums[big] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
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
 *
 * 0 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 *
 * https://leetcode.com/problems/3sum/
 *
*/

/**
 * 先排序，然后用双指针来做，注意跳过重复的数字
 *
 * Complexity Analyzation -> index.md
 *
 * @param {number[]} nums
 * @returns {number[][]} triplets
 */
function threeSum(nums) {
    const len = nums.length;
    const triplets = [];

    if (len < 3) {
        return [];
    }
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        let small = i + 1;
        let big = len - 1;

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        while (small < big) {
            const sum = nums[i] + nums[small] + nums[big];

            if (sum > 0) {
                big -= 1;
            } else if (sum < 0) {
                small += 1;
            } else {
                triplets.push([nums[i], nums[small], nums[big]]);
                small += 1;
                big -= 1;
                while (nums[small] === nums[small - 1]) {
                    small += 1;
                }
                while (nums[big] === nums[big + 1]) {
                    big -= 1;
                }
            }
        }
    }

    return triplets;
}

module.exports = threeSum;
