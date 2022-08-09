// npm -- global command; comes with node
// npm --version

// local dependency - use it in any project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName>

// package.json = manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash') 

const items = [1, [2, [3, [4]]]]

const newitems = _.flattenDeep(items);

console.log(newitems)
console.log("hello people")
/*
The Importance of package.json
=> we can just share the code without dragging the massive
node modules folder with us
 */