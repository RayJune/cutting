const oddEvenList = require('./index');
// const oddEvenList = require('./template');
// const oddEvenList = require('./template-zh');

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

test('define oddEvenList function', () => {
    expect(typeof oddEvenList).toBe('function');
});

test('head = []', () => {
    expect(oddEvenList(null)).toBeNull();
});

test('head = [1]', () => {
    const head = buildListNode([1]);

    expect(oddEvenList(head)).toEqual(head);
});

test('head = [1, 2]', () => {
    const head = buildListNode([1, 2]);

    expect(oddEvenList(head)).toEqual(head);
});

test('head = [1, 2, 3]', () => {
    const head = buildListNode([1, 2, 3]);
    const newHead = buildListNode([1, 3, 2]);
    const result = oddEvenList(head);

    expect(result).toBe(head);
    expect(result).toEqual(newHead);
});

test('head = [1, 2, 3, 4, 5]', () => {
    const head = buildListNode([1, 2, 3, 4, 5]);
    const newHead = buildListNode([1, 3, 5, 2, 4]);
    const result = oddEvenList(head);

    expect(result).toBe(head);
    expect(result).toEqual(newHead);
});
