/*Given a singly linked list, group all odd nodes together 
followed by the even nodes. 
Please note here we are talking about the node number and 
not the value in the nodes.

You should try to do it in place. 
The program should run in O(1) space complexity and O(nodes) 
time complexity.
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
 * @return {ListNode}
 */

//TC: O(n)
//SC: O(n)

const Node = function (val, next = null) {
  this.val = val;
  this.next = next;
  return this;
};

const oddEvenList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let currentNode = head;
  let index = 0;
  let oddDummy = new Node(); //starting ("head") node for odd list
  let oddTail = oddDummy; // (working pointer) point to the odd node
  let evenDummy = new Node(); //starting ("head") node for even list
  let evenTail = evenDummy; // (working pointer) point to the even node

  //as long as currentNode has a valid ref
  while (currentNode) {
    if (index % 2 == 0) {
      evenTail.next = currentNode; //maintaining the reference
      evenTail = currentNode; //building the list
    } else {
      oddTail.next = currentNode;
      oddTail = currentNode;
    }
    currentNode = currentNode.next;
    index++;
  }
  //Above, we're basicaly building 2 diff lists in the same iteration.
  //end of iteration, oddTail points to tail of the odd list
  //evenTail points to tail of the even list
  //now to join them...
  evenTail.next = oddDummy.next; //remember, oddDummy is a "dummy" head
  //lastly, oddTail (at index 3) points to node at index 4
  oddTail.next = null; //clear the reference for oddTail pointing to next node
  return evenDummy.next; //first node is a dummy node, list starts from the next
};
