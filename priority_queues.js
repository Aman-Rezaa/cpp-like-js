class PriorityQueueMinOnTop {
    constructor() {
      this.queue = [];
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    size() {
      return this.queue.length;
    }
  
    push(value, priority) {
      this.queue.push({ value, priority });
      this.queue.sort((a, b) => a.priority - b.priority);
    }
  
    top() {
      if (this.isEmpty()) {
        throw new Error('Queue is empty');
      }
      return this.queue[0].value;
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error('Queue is empty');
      }
      return this.queue.shift().value;
    }
  
    clear() {
      this.queue = [];
    }
  
    get(index) {
      if (index < 0 || index >= this.size()) {
        throw new Error('Index out of bounds');
      }
      return this.queue[index].value;
    }
  
    contains(value) {
      return this.queue.some(item => item.value === value);
    }
  
    toArray() {
      return this.queue.map(item => item.value);
    }
  
    copy_without_reference() {
      const newQueue = new PriorityQueueMinOnTop();
      newQueue.queue = this.queue.slice();
      return newQueue;
    }
  
    swap(i, j) {
      const temp = this.queue[i];
      this.queue[i] = this.queue[j];
      this.queue[j] = temp;
    }
  
    reserve(n) {
      this.queue.length = n;
    }
  
    erase(value) {
      this.queue = this.queue.filter(item => item.value !== value);
    }

    print() {
      console.log(this.queue.map(item => `(${item.value}, ${item.priority})`).join(' '));
    }

  }
  
  class PriorityQueueMaxOnTop {
    constructor() {
      this.queue = [];
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    size() {
      return this.queue.length;
    }
  
    push(value, priority) {
      this.queue.push({ value, priority });
      this.queue.sort((a, b) => b.priority - a.priority);
    }
  
    top() {
      if (this.isEmpty()) {
        throw new Error('Queue is empty');
      }
      return this.queue[0].value;
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error('Queue is empty');
      }
      return this.queue.shift().value;
    }
  
    clear() {
      this.queue = [];
    }
  
    get(index) {
      if (index < 0 || index >= this.size()) {
        throw new Error('Index out of bounds');
      }
      return this.queue[index].value;
    }
  
    contains(value) {
      return this.queue.some(item => item.value === value);
    }
  
    toArray() {
      return this.queue.map(item => item.value);
    }
  
    copy() {
      const newQueue = new PriorityQueueMaxOnTop();
      newQueue.queue = this.queue.slice();
      return newQueue;
    }
  
    swap(i, j) {
      const temp = this.queue[i];
      this.queue[i] = this.queue[j];
      this.queue[j] = temp;
    }
  
    reserve(n) {
      this.queue.length = n;
    }
  
    erase(value) {
      this.queue = this.queue.filter(item => item.value !== value);
    }

    print() {
      console.log(this.queue.map(item => `(${item.value}, ${item.priority})`).join(' '));
    }

  }

  module.exports = {PriorityQueueMinOnTop , PriorityQueueMaxOnTop};