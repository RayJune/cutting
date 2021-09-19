/*
 * 78. 子集
 *
 * 给你一个整数数组 `nums`，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 *
 * 解集不能包含重复的子集。你可以按任意顺序返回解集。
 *
 *
 * Example 1:
 * Input: nums = [1, 2, 3]
 * Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [[], [0]]
 *
 * 提示:
 *
 * 1 <= nums.length <= 10
 * -10 <= k <= 10
 * nums 中所有的元素互不相同
 *
 * https://leetcode-cn.com/problems/subsets/
 *
*/

module.exports = subsets;
