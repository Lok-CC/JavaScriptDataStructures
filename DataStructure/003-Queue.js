// ************ Stacks *************
/**
 * - First In First Out (FIFO)
 * - Stack push new node at the beginning of the list;
 * - Queue push new node at the end of the list.
 * - enqueue and dequeue
 */

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// Add at the END, remove at the BEGINNING.
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;;
    }
    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first) return undefined;
        let removedNode = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
//         removedNode.next = null;
        this.size--;
        return removedNode.val; // is okay dont need to set removedNode.next = null,
                                // because we are just return the removedNode value; not the node itself.
    }
}

let queue = new Queue;
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);