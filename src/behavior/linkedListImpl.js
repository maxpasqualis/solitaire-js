class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(data) {
    // inserts at the beginning of list, quicker than appending to the end
    // since cards are randomly drawn, order doesn't matter here, so this should be ok
    let node = new ListNode(data);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
    return;
  }

  length() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  clear() {
    this.head = null;
  }
}

export default LinkedList;
