function hasCycle(graph) {
    let visited = new Set();

    for (let node in graph) {
        if (!visited.has(node)) {
            if (detectCycle(node, null, graph, visited)) {
                return true; 
            }
        }
    }

    function detectCycle(current, parent, graph, visited){
        visited.add(current);
        
        for (let next in graph[current]) {
            if(!visited.has(next)){
                
                if (detectCycle(next, current, graph, visited)) {
                return true; 
                }
                
            } else if (next !== parent) {
            return true;
            }
        }
        return false;
    }
    return false;
}

