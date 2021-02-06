//Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

//There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

//Notice that you should not modify the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// const detectCycle = function(head) { //TC: 0(n), SC: O(n)
//     const set = new Set(); //a set of unique elements
//     let curr = head;
//     while(curr) {
//         if(set.has(curr)) { //seen?
//             return curr; //return the node
//         }
//         //else add it to the set
//         set.add(curr);
//         //keep moving forward
//         curr = curr.next;
//     }
//     //no cycle => return null
//     return null;
// };

const detectCycle = function (head) {
  //TC: 0(n), SC: O(1)
  let fastPtr = head; //advance by 2 (moves evenly)
  let slowPtr = head; //advance by 1 (at odd positions)
  //when both even and odd meet => cycle must exist
  let isCycle = false;

  if (!head || !head.next) return null;

  //fastPtr never null => cycle exists
  while (fastPtr) {
    slowPtr = slowPtr.next;
    //check for null pointer exception
    if (!fastPtr.next) {
      return null;
    }
    fastPtr = fastPtr.next.next;

    //both pointers meet => cycle exists
    if (fastPtr === slowPtr) {
      isCycle = true;
      break;
    }
  }
  if (!isCycle) return null;
  slowPtr = head;

  while (slowPtr !== fastPtr) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next;
  }
  return slowPtr;
};
