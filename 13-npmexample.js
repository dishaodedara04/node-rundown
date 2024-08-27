// npm - global command , comes with node
// npm --version

//local dependency - use it only in this particular project
// npm i <packagename>

// global dependency - use it in any project
//npm install -g <packageName>

//package.json - manifest file (store import about project/package)
//manual approach (create package.json in the root , create properties etc)
// npm init (step by step , press enter to skip)
//npm init -y(everything default)

const _ = require('lodash');
//lodash js library work on the top of underscore.js
//It simplifies JavaScript coding by providing utility functions for common tasks like array manipulation, object handling, and string operations,
const items =[1,[2,[3,[4]]]]

const newItems =_.flattenDeep(items); // method of lodash which split this back as a flat array
console.log(newItems);// o/p [1,2,3,4]
console.log('hello people')
