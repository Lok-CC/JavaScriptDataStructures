/*
********************* Singly Linked List *****************
1. Node Class
    a. val
    b. next
    c. prev

1. Push & Pop
2. Shift & Unshift
3. Get & Set
4. Insert & Remove
*/

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;   
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;   
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return null;
        let poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;   
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(!this.head) return null;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter, current;
        if(index <= this.length/2){
            console.log("working from START");
            counter = 0;
            current = this.head;
            while(counter !== index){
                current = current.next;
                counter++;
            }
        }else{
            console.log("working from END");
            counter = this.length-1;
            current = this.tail;
            while(counter !== index){
                current = current.prev;
                counter--;
            }
        }
        return current;
    }
    set(index, val){
        let getNode = this.get(index);
        if(getNode){
            getNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(index-1);
        let afterNode = prevNode.next;

        prevNode.next = newNode, newNode.prev  = prevNode;
        newNode.next = afterNode, afterNode.prev = newNode;      
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        let removedNode = this.get(index);
        let prevNode = removedNode.prev;
        let nextNode = removedNode.next;

        prevNode.next = nextNode, nextNode.prev = prevNode;
        removedNode.prev = null;
        removedNode.next = null;
        this.length--;
        return removedNode;
    }
    reverse(){
        // cclo: Refer from singly-linked list.
        // need to update one more property: prev
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let next;
        let prev = null;

        for(let i=0; i < this.length; i++){
            next = current.next;
            current.next = prev;
            current.prev = next; // add one more line.

            prev = current;
            current = next;
        }
        return this
    }
    print(){
        let array = [];
        if(!this.head) return null;
        let current = this.head;
        while(current){
            array.push(current.val);
            current = current.next;
        }
        return array;
    }
}

let list = new DoublyLinkedList();
list.push("100");
list.push("200");
list.push("300");
list.push("400");
list.push("500");
list.push("600");