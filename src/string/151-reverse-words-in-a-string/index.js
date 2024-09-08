/*
 * 151. Reverse Words in a String
 *
 * Given an input string s, reverse the order of the words.
 *
 * A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
 *
 * Return a string of the words in reverse order concatenated by a single space.
 *
 * Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
 *
 * Example 1:
 * Input: s = "the sky is blue"
 * Output: "blue is sky the"
 *
 * Example 2:
 * Input: s = "  hello world  "
 * Output: "world hello"
 * Explanation: Your reversed string should not contain leading or trailing spaces.
 *
 * Example 3:
 * Input: s = "a good   example"
 * Output: "example good a"
 * Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 *
 * Constraints:
 * s contains English letters (upper-case and lower-case), digits, and spaces ' '.
 * There is at least one word in s.
 *
 * https://leetcode.com/problems/reverse-words-in-a-string/
*/

/**
 * 输入一个字符串 s，反转字符串中单词的顺序
 * 注意：
 * 1. s 非空，前后可能有空格且每个单词之间有一个或多个空格
 * 2. 返回的字符串中单词的顺序颠倒且单词之间用单个空格连接
 *
 * 思路：
 * 1. 去除字符串前后可能有的空格，.trim
 * 2. 以每个单词之间的空格们为分割点，得到由单词组成的数组
 * 3. 反转数组中单词的顺序，再组成目标字符串返回
 */
function reverseWords(s) {
    const arr = s
        .trim()
        .split(/ +/);

    return arr
        .reverse()
        .join(' ')
}

export default reverseWords;
