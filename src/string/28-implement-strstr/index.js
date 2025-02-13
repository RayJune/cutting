/*
 * 28. Implement strStr()
 *
 * Implement strStr().
 *
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * Clarification:
 *
 * What should we return when needle is an empty string? This is a great question to ask during an interview.
 *
 * For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 *
 * Example 1:
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 *
 * Example 2:
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 *
 * Example 3:
 * Input: haystack = "", needle = ""
 * Output: 0
 *
 * Constraints:
 * 0 <= haystack.length, needle.length <= 5 * 10 ** 4
 * haystack and needle consist of only lower-case English characters.
 *
 * https://leetcode.com/problems/implement-strstr/
*/

/**
 * Brute Force
 *
 * Time Complexity: O(m * n) = 两层 for 循环次数之和
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 m, n 分别为 haystack 和 needle 的长度
 *
 * @param {string} haystack
 * @param {string} needle
 * @returns {number}
 */
function strStr(haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }

    const m = haystack.length;
    const n = needle.length;

    for (let i = 0; i <= m - n; i++) {
        for (let j = 0; j < n; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
            if (j === n - 1) {
                return i;
            }
        }
    }

    return -1;
}

export default strStr;
