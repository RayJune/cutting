/*
 * 33. 搜索旋转排序数组
 *
 * 整数数组 nums 按升序排列，数组中的值互不相同。
 *
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k + 1], ..., nums[n - 1], nums[0], nums[1], ..., nums[k - 1]]（下标 从 0 开始计数）。例如，[0, 1, 2, 4, 5, 6, 7] 在下标 3 处经旋转后可能变为 [4, 5, 6, 7, 0, 1, 2] 。
 *
 * 给你旋转后的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 *
 * Example 1:
 * Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
 * Output: 4
 *
 * Example 2:
 * Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 3
 * Output: -1
 *
 * Example 3:
 * Input: nums = [1], target = 0
 * Output: -1
 *
 * Constraints:
 * 1 <= nums.length <= 5000
 * (-10) ** 4 <= nums[i] <= 10 ** 4
 * All values of nums are unique.
 * nums is an ascending array that is possibly rotated.
 * (-10) ** 4 <= target <= 10 ** 4
 *
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
*/

module.exports = search;
