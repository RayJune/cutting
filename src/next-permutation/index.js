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
 * https://leetcode-cn.com/problems/next-permutation/
 *
*/

/**
 * 思路：
 * 1. 从右向左找到较小数
 * 2. 从右向左找到较大数
 * 3. 将较大数和较小数交换位置
 * 4. 把较大数右边的元素做 reverse 处理，使之成为升序数组
 *
 * 1. 将一个左边的较小数和右边的较大数位置交换，其中较小数要尽量靠右，较大数尽量靠左
 * 2. 交换完成后，较大数右边的数需要按照升序重新排列
 *
 * O(n) time | O(1) space
 *
 * @param {number[]} nums
 */
function nextPermutation(nums) {
    const len = nums.length;
    let smallerIndex = len - 2;

    while (smallerIndex >= 0 && nums[smallerIndex] >= nums[smallerIndex + 1]) {
        smallerIndex -= 1;
    }
    if (smallerIndex >= 0) {
        let biggerIndex = len - 1;

        while (biggerIndex >= 0 && nums[smallerIndex] >= nums[biggerIndex]) {
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
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

/**
 * 输入 nums 和 leftIndex，反转 leftIndex 到数组末尾区间所有元素的位置
 *
 * @param {number[]} nums
 * @param {number} startIndex
 */
function reverse(nums, startIndex) {
    let endIndex = nums.length - 1;

    while (startIndex < endIndex) {
        swap(nums, startIndex, endIndex);
        startIndex += 1;
        endIndex -= 1;
    }
}

module.exports = nextPermutation;
