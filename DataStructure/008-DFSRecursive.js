// *************************** DFS Recursive **************************
class Graph{
    constructor(){
        this.adjacencyList = {}; 
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    depthFirstRecursive(starterVertex){
        const result = [];
        const visited = {};
        // we need to define this.adjacencyList here, else will have error.
        const adjacencyList = this.adjacencyList;

        function DFS(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    return DFS(neighbour);
                }
            })
        }
        DFS(starterVertex);
        return result;
    }
    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while(stack.length){
            console.log(stack);
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            });
        }
        return result;
    }
    breathFirstIterative(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while(queue.length){
            console.log(queue);
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            });
        }
        return result;
    }
}

// Make a graph
let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

// g.depthFirstRecursive("A"); //["A", "B", "D", "E", "C", "F"]
// g.depthFirstIterative("A"); //["A", "C", "E", "F", "D", "B"]
g.breathFirstIterative("A");    //"A", "B", "C", "D", "E", "F"]

//        A
//      /   \
//    B      C
//    |      |
//    D ---- E
//    \     /
//       F