const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js') + ''); // This imports `hasCycle` and its dependencies from 'code.js'

// Test Case 1: Graph with a cycle
const graphWithCycle = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1]
};
assert.strictEqual(hasCycle(graphWithCycle), true, 'Test Case 1 Failed: Graph contains a cycle');

// Test Case 2: Graph without a cycle
const graphWithoutCycle = {
    0: [1],
    1: [0, 2],
    2: [1]
};
assert.strictEqual(hasCycle(graphWithoutCycle), false, 'Test Case 2 Failed: Graph does not contain a cycle');

// Test Case 3: Disconnected graph with a cycle in one component
const disconnectedGraph = {
    0: [1],
    1: [0],
    2: [3, 4],
    3: [2, 4],
    4: [2, 3]
};
assert.strictEqual(hasCycle(disconnectedGraph), true, 'Test Case 3 Failed: Disconnected graph contains a cycle in one component');

// Test Case 4: Disconnected graph without a cycle
const disconnectedAcyclicGraph = {
    0: [1],
    1: [0],
    2: [3],
    3: [2]
};
assert.strictEqual(hasCycle(disconnectedAcyclicGraph), false, 'Test Case 4 Failed: Disconnected graph does not contain a cycle');

// Test Case 5: Empty graph
const emptyGraph = {};
assert.strictEqual(hasCycle(emptyGraph), false, 'Test Case 5 Failed: Empty graph should not contain a cycle');

// Test Case 6: Single-node graph
const singleNodeGraph = {
    0: []
};
assert.strictEqual(hasCycle(singleNodeGraph), false, 'Test Case 6 Failed: Single-node graph should not contain a cycle');

console.log('All tests passed!');
