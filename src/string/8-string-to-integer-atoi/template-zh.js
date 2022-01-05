/*
 * 8. 字符串转换整数 (atoi)
 *
 * 请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。
 *
 * 函数 myAtoi(string s) 的算法如下：
 *
 * 1. 读入字符串并丢弃无用的前导空格
 * 2. 检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。确定最终结果是负数还是正数。如果两者都不存在，则假定结果为正。
 * 3. 读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
 * 4. 将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
 * 5. 如果整数数超过 32 位有符号整数范围 [(-2) ** 31,  2 ** 31 - 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 (-2) ** 31 的整数应该被固定为 (-2) ** 31 ，大于 2 ** 31 - 1 的整数应该被固定为 2 ** 31 - 1 。
 * 6. 返回整数作为最终结果。
 *
 * 注意：
 *
 * 本题中的空白字符只包括空格字符 ' ' 。
 * 除前导空格或数字后的其余字符串外，请勿忽略任何其他字符。
 *
 * Example 1:
 * Input: s = "42"
 * Output: 42
 *
 * Example 2:
 * Input: s = "   -42"
 * Output: -42
 *
 * Example 3:
 * Input: s = "4193 with words"
 * Output: 4193
 *
 * Example 4:
 * Input: s = "words and 987"
 * Output: 0
 *
 * Example 5:
 * Input: s = "-91283472332"
 * Output: -2147483648
 *
 * Constraints:
 * 0 <= s.length <= 200
 * s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.
 *
 * https://leetcode-cn.com/problems/string-to-integer-atoi/
*/

module.exports = myAtoi;
