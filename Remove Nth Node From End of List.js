/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let curr = head;
  let size = 0;
  while (curr) {
    size++;
    curr = curr.next;
  }

  if ((n === 1 && size === 1) || (size < n)) {
    return null;
  }
  if ((size - n) === 0)
    return head.next;

  curr = head;
  for (let i = 1; i <= (size - n - 1); i++) {
    curr = curr.next;
  }
  if (curr.next)
    curr.next = curr.next.next;

  return head;
};
