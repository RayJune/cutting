/*
 * 20. Valid Parentheses
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 *
 * Example 1:
 * Input: s = "()"
 * Output: true
 *
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 *
 * Example 3:
 * Input: s = "(]"
 * Output: false
 *
 * Example 4:
 * Input: s = "([)]"
 * Output: false
 *
 * Example 5:
 * Input: s = "{[]}"
 * Output: true
 *
 * Constraints:
 * 1 <= s.length <= 10 ** 4
 * s consists of parentheses only '()[]{}'.
 *
 * https://leetcode.com/problems/valid-parentheses/
*/

/**
 * Stack
 *
 * Time Complexity: O(n) = for...of 循环次数
 * Space complexity: O(n) = stack 长度, 最坏情况下比如连续的 (
 * Auxiliary complexity: O(n) = stack 长度
 *
 * @param {string} s
 * @returns {boolean}
 */
function isValid(s) {
    if (s.length % 2 === 1) {
        return false;
    }

    const map = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    const stack = [];

    for (const char of s) {
        if (map.has(char)) {
            if (stack.length === 0 || stack.pop() !== map.get(char)) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

module.exports = isValid;