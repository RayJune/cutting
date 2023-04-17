/*
 * 18. 4Sum
 *
 * Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
 *
 * 0 <= a, b, c, d < n
 * a, b, c, and d are distinct.
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 * You may return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1, 0, -1, 0, -2, 2], target = 0
 * Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
 *
 * Example 2:
 * Input: nums = [2, 2, 2, 2, 2], target = 8
 * Output: [[2, 2, 2, 2]]
 *
 * Constraints:
 * 1 <= nums.length <= 200
 * (-10) ** 9 <= nums[i] <= 10 ** 9
 *
 * https://leetcode.com/problems/4sum/
*/

/**
 * Sort + Two Pointers
 *
 * Time Complexity: O(n ** 2) = 遍历次数 O(n ** 2) + 排序 O(n * log(n))
 * Space complexity: O(n) = quadruplets 长度 O(n) + 排序 O(log(n))
 * Auxiliary complexity: O(log(n)) = 排序
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[][]}
 */
function fourSum(nums, target) {
    if (nums.length < 4) {
        return [];
    }

    const quadruplets = [];
    const len = nums.length;

    nums.sort((a, b) => a - b);
    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < len - 2; j++) {
            if (j !== i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
                break;
            }
            if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) {
                continue;
            }

            let left = j + 1;
            let right = len - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
                    left += 1;
                    right -= 1;
                    while (nums[left] === nums[left - 1]) {
                        left += 1;
                    }
                    while (nums[right] === nums[right + 1]) {
                        right -= 1;
                    }
                } else if (sum > target) {
                    right -= 1;
                } else {
                    left += 1;
                }
            }
        }
    }

    return quadruplets;
}

module.exports = fourSum;
