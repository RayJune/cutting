import copyRandomList from './index';
// import copyRandomList from './template';
// import copyRandomList from './template-zh';

class Node {
    constructor(val = undefined, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

/**
 * @param {number[]} arr
 * @returns {Node}
 */
function buildListNode(arr) {
    let preHead = new Node(-1);
    let node = preHead;
    const nodeArr = [];

    arr.forEach(numItem => {
        node.next = new Node(numItem[0]);
        node = node.next;
        nodeArr.push(node);
    });
    node = preHead.next;
    for (let i = 0; i < arr.length; i++) {
        const randomNum = arr[i][1];

        node.random = randomNum ? nodeArr[randomNum] : null;
        node = node.next
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
        if (l1.next && l2.next && l1.next === l2.next) {
            return false;
        }
        if (l1.random && l2.random && l1.random === l2.random) {
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

test('test isDifferentListNode function', () => {
    const head = buildListNode([[1, 1], [2, 1]]);

    expect(isDifferentListNode(head, head)).toBe(false);
});

test('head = [[1, 1], [2, 1]]', () => {
    const head = buildListNode([[1, 1], [2, 1]]);
    const copy = copyRandomList(head);

    expect(copy).toEqual(head);
    expect(isDifferentListNode(head, copy)).toBe(true);
});

test('head = [[3, null], [3, 0], [3, null]]', () => {
    const head = buildListNode([[3, null], [3, 0], [3, null]]);
    const copy = copyRandomList(head);

    expect(copy).toEqual(head);
    expect(isDifferentListNode(head, copy)).toBe(true);
});

test('head = [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]', () => {
    const head = buildListNode([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]);
    const copy = copyRandomList(head);

    expect(copy).toEqual(head);
    expect(isDifferentListNode(head, copy)).toBe(true);
});

test('head = []', () => {
    const head = buildListNode([]);
    const copy = copyRandomList(head);

    expect(copy).toEqual(head);
});
