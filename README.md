# CPP-LIKE-JS

A versatile npm package designed for JavaScript developers familiar with C++.

Offering a STL-equivalent collection of data structures and utilities. 

Simplify your development process by leveraging C++ like functionalities with C++'s Syntactical Synonymosity directly in JavaScript, including vector, linked list, stack, queue, priority queues, deque, and more. 



## Installation

Install cpp-like-js with npm

```bash

  npm i cpp-like-js
  
```
    
## Highlights

1.) Uses Exact Same C++ functions in JavaScript, easing the transition for C++ developers.

2.) Comprehensive Data Structures: V.1.0.0 includes rigorous implementations of vector, linked list, stack, queue, priority queues, deques and trees.

3.) Intuitive Input/Output: Utilize 'cin' and 'cout' for user input and output in JS.

4.) Enhanced Functionality: Supports advanced operations like emplace, insert, and swap across various data structures.

5.) Deep Copy Support: Easily clone data structures without reference issues using methods like clone_without_reference and copy_without_reference.

6.) Balanced and Optimized Trees: Provides tree structures with features like balanced check, height calculation, LCA (Lowest Common Ancestor) finding, diameter calculation and more.

7.) Robust Error Handling: Implements comprehensive error checking to ensure reliability and stability.

8.) Simple Integration: Designed for easy integration into existing JavaScript projects with minimal setup.


## Usage 1.) CONSOLE UTILITIES

    REQUIRE:-

    const cout = require('cpp-like-js').cout;

    cout(6+7+8); //21

Using 'cout' instead of 'console.log' for user output.

    const cout = require('cpp-like-js').cout;
    const cin = require('cpp-like-js').cin;

    cout("Enter the value of num: ");
    const num = cin ();

Using just 'cin' instead of : 
readLine(prompt): Reads a string value from a user
readInt(prompt): Reads an integer value from a user
readFloat(prompt): Reads a float value from a user' for user input.

## Usage 2.) Vector

The Vector class provides a dynamic array implementation, similar to the std::vector in C++. It supports a wide range of operations for managing elements.

       REQUIRE:-

       const {Vector} = require('cpp-like-js');

       const vec = new Vector(); //instance of Vector class

Constructor

Vector(): Initializes an empty vector.

Methods:-

size(): Returns the number of elements in the vector.

    let v = new Vector();
    v.push_back(10);
    cout(v.size()); // Output: 1
    empty(): Returns true,
    if the vector is empty, otherwise false.
    let v = new Vector();
    cout(v.empty()); // Output: true

push_back(val): Adds an element to the end of the vector.

    let v = new Vector();
    v.push_back(10);

pop_back(): Removes the last element from the vector. Throws an error if the vector is empty.

    let v = new Vector();
    v.push_back(10);
    v.pop_back();

insert(index, val): Inserts an element at the specified index. Throws an error if the index is out of range.

    let v = new Vector();
    v.push_back(10);
    v.insert(0, 5);

erase(index): Removes the element at the specified index. Throws an error if the index is out of range.

    let v = new Vector();
    v.push_back(10);
    v.erase(0);

clear(): Removes all elements from the vector.

    let v = new Vector();
    v.push_back(10);
    v.clear();

resize(n, val = undefined): Resizes the vector to contain n elements. If n is greater than the current size, the vector is expanded with val.

    let v = new Vector();
    v.push_back(10);
    v.resize(5, 0);

front(): Returns the first element of the vector. Throws an error if the vector is empty.

    let v = new Vector();
    v.push_back(10);
    cout(v.front()); // Output: 10

back(): Returns the last element of the vector. Throws an error if the vector is empty.

    let v = new Vector();
    v.push_back(10);
    cout(v.back()); // Output: 10

at(index): Returns the element at the specified index. Throws an error if the index is out of range.

    let v = new Vector();
    v.push_back(10);
    cout(v.at(0)); // Output: 10

