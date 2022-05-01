/*
 * 8. String to Integer (atoi)
 *
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
 *
 * The algorithm for myAtoi(string s) is as follows:
 *
 * 1. Read in and ignore any leading whitespace.
 * 2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
 * 3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
 * 4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
 * 5. If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
 * 6. Return the integer as the final result.
 *
 * Note:
 *
 * Only the space character ' ' is considered a whitespace character.
 * Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
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
 * https://leetcode.com/problems/string-to-integer-atoi/
*/

/**
 * regex
 *
 * Time Complexity: O(n) = trim / match 操作
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 为字符串 s 的长度
 *
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
    const match = s.trim().match(/^[-+]?\d+/);
    const num = match ? Number(match[0]) : 0;
    const max = 2 ** 31 - 1;
    const min = (-2) ** 31;

    return Math.sign(num) === 1 ? Math.min(num, max) : Math.max(num, min);
}

module.exports = myAtoi;
