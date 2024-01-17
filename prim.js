// Pseudo Code for Prim's Algorithm

function prim(graph) {

  // Empty set to store vertices in the mst
  let mst = []

  // select the first vertex to start the tree
  let start = any vertex in graph
  mst.add(start)

  // set of edges with minimum weight
  let edges = []

  // iterate untill all vertices are in the mst
  while mst.length < graph.length:
    // finding minimum edge in the set of edges and add it to mst
    minEdge, minWeight = findMinEdge(edges)
    mst.add(minEdge)

    // add the edges to considet in mst
    for edge in edges to minEdge:
      if edge is not in mst:
        edges.add(edge)
    
    // remove the minimum edge from the set of edges to consider
    edges.remove(minEdge)

  return mst
}
