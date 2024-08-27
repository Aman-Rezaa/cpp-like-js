
class Deque {
    constructor() {
        this.elements = [];
    }

    empty() {
        return this.elements.length === 0;
    }

    size() {
        return this.elements.length;
    }

    clear() {
        this.elements = [];
    }

    push_back(value) {
        this.elements.push(value);
    }

    push_front(value) {
        this.elements.unshift(value);
    }

    emplace_back(...args) {
        this.elements.push(...args);
    }

    emplace_front(...args) {
        this.elements.unshift(...args);
    }

    pop_back() {
        if (this.empty()) {
            throw new Error("Deque is empty");
        }
        return this.elements.pop();
    }

    pop_front() {
        if (this.empty()) {
            throw new Error("Deque is empty");
        }
        return this.elements.shift();
    }

    front() {
        if (this.empty()) {
            throw new Error("Deque is empty");
        }
        return this.elements[0];
    }

    back() {
        if (this.empty()) {
            throw new Error("Deque is empty");
        }
        return this.elements[this.elements.length - 1];
    }

    at(index) {
        if (index < 0 || index >= this.elements.length) {
            throw new Error("Index out of range");
        }
        return this.elements[index];
    }

    insert(position, value) {
        if (position < 0 || position > this.elements.length) {
            throw new Error("Invalid position");
        }
        this.elements.splice(position, 0, value);
    }

    erase(position) {
        if (position < 0 || position >= this.elements.length) {
            throw new Error("Invalid position");
        }
        return this.elements.splice(position, 1)[0];
    }

    swap(otherDeque) {
        if (!(otherDeque instanceof Deque)) {
            throw new Error("Cannot swap with non-Deque object");
        }
        let temp = this.elements;
        this.elements = otherDeque.elements;
        otherDeque.elements = temp;
    }

    // Additional methods to simulate C++ deque functionality

    assign(count, value) {
        this.clear();
        for (let i = 0; i < count; i++) {
            this.push_back(value);
        }
    }

    resize(count, value = undefined) {
        if (count < 0) {
            throw new Error("Count cannot be negative");
        }
        if (count < this.elements.length) {
            this.elements = this.elements.slice(0, count);
        } else {
            while (this.elements.length < count) {
                this.push_back(value);
            }
        }
    }

    splice(position, count) {
        if (position < 0 || position >= this.elements.length) {
            throw new Error("Invalid position");
        }
        return this.elements.splice(position, count);
    }

    find(value) {
        return this.elements.findIndex((el) => el === value);
    }

    count(value) {
        return this.elements.filter((el) => el === value).length;
    }

    // Iterator-like methods

    begin() {
        return this.elements[Symbol.iterator]();
    }

    end() {
        return this.elements[Symbol.iterator]();
    }

    // In C++, assigning one deque to another results in a copy of the elements from one deque to the other.
    // In JavaScript, objects are typically assigned by reference. 
    // When you assign one Deque (or any object) to another using = or by passing references, 
    // both variables will reference the same underlying object. 
    // This means changes to one variable will affect the other because they share the same reference. 
    copy_without_reference() {
        let clonedDeque = new Deque();
        for (let element of this.elements) {
            clonedDeque.push_back(element);
        }
        return clonedDeque;
    }

    toArray() {
        return [...this.elements];
    }

    print() {
        console.log('Deque contents:', this.elements.join(' '));
    }
}

module.exports = Deque;
