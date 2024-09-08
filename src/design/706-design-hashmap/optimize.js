/*
 * 706. Design HashMap
 *
 * Design a HashMap without using any built-in hash table libraries.
 *
 * Implement the MyHashMap class:
 *
 * MyHashMap() initializes the object with an empty map.
 * void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
 * int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
 * void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
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
 * At most 10 ** 4 calls will be made to put, get, and remove.
 *
 * https://leetcode.com/problems/design-hashmap/
*/

class ListNode {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

/**
 * 用链表作为 bucket 来解决哈希冲突
 *
 * Time Complexity: O(n / k) = 假设哈希值是均匀分布的，则每个 bucket 长度为 n / k
 * Space complexity: O(n + k) = this.#hashBucket 占用的空间
 * Auxiliary complexity: O(n + k) = this.#hashBucket 占用的空间
 * 其中 n 是哈希表中的元素数量，k 是预先定义的 buckets 个数（在这里是 769）
 */
class MyHashMap {
    #keyRange = 769;
    #hashBucket = new Array(this.#keyRange).fill(null);

    /**
     * @param {number} key
     * @returns {number}
     */
    #hash(key) {
        return key % this.#keyRange;
    }

    /**
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        const hash = this.#hash(key);
        let bucket = this.#hashBucket[hash];

        if (bucket === null) {
            this.#hashBucket[hash] = new ListNode(key, value);
        } else {
            while (bucket && bucket.next) {
                if (bucket.key === key) {
                    bucket.value = value;

                    return;
                }
                bucket = bucket.next;
            }
            if (bucket.key === key) {
                bucket.value = value;
            } else {
                bucket.next = new ListNode(key, value);
            }
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        const hash = this.#hash(key);
        let bucket = this.#hashBucket[hash];

        while (bucket) {
            if (bucket.key === key) {
                return bucket.value;
            }
            bucket = bucket.next;
        }

        return -1;
    }

    /**
     * @param {number} key
     */
    remove(key) {
        const hash = this.#hash(key);
        let bucket = this.#hashBucket[hash];

        if (bucket === null) {
            return;
        }
        if (bucket.key === key) {
            this.#hashBucket[hash] = bucket.next ? bucket.next : null;
        } else {
            let prevNode = bucket;

            bucket = bucket.next;
            while (bucket) {
                if (bucket.key === key) {
                    prevNode.next = bucket.next;
                    break;
                }
                prevNode = bucket;
                bucket = bucket.next;
            }
        }
    }
}

export default MyHashMap;
