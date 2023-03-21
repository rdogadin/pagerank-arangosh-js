// include Pregel module
var pregel = require("@arangodb/pregel");

// set parameters
var params = {
    maxGSS: 100, // max number of iterations
    resultField: "pageRank", // vertex property name to store the reult
    store: true // if set to true it will store the rank in a vertex property
};

// execute the algorithm
var handle = pregel.start("pagerank","airlines",params);

// wait for it to finish
while (!["done"].includes(pregel.status(handle).state)){
    print("PageRank is still executing");
}

// get summary for the execution
result = pregel.status(handle)

print("PageRank is " + result.state)

// display the summary
print(result)