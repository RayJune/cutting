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
 * 横向扫描
 * 1. 利用 .reduce 不传 initialValue 就默认 accumulator 初始值为第一个元素，currentValue 初始值为第二个元素的方式来依次两两比较数组前缀
 * 2. 比较得出共同前缀的 index 值，将前缀值赋值给 accumulator 继续下一轮比较直到遍历完毕
 *
 * Time Complexity: O(m * n) = 遍历次数
 * Space Complexity: O(m * n) = 函数调用栈深度 O(n) * .slice 操作产生新数组长度 O(m)
 * Auxiliary Complexity: O((m * n) = 函数调用栈深度 O(n) * .slice 操作产生新数组长度 O(m)
 * 其中 m 是 strs 字符串数组中字符串的平均长度，n 是字符串的数量
 *
 * @param {string[]} strs
 * @returns {string}
 */
function longestCommonPrefix(strs) {
    return strs.reduce((prefix, curr) => {
        let i = 0;

        while (prefix[i] && curr[i] && prefix[i] === curr[i]) {
            i += 1;
        }

        return prefix.slice(0, i);
    });
}

export default longestCommonPrefix;
