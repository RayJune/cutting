/*
 * 35. Search Insert Position
 *
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [1, 3, 5, 6], target = 5
 * Output: 2
 *
 * Example 2:
 * Input: nums = [1, 3, 5, 6], target = 2
 * Output: 1
 *
 * Example 3:
 * Input: nums = [1, 3, 5, 6], target = 7
 * Output: 4
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 4
 * (-10) ** 4 <= nums[i] <= 10 ** 4
 * nums contains distinct values sorted in ascending order.
 * (-10) ** 4 <= target <= 10 ** 4
 *
 * https://leetcode.com/problems/search-insert-position/
*/

/**
 * Binary search
 *
 * Time Complexity: O(log(n)) = while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }

    return left;
}

module.exports = searchInsert;
