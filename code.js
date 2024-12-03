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
        let stack = new Set();
        for (let next in Object.keys(graph[current])) {
            if(!visited.has(next)){
                stack.push(current);
                if (detectCycle(next, current, graph, visited)) {
                return true; 
                }
                stack.pop();
                
            } else if (next !== parent) {
            return true;
            }
        }
        return false;
    }
    
    return false;
}

