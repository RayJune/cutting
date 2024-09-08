/*
 * 303. Range Sum Query - Immutable
 *
 * Given an integer array nums, handle multiple queries of the following type:
 *
 * Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
 * Implement the NumArray class:
 *
 * NumArray(int[] nums) Initializes the object with the integer array nums.
 * int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 *
 * Example 1:
 * Input: ["NumArray", "sumRange", "sumRange", "sumRange"]
 * [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
 * Output: [null, 1, -1, -3]
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 4
 * (-10) ** 5 <= nums[i] <= 10 ** 5
 * 0 <= left <= right < nums.length
 * At most 10 ** 4 calls will be made to sumRange.
 *
 * https://leetcode.com/problems/range-sum-query-immutable/
 */

/**
 * Prefix Sum
 */
class NumArray {
    #prefixSum = [0];

    /**
     * Time Complexity: O(n) = .forEach 循环次数
     * Space complexity: O(n) = this.#prefixSum 数组的长度
     * Auxiliary complexity: O(n) = this.#prefixSum 数组的长度
     * 其中 n 是数组 nums 的长度
     *
     * @param {number[]} nums
     */
    constructor(nums) {
        nums.forEach((num, i) => {
            this.#prefixSum[i + 1] = this.#prefixSum[i] + num;
        });
    }

    /**
     * Time Complexity: O(1)
     * Space complexity: O(1)
     * Auxiliary complexity: O(1)
     *
     * @param {number} i
     * @param {number} j
     * @returns {number}
     */
    sumRange(i, j) {
        return this.#prefixSum[j + 1] - this.#prefixSum[i];
    }
}

export default NumArray;
