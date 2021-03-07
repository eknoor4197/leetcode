/*Given the head of a singly linked list, 
return true if it is a palindrome.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

//TC: O(n), SC: O(1)

const isPalindrome = function (head) {
  let curr = head;
  let prev = null;
  let dummyHead = new ListNode();
  while (curr) {
    dummyHead.next = curr; //node -> 2,
    let next = curr.next;
    curr.next = prev; //2 -> 1
    console.log(prev);
    prev = curr; //1
    curr = next; //2
  }
  console.log(dummyHead.next, prev);
  return dummyHead.next === prev;
};