swap(other): Swaps the contents of the vector with another vector. Throws an error if the argument is not a vector.

    let v1 = new Vector();
    let v2 = new Vector();
    v1.push_back(10);
    v2.push_back(20);
    v1.swap(v2);

assign(n, val): Assigns n elements with the specified value to the vector. Throws an error if n is negative.

    let v = new Vector();
    v.assign(5, 10);

assign_range(arr): Assigns elements from an array to the vector. Throws an error if the argument is not an array.

    let v = new Vector();
    v.assign_range([1, 2, 3]);

sort(): Sorts the elements of the vector in ascending order.

    let v = new Vector(); 
    v.sort();

reverse(): Reverses the order of the elements in the vector.

    let v = new Vector();
    v.reverse();

copy_without_reference(): Returns a copy of the vector without reference to the original.

    let v1 = new Vector();
    v1.push_back(10);
    let v2 = v1.copy_without_reference();

##IMPORTANT NOTE:

In C++, assigning one vector to another results in a copy of the elements from one vector to the other.

In JavaScript, objects are typically assigned by reference. 

When you assign one vector (or any object) to another using '=' or by passing references, both variables will reference the same underlying object. 

This means changes made to one variable will affect the other because they share the same reference. 

So, copy_without_reference() function helps to copy by data which is very helpful.

equals(other): Returns true if the vector is equal to another vector. Throws an error if the argument is not a vector.

    let v1 = new Vector();
    let v2 = new Vector();
    v1.push_back(10);
    v2.push_back(10);
    cout(v1.equals(v2)); // Output: true

print(): Prints the elements of the vector.

    let v = new Vector();
    v.push_back(10);
    v.print(); // Output: 10
    
## Usage 3.) Linked Lists

The LinkedList class provides a singly linked list implementation with various utility methods for managing elements.

       REQUIRE:-

       const {LinkedList} = require('cpp-like-js');

       const ll = new LinkedList(); //instance of LinkedList class

Constructor:-

LinkedList(): Initializes an empty linked list.

Methods:-

push_back(data): Adds an element to the end of the linked list.

    let list = new LinkedList();
    list.push_back(10);

push_front(data): Adds an element to the front of the linked list.

    let list = new LinkedList();
    list.push_front(10);

pop_front(): Removes the first element from the linked list.

    let list = new LinkedList();
    list.push_back(10);
    list.pop_front();
    
pop_back(): Removes the last element from the linked list.

    let list = new LinkedList();
    list.push_back(10);
    list.pop_back();

front(): Returns the first element of the linked list.

    let list = new LinkedList();
    list.push_back(10);
    cout(list.front()); // Output: 10

back(): Returns the last element of the linked list.

    let list = new LinkedList();
    list.push_back(10);
    cout(list.back()); // Output: 10

empty(): Returns true if the linked list is empty, otherwise false.

    let list = new LinkedList();
    cout(list.empty()); // Output: true

size(): Returns the number of elements in the linked list.

    let list = new LinkedList();
    list.push_back(10);
    cout(list.size()); // Output: 1

clear(): Removes all elements from the linked list.

    let list = new LinkedList();
    list.push_back(10);
    list.clear();

print(): Prints all elements of the linked list.

    let list = new LinkedList();
    list.push_back(10);
    list.print(); // Output: 10

insertAt(position, data): Inserts an element at the specified position. Throws an error if the position is invalid.

    let list = new LinkedList();
    list.push_back(10);
    list.insertAt(0, 5);

deleteAt(position): Removes the element at the specified position. Throws an error if the position is invalid.

    let list = new LinkedList();
    list.push_back(10);
    list.deleteAt(0);

reverse(): Reverses the linked list.

    let list = new LinkedList();
    list.push_back(10);
    list.reverse();

findMiddle(): Returns the middle element of the linked list.

    let list = new LinkedList();
    list.push_back(10);
    cout(list.findMiddle()); // Output: 10

merge(otherList): Merges the linked list with another sorted linked list.

    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.push_back(1);
    list2.push_back(2);
    let mergedList = list1.merge(list2);

