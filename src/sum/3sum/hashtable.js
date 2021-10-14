/*
 * Given an integer array nums, return all the triplets [nums[i], nums[small], nums[big]] such that i != small,
 * i != big, and small != big,and nums[i] + nums[small] + nums[big] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 *
 * Example 1:
 * Input: nums = [-1, 0, 1, 2, -1, -4]
 * Output: [[-1, -1, 2], [-1, 0, 1]]
 *
 * Example 2:
 * Input: nums = []
 * Output: []
 *
 * Example 3:
 * Input: nums = [0]
 * Output: []
 *
 * Constraints:
 *
 * 0 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 *
 * https://leetcode.com/problems/3sum/
 *
*/

/**
 * 先排序，然后用哈希表来做
 *
 * Complexity Analyzation -> index.md，其中 auxiliary space 为 O(n)，即 map 占用的空间
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */
function threeSum(nums) {
    const len = nums.length;
    const triplets = [];

    if (len < 3) {
        return [];
    }
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        const map = new Map();

        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < len; j++) {
            const remainingNum = 0 - nums[i] - nums[j];

            if (map.get(remainingNum)) {
                triplets.push([nums[i], remainingNum, nums[j]]);
                while (nums[j + 1] === nums[j]) {
                    j += 1;
                }
            } else {
                map.set(nums[j], true);
            }
        }
    }

    return triplets;
}

module.exports = threeSum;
