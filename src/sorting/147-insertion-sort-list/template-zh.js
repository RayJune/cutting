/*
 * 147. 对链表进行插入排序
 *
 * 对链表进行插入排序。
 *
 * 插入排序算法：
 *
 * 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
 * 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
 * 重复直到所有输入数据插入完为止。
 *
 * Example 1:
 * Input: head = [4, 2, 1, 3]
 * Output: [1, 2, 3, 4]
 *
 * Example 2:
 * Input: head = [-1, 5, 3, 4, 0]
 * Output: [-1, 0, 3, 4, 5]
 *
 * Example 3:
 * Input: head = []
 * Output: []
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [1, 5000].
 * -5000 <= Node.val <= 5000
 *
 * https://leetcode.cn/problems/insertion-sort-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

export default insertionSortList;
