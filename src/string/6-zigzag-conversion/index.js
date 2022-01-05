/*
 * 6. Zigzag Conversion
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a number of rows:
 *
 * string convert(string s, int numRows);
 *
 * Example 1:
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 *
 * Example 2:
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 *
 * Example 3:
 * Input: s = "A", numRows = 1
 * Output: "A"
 *
 * Constraints:
 * 0 <= s.length <= 1000
 * s consists of English letters (lower-case and upper-case), ',' and '.'.
 * 1 <= numRows <= 1000
 *
 * https://leetcode.com/problems/zigzag-conversion/
*/

/**
 * Sort by Row
 *
 * Time Complexity: O(n) = matrix 数组创建 / for...of 循环次数 / .map / .join
 * Space complexity: O(n) = matrix 数组占用空间
 * Auxiliary complexity: O(1)
 * 其中 n 是 s 的长度
 *
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    const matrix = new Array(numRows).fill().map(() => []);
    let currRow = 0;
    let goingDown = true;

    for (const num of s) {
        matrix[currRow].push(num);
        if (goingDown) {
            currRow += 1;
        } else {
            currRow -= 1;
        }
        if (currRow === 0) {
            goingDown = true;
        }
        if (currRow === numRows - 1) {
            goingDown = false;
        }
    }

    return matrix.map(row => row.join('')).join('');
}

module.exports = convert;
