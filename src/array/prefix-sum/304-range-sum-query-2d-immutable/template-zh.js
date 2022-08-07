/*
 * 304. 二维区域和检索 - 矩阵不可变
 *
 * 给定一个二维矩阵 matrix，以下类型的多个请求：
 *
 * 计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。
 *
 * 实现 NumMatrix 类：
 *
 * NumMatrix(int[][] matrix) 给定整数矩阵 matrix 进行初始化
 * int sumRegion(int row1, int col1, int row2, int col2) 返回 左上角 (row1, col1) 、右下角 (row2, col2) 所描述的子矩阵的元素总和 。
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
 * https://leetcode.cn/problems/range-sum-query-2d-immutable/
*/

module.exports = NumMatrix;
