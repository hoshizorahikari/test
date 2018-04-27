'use strict';

// read text from 'sample.in'

const fs = require('fs');

console.log('>>> BEGIN >>>');
let data = fs.readFileSync('sample.in', 'utf-8');
console.log(data);
console.log('>>> END >>>');








