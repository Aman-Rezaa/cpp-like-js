class Queue {
    constructor() {
      this.queue = [];
    }
  
    push(element) {
      this.queue.push(element);
    }
  
    pop() {
      if (this.empty()) {
        throw new Error("Queue underflow");
      }
      return this.queue.shift();
    }
  
    front() {
      if (this.empty()) {
        throw new Error("Queue is empty");
      }
      return this.queue[0];
    }
  
    back() {
      if (this.empty()) {
        throw new Error("Queue is empty");
      }
      return this.queue[this.queue.length - 1];
    }
  
    size() {
      return this.queue.length;
    }
  
    empty() {
      return this.size() === 0;
    }
  
    clear() {
      this.queue = [];
    }
  
    emplace(...args) {
      this.queue.push(...args);
    }
  
    swap(otherQueue) {
      const temp = this.queue;
      this.queue = otherQueue.queue;
      otherQueue.queue = temp;
    }
  
    copy_without_reference(otherQueue) {
        this.queue = JSON.parse(JSON.stringify(otherQueue.queue));
      }
    
    print() {
        console.log(this.queue.join(' '));
      }

}

module.exports = Queue;