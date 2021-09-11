/*
 * Given an array of n integers nums and an integer target, find the number of index triplets i, j, k
 * with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.
 *
 * Example 1:
 * Input: nums = [-2,0,1,3], target = 2
 * Output: 2
 * Explanation: Because there are two triplets which sums are less than 2:
 * [-2,0,1]
 * [-2,0,3]
 *
 * Example 2:
 * Input: nums = [0], target = 0
 * Output: 0
 *
 * Constraints:
 *
 * n == nums.length
 * 0 <= n <= 3500
 * -100 <= nums[i] <= 100
 * -100 <= target <= 100
 *
 * https://leetcode.com/problems/3sum-smaller/
 *
*/

/**
 * 排序 + 双指针，需要注意的该题目隐藏条件：triplets 可以重复，不需要去重
 *
 * Complexity Analyzation -> index.md
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number} count
 */
function threeSumSmaller(nums, target) {
    if (nums.length < 3) {
        return [];
    }

    const len = nums.length;
    let count = 0;

    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        let small = i + 1;
        let big = len - 1;

        while (small < big) {
            const sum = nums[i] + nums[small] + nums[big];

            if (sum < target) {
                count += (big - small);
                small += 1;
            } else {
                big -= 1;
            }
        }
    }

    return count;
}

module.exports = threeSumSmaller;
