/*
 * 706. 设计哈希映射
 *
 * 不使用任何内建的哈希表库设计一个哈希映射（HashMap）。
 *
 * 实现 MyHashMap 类：
 *
 * MyHashMap() 用空映射初始化对象
 * void put(int key, int value) 向 HashMap 插入一个键值对 (key, value)。如果 key 已经存在于映射中，则更新其对应的值 value。
 * int get(int key) 返回特定的 key 所映射的 value ；如果映射中不包含 key 的映射，返回 -1 。
 * void remove(key) 如果映射中存在 key 的映射，则移除 key 和它所对应的 value 。
 *
 * Example 1:
 * Input
 * ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
 * [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
 * Output
 * [null, null, null, 1, -1, null, 1, null, -1]
 *
 * Explanation
 * MyHashMap myHashMap = new MyHashMap();
 * myHashMap.put(1, 1); // The map is now [[1, 1]]
 * myHashMap.put(2, 2); // The map is now [[1, 1], [2, 2]]
 * myHashMap.get(1);    // return 1, The map is now [[1, 1], [2, 2]]
 * myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1, 1], [2, 2]]
 * myHashMap.put(2, 1); // The map is now [[1, 1], [2, 1]] (i.e., update the existing value)
 * myHashMap.get(2);    // return 1, The map is now [[1, 1], [2, 1]]
 * myHashMap.remove(2); // remove the mapping for 2, The map is now [[1, 1]]
 * myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1, 1]]
 *
 * Constraints:
 * 0 <= key, value <= 10 ** 6
 * 最多调用 10 ** 4 次 put、get 和 remove 方法
 *
 * https://leetcode.cn/problems/design-hashmap/
*/

export default MyHashMap;