detectCycle(): Returns true if the linked list contains a cycle, otherwise false.

    let list = new LinkedList();
    cout(list.detectCycle()); // Output: false

removeDuplicates(): Removes duplicate elements from the linked list.

    let list = new LinkedList();
    list.push_back(10);
    list.push_back(10);
    list.removeDuplicates();

sort(): Sorts the elements of the linked list.

    let list = new LinkedList();
    list.push_back(2);
    list.push_back(1);
    list.sort();

split(): Splits the linked list into two halves and returns them as an array.

    let list = new LinkedList();
    list.push_back(10);
    let [firstHalf, secondHalf] = list.split();

findIntersection(otherList): Finds the intersection node of two linked lists.

    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.push_back(10);
    list2.push_back(10);
    cout(list1.findIntersection(list2)); // Output: 10
toArray(): Converts the linked list to an array.

    let list = new LinkedList();
    list.push_back(10);
    cout(list.toArray()); // Output: [10]

copy_without_reference(): Returns a copy of the linked list without reference to the original.

    let list1 = new LinkedList();
    list1.push_back(10);
    let list2 = list1.copy_without_reference();
    
## Usage 4.) Stacks

The Stack class provides a stack implementation with various utility methods for managing elements.

        REQUIRE:-

        const {Stack} = require('cpp-like-js');

        const st = new Stack(); //instance of Stack

Constructor:-

Stack(): Initializes an empty stack.

Methods:-

push(element): Adds an element to the top of the stack.

    let stack = new Stack();
    stack.push(10);

pop(): Removes and returns the top element of the stack. Throws an error if the stack is empty.

    let stack = new Stack();
    stack.push(10);
    cout(stack.pop()); // Output: 10

top(): Returns the top element of the stack without removing it. Throws an error if the stack is empty.

    let stack = new Stack();
    stack.push(10);
    cout(stack.top()); // Output: 10

isEmpty(): Returns true if the stack is empty, otherwise false.

    let stack = new Stack();
    cout(stack.isEmpty()); // Output: true

size(): Returns the number of elements in the stack.

    let stack = new Stack();
    stack.push(10);
    cout(stack.size()); // Output: 1

clear(): Removes all elements from the stack.

    let stack = new Stack();
    stack.push(10);
    stack.clear();

get(index): Returns the element at the specified index. Throws an error if the index is out of bounds.

    let stack = new Stack();
    stack.push(10);
    cout(stack.get(0)); // Output: 10

contains(element): Returns true if the stack contains the specified element, otherwise false.

    let stack = new Stack();
    stack.push(10);
    cout(stack.contains(10)); // Output: true

toArray(): Converts the stack to an array.

    let stack = new Stack();
    stack.push(10);
    cout.log(stack.toArray()); // Output: [10]

swap(stack): Swaps the elements of the current stack with another stack.

    let stack1 = new Stack();
    let stack2 = new Stack();
    stack1.push(10);
    stack2.push(20);
    stack1.swap(stack2);

emplace(element): Adds an element to the top of the stack.

    let stack = new Stack();
    stack.emplace(10);

emplace_back(...args): Adds multiple elements to the top of the stack.

    let stack = new Stack();
    stack.emplace_back(10, 20, 30);

reserve(capacity): Sets the length of the stack to the specified capacity.

    let stack = new Stack();
    stack.reserve(10);

erase(position): Removes the element at the specified position. Throws an error if the position is out of bounds.

    let stack = new Stack();
    stack.push(10);
    stack.erase(0);

copy_without_reference(): Returns a copy of the stack without reference to the original.

    let stack1 = new Stack();
    stack1.push(10);

    let stack2 = stack1.copy_without_reference();
    print(): Prints all elements of the stack.

    let stack = new Stack();
    stack.push(10);
    
    stack.print(); // Output: 10
    
## Usage 5.) Queue

The Queue class provides a queue implementation with various utility methods for managing elements.

        REQUIRE:-

        const {Queue} = require('cpp-like-js');

        const q = new Queue(); //instance of Queue

