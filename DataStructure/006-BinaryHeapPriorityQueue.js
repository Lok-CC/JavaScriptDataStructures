// ************************ Priorty Queue *************************************
/**
 * Use minimum binary heap to make priorty queue.
 */

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

// Min Binary Heap
class PriortyQueue{
    constructor(){
        this.values = [];    
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority)
        this.values.push(newNode);
        this.bubbleUp();
        return this.values;
    }
    
    bubbleUp(){
        let idx = this.values.length-1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();   
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIndex = 2 * idx + 1;
            let rightChildIndex = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIndex < length){
                leftChild = this.values[leftChildIndex];
                if(leftChild.priority < element.priority){
                    swap = leftChildIndex;
                }
            }

            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex];
                if((swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)){
                        swap = rightChildIndex;
                    }
            }

            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let MBH = new PriortyQueue();
MBH.enqueue(2,2);
MBH.enqueue(1,1);
MBH.enqueue(4,4);
MBH.enqueue(2,2);
MBH.enqueue(3,3);
MBH.enqueue(5,5);
MBH.enqueue(1,1);

// MBH.values   //[1,2,1,2,3,5,4]
// MBH.dequeue()   // 1
// [1,2,4,2,3,5]
// MBH.dequeue()   // 1
// [2,2,4,5,3]