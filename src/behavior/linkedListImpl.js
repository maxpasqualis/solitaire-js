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

  remove(obj) {
    let current = this.head,
      prev;

    if (current && current.data === obj) {
      this.head = current.next;
      return this;
    }

    while (current && current.data !== obj) {
      prev = current;
      current = current.next;
    }
    if (prev && current.data === obj) {
      prev.next = current.next;
    }
    return this;
  }

  clear() {
    this.head = null;
  }
}

export default LinkedList;
