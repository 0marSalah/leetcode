/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


function doubleIt(head: ListNode | null): ListNode | null {
    if (!head) return null;

    // Extract the number from the linked list
    let num = 0n;
    let current = head;
    while (current) {
        num = num * 10n + BigInt(current.val);
        current = current.next;
    }

    // Double the number
    num *= 2n;
    const numStr = num.toString();

    // Create a new linked list for the result
    const newHead = new ListNode(Number(numStr[0]));
    let newCurrent = newHead;

    for (let i = 1; i < numStr.length; i++) {
        newCurrent.next = new ListNode(Number(numStr[i]));
        newCurrent = newCurrent.next;
    }

    return newHead;
}