// const hasCycle = require('./index');
const hasCycle = require('./optimize');
// const hasCycle = require('./template');
// const hasCycle = require('./template-zh');

class ListNode {
    /**
     * @param {number} val
     * @param {ListNode} next
     */
    constructor(val = undefined, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 *
 * @param {Array} arr
 * @param {number} position
 * @returns {ListNode}
 */
function buildListNode(arr, position) {
    let preHead = new ListNode(-1);
    let node = preHead;
    const nodeArr = [];

    arr.forEach(num => {
        node.next = new ListNode(num);
        node = node.next;
        nodeArr.push(node);
    });
    if (position !== -1) {
        node.next = nodeArr[position];
    }

    return preHead.next;
}

test('define hasCycle function', () => {
    expect(typeof hasCycle).toBe('function');
});


test('head = null, position = -1', () => {
    expect(hasCycle(null)).toBe(false);
});

test('head = [1], position = -1', () => {
    expect(hasCycle(buildListNode([1], -1))).toBe(false);
});

test('head = [1, 2], position = 0', () => {
    expect(hasCycle(buildListNode([1, 2], 0))).toBe(true);
});

test('head = [3, 2, 0, -4], position = 1', () => {
    expect(hasCycle(buildListNode([3, 2, 0, -4], 1))).toBe(true);
});
