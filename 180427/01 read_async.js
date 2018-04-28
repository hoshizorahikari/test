'use strict';

// read text from 'sample.in'

const fs = require('fs');


console.log('>>> BEGIN >>>')

fs.readFile('sample.in', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log('>>> END >>>');


/*

console.log('>>> BEGIN2 >>>')
// read data from sample.png
fs.readFile('sample.png', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        // Buffer to String
        let text = data.toString('utf-8');
        console.log(text); // 乱码
        // String to Buffer
        let buf = Buffer.from(text, 'utf-8');
        console.log(`buf.length=${buf.length}; data.length=${data.length}`);
        // buf.length=133830; data.length=73770, 两者大小都不一样?




        console.log(Array.isArray(data)); // false
        console.log(`${data.length} bytes`); // 73770 bytes
    }
});
console.log('>>> END2 >>>');

*/