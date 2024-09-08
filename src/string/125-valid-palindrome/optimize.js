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
 *
 * @related 680-valid-palindrome-ii
*/

/**
 * 输入一个字符串，判断它是否是回文字符串
 * 注意：
 * 1. 只考虑数字和字母，忽略字母的大小写
 * 2. 定义空字符串为回文字符串
 *
 * 思路：
 * 1. 统一大小写，正则匹配出字符串中的字母和数字，得到目标字符串
 * 2. 遍历目标字符串，判断 s[i] === s[s.length - i - 1] 来得出是否是回文字符串
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


export default isPalindrome;
