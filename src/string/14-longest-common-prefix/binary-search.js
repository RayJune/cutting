/*
 * 14. Longest Common Prefix
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: strs = ["flower", "flow", "flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: strs = ["dog", "racecar", "car"]
 * Output: ""
 *
 * Constraints:
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lower-case English letters.
 *
 * https://leetcode.com/problems/longest-common-prefix/
*/

/**
 * Binary Search
 *
 * Time Complexity: O(m * n * log(m)) = 最坏情况下，strs 中每个字符串的字符都会被比较一次 O(m * n) * 二分查找 O(log(m))
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {string[]} strs
 * @returns {string}
 */
function longestCommonPrefix(strs) {
    const minLen = strs.reduce((prev, curr) => Math.min(prev, curr.length), Infinity);
    let left = 1;
    let right = minLen;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (isCommonPrefix(strs, mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return strs[0].slice(0, Math.floor((left + right) / 2));
}

/**
 * @param {string[]} strs
 * @param {number} len
 * @returns {boolean}
 */
function isCommonPrefix(strs, len) {
    const prefix = strs[0].slice(0, len);

    for (const str of strs) {
        if (!str.startsWith(prefix)) {
            return false;
        }
    }

    return true;
}

module.exports = longestCommonPrefix;
