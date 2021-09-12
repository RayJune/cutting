/*
 * Given an array of integers nums and an integer k, return the total integer of
 * continuous subarray whose sum equals to k.
 *
 * Example 1:
 * Input: nums = [1, 1, 1], k = 2
 * Output: 2
 *
 * Example 2:
 * Input: nums = [1, 2, 3], k = 3
 * Output: 2
 *
 * Constraints:
 *
 * 1 <= nums.length <= 2 * 10^4
 * -1000 <= nums[i] <= 1000
 * -10^7 <= target <= 10^7
 *
 * https://leetcode.com/problems/subarray-sum-equals-k/
 *
*/

/**
 * HashMap
 *
 * sum([0, i]) - sum([0, j - 1]) = sum([j, i]) (即代表 k)
 * 所以有 sum([0, i]) - k = sum([0, j - 1]) 这个判断条件
 *
 * Time Complexity: O(n) = for 循环
 * Space complexity: O(n) = map 的长度
 * Auxiliary complexity: O(n) = map 的长度
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number} count
 */
function subarraySum(nums, k) {
    const map = new Map([[0, 1]]);
    let count = 0;
    let sum = 0;

    for (const integer of nums) {
        sum += integer;
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1);
        } else {
            map.set(sum, 1);
        }
    }

    return count;
}

module.exports = subarraySum;
