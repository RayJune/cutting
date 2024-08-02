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
 * 输入一个字符串数组，返回其最长公共前缀
 *
 * 思路：
 * 纵向扫描, 比起横向扫描，纵向扫描优化了数组末尾是最短字符串的情况
 *
 * Time Complexity: O(m * n) = 最坏情况下，strs 中每个字符串的字符都会被比较一次
 * Space Complexity: O(m) = .slice 操作产生新数组的长度
 * Auxiliary Complexity: O(1)
 * 其中 m 是 strs 字符串数组中字符串的平均长度，n 是字符串的数量
 *
 * @param {string[]} strs
 * @returns {string}
 */
function longestCommonPrefix(strs) {
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char || strs[j].length === i) {
                return strs[0].slice(0, i);
            }
        }
    }

    return strs[0];
}

module.exports = longestCommonPrefix;