Constructor:-

Queue(): Initializes an empty queue.

Methods:-

push(element): Adds an element to the back of the queue.

    let queue = new Queue();
    queue.push(10);

pop(): Removes and returns the front element of the queue. Throws an error if the queue is empty.

    let queue = new Queue();
    queue.push(10);
    cout(queue.pop()); // Output: 10

front(): Returns the front element of the queue without removing it. Throws an error if the queue is empty.

    let queue = new Queue();
    queue.push(10);
    cout(queue.front()); // Output: 10

back(): Returns the back element of the queue without removing it. Throws an error if the queue is empty.

    let queue = new Queue();
    queue.push(10);
    cout(queue.back()); // Output: 10

size(): Returns the number of elements in the queue.

    let queue = new Queue();
    queue.push(10);
    cout(queue.size()); // Output: 1

empty(): Returns true if the queue is empty, otherwise false.

    let queue = new Queue();
    cout(queue.empty()); // Output: true

clear(): Removes all elements from the queue.

    let queue = new Queue();
    queue.push(10);
    queue.clear();

emplace(...args): Adds multiple elements to the back of the queue.

    let queue = new Queue();
    queue.emplace(10, 20, 30);

swap(otherQueue): Swaps the elements of the current queue with another queue.

    let queue1 = new Queue();
    let queue2 = new Queue();
    queue1.push(10);
    queue2.push(20);
    queue1.swap(queue2);

copy_without_reference(otherQueue): Copies the elements of another queue to the current queue without reference.

    let queue1 = new Queue();
    queue1.push(10);
    let queue2 = new Queue();
    queue2.copy_without_reference(queue1);

print(): Prints all elements of the queue.

    let queue = new Queue();
    queue.push(10);
    queue.print(); // Output: 10
    
## Usage 6.) Heaps (Priority Queues) [MIN/MAX Heap]

        REQUIRE:-

    const {PriorityQueueMaxOnTop , PriorityQueueMinOnTop} = require('cpp-like-js');

    const max_heap = new PriorityQueueMaxOnTop(); //instance of PriorityQueueMaxOnTop class.
    const min_heap = new PriorityQueueMinOnTop(); //instance of PriorityQueueMinOnTop class.

The PriorityQueue module provides two priority queue implementations: 

PriorityQueueMinOnTop and PriorityQueueMaxOnTop. 

These classes manage elements with associated priorities, supporting various utility methods for managing the queue.

PriorityQueueMinOnTop means MinHeap.
PriorityQueueMaxOnTop means MaxHeap.

MinHeap: A priority queue where the element with the smallest priority is on top.

MaxHeap: A priority queue where the element with the highest priority is on top.

Constructor:-

PriorityQueueMinOnTop(): Initializes an empty priority queue.

Methods:-

isEmpty(): Returns true if the queue is empty, otherwise false.

    let pq = new PriorityQueueMinOnTop();
    cout(pq.isEmpty()); // Output: true

size(): Returns the number of elements in the queue.

    let pq = new PriorityQueueMinOnTop();
    cout(pq.size()); // Output: 0

push(value, priority): Adds an element with the given priority to the queue.

    let pq = new PriorityQueueMinOnTop();
    pq.push('task1', 1);

top(): Returns the value of the top element without removing it. Throws an error if the queue is empty.

    let pq = new PriorityQueueMinOnTop();
    pq.push('task1', 1);
    cout(pq.top()); // Output: 'task1'

pop(): Removes and returns the top element. Throws an error if the queue is empty.

    let pq = new PriorityQueueMinOnTop();
    pq.push('task1', 1);
    cout(pq.pop()); // Output: 'task1'

clear(): Removes all elements from the queue.

    let pq = new PriorityQueueMinOnTop();
    pq.push('task1', 1);
    pq.clear();

get(index): Returns the value of the element at the specified index. Throws an error if the index is out of bounds.

    let pq = new PriorityQueueMinOnTop();
    pq.push('task1', 1);
    cout(pq.get(0)); // Output: 'task1'

