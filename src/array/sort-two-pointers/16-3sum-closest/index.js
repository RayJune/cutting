/*
 * 16. 3Sum Closest
 *
 * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
 *
 * Return the sum of the three integers.
 *
 * You may assume that each input would have exactly one solution.
 *
 * Example 1:
 * Input: nums = [-1, 2, 1, -4], target = 1
 * Output: 2
 * Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 * Example 2:
 * Input: nums = [0, 0, 0], target = 1
 * Output: 0
 *
 * Constraints:
 * 3 <= nums.length <= 1000
 * -1000 <= nums[i] <= 1000
 * (-10) ** 4 <= target <= 10 ** 4
 *
 * https://leetcode.com/problems/3sum-closest/
*/

/**
 * 输入一个整数数组 nums 和一个目标值 target，返回其最接近 target 的三个整数的和
 *
 * 思路：
 * 排序 + Two Pointers 双指针
 * 用排序来比较大小并方便跳过重复元素，用双指针来优化查找的效率。注意跳过重复元素
 *
 * Time Complexity: O(n ** 2) = 遍历次数 O(n ** 2) + 排序 O(n * log(n))
 * Space complexity: O(log(n)) = 排序
 * Auxiliary complexity: O(log(n)) = 排序
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
function threeSumClosest(nums, target) {
    const len = nums.length;
    let closest = Infinity;

    nums.sort((a, b) => a - b);
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = len - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }
            if (sum === target) {
                return sum;
            }
            if (sum > target) {
                right -= 1;
                while (nums[right] === nums[right + 1]) {
                    right -= 1;
                }
            } else if (sum < target) {
                left += 1;
                while (nums[left] === nums[left - 1]) {
                    left += 1;
                }
            }
        }
    }

    return closest;
}

module.exports = threeSumClosest;
