/*
 * 259. 3Sum Smaller
 *
 * Given an array of n integers nums and an integer target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.
 *
 * Example 1:
 * Input: nums = [-2, 0, 1, 3], target = 2
 * Output: 2
 * Explanation: Because there are two triplets which sums are less than 2:
 * [-2, 0, 1]
 * [-2, 0, 3]
 *
 * Example 2:
 * Input: nums = [], target = 0
 * Output: 0
 *
 * Example 3:
 * Input: nums = [0], target = 0
 * Output: 0
 *
 * Constraints:
 * n == nums.length
 * 0 <= n <= 3500
 * -100 <= nums[i] <= 100
 * -100 <= target <= 100
 *
 * https://leetcode.com/problems/3sum-smaller/
*/

/**
 * 输入一个整数数组 nums 和目标值 target，返回满足三个元素之和小于 target 的三元组个数
 *
 * 思路：排序 + 双指针
 * 用排序来方便比较大小，用双指针来优化查找的效率
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
function threeSumSmaller(nums, target) {
    const len = nums.length;
    let count = 0;

    if (len < 3) {
        return 0;
    }
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] + nums[i + 1] + nums[i + 2] > target) {
            break;
        }

        let left = i + 1;
        let right = len - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum < target) {
                count += (right - left);
                left += 1;
            } else {
                right -= 1;
            }
        }
    }

    return count;
}

module.exports = threeSumSmaller;
