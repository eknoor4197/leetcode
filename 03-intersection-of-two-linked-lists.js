/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

//no data structure being created => SC: O(1), TC: O(m+n)
const getIntersectionNode = function (headA, headB) {
  let currA = headA;
  let lengthA = 0;
  let lengthB = 0;

  //determine the length of listA
  while (currA) {
    currA = currA.next;
    lengthA++;
  }

  //determine the length of listB
  let currB = headB;
  while (currB) {
    currB = currB.next;
    lengthB++;
  }

  let diff = 0;
  let longListPtr = null; //working pointer for the longer list
  let shortListPtr = null; //working pointer for the shorter list

  //dtermine the longer list
  if (lengthA > lengthB) {
    diff = lengthA - lengthB;
    longListPtr = headA;
    shortListPtr = headB;
  } else {
    diff = lengthB - lengthA;
    longListPtr = headB;
    shortListPtr = headA;
  }

  //adjust the working pointer of the longer list by the difference
  //so both pointers are equidistant from the point of intersection
  while (diff != 0) {
    longListPtr = longListPtr.next;
    diff--;
  }
  //traverse through the list
  while (longListPtr) {
    //meeting point ? => return it
    if (longListPtr === shortListPtr) {
      return longListPtr;
    } else {
      //else keep moving forward
      longListPtr = longListPtr.next;
      shortListPtr = shortListPtr.next;
    }
  }
  //no meeting point ? => return null
  return null;
};

// const getIntersectionNode = function(headA, headB) { //TC: 0(m+n), SC: O(max(m,n))
//     const set = new Set();
//     //track current position in list A
//     let currA = headA;
//     //while currA has a valid ref
//     while(currA) {
//         set.add(currA);
//         currA = currA.next;
//     }
//     //track current position in list B
//     let currB = headB;
//     //while currB has a valid ref
//     while(currB) {
//         if(set.has(currB)) {
//             return currB;
//         }
//         currB = currB.next;
//     }
//     //no intersection point => return null
//     return null;
// };
