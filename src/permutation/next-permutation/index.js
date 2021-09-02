/*
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
 * If such an arrangement is not possible, it must rearrange it as the lowest possible order(i.e., sorted in ascending order).
 * The replacement must be in place and use only constant extra memory;
 *
 *
 * Example 1:
 * Input: nums = [1, 2, 3]
 * Output: [1, 3, 2]
 *
 * Example 2:
 * Input: nums = [3, 2, 1]
 * Output: [1, 2, 3]
 *
 * Example 3:
 * Input: nums = [1, 1, 5]
 * Output: [1, 5, 1]
 *
 * Example 4:
 * Input: nums = [1]
 * Output: [1]
 *
 * Example 5:
 * Input: nums = [1, 3, 4, 2]
 * Output: [1, 4, 2, 3]
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 100
 *
 * https://leetcode.com/problems/next-permutation/
 *
*/

/**
 * 从后向前，找到第一个 arr[i] < arr[i + 1] 的元素（较小数），这样较小数之后的排列为降序排列
 * 如果较小数的下标 < 0，说明 nums 为降序排列，不存在题目要求的下一个排列，此时 reverse 为升序排列返回即可
 * 如果较小数的下标 >=0，从后向前，找到第一个比较小数大的数，记为较大数；让较小数和较大数交换位置，然后再把较小数之后的元素做 reverse 处理，使之成为升序数组
 *
 * Time Complexity: O(n) = while loop + while loop + reverse
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number[]} nums
 */
function nextPermutation(nums) {
    const len = nums.length;
    let smallerIndex = len - 2;

    while (nums[smallerIndex] >= nums[smallerIndex + 1]) {
        smallerIndex -= 1;
    }
    if (smallerIndex >= 0) {
        let biggerIndex = len - 1;

        while (nums[smallerIndex] >= nums[biggerIndex]) {
            biggerIndex -= 1;
        }
        swap(nums, smallerIndex, biggerIndex);
    }
    reverse(nums, smallerIndex + 1);

    return nums;
}

/**
 *
 * @param {Array} arr
 * @param {number} startIndex
 */
function reverse(arr, startIndex) {
    let endIndex = arr.length - 1;

    while (startIndex < endIndex) {
        swap(arr, startIndex, endIndex);
        startIndex += 1;
        endIndex -= 1;
    }
}

/**
 *
 * @param {Array} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

module.exports = nextPermutation;
