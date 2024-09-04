/*
 * 454. 4Sum II
 *
 * Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:
 *
 * 0 <= i, j, k, l < n
 * nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 *
 * Example 1:
 * Input: nums1 = [1, 2], nums2 = [-2, -1], nums3 = [-1, 2], nums4 = [0, 2]
 * Output: 2
 * Explanation:
 * The two tuples are:
 * 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
 * 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
 *
 * Example 2:
 * Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
 * Output: 1
 *
 * Constraints:
 * 2 <= nums.length <= 10 ** 4
 * (-10) ** 9 <= nums[i] <= 10 ** 9
 * (-10) ** 9 <= target <= 10 ** 9
 * Only one valid answer exists.
 *
 * https://leetcode.com/problems/4sum-ii/
*/

/**
 * 输入长度均为 4 的四个整数数组 nums1 nums2 nums3 nums4，返回满足 nums1[i] + nums2[j] + nums3[k] + nums4[l] = 0 的个数
 *
 * 思路：
 * Hash Map
 *
 * Time Complexity: O(n ** 2) = 遍历次数
 * Space complexity: O(n ** 2) = map 长度
 * Auxiliary complexity: O(n ** 2) = map 长度
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @returns {number}
 */
function fourSumCount(nums1, nums2, nums3, nums4) {
    const map = new Map();
    let count = 0;

    for (const a of nums1) {
        for (const b of nums2) {
            map.set(a + b, (map.get(a + b) || 0) + 1);
        }
    }
    for (const c of nums3) {
        for (const d of nums4) {
            if (map.has(-(c + d))) {
                count += map.get(-(c + d));
            }
        }
    }

    return count;
}

module.exports = fourSumCount;
