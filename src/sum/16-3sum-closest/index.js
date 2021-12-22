/*
 * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
 * Return the sum of the three integers.
 *
 * You may assume that each input would have exactly one solution.
 *
 *
 * Example 1:
 * Input: nums = [-1, 2, 1, -4], target = 1
 * Output: 2
 * Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 * Example 2:
 * Input: nums = [0,0,0], target = 1
 * Output: 0
 *
 * Constraints:
 *
 * 3 <= nums.length <= 1000
 * -1000 <= nums[i] <= 1000
 * -10^4 <= target <= 10^4
 *
 * https://leetcode.com/problems/3sum-closest/
 *
*/

/**
 * 排序 + 双指针
 *
 * Time Complexity: O(n^2) = for 循环 O(n) * for 循环 O(n) + 排序 O(n*log(n))
 * Space complexity: O(log(n)) = 排序
 * Auxiliary complexity: O(log(n)) = 排序
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
function threeSumClosest(nums, target) {
    const len = nums.length;
    let gap = Infinity;

    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        let small = i + 1;
        let big = len - 1;

        while (small < big) {
            const newGap = nums[i] + nums[small] + nums[big] - target;

            if (Math.abs(newGap) < Math.abs(gap)) {
                gap = newGap;
            }
            if (newGap > 0) {
                big -= 1;
                while (nums[big] === nums[big + 1]) {
                    big -= 1;
                }
            } else if (newGap < 0) {
                small += 1;
                while (nums[small] === nums[small - 1]) {
                    small += 1;
                }
            } else {
                return target;
            }
        }
    }

    return gap + target;
}

module.exports = threeSumClosest;
