/*
 * 167. 两数之和 II - 输入有序数组
 *
 * 给定一个已按照非递减顺序排列的整数数组 numbers，请你从数组中找出两个数满足相加之和等于目标数 target。
 *
 * 函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数，所以答案数组应当满足 1 <= answer[0] < answer[1] <= numbers.length。
 *
 * 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 *
 * Example 1:
 * Input: numbers = [2, 7, 11, 15], target = 9
 * Output: [1, 2]
 * Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 *
 * Example 2:
 * Input: numbers = [2, 3, 4], target = 6
 * Output: [1, 3]
 *
 * Example 3:
 * Input: numbers = [-1, 0], target = -1
 * Output: [1, 2]
 *
 * Constraints:
 * 2 <= numbers.length <= 3 * 104
 * -1000 <= numbers[i] <= 1000
 * numbers is sorted in non-decreasing order.
 * -1000 <= target <= 1000
 * The tests are generated such that there is exactly one solution.
 *
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
*/

module.exports = twoSum;
