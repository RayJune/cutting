const reorderList = require('./index');
// const reorderList = require('./template');
// const reorderList = require('./template-zh');

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

test('define reorderList function', () => {
    expect(typeof reorderList).toBe('function');
});

test('head = [1, 2, 3, 4]', () => {
    const head = buildListNode([1, 2, 3, 4]);
    const newHead = buildListNode([1, 4, 2, 3]);
    const newList = reorderList(head);

    expect(newList).toBe(head);
    expect(newList).toEqual(newHead);
});

test('head = [1, 2, 3, 4, 5]', () => {
    const head = buildListNode([1, 2, 3, 4, 5]);
    const newHead = buildListNode([1, 5, 2, 4, 3]);
    const newList = reorderList(head);

    expect(newList).toBe(head);
    expect(newList).toEqual(newHead);
});

test('head = [1]', () => {
    const head = buildListNode([1]);
    const newList = reorderList(head);

    expect(newList).toBe(head);
    expect(newList).toEqual(head);
});

test('head = [1, 2]', () => {
    const head = buildListNode([1, 2]);
    const newList = reorderList(head);

    expect(newList).toBe(head);
    expect(newList).toEqual(head);
});