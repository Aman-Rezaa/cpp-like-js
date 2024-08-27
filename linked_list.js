class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    push_back(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    push_front(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    pop_front() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    pop_back() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    front() {
        return this.head ? this.head.data : null;
    }

    back() {
        if (!this.head) {
            return null;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        return current.data;
    }

    empty() {
        return !this.head;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    insertAt(position, data) {
        if (position < 0 || position > this.size()) {
            throw new Error("Invalid position");
        }
        if (position === 0) {
            this.push_front(data);
        } else if (position === this.size()) {
            this.push_back(data);
        } else {
            let newNode = new Node(data);
            let current = this.head;
            let prev = null;
            for (let i = 0; i < position; i++) {
                prev = current;
                current = current.next;
            }
            newNode.next = current;
            prev.next = newNode;
        }
    }

    deleteAt(position) {
        if (position < 0 || position >= this.size()) {
            throw new Error("Invalid position");
        }
        if (position === 0) {
            this.pop_front();
        } else if (position === this.size() - 1) {
            this.pop_back();
        } else {
            let current = this.head;
            let prev = null;
            for (let i = 0; i < position; i++) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
        }
    }

    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    findMiddle() {
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data;
    }

    merge(otherList) {
        let mergedList = new LinkedList();
        let current1 = this.head;
        let current2 = otherList.head;
        while (current1 && current2) {
            if (current1.data < current2.data) {
                mergedList.push_back(current1.data);
                current1 = current1.next;
            } else {
                mergedList.push_back(current2.data);
                current2 = current2.next;
            }
        }
        while (current1) {
            mergedList.push_back(current1.data);
            current1 = current1.next;
        }
        while (current2) {
            mergedList.push_back(current2.data);
            current2 = current2.next;
        }
        return mergedList;
    }

    detectCycle() {
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }

    removeDuplicates() {
        let current = this.head;
        let prev = null;
        let set = new Set();
        while (current) {
            if (set.has(current.data)) {
                prev.next = current.next;
            } else {
                set.add(current.data);
                prev = current;
            }
            current = current.next;
        }
    }

    sort() {
        let current = this.head;
        let sorted = null;
        while (current) {
            let next = current.next;
            sorted = this.sortedInsert(sorted, current);
            current = next;
        }
        this.head = sorted;
    }

    sortedInsert(head, newNode) {
        if (!head || newNode.data <= head.data) {
            newNode.next = head;
            return newNode;
        }
        let current = head;
        while (current.next && current.next.data < newNode.data) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        return head;
    }

    split() {
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let firstHalf = new LinkedList();
        let secondHalf = new LinkedList();
        firstHalf.head = this.head;
        secondHalf.head = slow.next;
        slow.next = null;
        return [firstHalf, secondHalf];
    }

    findIntersection(otherList) {
        let current1 = this.head;
        let current2 = otherList.head;
        while (current1 && current2) {
            if (current1 === current2) {
                return current1.data;
            }
            current1 = current1.next;
            current2 = current2.next;
            if (!current1 && !current2) {
                return null;
            }
            if (!current1) {
                current1 = otherList.head;
            }
            if (!current2) {
                current2 = this.head;
            }
        }
        return null;
    }

    toArray() {
        let array = [];
        let current = this.head;
        while (current) {
            array.push(current.data);
            current = current.next;
        }
        return array;
    }

    copy_without_reference() {
        let newList = new LinkedList();
        let current = this.head;
        while (current) {
            newList.push_back(current.data);
            current = current.next;
        }
        return newList;
    }
}

module.exports = LinkedList;
