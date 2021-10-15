const rotateRight = require('./index');
// const rotateRight = require('./template');
// const rotateRight = require('./template-zh');

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {Array} arr
 * @returns {ListNode}
 */
function buildListNode(arr) {
    let preHead = new ListNode(-1);
    let node = preHead;

    arr.forEach(num => {
        node.next = new ListNode(num);
        node = node.next;
    });

    return preHead.next;
}

test('define rotateRight function', () => {
    expect(typeof rotateRight).toBe('function');
});

test('head = [], k = 1', () => {
    expect(rotateRight(null, 1)).toBeNull();
});

test('head = [1], k = 2', () => {
    const head = buildListNode([1]);

    expect(rotateRight(head)).toEqual(head);
});

test('head = [1, 2, 3, 4, 5], k = 2', () => {
    const head = buildListNode([1, 2, 3, 4, 5]);
    const newHead = buildListNode([4, 5, 1, 2, 3])

    expect(rotateRight(head, 2)).toEqual(newHead);
});

test('head = [0, 1, 2], k = 4', () => {
    const head = buildListNode([0, 1, 2]);
    const newHead = buildListNode([2, 0, 1])

    expect(rotateRight(head, 4)).toEqual(newHead);
});

test('head = [1, 2], k = 4', () => {
    const head = buildListNode([1, 2]);

    expect(rotateRight(head, 4)).toEqual(head);
});
