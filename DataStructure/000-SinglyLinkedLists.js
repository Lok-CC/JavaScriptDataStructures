/*
********************* Singly Linked List *****************
1. Node Class
    a. val
    b. next

1. Push & Pop
2. Shift & Unshift
3. Get & Set
4. Insert & Remove
5. Reverse
*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;

        let current = this.head;
        let newTail = current;
        
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
          newNode.next = this.head;
          this.head = newNode;  
        }
        this.length++;
        return this;
    }
    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        let currentNode = this.head;
        while(idx > 0){
            currentNode = currentNode.next;
            idx--;
        }
        return currentNode;
    }
    set(idx, val){
        let foundNode = this.get(idx);
        if(foundNode){
            foundNode.val = val;
            return true;
        } 
        return false;
    }
    insert(idx, val){
        if(idx < 0 || idx > this.length) return null;
        if(idx === this.length) return !!this.push(val)
        if(idx === 0) return !!this.unshift(val)

        let newNode = new Node(val);
        let foundNode = this.get(idx-1);
        newNode.next = foundNode.next;
        foundNode.next = newNode;
        this.length++;
        return true;
    }
    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        if(idx === this.length-1) return this.pop();
        if(idx === 0) return this.shift();

        let prevNode = this.get(idx-1)
        let removeNode = prevNode.next;
        prevNode.next = removeNode.next;
        this.length--;
        return removeNode;
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for(let i=0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print(){
        const arr = [];
        let current = this.head
        while(current){
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr);
    }
}

let list = new SinglyLinkedList();
list.push("100");
list.push("200");
list.push("300");
list.push("400");
list.push("500");
list.push("600");