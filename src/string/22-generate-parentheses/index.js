/*
 * 22. Generate Parentheses
 *
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * Example 1:
 * Input: n = 3
 * Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]
 *
 * Example 2:
 * Input: n = 1
 * Output: ["()"]
 *
 * Constraints:
 * 1 <= n <= 8
 *
 * https://leetcode.com/problems/generate-parentheses/
*/

/**
 * Backtracking
 *
 * Time Complexity: O(4 ** n / Math.sqrt(n))
 * Space complexity: O(4 ** n / Math.sqrt(n))
 * Auxiliary complexity: O(4 ** n / Math.sqrt(n))
 *
 * @param {number} n
 * @returns {string[]}
 */
function generateParenthesis(n) {
    const result = [];
    const backtrack = (arr, left, right) => {
        if (arr.length === 2 * n) {
            result.push(arr.join(''));

            return;
        }
        if (left > 0) {
            backtrack(arr.concat('('), left - 1, right);
        }
        if (right > left) {
            backtrack(arr.concat(')'), left, right - 1);
        }
    };

    backtrack([], n, n);

    return result;
}

module.exports = generateParenthesis;
