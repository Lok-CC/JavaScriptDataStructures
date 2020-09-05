//************** Dijkstra's Shortest Path Algorithm ********************

class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    };
    dequeue(){
      return this.values.shift();
    };
    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    };
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