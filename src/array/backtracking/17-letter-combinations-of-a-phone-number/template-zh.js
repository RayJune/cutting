/*
 * 17. 电话号码的字母组合
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按任意顺序返回。
 *
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 * 2 -> abc
 * 3 -> def
 * 3 -> ghi
 * 5 -> jkl
 * 6 -> mno
 * 7 -> pqrs
 * 8 -> tuv
 * 9 -> wxyz
 *
 * Example 1:
 * Input: digits = "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 *
 * Example 2:
 * Input: digits = ""
 * Output: []
 *
 * Example 3:
 * Input: digits = "2"
 * Output: ["a","b","c"]
 *
 * Constraints:
 * 0 <= digits.length <= 4
 * digits[i] is a digit in the range ['2', '9'].
 *
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
*/

export default letterCombinations;
