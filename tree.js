class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
        this.parent = null;
    }

    addChild(value) {
        const newNode = new Node(value);
        newNode.parent = this;
        this.children.push(newNode);
        return newNode;
    }

    removeChild(node) {
        this.children = this.children.filter(child => child !== node);
    }

    inorderTraversal() {
        let result = [];
        if (this.children.length > 0) {
            result = result.concat(this.children[0].inorderTraversal());
        }
        result.push(this.value);
        for (let i = 1; i < this.children.length; i++) {
            result = result.concat(this.children[i].inorderTraversal());
        }
        return result;
    }
    
    preorderTraversal() {
        let result = [];
        function traverse(node) {
            if (!node) return;
            result.push(node.value);
            node.children.forEach(child => traverse(child));
        }
        traverse(this);
        return result;
    }

    postorderTraversal() {
        let result = [];
        function traverse(node) {
            if (!node) return;
            node.children.forEach(child => traverse(child));
            result.push(node.value);
        }
        traverse(this);
        return result;
    }

    search(value) {
        if (this.value === value) return this;
        for (let child of this.children) {
            const found = child.search(value);
            if (found) return found;
        }
        return null;
    }

    getHeight() {
        if (this.children.length === 0) return 0;
        let maxHeight = 0;
        for (let child of this.children) {
            const height = child.getHeight();
            if (height > maxHeight) {
                maxHeight = height;
            }
        }
        return maxHeight + 1;
    }

    isBalanced() {
        if (this.children.length === 0) return true;
        const heights = this.children.map(child => child.getHeight());
        const maxHeight = Math.max(...heights);
        const minHeight = Math.min(...heights);
        return maxHeight - minHeight <= 1;
    }

    delete() {
        if (this.parent === null) {
            // Node is the root
            this.children = [];
        } else {
            this.parent.removeChild(this);
        }
    }

    find(value) {
        if (this.value === value) return this;
        for (let child of this.children) {
            const found = child.find(value);
            if (found) return found;
        }
        return null;
    }

    getAncestors() {
        let ancestors = [];
        let current = this.parent;
        while (current !== null) {
            ancestors.push(current.value);
            current = current.parent;
        }
        return ancestors;
    }

    isDescendantOf(node) {
        let current = this.parent;
        while (current !== null) {
            if (current === node) {
                return true;
            }
            current = current.parent;
        }
        return false;
    }

    getLevel() {
        let level = 0;
        let current = this.parent;
        while (current !== null) {
            level++;
            current = current.parent;
        }
        return level;
    }

    countNodes() {
        let count = 1;
        for (let child of this.children) {
            count += child.countNodes();
        }
        return count;
    }

    findMax() {
        let max = this.value;
        for (let child of this.children) {
            const childMax = child.findMax();
            if (childMax > max) {
                max = childMax;
            }
        }
        return max;
    }

    findMin() {
        let min = this.value;
        for (let child of this.children) {
            const childMin = child.findMin();
            if (childMin < min) {
                min = childMin;
            }
        }
        return min;
    }

    getPathToRoot() {
        let path = [];
        let current = this.parent;
        while (current !== null) {
            path.push(current.value);
            current = current.parent;
        }
        return path.reverse();
    }

    addNodeAtLevel(value, level) {
        if (level === 0) {
            const newNode = new Node(value);
            newNode.parent = this;
            this.children.push(newNode);
            return newNode;
        }
        for (let child of this.children) {
            const newNode = child.addNodeAtLevel(value, level - 1);
            if (newNode) return newNode;
        }
        return null;
    }

    isBalanced() {
        if (this.children.length === 0) return true;
        const heights = this.children.map(child => child.getHeight());
        const maxHeight = Math.max(...heights);
        const minHeight = Math.min(...heights);
        return maxHeight - minHeight <= 1;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    setRoot(value) {
        this.root = new Node(value);
        return this.root;
    }

    findLCA(value1, value2) {
        const node1 = this.root.find(value1);
        const node2 = this.root.find(value2);
        if (!node1 || !node2) return null;

        const ancestors1 = node1.getAncestors();
        const ancestors2 = node2.getAncestors();

        let lca = null;
        for (let ancestor of ancestors1) {
            if (ancestors2.includes(ancestor)) {
                lca = ancestor;
                break;
            }
        }
        return lca;
    }

    isBST() {
        function checkBST(node, min, max) {
            if (node === null) return true;
            if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
                return false;
            }
            return checkBST(node.left, min, node.value) && checkBST(node.right, node.value, max);
        }
        return checkBST(this.root, null, null);
    }

    levelOrderTraversal() {
        let result = [];
        if (!this.root) return result;

        let queue = [this.root];
        while (queue.length > 0) {
            let node = queue.shift();
            result.push(node.value);
            for (let child of node.children) {
                queue.push(child);
            }
        }
        return result;
    }

    getDiameter() {
        function height(node) {
            if (node === null) return 0;
            let maxHeight = 0;
            for (let child of node.children) {
                const childHeight = height(child);
                if (childHeight > maxHeight) {
                    maxHeight = childHeight;
                }
            }
            return maxHeight + 1;
        }

        function diameter(node) {
            if (node === null) return 0;
            let childHeights = [];
            for (let child of node.children) {
                childHeights.push(height(child));
            }
            childHeights.sort((a, b) => b - a);

            let maxDiameter = 0;
            if (childHeights.length >= 2) {
                maxDiameter = childHeights[0] + childHeights[1];
            }
            for (let child of node.children) {
                const childDiameter = diameter(child);
                if (childDiameter > maxDiameter) {
                    maxDiameter = childDiameter;
                }
            }
            return maxDiameter;
        }

        return diameter(this.root);
    }

    serialize() {
        function serializeNode(node) {
            if (node === null) return 'null';
            let childValues = node.children.map(child => serializeNode(child));
            return `${node.value} [${childValues.join(', ')}]`;
        }
        return serializeNode(this.root);
    }

    static deserialize(data) {
        function deserializeNode(nodes) {
            if (nodes.length === 0) return null;
            let value = nodes.shift();
            if (value === 'null') return null;
            let node = new Node(parseInt(value));
            node.children = deserializeNode(nodes);
            return node;
        }
        let nodes = data.split(/[\[\],\s]+/).filter(Boolean);
        let root = deserializeNode(nodes);
        let tree = new Tree();
        tree.root = root;
        return tree;
    }
    copy_without_reference(){
            const newTree = new Tree();
    
            function copyNodes(originalNode) {
                if (!originalNode) return null;
                let newNode = new Node(originalNode.value);
                for (let child of originalNode.children) {
                    let newChild = copyNodes(child);
                    newChild.parent = newNode;
                    newNode.children.push(newChild);
                }
                return newNode;
            }
    
            newTree.root = copyNodes(this.root);
            return newTree;
        }
}

module.exports = Tree;