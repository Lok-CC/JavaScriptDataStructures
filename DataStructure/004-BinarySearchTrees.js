// ********** Binary Search Tree ***************
/*
1. Two Class:
    1. Node - value, left, right
    2. Binary Search Tree - root
    3. insert(val)
    4. Search(val)
    5. remove(val)

1. BFS
2. DFS
    a. Pre-Order
    b. Post-Order
    c. In-Order
*/


class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(current){
            if(val === current.val) return undefined;
            if(val < current.val){
                if(current.left === null){
                    current.left = newNode;
                }
                current = current.left;
            }else{
                if(current.right === null){
                    current.right = newNode;
                }
                current = current.right;
            }
        }
        return this;
    }
    search(val){
        if(!this.root) return undefined;
        let current = this.root;
        while(current){
            if(val < current.val){
                current = current.left;
            }else if(val > current.val){
                current = current.right;
            }else{
                return true;
            }
        }
        return false;
    }

    remove(val) {
        if(this.root === null) return;
        let removed;
        function findAndRemove(node){
            if(val === node.val){
                removed = new Node(val);
                if(node.left && node.right){
                    let current = node.right;
                    while(current.left){
                        current = current.left;
                    }
                    node.val = current.val;
                    current.val = val;
                    node.right = findAndRemove(node.right);
                }else if(node.left){
                    return node.left;
                }else if(node.right){
                    return node.right;
                }else{
                    return null;
                }
            }else if(val < node.val){
                if(node.left){
                   node.left = findAndRemove(node.left);
                }
            }else{
                if(node.right){
                   node.right = findAndRemove(node.right);
                }
            }
            return node;
        }
        this.root = findAndRemove(this.root);
        return removed;
    }

    BFS(node){
        if(!node.val) return undefined;
        const queue = [];   // put node
        const data = [];   // put visited node val.
        let current;
        queue.push(node);

        while(queue.length){
            current = queue.shift();
            data.push(current.val);

            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
        }
        return data;
    }

    DFSPreOrder(node){
        if(!node.val) return undefined;
        let current = node;
        let data = [];

        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    DFSPostOrder(node){
        if(!node.val) return undefined;
        let current = node;
        let data = [];

        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(current);
        return data;
    }

    DFSInOrder(node){
        if(!node.val) return undefined;
        let current = node;
        let data = [];

        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}


//      15
//    /   \
//   10    20
//  / \     \
// 1   12    50
//  \  /
//  5 11
let bst = new BinarySearchTree();
bst.root;
bst.insert(15)
bst.insert(10)
bst.insert(20)
bst.insert(1)
bst.insert(12)
bst.insert(50)
bst.insert(5)
bst.insert(11)

// bst.BFS(bst.root);
bst.remove(10)
