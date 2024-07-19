/*
 * 125. Valid Palindrome
 *
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Example 1:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 *
 * Example 2:
 * Input: s = "race a car"
 * Output: false
 *
 * Example 3:
 * Input: s = " "
 * Output: true
 *
 * Constraints:
 * 1 <= s.length <= 2 * 10 ** 5
 * s consists only of printable ASCII characters.
 *
 * https://leetcode.com/problems/valid-palindrome/
*/

/**
 * 输入一个字符串，判断它是否是回文字符串
 * 注意：
 * 1. 只考虑字幕和数字
 * 2. 忽略字母的大小写
 * 3. 指定空字符串为回文字符串
 *
 * 思路：
 * 1. 统一大小写，.toLowerCase
 * 2. 正则匹配筛选出字母和数字组成的字符串
 * 3. 遍历筛选后的字符串，利用 s[i] === s[len - i - 1] 来判断是否是回文字符串
 *
 * Time Complexity: O(n) = 遍历次数
 * Space Complexity: O(n) = 创建的字符串长度
 * Auxiliary Complexity: O(n) = 创建的字符串长度
 * 其中 n 是字符串 s 的长度
 *
 * @param {string} s
 * @returns {boolean}
 */
function isPalindrome(s) {
    const filteredS = s
        .toLowerCase()
        .replaceAll(/[^a-z0-9]/g, '');
    const len = filteredS.length;
    const pivot = Math.floor(len / 2);

    for (let i = 0; i < pivot; i++) {
        if (filteredS[i] !== filteredS[len - i - 1]) {
            return false;
        }
    }

    return true;
}

/**
 * 其中 for 循环的部分也可以用 .every 方法，可读性更好
 */
// function isPalindrome(s) {
//     const filteredS = s
//         .toLowerCase()
//         .replaceAll(/[^a-z0-9]/g, '');
//     const len = filteredS.length;

//     return filteredS
//         .split('')
//         .every((char, i) => char === filteredS[len - i - 1]);
// }


module.exports = isPalindrome;
