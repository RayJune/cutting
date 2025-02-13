/*
 * 704. Binary Search
 *
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 *
 * Example 2:
 * Input: nums = [-1, 0, 3, 5, 9, 12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 4
 * (-10) ** 4 < nums[i], target < 10 ** 4
 * All the integers in nums are unique.
 * nums is sorted in ascending order.
 *
 * https://leetcode.com/problems/binary-search/
*/

/**
 * Binary Search
 *
 * Time Complexity: O(log(n)) = while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
function search(nums, target) {
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

    return -1;
}

export default search;
