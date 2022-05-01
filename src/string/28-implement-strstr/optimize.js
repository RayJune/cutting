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
 * KMP Algorithm
 *
 * Time Complexity: O(n + m) = 两次 for 循环次数之和
 * Space complexity: O(n) = next 数组长度
 * Auxiliary complexity: O(n) = next 数组长度
 * 其中 m, n 分别为 haystack 和 needle 的长度
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }

    const m = haystack.length;
    const n = needle.length;
    const next = [0];
    let i = 0;

    for (let j = 1; j < n; j++) {
        while (i > 0 && needle[i] !== needle[j]) {
            i = next[i - 1];
        }
        if (needle[i] === needle[j]) {
            i += 1;
        }
        next.push(i);
    }
    i = 0;
    for (let j = 0; j < m; j++) {
        while (i > 0 && haystack[j] !== needle[i]) {
            i = next[i - 1];
        }
        if (haystack[j] === needle[i]) {
            i += 1;
        }
        if (i === n) {
            return j - n + 1;
        }
    }

    return -1;
}

module.exports = strStr;
