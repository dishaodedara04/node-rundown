const _ = require('lodash');
//lodash js library work on the top of underscore.js
//It simplifies JavaScript coding by providing utility functions for common tasks like array manipulation, object handling, and string operations,
const items =[1,[2,[3,[4]]]]
const newItems =_.flattenDeep(items); // method of lodash which split this back as a flat array
console.log(newItems);