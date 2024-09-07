/*
 * 977. Squares of a Sorted Array
 *
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 *
 * Example 1:
 * Input: nums = [-4, -1, 0, 3, 10]
 * Output: [0, 1, 9, 16, 100]
 * Explanation: After squaring, the array becomes [16, 1, 0, 9, 100].
 * After sorting, it becomes [0, 1, 9, 16, 100].
 *
 * Example 2:
 * Input: nums = [-7, -3, 2, 3, 11]
 * Output: [4, 9, 9, 49, 121]
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 4
 * (-10) ** 4 <= nums[i] <= 10 ** 4
 * nums is sorted in non-decreasing order.
 *
 * Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
 *
 * https://leetcode.com/problems/squares-of-a-sorted-array/
*/

/**
 * 输入一个按非递减顺序排序的整数数组 nums，返回由每个数字的平方组成的新数组，新数组也按非递减顺序排序
 *
 * 思路：
 * Two Pointers 双指针
 * 利用数组是有序的特性，left right 分别表示指向头尾的下标，判断两者的绝对值大小来把绝对值更大的 push 进新数组，最后对新数组进行反转
 *
 * Time Complexity: O(n) = while 循环次数
 * Space complexity: O(n) = squares 数组长度
 * Auxiliary complexity: O(1)
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
function sortedSquares(nums) {
    const squares = [];
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            squares.push(nums[left] ** 2);
            left += 1;
        } else {
            squares.push(nums[right] ** 2);
            right -= 1;
        }
    }

    return squares.reverse();
}

module.exports = sortedSquares;
