// ************ Stacks *************
/* 
- Last In First Out (LIFO)
- To be more efficient, push and pop at the beginning of the list.
    - because we dont need to loop through the list until second last element, then set it as new tail.
- push and pop

*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            let temp = this.first;
            this.first = newNode;
            newNode.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}

let stack = new Stack;
stack.push(2);
stack.push(4);
stack.push(6);
stack.push(8);