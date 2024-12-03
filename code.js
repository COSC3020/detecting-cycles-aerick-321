function hasCycle(graph) {
    let visited = new Set();
    
    function detectCycle(current, parent, graph) {
        visited.add(current);

        for (let next of graph[current]) {
            if (!visited.has(next)) {
                if (detectCycle(next, current, graph)) {
                    return true;
                }
            } else if (next !== parent) { 
                return true;
            }
        }

        return false;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            if (detectCycle(node, null, graph)) {
                return true;
            }
        }
    }

    return false;
}
