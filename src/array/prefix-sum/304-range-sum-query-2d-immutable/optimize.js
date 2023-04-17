/*
 * 304. Range Sum Query 2D - Immutable
 *
 * Given a 2D matrix matrix, handle multiple queries of the following type:
 *
 * Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 * Implement the NumMatrix class:
 *
 * NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
 * int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 *
 * Example 1:
 * Input: ["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
 * [[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]
 * Output: [null, 8, 11, 12]
 *
 * Constraints:
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 200
 * (-10) ** 5 <= matrix[i][j] <= 10 ** 5
 * 0 <= row1 <= row2 < m
 * 0 <= col1 <= col2 < n
 * At most 10 ** 4 calls will be made to sumRegion.
 *
 * https://leetcode.com/problems/range-sum-query-2d-immutable/
 */

/**
 * Prefix Sum, 二维前缀和
 */
class NumMatrix {
    #prefixSum;

    /**
     * Time Complexity: O(m * n) = 内外层 for 循环次数之和
     * Space complexity: O(m * n) = this.#prefixSum 占用空间
     * Auxiliary complexity: O(m * n) = this.#prefixSum 占用空间
     * 其中 m 和 n 分别是 matrix 的行数和列数
     *
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const m = matrix.length;
        const n = matrix[0].length;

        this.#prefixSum = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                this.#prefixSum[i + 1][j + 1] = this.#prefixSum[i + 1][j]
                    + this.#prefixSum[i][j + 1]
                    - this.#prefixSum[i][j]
                    + matrix[i][j];
            }
        }
    }

    /**
     * Time Complexity: O(1)
     * Space complexity: O(1)
     * Auxiliary complexity: O(1)
     *
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @returns {number}
     */
    sumRegion(row1, col1, row2, col2) {
        return this.#prefixSum[row2 + 1][col2 + 1]
            - this.#prefixSum[row2 + 1][col1]
            - this.#prefixSum[row1][col2 + 1]
            + this.#prefixSum[row1][col1];
    }
}

module.exports = NumMatrix;
