/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }


  /** print values */
  print(){
    let currNode = this.head
    while(currNode){
      console.log(currNode.val)
      currNode = currNode.next
    }
  }


  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return undefined
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return undefined
  }

  /** pop(): return & remove last item. */

  pop() {
    if(this.length == 0){
      this.tail = null
      this.head = null
      return null
    }
    const val = this.tail.val;
    let currNode = this.head
    let prevNode = currNode
    while(currNode.next){
        prevNode = currNode
        currNode = currNode.next
    }
    this.tail = prevNode
    this.tail.next = null
    this.length--;
    return val
  }

  /** shift(): return & remove first item. */

  shift() {
    if(this.head == null){
      throw console.error("List is empty");
    }
    const val = this.head.val
    this.head = this.head.next;
    this.length--;
    return val

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currNode = this.head
    for(let i = 0; i < idx; i++){
      currNode = currNode.next
    }
    return currNode.val;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currNode = this.head
    for(let i = 0; i < idx; i++){
      currNode = currNode.next
    }
    currNode.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let currNode = this.head
    let prevNode = this.head
    let newNode = new Node()
    for(let i = 0; i < idx; i++){
      prevNode= currNode
      currNode = currNode.next
    }
    newNode.val = val;
    prevNode.next = newNode
    newNode.next = currNode;
    this.length++;
    

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(this.head.next == null){
      return null;
    }
    let currNode = this.head
    let prevNode = this.head

    for(let i = 0; i < idx; i++){
      prevNode = currNode
      currNode = currNode.next
    }
    prevNode.next = currNode.next
    this.length--;
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.head == null) return 0;
    let sum = 0;
    let currNode = this.head;
    while (currNode) {
      sum += currNode.val
      currNode = currNode.next;
    }
    return sum / this.length;
    
  }
}


const list = new LinkedList();
list.push(2)
list.push(3)
list.push(1)
list.push(1)
list.push(7)
list.push(6)
list.push(9)

console.log(list.average())

module.exports = LinkedList;
