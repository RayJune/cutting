/*
 * 724. 寻找数组的中心下标
 *
 * 给你一个整数数组 nums ，请计算数组的中心下标 。
 *
 * 数组中心下标是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
 *
 * 如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。
 *
 * 如果数组有多个中心下标，应该返回最靠近左边的那一个。如果数组不存在中心下标，返回 -1 。
 *
 * Example 1:
 * Input: nums = [1, 7, 3, 6, 5, 6]
 * Output: 3
 *
 * Example 2:
 * Input: nums = [1, 2, 3]
 * Output: -1
 *
 * Example 3:
 * Input: nums = [2, 1, -1]
 * Output: 0
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 4
 * -1000 <= nums[i] <= 1000
 *
 * https://leetcode.cn/problems/find-pivot-index/
*/

module.exports = pivotIndex;
