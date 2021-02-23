/*Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.

int get(int key) Return the value of the key if the key exists, otherwise return -1.

void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

Follow up:
Could you do get and put in O(1) time complexity?*/

function Node(key, val, prev, next) {
  this.key = key;
  this.val = val;
  this.prev = prev;
  this.next = next;
}

/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.size = 0;
  this.head = new Node();
  this.head.prev = null;
  this.tail = new Node();
  this.tail.next = null;
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.capacity = capacity;
  this.cache = {};
};

/**
 * @param {number} key
 * @return {number}
 */
//extract node, move to head
LRUCache.prototype.get = function (key) {
  const node = this.cache[key];
  if (node) {
    //extract (remove)
    this.removeNode(node);
    //move to head
    this.moveToHead(node);
    return node.val;
  }
  return -1;
};

LRUCache.prototype.removeNode = function (node) {
  //extract (remove)
  node.prev.next = node.next;
  if (node.next) {
    node.next.prev = node.prev;
  }
};

LRUCache.prototype.moveToHead = function (node) {
  //move to head
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
//already exists? update and move to head. Else, insert and move to head
LRUCache.prototype.put = function (key, value) {
  const node = this.cache[key];
  //exists?
  if (node) {
    //update
    node.val = value;
    //extract (remove)
    this.removeNode(node);
    //move to head
    this.moveToHead(node);
  } else {
    //else, insert and move to head
    const node = new Node(key, value);
    this.moveToHead(node);
    this.cache[key] = node;
    this.size++;

    //check capacity
    if (this.size > this.capacity) {
      //this.tail is the dummy tail
      //this.tail.prev is the actual tail
      const tail = this.tail.prev;
      tail.prev.next = tail.next;
      tail.next.prev = tail.prev;
      delete this.cache[tail.key];
      this.size--;
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
