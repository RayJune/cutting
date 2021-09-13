const ListNode = require('./list-node');
// const mergeTwoLists = require('./index');
const mergeTwoLists = require('./optimize');
// const mergeTwoLists = require('./template');
// const mergeTwoLists = require('./template-zh');

test('define mergeTwoLists function', () => {
    expect(typeof mergeTwoLists).toBe('function');
});

test('l1 = [1, 2, 4], l2 = [1, 3, 4]', () => {
    const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const arr = [1, 1, 2, 3, 4, 4];
    const preHead = new ListNode();
    let preNode = preHead;

    arr.forEach(num => {
        preNode.next = new ListNode(num, null);
        preNode = preNode.next;
    });

    expect(mergeTwoLists(l1, l2)).toEqual(preHead.next);
    // expect(mergeTwoLists(l1, l2)).toEqual(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))))));
});

test('l1 = [], l2 = []', () => {
    expect(mergeTwoLists(null, null)).toEqual(null);
});

test('l1 = [], l2 = [0]', () => {
    expect(mergeTwoLists(null, new ListNode(0))).toEqual(new ListNode(0));
});
