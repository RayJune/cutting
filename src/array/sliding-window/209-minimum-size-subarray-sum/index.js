/*
 * 209. Minimum Size Subarray Sum
 *
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 *
 * Example 1:
 * target = 7, nums = [2, 3, 1, 2, 4, 3]
 * Output: 2
 * Explanation: The subarray [4, 3] has the minimal length under the problem constraint.
 *
 * Example 2:
 * Input: target = 4, nums = [1, 4, 4]
 * Output: 1
 *
 * Example 3:
 * Input: target = 11, nums = [1, 1, 1, 1, 1, 1, 1, 1]
 * Output: 0
 *
 * Constraints:
 * 1 <= target <= 10 ** 9
 * 1 <= nums.length <= 10 ** 5
 * 1 <= nums[i] <= 10 ** 5
 *
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 *
 * @related 3-longest-substring-without-repeating-characters
 * @related 159-longest-substring-with-at-most-two-distinct-characters
 * @related 340-longest-substring-with-at-most-k-distinct-characters
*/

/**
 * 输入一个含有 n 个正整数的数组和一个正整数 target。返回其满足和 >= target 的长度最小的连续子数组的长度
 *
 * 思路：
 * Sliding Window 滑动窗口
 * 1. 创建左右指针 left right 代表当前窗口的头尾，sum 为当前窗口内的和
 * 2. 将 nums[right] 加入到 sum 中
 * 3. 如果 sum >= target，更新最小长度，并不断从 sum 中删除 nums[left] 的值以及 left 节点右移，直到 sum < target
 * 4. right 节点右移
 * 5. 重复步骤 2 3 4 直至遍历结束
 *
 * Time Complexity: O(n) = 左右指针遍历次数
 * Space Complexity: O(1)
 * Auxiliary Complexity: O(1)
 * 其中 n 是 nums 数组的长度
 *
 * @param {number} target
 * @param {number[]} nums
 * @returns {number}
 */
function minSubArrayLen(target, nums) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let minLen = 0;

    while (right < nums.length) {
        sum += nums[right];
        while (sum >= target) {
            minLen = minLen === 0 ? right - left + 1 : Math.min(minLen, right - left + 1);
            sum -= nums[left];
            left += 1;
        }
        right += 1;
    }

    return minLen;
}

module.exports = minSubArrayLen;
