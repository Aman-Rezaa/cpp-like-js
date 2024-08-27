class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack underflow");
        }
        return this.stack.pop();
    }

    top() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    clear() {
        this.stack = [];
    }

    get(index) {
        if (index < 0 || index >= this.stack.length) {
            throw new Error("Index out of bounds");
        }
        return this.stack[index];
    }

    contains(element) {
        return this.stack.includes(element);
    }

    toArray() {
        return [...this.stack];
    }

    swap(stack) {
        [this.stack, stack.stack] = [stack.stack, this.stack];
    }

    emplace(element) {
        this.stack.push(element);
    }

    emplace_back(...args) {
        this.stack.push(...args);
    }

    reserve(capacity) {
        this.stack.length = capacity;
    }

    shrink_to_fit() {
        this.stack.length = this.stack.length;
    }

    erase(position) {
        if (position < 0 || position >= this.stack.length) {
            throw new Error("Position out of bounds");
        }
        this.stack.splice(position, 1);
    }

    copy_without_reference() {
        let newStack = new Stack();
        newStack.stack = [...this.stack];
        return newStack;
    }

    print() {
        console.log(this.stack.join(' '));
    }
    
        
}

module.exports = Stack;
