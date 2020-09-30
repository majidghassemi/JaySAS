class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// STACK

//With Linked List
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    let node = new Node(value);
    if (this.size === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      let pointer = this.top;
      this.top = node;
      this.top.next = pointer;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      return (this.bottom = nul);
    }
    let pointer = this.top;
    this.top = this.top.next;
    this.size--;
    return pointer;
  }
}

// ---------------------------------------------------------------------

// With Array

class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return pointer;
  }
}

// -------------------------------------------------------------------------

// QUEUES

// Implement Queues using Linked List

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      return (this.last = null);
    }
    this.first = this.first.next;
    this.size--;
    return this;
  }
}

// Implement Queues using Stacks!

class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}
