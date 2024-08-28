/*
 * 15. 3Sum
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[left], nums[right]] such that i != left, i != right, and left != right, and nums[i] + nums[left] + nums[right] == 0.
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

/**
 * 输入整数数组 nums，返回数组中所有和为 0 且不重复的三元组。注意不得包含重复的三元组
 *
 * 思路：
 * 排序 + Two Pointers 双指针
 * 用排序来比较大小并方便跳过重复元素，用双指针来优化查找的效率。注意跳过重复元素
 *
 * Time Complexity: O(n ** 2) = 遍历次数 O(n ** 2) + 排序 O(n * log(n))
 * Space complexity: O(n) = triplets 长度 O(n) + 排序 O(log(n))
 * Auxiliary complexity: O(log(n)) = 排序
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */
function threeSum(nums) {
    if (nums.length < 3) {
        return [];
    }

    const triplets = [];
    const len = nums.length;

    nums.sort((a, b) => a - b);
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = len - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum > 0) {
                right -= 1;
            } else if (sum < 0) {
                left += 1;
            } else {
                triplets.push([nums[i], nums[left], nums[right]]);
                left += 1;
                right -= 1;
                while (nums[left] === nums[left - 1]) {
                    left += 1;
                }
                while (nums[right] === nums[right + 1]) {
                    right -= 1;
                }
            }
        }
    }

    return triplets;
}

module.exports = threeSum;
