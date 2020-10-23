// 8sum.js

// Functions
function sum(...args) {
    return Array.isArray(args[0]) ? args[0].reduce((sum, current) => (sum + current)) : sum(args);
}

// Testing
console.log(sum(2,-4,4,23,3,-90));