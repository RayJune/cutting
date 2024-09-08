/*
 * 31. Next Permutation
 *
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
 * If such an arrangement is not possible, it must rearrange it as the lowest possible order(i.e., sorted in ascending order).
 * The replacement must be in place and use only constant extra memory;
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
*/

/**
 * 从后向前，找到第一个较小数，这样较小数之后的排列为降序排列
 * 如果较小数存在，从后向前找到第一个比【较小数】大的数，记为较大数；让较小数和较大数交换位置，然后再把较小数之后的元素做 reverse 处理，使之成为升序数组
 * 如果较小数不存在，说明 nums 为降序排列，不存在题目要求的下一个排列，此时 reverse 为升序排列返回即可
 *
 * Time Complexity: O(n) = while loop + while loop + reverse
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 */
function nextPermutation(nums) {
    const len = nums.length;
    let smaller = len - 2;

    while (nums[smaller] >= nums[smaller + 1]) {
        smaller -= 1;
    }
    if (smaller >= 0) {
        let bigger = len - 1;

        while (nums[smaller] >= nums[bigger]) {
            bigger -= 1;
        }
        [nums[smaller], nums[bigger]] = [nums[bigger], nums[smaller]];
    }
    reverse(nums, smaller + 1);
}

/**
 * @param {Array} arr
 * @param {number} start
 */
function reverse(arr, start) {
    let end = arr.length - 1;

    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start += 1;
        end -= 1;
    }
}

export default nextPermutation;
