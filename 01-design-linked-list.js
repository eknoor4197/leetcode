/*Design your implementation of the linked list. 
You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: 
val and next. val is the value of the current node, and next is a 
pointer/reference to the next node.
If you want to use the doubly linked list, 
you will need one more attribute prev to indicate the 
previous node in the linked list. 
Assume all nodes in the linked list are 0-indexed.
*/

/**
 * Initialize your data structure here.
 */

const LinkedListNode = function (val, next = null) {
  this.val = val;
  this.next = next;
  return this;
};

const MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
  return this;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  //TC: O(n)
  //check invalid index
  if (index < 0 || index >= this.size) {
    return -1;
  }
  //check empty state
  if (!this.head) {
    return -1;
  }
  //if it's the head
  if (index === 0) {
    return this.head.val;
  }
  //if it's the tail
  if (index === this.size - 1) {
    return this.tail.val;
  }

  let counter = 0;
  //track the current position in the list (start from head)
  let currentNode = this.head;
  //iterate till the index-th node
  while (counter != index) {
    //keep moving forward
    currentNode = currentNode.next;
    //increment the counter
    counter++;
  }
  //return the index-th node's value
  return currentNode.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  //O(1)
  const newNode = new LinkedListNode(val);

  //check empty state
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    this.size++;
    return this;
  }

  newNode.next = this.head;
  this.head = newNode;
  this.size++;
  return this;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  //O(1)
  const newNode = new LinkedListNode(val);

  //check empty state
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    this.size++;
    return this;
  }

  let currentTail = this.tail;
  currentTail.next = newNode; //maintain the reference
  this.tail = newNode; //point tail to new node
  this.size++;
  return this;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  //O(n)
  //check invalid index
  if (index < 0 || index > this.size) {
    return this;
  }
  if (index === 0) {
    return this && this.addAtHead(val);
  }
  if (index === this.size) {
    return this && this.addAtTail(val);
  }

  const newNode = new LinkedListNode(val);
  const head = this.head;

  function getNode(index) {
    //valid index already checked
    let counter = 0;
    //track the current position in the list
    let currentNode = head;
    //iterate till the index-th node
    while (counter != index) {
      currentNode = currentNode.next;
      //increment the counter
      counter++;
    }
    //return the index-th node
    return currentNode;
  }

  const prevNode = getNode(index - 1);
  const afterNode = prevNode.next;
  prevNode.next = newNode;
  newNode.next = afterNode;
  this.size++;
  return this;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let self = this;
  let deletedNode = null;
  //check invalid index
  if (index < 0 || index >= this.size) {
    return this;
  }

  if (index === 0) {
    deletedNode = this.head;
    this.head = this.head.next;
    return deletedNode;
  }

  function getNode(index) {
    if (index < 0 || index >= this.size) {
      //check invalid index
      return self;
    }

    let counter = 0;
    //track the current position in the list
    let currentNode = self.head;
    //iterate till the index-th node
    while (counter != index) {
      currentNode = currentNode.next;
      //increment the counter
      counter++;
    }
    //return the index-th node
    return currentNode;
  }
  deletedNode = getNode(index);
  const prevNode = getNode(index - 1);

  //OR
  //const prevNode = getNode(index - 1);
  //deletedNode = prevNode.next;

  const afterNode = deletedNode.next;
  prevNode.next = afterNode;
  //is the tail to be deleted?
  if (!afterNode) {
    this.tail = prevNode;
  }
  this.size--;
  return this;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
