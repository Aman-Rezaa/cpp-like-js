class Vector {
    constructor() {
        this.data = [];
    }

    size() {
        return this.data.length;
    }

    empty() {
        return this.data.length === 0;
    }

    push_back(val) {
        this.data.push(val);
    }

    pop_back() {
        if (this.empty()) {
            throw new Error("Vector is empty");
        }
        this.data.pop();
    }

    insert(index, val) {
        if (index < 0 || index > this.data.length) {
            throw new Error("Index out of range");
        }
        this.data.splice(index, 0, val);
    }

    erase(index) {
        if (index < 0 || index >= this.data.length) {
            throw new Error("Index out of range");
        }
        this.data.splice(index, 1);
    }

    clear() {
        this.data.length = 0;
    }

    resize(n, val = undefined) {
        if (n < 0) {
            throw new Error("Size cannot be negative");
        }
        if (n < this.data.length) {
            this.data.length = n;
        } else {
            for (let i = this.data.length; i < n; i++) {
                this.data.push(val);
            }
        }
    }

    front() {
        if (this.empty()) {
            throw new Error("Vector is empty");
        }
        return this.data[0];
    }

    back() {
        if (this.empty()) {
            throw new Error("Vector is empty");
        }
        return this.data[this.data.length - 1];
    }

    at(index) {
        if (index < 0 || index >= this.data.length) {
            throw new Error("Index out of range");
        }
        return this.data[index];
    }

    data_() {
        return [...this.data];
    }

    swap(other) {
        if (!(other instanceof Vector)) {
            throw new Error("Cannot swap with non-Vector object");
        }
        const temp = [...this.data];
        this.data = [...other.data];
        other.data = temp;
    }

    assign(n, val) {
        if (n < 0) {
            throw new Error("Size cannot be negative");
        }
        this.data = Array(n).fill(val);
    }

    assign_range(arr) {
        if (!Array.isArray(arr)) {
            throw new Error("Argument must be an array");
        }
        this.data = [...arr];
    }

    sort() {
        this.data.sort((a, b) => a - b);
    }

    reverse() {
        this.data.reverse();
    }

    index_of(val) {
        return this.data.indexOf(val);
    }

    copy_without_reference() {
        const newVector = new Vector();
        newVector.data = [...this.data];
        return newVector;
    }

    emplace(index, val) {
        if (index < 0 || index > this.data.length) {
            throw new Error("Index out of range");
        }
        this.data.splice(index, 0, val);
    }

    emplace_back(val) {
        this.data.push(val);
    }

    equals(other) {
        if (!(other instanceof Vector)) {
            throw new Error("Argument must be a Vector");
        }
        if (this.size() !== other.size()) return false;
        for (let i = 0; i < this.size(); i++) {
            if (this.data[i] !== other.data[i]) return false;
        }
        return true;
    }

    print() {
        console.log(this.data.join(', '));
    }
}

module.exports = Vector;
