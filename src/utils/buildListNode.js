class ListNode {
    constructor(val = undefined, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {number[]} arr
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

export default buildListNode;
