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

class DFA {
    #state = 'start';
    #sign = 1;
    #result = 0;
    #map = new Map([
        ['start', ['start', 'signed', 'number', 'end']],
        ['signed', ['end', 'end', 'number', 'end']],
        ['number', ['end', 'end', 'number', 'end']],
        ['end', ['end', 'end', 'end', 'end']]
    ]);

    #getIndex(char) {
        if (char === ' ') {
            return 0;
        }
        if (char === '-' || char === '+') {
            return 1;
        }
        if (!isNaN(char)) {
            return 2;
        }

        return 3;
    }

    transition(char) {
        this.#state = this.#map.get(this.#state)[this.#getIndex(char)];
        if (this.#state === 'signed') {
            this.#sign = char === '-' ? -1 : 1;
        }
        if (this.#state === 'number') {
            this.#result = this.#result * 10 + Number(char);
            this.#result = Math.min(this.#result, this.#sign === 1 ? 2 ** 31 - 1 : 2 ** 31);
        }
    }

    getState() {
        return this.#state;
    }

    getInteger() {
        return this.#sign * this.#result;
    }
}

/**
 * Deterministic Finite Automaton (DFA)
 *
 * Time Complexity: O(n) = for...of 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 为字符串 s 的长度
 *
 * @param {string} s
 * @returns {number}
 */
function myAtoi(s) {
    const dfa = new DFA();

    for (const char of s) {
        dfa.transition(char);
        if (dfa.getState() === 'end') {
            break;
        }
    }

    return dfa.getInteger();
}

module.exports = myAtoi;
