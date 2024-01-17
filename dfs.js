// Add vertex to the graph
function addVertex(graph, vertex) {
    graph.vertices.push(vertex);
    graph.edges.set(vertex, []);
}
  
// Add edge between to vertex 
function addEdge(graph, start, end) {
    graph.edges.get(start).push(end);
    graph.edges.get(end).push(start);
}

// Depth First Search(DFS) function 
function dfs(graph, start, visited, result) {
    if (!visited.has(start)) {
    visited.add(start);
    result.push(start);

        for (const neighbor of graph.edges.get(start)) {
            dfs(graph, neighbor, visited, result);
        }
    }
}

const graph = {
    vertices: [],
    edges: new Map(),
};
  
addVertex(graph, 'A');
addVertex(graph, 'B');
addVertex(graph, 'C');
addVertex(graph, 'D');

addEdge(graph, 'A', 'B');
addEdge(graph, 'B', 'C');
addEdge(graph, 'B', 'D');

const start = 'A';
const visited = new Set();
const result = [];

dfs(graph, start, visited, result);

console.log('DFS Traversal Result:', result.join(' -> '));
