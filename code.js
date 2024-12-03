function hasCycle(graph) {
    let visited = new Set();

    for (let node in graph) {
        if (!visited.has(node)) {
            if (detectCycle(node, null, graph)) {
                return true; 
            }
        }
    }
    return false;
    let stack = new Set();
    
    function detectCycle(current, parent, graph){
        visited.add(current);
        stack.add(current);
    
        for (let next in graph[current]) {
            if(!visited.has(next)){
                stack.push(current);
                if (detectCycle(next, current, graph) {
                return true; 
                }
                
            } else if (stack.has(next)) {
            return true;
            }
        }
        return false;
    }
}

