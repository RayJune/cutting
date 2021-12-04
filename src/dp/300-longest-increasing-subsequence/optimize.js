/*
 * 300. Longest Increasing Subsequence
 *
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 *
 * A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].
 *
 * Example 1:
 * Input: nums = [10, 9, 2, 5, 3, 7, 101, 18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4.
 *
 * Example 2:
 * Input: nums = [0, 1, 0, 3, 2, 3]
 * Output: 4
 *
 * Example 3:
 * Input: nums = [7, 7, 7, 7, 7, 7, 7]
 * Output: 1
 *
 * Constraints:
 * 1 <= nums.length <= 2500
 * -10 ** 4 <= nums[i] <= 10 ** 4
 *
 * Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?
 *
 * https://leetcode.com/problems/longest-increasing-subsequence/
*/

/**
 * Greedy Algorithm + Binary Search Algorithm
 *
 * Time Complexity: O(n * log(n)) = for 循环次数 * 二分查找 O(log(n))
 * Space complexity: O(n) = arr 长度
 * Auxiliary complexity: O(n) = arr 长度
 *
 * @param {number[]} nums
 * @returns {number}
 */
function lengthOfLIS(nums) {
    const arr = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > arr[arr.length - 1]) {
            arr.push(nums[i]);
        } else {
            let left = 0;
            let right = arr.length - 1;

            while (left < right) {
                const mid = Math.floor((left + right) / 2);

                if (arr[mid] < nums[i]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            arr[left] = nums[i];
        }
    }

    return arr.length;
}

module.exports = lengthOfLIS;
