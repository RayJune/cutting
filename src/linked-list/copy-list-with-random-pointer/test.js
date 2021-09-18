// const copyRandomList = require('./index');
const copyRandomList = require('./optimize');
// const copyRandomList = require('./template');
// const copyRandomList = require('./template-zh');

class Node {
    /**
     * @param {number} val
     * @param {Node} next
     * @param {Node} random
     */
    constructor(val = undefined, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

/**
 * @param {Array} arr
 * @returns {Node}
 */
function buildListNode(arr) {
    let preHead = new Node(-1);
    let node = preHead;
    const map = new Map();

    arr.forEach(numItem => {
        node.next = new Node(numItem[0]);
        node = node.next;
        if (numItem[1] !== null) {
            map.set(numItem[1], node);
        }
    });

    for (let i = 0, curNode = preHead.next; i < arr.length; i++) {
        const randomNum = arr[i][1];

        curNode.random = randomNum !== null ? map.get(randomNum) : null;
        curNode = curNode.next
    }

    return preHead.next;
}

/**
 * 判断两个链表中 node，node.next、node.random 的地址是否均不相等
 *
 * @param {Node} l1
 * @param {Node} l2
 * @returns {Boolean}
 */
function isDifferentListNode(l1, l2) {
    while (l1 && l2) {
        if (l1 === l2) {
            return false;
        }
        if (l1.next !== null && l2.next !== null && l1.next === l2.next) {
            return false;
        }
        if (l1.random !== null && l2.random !== null && l1.random === l2.random) {
            return false;
        }
        l1 = l1.next;
        l2 = l2.next;
    }

    return true;
}

test('define copyRandomList function', () => {
    expect(typeof copyRandomList).toBe('function');
});

test('head = [[1, 1], [2, 1]], test isDifferentListNode function', () => {
    const list = buildListNode([[1, 1], [2, 1]]);

    expect(isDifferentListNode(list, list)).toBeFalsy();
});

test('head = [[1, 1], [2, 1]]', () => {
    const list = buildListNode([[1, 1], [2, 1]]);
    const newList = copyRandomList(list);

    expect(newList).toEqual(list);
    expect(isDifferentListNode(list, newList)).toBeTruthy();
});

test('head = [[3, null], [3, 0], [3, null]]', () => {
    const list = buildListNode([[3, null], [3, 0], [3, null]]);
    const newList = copyRandomList(list);

    expect(newList).toEqual(list);
    expect(isDifferentListNode(list, newList)).toBeTruthy();
});

test('head = [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]', () => {
    const list = buildListNode([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]);
    const newList = copyRandomList(list);

    expect(newList).toEqual(list);
    expect(isDifferentListNode(list, newList)).toBeTruthy();
});

test('head = []', () => {
    expect(copyRandomList(null)).toBeNull();;
});
