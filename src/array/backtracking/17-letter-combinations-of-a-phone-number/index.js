/*
 * 17. Letter Combinations of a Phone Number
 *
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 *
 * 2 -> abc
 * 3 -> def
 * 3 -> ghi
 * 5 -> jkl
 * 6 -> mno
 * 7 -> pqrs
 * 8 -> tuv
 * 9 -> wxyz
 *
 * Example 1:
 * Input: digits = "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 *
 * Example 2:
 * Input: digits = ""
 * Output: []
 *
 * Example 3:
 * Input: digits = "2"
 * Output: ["a","b","c"]
 *
 * Constraints:
 * 0 <= digits.length <= 4
 * digits[i] is a digit in the range ['2', '9'].
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
*/

/**
 * Backtracking
 *
 * Time Complexity: O(4 ** n * n) = backtrack 函数执行次数 (4 ** n) * backtrack 时间复杂度 O(n)
 * Space complexity: O(4 ** n * n) = combinations 所占空间 O(4 ** n * n) + backtrack 函数调用栈深度 O(n)
 * Auxiliary complexity: O(n) = backtrack 函数调用栈深度
 * 其中 n 是 digits 的长度
 *
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    if (digits.length === 0) {
        return [];
    }

    const map = new Map([
        ['2', 'abc'],
        ['3', 'def'],
        ['4', 'ghi'],
        ['5', 'jkl'],
        ['6', 'mno'],
        ['7', 'pqrs'],
        ['8', 'tuv'],
        ['9', 'wxyz']
    ]);
    const combinations = [];
    const backtrack = (arr, i) => {
        if (i === digits.length) {
            combinations.push(arr.join(''));
        } else {
            for (const char of map.get(digits[i])) {
                backtrack(arr.concat(char), i + 1);
            }
        }
    };

    backtrack([], 0);

    return combinations;
}

module.exports = letterCombinations;
