// ************************ Binary Heap *************************************
/*
1. Formula:
    1. To find children: 2n+1
    2. To find parent: (n-1)/2, then floor it.

2. Example:
        41
    39         33 
18     27   12   add 55

Original: [41,39,33,18,27,12]
 - After insert(55)
Expected Output: [55,39,41,18,27,12,33]
*/

class MaxBinaryHeap{
    constructor(){
        this.values = [];    
    }

    insert(val){
        this.values.push(val);
        this.bubbleUp();
        return this.values;
    }

    bubbleUp(){
        let idx = this.values.length-1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx]
            
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

// Original: [55,39,41,18,27,12,33]
// - After extractMax()
// Expected Output:[41,39,33,18,27,12] // 55
// - After extractMax()
// Expected Output:[39,27,33,18,12] // 41
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();   
        }
        return max;
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
                if(leftChild > element){
                    swap = leftChildIndex;
                }
            }

            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex];
                if((swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)){
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

let MBH = new MaxBinaryHeap();
// Original: [55,39,41,18,27,12,33]
MBH.insert(55);
MBH.insert(39);
MBH.insert(41);
MBH.insert(18);
MBH.insert(27);
MBH.insert(12);
MBH.insert(33);