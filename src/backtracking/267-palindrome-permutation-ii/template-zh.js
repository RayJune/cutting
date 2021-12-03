/*
 * 267. 回文排列 II
 *
 * 给定一个字符串 s ，返回其通过重新排列组合后所有可能的回文字符串，并去除重复的组合。
 *
 * 如不能形成任何回文排列时，则返回一个空列表。
 *
 * Example 1:
 * Input: s = "aabb"
 * Output: ["abba", "baab"]
 *
 * Example 2:
 * Input: s = "abc"
 * Output: []
 *
 * Constraints:
 * 1 <= s.length <= 16
 * s consists of only lowercase English letters.
 *
 * https://leetcode-cn.com/problems/palindrome-permutation-ii/
*/

module.exports = generatePalindromes;
