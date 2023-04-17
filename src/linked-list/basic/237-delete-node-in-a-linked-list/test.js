const deleteNode = require('./index');
// const deleteNode = require('./template');
// const deleteNode = require('./template-zh');

class ListNode {
    constructor(val = undefined, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {number[]} arr
 * @param {number} i
 * @returns {{head: ListNode, node: ListNode}}
 */
function buildListNode(arr, i = 0) {
    const preHead = new ListNode(-1);
    let node = preHead;
    let targetNode = null;

    arr.forEach((num, index) => {
        node.next = new ListNode(num);
        node = node.next;
        if (index === i) {
            targetNode = node;
        }
    });

    return {
        head: preHead.next,
        node: targetNode
    };
}

test('define deleteNode function', () => {
    expect(typeof deleteNode).toBe('function');
});

test('head = [4, 5, 1, 9], node = 5', () => {
    const {head, node} = buildListNode([4, 5, 1, 9], 1);
    const {head: newHead} = buildListNode([4, 1, 9]);

    deleteNode(node);
    expect(head).toEqual(newHead);
});

test('head = [4, 5, 1, 9], node = 1', () => {
    const {head, node} = buildListNode([4, 5, 1, 9], 2);
    const {head: newHead} = buildListNode([4, 5, 9]);

    deleteNode(node);
    expect(head).toEqual(newHead);
});

test('head = [1, 2, 3, 4], node = 3', () => {
    const {head, node} = buildListNode([1, 2, 3, 4], 2);
    const {head: newHead} = buildListNode([1, 2, 4]);

    deleteNode(node);
    expect(head).toEqual(newHead);
});

test('head = [0, 1], node = 0', () => {
    const {head, node} = buildListNode([0, 1], 0);
    const {head: newHead} = buildListNode([1]);

    deleteNode(node);
    expect(head).toEqual(newHead);
});

test('head = [-3, 5, -99], node = -3', () => {
    const {head, node} = buildListNode([-3, 5, -99], 0);
    const {head: newHead} = buildListNode([5, -99]);

    deleteNode(node);
    expect(head).toEqual(newHead);
});
