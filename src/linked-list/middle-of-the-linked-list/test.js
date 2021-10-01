const middleNode = require('./index');
// const middleNode = require('./template');
// const middleNode = require('./template-zh');

class ListNode {
    /**
     * @param {string} val
     * @param {ListNode} next
     */
    constructor(val = undefined, next = null) {
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

test('define middleNode function', () => {
    expect(typeof middleNode).toBe('function');
});

test('head = [1, 2, 3, 4, 5]', () => {
    const head = buildListNode([1, 2, 3, 4, 5]);
    const newHead = buildListNode([3, 4, 5]);

    expect(middleNode(head)).toEqual(newHead);
});

test('head = [1, 2, 3, 4, 5, 6]', () => {
    const head = buildListNode([1, 2, 3, 4, 5, 6]);
    const newHead = buildListNode([4, 5, 6]);

    expect(middleNode(head)).toEqual(newHead);
});

test('head = [1]', () => {
    const head = buildListNode([1]);

    expect(head).toEqual(head);
});
