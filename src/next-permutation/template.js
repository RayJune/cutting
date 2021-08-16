/*
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
 * If such an arrangement is not possible, it must rearrange it as the lowest possible order(i.e., sorted in ascending order).
 * The replacement must be in place and use only constant extra memory;
 *
 *
 * Example 1:
 * Input: numsArr = [1, 2, 3]
 * Output: [1, 3, 2]
 *
 * Example 2:
 * Input: numsArr = [3, 2, 1]
 * Output: [1, 2, 3]
 *
 * Example 3:
 * Input: numsArr = [1, 1, 5]
 * Output: [1, 5, 1]
 *
 * Example 4:
 * Input: numsArr = [1]
 * Output: [1]
 *
 * Example 5:
 * Input: numsArr = [1, 3, 4, 2]
 * Output: [1, 4, 2, 3]
 *
 * Constraints:
 * 1 <= numsArr.length <= 100
 * 0 <= numsArr[i] <= 100
 *
 * https://leetcode-cn.com/problems/next-permutation/
 *
*/

module.exports = nextPermutation;

