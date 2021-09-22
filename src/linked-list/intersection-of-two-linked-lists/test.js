// const getIntersectionNode = require('./index');
const getIntersectionNode = require('./optimize');
// const getIntersectionNode = require('./template');
// const getIntersectionNode = require('./template-zh');

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
 * @param {Array} arr
 * @returns {{head: ListNode, tail: ListNode}}
 */
function buildListNode(arr) {
    const preHead = new ListNode(-1);
    let node = preHead;

    arr.forEach(num => {
        node.next = new ListNode(num);
        node = node.next;
    });

    return {
        head: preHead.next,
        tail: node
    };
}

test('define getIntersectionNode function', () => {
    expect(typeof getIntersectionNode).toBe('function');
});

test('listA = null, listB = [1], skipA = 3, skipB = 2', () => {
    const headA = null;
    const {head: headB} = buildListNode([1]);

    expect(getIntersectionNode(headA, headB)).toBe(null);
});

test('listA = [2, 6, 4], listB = [1, 5], skipA = 3, skipB = 2', () => {
    const {head: headA} = buildListNode([2, 6, 4]);
    const {head: headB} = buildListNode([1, 5]);

    expect(getIntersectionNode(headA, headB)).toBe(null);
});

test('listA = [1, 9, 1, 2, 4], listB = [3, 2, 4], skipA = 3, skipB = 1', () => {
    const {head: headA, tail: tailA} = buildListNode([1, 9, 1]);
    const {head: headB, tail: tailB} = buildListNode([3]);
    const {head: intersectionNode} = buildListNode([2, 4]);

    tailA.next = intersectionNode;
    tailB.next = intersectionNode;

    expect(getIntersectionNode(headA, headB)).toBe(intersectionNode);
});

test('listA = [4, 1, 8, 4, 5], listB = [5, 6, 1, 8, 4, 5], skipA = 2, skipB = 3', () => {
    const {head: headA, tail: tailA} = buildListNode([4]);
    const {head: headB, tail: tailB} = buildListNode([5, 6]);
    const {head: intersectionNode} = buildListNode([1, 8, 4, 5]);

    tailA.next = intersectionNode;
    tailB.next = intersectionNode;

    expect(getIntersectionNode(headA, headB)).toBe(intersectionNode);
});
