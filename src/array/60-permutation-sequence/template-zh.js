/*
 * 给出集合 [1, 2, 3, ..., n]，其所有元素共有 n! 种排列。
 *
 * 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时，所有排列如下：
 *
 * 1. "123"
 * 2. "132"
 * 3. "213"
 * 4. "231"
 * 5. "312"
 * 6. "321"
 *
 * 给定 n 和 k，返回第 k 个排列
 *
 * Example 1:
 * Input: n = 3, k = 3
 * Output: "213"
 *
 * Example 2:
 * Input: n = 4, k = 9
 * Output: "2314"
 *
 * Example 3:
 * Input: n = 3, k = 1
 * Output: "123"
 *
 * 提示:
 * 1 <= n <= 9
 * 1 <= k <= n!
 *
 * https://leetcode-cn.com/problems/permutation-sequence/
 *
*/

module.exports = getPermutation;
