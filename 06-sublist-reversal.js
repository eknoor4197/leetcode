//Reverse a linked list from position m to n.
//Do it in one-pass.

//Note: 1 ≤ m ≤ n ≤ length of list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const reverseBetween = function (head, m, n) {
  //TC: O(n), SC: O(1)
  let dummyHead = new ListNode();
  dummyHead.next = head;
  //start with a dummy head
  let nodeBeforeSublist = dummyHead;
  let count = 0;
  //iterate till m-1th node to get the node before sublist
  while (count < m - 1) {
    nodeBeforeSublist = nodeBeforeSublist.next;
    count++;
  }
  //ptr to work within the sublist
  let sublistPtr = nodeBeforeSublist.next;
  let temp; //store the next reference

  while (m < n) {
    temp = sublistPtr.next; //3
    sublistPtr.next = temp.next; //2 -> 4 (cut out 3)
    temp.next = nodeBeforeSublist.next; //3 -> 2
    nodeBeforeSublist.next = temp; //1 -> 3
    m++; //1 -> 3 -> 2 -> 4 -> 5
  }
  return dummyHead.next;
};
