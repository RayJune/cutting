/*
 * 154. Find Minimum in Rotated Sorted Array II
 *
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0, 1, 4, 4, 5, 6, 7] might become:
 *
 * [4, 5, 6, 7, 0, 1, 4] if it was rotated 4 times.
 * [0, 1, 4, 4, 5, 6, 7] if it was rotated 7 times.
 * Notice that rotating an array [a[0], a[1], a[2], ..., a[n -1 ]] 1 time results in the array [a[n - 1], a[0], a[1], a[2], ..., a[n - 2]].
 *
 * Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.
 *
 * You must decrease the overall operation steps as much as possible.
 *
 * Example 1:
 * Input: nums = [1, 3, 5]
 * Output: 1
 *
 * Example 2:
 * Input: nums = [2, 2, 2, 0, 1]
 * Output: 0
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 5000
 * -5000 <= nums[i] <= 5000
 * nums is sorted and rotated between 1 and n times.
 *
 * Follow up: This problem is similar to Find Minimum in Rotated Sorted Array, but nums may contain duplicates. Would this affect the runtime complexity? How and why?
 *
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
*/

/**
 * Binary Search
 *
 * Time Complexity: O(n) = 最差情况为所有元素都是重复的；最好情况为没有元素重复，此时为 O(log(n))
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            right -= 1;
        }
    }

    return nums[left];
}

module.exports = findMin;
