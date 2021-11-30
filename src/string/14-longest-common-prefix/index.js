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
 * Horizontal scanning, reduce
 *
 * Time Complexity: O(m * n) = 最坏情况下，strs 中每个字符串的字符都会被比较一次
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 m 是 strs 字符串数组中字符串的平均长度，n 是字符串的数量
 *
 * @param {string[]} strs
 * @returns {string}
 */
function longestCommonPrefix(strs) {
    return strs.reduce((prev, curr) => {
        let i = 0;

        while (prev[i] && curr[i] && prev[i] === curr[i]) {
            i += 1;
        }

        return prev.slice(0, i);
    });
}

module.exports = longestCommonPrefix;
