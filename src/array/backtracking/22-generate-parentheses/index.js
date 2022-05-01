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
 * Time Complexity: O(4 ** n / Math.sqrt(n) * n) = backtrack 执行次数 O(4 ** n / Math.sqrt(n)) * backtrack 时间复杂度 O(n)
 * Space complexity: O(4 ** n / Math.sqrt(n) * n) = result 所占空间  O(4 ** n / Math.sqrt(n) * n) + backtrack 函数调用栈深度 O(n)
 * Auxiliary complexity: O(n) = backtrack 函数调用栈深度
 *
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    const result = [];
    const backtrack = (arr, left, right) => {
        if (arr.length === 2 * n) {
            result.push(arr.join(''));
        } else {
            if (left < n) {
                backtrack(arr.concat('('), left + 1, right);
            }
            if (left > right) {
                backtrack(arr.concat(')'), left, right + 1);
            }
        }
    }

    backtrack([], 0, 0);

    return result;
}

module.exports = generateParenthesis;
