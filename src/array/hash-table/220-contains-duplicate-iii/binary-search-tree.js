class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    #root;

    constructor() {
        this.#root = null;
        this.size = 0;
    }

    root() {
        return this.#root;
    }

    add(value) {
        const newNode = new BinaryTreeNode(value);

        this.size += 1;
        if (this.#root === null) {
            this.#root = newNode;
        } else {
            let node = this.#root;

            while (node) {
                if (value === node.value) {
                    this.size -= 1;

                    return;
                } else if (value < node.value) {
                    if (node.left === null) {
                        node.left = newNode;

                        return;
                    }
                    node = node.left;
                } else {
                    if (node.right === null) {
                        node.right = newNode;

                        return;
                    }
                    node = node.right;
                }
            }
        }
    }

    has(value) {
        if (this.#root === null) {
            return false;
        } else {
            let node = this.#root;

            while (node) {
                if (value === node.value) {
                    return true;
                } else if (value < node.value) {
                    node = node.left;
                } else {
                    node = node.right;
                }
            }

            return false;
        }
    }

    remove(value) {
        this.#root = this.#removeNode(this.#root, value);
    }

    #removeNode(node, value) {
        if (node === null) {
            return null;
        } else {
            if (value === node.value) {
                this.size -= 1;
                if (node.left === null && node.right === null) {
                    return null;
                } else if (node.left === null) {
                    return node.right;
                } else if (node.right === null) {
                    return node.left;
                } else {
                    this.size += 1;
                    node.value = this.#smallestNode(node.right).value;
                    node.right = this.#removeNode(node.right, node.value);

                    return node;
                }
            } else if (value < node.value) {
                node.left = this.#removeNode(node.left, value);

                return node;
            } else {
                node.right = this.#removeNode(node.right, value);

                return node;
            }
        }
    }

    #smallestNode(node) {
        while (node.left) {
            node = node.left;
        }

        return node;
    }

    ceiling(value) {
        return this.#ceilingNode(this.#root, value);
    }

    #ceilingNode(node, targetValue) {
        if (node === null) {
            return Infinity;
        }

        const {value, left, right} = node;


        if (value >= targetValue) {
            return Math.min(value, this.#ceilingNode(left, targetValue));
        } else {
            return this.#ceilingNode(right, targetValue);
        }
    }

    floor(value) {
        return this.#floorNode(this.#root, value);
    }

    #floorNode(node, targetValue) {
        if (node === null) {
            return -Infinity;
        }

        const {value, left, right} = node;

        if (value <= targetValue) {
            return Math.max(value, this.#floorNode(right, targetValue));
        } else {
            return this.#floorNode(left, targetValue);
        }
    }
}

export default BinarySearchTree;
