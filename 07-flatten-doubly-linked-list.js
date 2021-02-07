//You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

//Flatten the list so that all the nodes appear in a single-level, doubly linked list.
//You are given the head of the first level of the list.

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const flatten = function (head) {
  if (!head) return null;
  //start from head
  let curr = head;
  //as long as current node has a valid reference (not null)
  while (curr) {
    //save the next reference
    let next = curr.next;
    //has a child?
    if (curr.child) {
      //maintain the "prev" reference
      curr.child.prev = curr;
      //flatten further lists (if any)? no curr.child.child => curr = next;
      let flattenedChildHead = flatten(curr.child);
      //maintain the "next" reference
      curr.next = flattenedChildHead;
      //nullify the "child" reference
      curr.child = null;
      //curr's next exists?
      if (next) {
        let lastChild = last(flattenedChildHead);
        //point the last node in the child list to curr's next
        lastChild.next = next;
        //maintain the "prev" reference
        next.prev = lastChild;
      }
    }
    //keep moving forward
    curr = next;
  }
  //return the flattened list
  return head;
};

//helper function to get the last node in a linked list
const last = function (head) {
  if (!head) return null;
  let curr = head;
  while (curr.next) {
    curr = curr.next;
  }
  return curr;
};
