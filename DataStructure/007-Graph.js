// **************** Graph *********************
/*
    1. Add Vertex
    2. Add Edge
    3. Remove Edge
    4. Remove Vertex
*/

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
//         this.adjacencyList[vertex1].splice(this.adjacencyList[vertex1].indexOf(vertex2), 1);
//         this.adjacencyList[vertex2].splice(this.adjacencyList[vertex2].indexOf(vertex1), 1);
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    removeVertex(vertex){
//         let removedVertex = this.adjacencyList[vertex];
//         for(let v of removedVertex){
//             this.removeEdge(v, vertex);
//         }
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

let graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Dallas", "Aspen");