contains(value): Returns true if the queue contains the specified value, otherwise false.

    let pq = new PriorityQueueMinOnTop();
    pq.push('task1', 1);
    cout(pq.contains('task1')); // Output: true

toArray(): Returns an array of all values in the queue.

    let pq = new PriorityQueueMinOnTop();
    pq.push('task1', 1);
    cout(pq.toArray()); // Output: ['task1']

copy_without_reference(): Returns a new priority queue with the same elements, but without reference to the original queue.

    let pq1 = new PriorityQueueMinOnTop();
    pq1.push('task1', 1);
    let pq2 = pq1.copy_without_reference();
    swap(i, j): Swaps the elements at indices i and j.

    let pq = new PriorityQueueMinOnTop();
    pq.push('task1', 1);
    pq.push('task2', 2);
    pq.swap(0, 1);

reserve(n): Sets the internal array length to n.

    let pq = new PriorityQueueMinOnTop();
    pq.reserve(10);

erase(value): Removes all elements with the specified value from the queue.

    let pq = new PriorityQueueMinOnTop();
    pq.push('task1', 1);
    pq.erase('task1');

print(): Prints all elements of the queue.

    let pq = new PriorityQueueMinOnTop();
    pq.push('task1', 1);
    pq.print(); // Output: (task1, 1)
    
## Usage 7.) Deque

The Deque class provides a double-ended queue (deque) implementation with various utility methods for managing the elements.

    REQUIRE:-

    const { Deque } = require('cpp-like-js');

    const dq = new Deque(); //instance of Deque

Constructor:-

Deque(): Initializes an empty deque.

    let deque = new Deque(); //instance of Deque 

Methods:-

empty(): Returns true if the deque is empty, otherwise false.


  let deque = new Deque();
  console.log(deque.empty()); // Output: true

size(): Returns the number of elements in the deque.

    let deque = new Deque();
    console.log(deque.size()); // Output: 0

clear(): Removes all elements from the deque.

    let deque = new Deque();
    deque.clear();

push_back(value): Adds an element to the back of the deque.

    let deque = new Deque();
    deque.push_back('element');

push_front(value): Adds an element to the front of the deque.

    let deque = new Deque();
    deque.push_front('element');

emplace_back(...args): Adds multiple elements to the back of the deque.

    let deque = new Deque();
    deque.emplace_back('element1', 'element2');

emplace_front(...args): Adds multiple elements to the front of the deque.

    let deque = new Deque();
    deque.emplace_front('element1', 'element2');

pop_back(): Removes and returns the element from the back of the deque. Throws an error if the deque is empty.

    let deque = new Deque();
    deque.push_back('element');
    cout(deque.pop_back()); // Output: 'element'

pop_front(): Removes and returns the element from the front of the deque. Throws an error if the deque is empty.

    let deque = new Deque();
    deque.push_front('element');
    cout(deque.pop_front()); // Output: 'element'

front(): Returns the element at the front of the deque without removing it. Throws an error if the deque is empty.

    let deque = new Deque();
    deque.push_front('element');
    cout(deque.front()); // Output: 'element'

back(): Returns the element at the back of the deque without removing it. Throws an error if the deque is empty.

    let deque = new Deque();
    deque.push_back('element');
    cout(deque.back()); // Output: 'element'

at(index): Returns the element at the specified index. Throws an error if the index is out of range.

    let deque = new Deque();
    deque.push_back('element');
    cout(deque.at(0)); // Output: 'element'

insert(position, value): Inserts an element at the specified position. Throws an error if the position is invalid.

    let deque = new Deque();
    deque.push_back('element1');
    deque.insert(1, 'element2');

erase(position): Removes and returns the element at the specified position. Throws an error if the position is invalid.

    let deque = new Deque();
    deque.push_back('element1');
    cout(deque.erase(0)); // Output: 'element1'

