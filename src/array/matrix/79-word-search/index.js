/*
 * 79. Word Search
 *
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 *
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 *
 * Example 1:
 * Input: board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED"
 * Output: true
 *
 * Example 2:
 * Input: board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "SEE"
 * Output: true
 *
 * Example 3:
 * Input: board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCB"
 * Output: false
 *
 * Constraints:
 * m == board.length
 * n = board[i].length
 * 1 <= m, n <= 6
 * 1 <= word.length <= 15
 * board and word consists of only lowercase and uppercase English letters.
 *
 * Follow up: Could you use search pruning to make your solution faster with a larger board?
 *
 * https://leetcode.com/problems/word-search/
*/

/**
 * Backtracking
 *
 * Time Complexity: O(m * n * 3 ** l) = backtrack 函数执行次数上限
 * Space complexity: O(m * n + l) = visited 数组占用空间 + backtrack 函数调用栈深度 O(l)
 * Auxiliary complexity: O(m * n + l) = visited 数组占用空间
 * 其中 m 和 n 分别是 board 的行数和列数, l 为 word 字符串的长度
 *
 * @param {character[][]} board
 * @param {string} word
 * @returns {boolean}
 */
function exist(board, word) {
    const m = board.length;
    const n = board[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const visited = new Array(m).fill().map(() => new Array(n).fill(false));
    const backtrack = (i, j, k) => {
        if (i < 0 || i === m || j < 0 || j === n
            || visited[i][j] || board[i][j] !== word[k]) {
            return false;
        }
        if (k === word.length - 1) {
            return true;
        }
        visited[i][j] = true;
        for (const [x, y] of directions) {
            if (backtrack(i + x, j + y, k + 1)) {
                return true;
            }
        }
        visited[i][j] = false;

        return false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (backtrack(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
}

module.exports = exist;
