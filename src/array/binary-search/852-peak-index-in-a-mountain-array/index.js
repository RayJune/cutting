/*
 * 852. Peak Index in a Mountain Array
 *
 * Let's call an array arr a mountain if the following properties hold:
 *
 * arr.length >= 3
 * There exists some i with 0 < i < arr.length - 1 such that:
 * arr[0] < arr[1] < ... arr[i - 1] < arr[i]
 * arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 * Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].
 *
 * Example 1:
 * Input: arr = [0, 1, 0]
 * Output: 1
 *
 * Example 2:
 * Input: arr = [0, 2, 1, 0]
 * Output: 1
 *
 * Example 3:
 * Input: arr = [0, 10, 5, 2]
 * Output: 1
 *
 * Constraints:
 * 3 <= arr.length <= 10 ** 4
 * 0 <= arr[i] <= 10 ** 6
 * arr is guaranteed to be a mountain array.
 *
 * Follow up: Finding the O(n) is straightforward, could you find an O(log(n)) solution?
 *
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
*/

/**
 * Binary Search
 *
 * Time Complexity: O(log(n)) = while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 为 arr 数组的长度
 *
 * @param {number[]} arr
 * @returns {number}
 */
function peakIndexInMountainArray(arr) {
    let left = 0;
    let right = arr.length - 2;
    let i = 0;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (arr[mid] > arr[mid + 1]) {
            i = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return i;
}

export default peakIndexInMountainArray;
