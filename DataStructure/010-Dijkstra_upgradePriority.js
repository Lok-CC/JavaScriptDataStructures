// ************************ Priorty Queue *************************************

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

// Min Binary Heap
class PriorityQueue{
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

class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    /*
        {
            "A": [{node: "B", weight}, {node: "C", weight}]
        }
    */
    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2, weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = []   // result at the end

        for(let vertex in this.adjacencyList){
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else{
                distances[vertex] = Infinity;       // create object - shortest Distance
                nodes.enqueue(vertex, Infinity);    // create queue
            }
            previous[vertex] = null;            // create object - previous      
        }

        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                console.log(distances);
                console.log(previous);
                // Done. Build up path to return at the end.
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;      // important, the queue can still contains nodes and continue. We should break it.
            }

            if(smallest || distances[smallest] !== Infinity){
                for(let neighbour in this.adjacencyList[smallest]){
                    // find neighbouring node
                    let nextNode = this.adjacencyList[smallest][neighbour];
                    // calculate new distances to neighbouring node.
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbour = nextNode.node;
                    if(candidate < distances[nextNeighbour]){
                        //updating new smallest distances to neighbour
                        distances[nextNeighbour] = candidate;
                        //updating previous - How we got to neighbour
                        previous[nextNeighbour] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbour, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E");