swap(otherDeque): Swaps the contents of this deque with another deque. Throws an error if the argument is not an instance of Deque.

    let deque1 = new Deque();
    let deque2 = new Deque();
    deque1.push_back('element1');
    deque2.push_back('element2');
    deque1.swap(deque2);

assign(count, value): Clears the deque and assigns count elements of the specified value.

    let deque = new Deque();
    deque.assign(3, 'element');

resize(count, value = undefined): Resizes the deque to contain count elements. If the new size is larger, the value is added; if smaller, elements are removed.

    let deque = new Deque();
    deque.resize(3, 'element');

splice(position, count): Removes count elements starting from the specified position.

    let deque = new Deque();
    deque.push_back('element1');
    deque.push_back('element2');
    deque.splice(0, 1);

find(value): Returns the index of the first occurrence of the specified value, or -1 if not found.

    let deque = new Deque();
    deque.push_back('element');
    cout(deque.find('element')); // Output: 0

count(value): Returns the number of occurrences of the specified value in the deque.

    let deque = new Deque();
    deque.push_back('element');
    deque.push_back('element');
    cout(deque.count('element')); // Output: 2

begin(): Returns an iterator to the beginning of the deque.

    let deque = new Deque();
    deque.push_back('element1');
    deque.push_back('element2');
    for (let el of deque.begin()) {
    cout(el);
    }

end(): Returns an iterator to the end of the deque.

    let deque = new Deque();
    deque.push_back('element1');
    deque.push_back('element2');
    for (let el of deque.end()) {
    cout(el);
    }

copy_without_reference(): Returns a new deque with the same elements, but without reference to the original deque.

    let deque1 = new Deque();
    deque1.push_back('element');
    let deque2 = deque1.copy_without_reference();

toArray(): Returns an array of all elements in the deque.

    let deque = new Deque();
    deque.push_back('element');
    cout(deque.toArray()); // Output: ['element']

print(): Prints all elements of the deque.

    let deque = new Deque();
    deque.push_back('element');
    deque.print(); // Output: Deque contents: element
    
## Usage 8.) Tree

The Tree class represents a tree structure. It contains methods to manipulate the tree and perform various operations.

    REQUIRE:-

    const {Tree} = require('cpp-like-js');
    
    const myTree = new Tree(); //instance of Tree class

Constructor:-

Tree(): Initializes a new, empty tree.

    const tree = new Tree();

Methods:-

setRoot(value): Sets the root node of the tree with the specified value.

    const rootNode = tree.setRoot(10);

findLCA(value1, value2): Finds the lowest common ancestor (LCA) of the nodes with the specified values.

    const lca = tree.findLCA(5, 15);

isBST(): Checks if the tree is a binary search tree (BST).

    const isBST = tree.isBST();

levelOrderTraversal(): Returns an array of node values using level-order traversal.

    const values = tree.levelOrderTraversal();

getDiameter(): Returns the diameter (longest path) of the tree.

    const diameter = tree.getDiameter();

serialize(): Serializes the tree into a string representation.

    const serializedTree = tree.serialize();

static deserialize(data): Deserializes a string representation of a tree into a Tree object.

    const tree = Tree.deserialize(serializedTree);

copy_without_reference(): Creates a deep copy of the tree without reference to the original tree.

    const copiedTree = tree.copy_without_reference();
    
Example Usage:-

    const {Tree} = require('cpp-like-js');

    const myTree = new Tree();
    const rootNode = myTree.setRoot(10);

    rootNode.addChild(5);
    rootNode.addChild(15);

    console.log(myTree.levelOrderTraversal()); // Output: [10, 5, 15]

    const lca = myTree.findLCA(5, 15);
    console.log(lca); // Output: 10

    const serializedTree = myTree.serialize();
    console.log(serializedTree);

    const deserializedTree = Tree.deserialize(serializedTree);
    console.log(deserializedTree.levelOrderTraversal()); // Output: [10, 5, 15]

## Authors

- [@adityaslg2001](https://www.github.com/adityaslg2001)

# cpp-like-js
