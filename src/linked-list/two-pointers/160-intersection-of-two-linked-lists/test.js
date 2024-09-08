// import getIntersectionNode from './index';
import getIntersectionNode from './optimize';
// import getIntersectionNode from './template';
// import getIntersectionNode from './template-zh';

class ListNode {
    constructor(val = undefined, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {number[]} arr
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

test('listA = [], listB = [1], skipA = 3, skipB = 2', () => {
    const {head: headA} = buildListNode([]);
    const {head: headB} = buildListNode([1]);

    expect(getIntersectionNode(headA, headB)).toBeNull();
});

test('listA = [2, 6, 4], listB = [1, 5], skipA = 3, skipB = 2', () => {
    const {head: headA} = buildListNode([2, 6, 4]);
    const {head: headB} = buildListNode([1, 5]);

    expect(getIntersectionNode(headA, headB)).toBeNull();
});

test('listA = [1, 9, 1, 2, 4], listB = [3, 2, 4], skipA = 3, skipB = 1', () => {
    const {head: headA, tail: tailA} = buildListNode([1, 9, 1]);
    const {head: headB, tail: tailB} = buildListNode([3]);
    const {head: intersectionNode} = buildListNode([2, 4]);

    tailA.next = intersectionNode;
    tailB.next = intersectionNode;

    expect(getIntersectionNode(headA, headB))
        .toEqual(intersectionNode);
});

test('listA = [4, 1, 8, 4, 5], listB = [5, 6, 1, 8, 4, 5], skipA = 2, skipB = 3', () => {
    const {head: headA, tail: tailA} = buildListNode([4]);
    const {head: headB, tail: tailB} = buildListNode([5, 6]);
    const {head: intersectionNode} = buildListNode([1, 8, 4, 5]);

    tailA.next = intersectionNode;
    tailB.next = intersectionNode;

    expect(getIntersectionNode(headA, headB))
        .toEqual(intersectionNode);
});
