//Given the head of a linked list, remove the nth node
//from the end of the list and return its head.

//Follow up: Could you do this in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const Node = function (val, next = null) {
  this.val = val;
  this.next = next;
  return this;
};

// const MyLinkedList = function () {
//   this.head = null;
//   this.tail = null;
//   this.size = 0;
//   return this;
// };

// let head = new Node()

//1 pointer, 2 passes (TC: O(n), SC: O(1))
// const removeNthFromEnd = function(head, n) {
//     let length = 0;
//     let dummy = new Node();
//     dummy.next = head;
//     let firstNode = head; //working pointer, starts form head
//     //we need to determine the list's length
//     while(firstNode) {
//         firstNode = firstNode.next;
//         length++;
//     }
//     let index = length - n;
//     // if(index < 0 || index === 1 ) {
//     //     return head;
//     // }
//     let counter = 0;
//     let prevNode = dummy;
//     while(counter != index) {
//         prevNode = prevNode.next;
//         counter++;
//     }
//     //prevNode.next is [5], then null
//     prevNode.next = prevNode.next.next;
//     return dummy.next;
// };

//2 pointers, 1 pass (TC: O(n), SC: O(1))
const removeNthFromEnd = function (head, n) {
  const dummyHead = new Node();
  dummyHead.next = head;

  let left = dummyHead;
  let right = dummyHead.next;
  //creating a window of size n (by adjusting right pointer)
  //both pointers separated by n nodes
  //why window of n nodes? Shouldn't n+1 nodes be enough?
  //No! We need n-1th, nth, n+1th nodes.
  while (n > 0) {
    right = right.next;
    n--;
  }
  //right = null => left is at the perfect spot (at n+1th from end)
  while (right) {
    left = left.next;
    right = right.next;
  }
  left.next = left.next.next;
  //don't return head!! (that was never altered with)
  return dummyHead.next;
};
