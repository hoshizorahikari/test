'use strict';


const fs = require('fs');
//异步写入文件
function write(f, data) {
    console.log('>>> write begin >>>');
    fs.writeFile(f, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('ok.');
        }
    });

    console.log('>>> write end >>>');
}

// 异步读取文件, 异步将data写入另一文件, 相当于复制
function read_write(f) {
    console.log('>>> read begin <<<');
    fs.readFile(f, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(`${data.length} bytes`); // 73770 bytes
            write('output.png', data);
        }
    });
    console.log('>>> read end <<<');
}

read_write('sample.png');


// 同步写入文件
console.log('>>> write begin >>>');
let s = 'hello hikari\nhello world';
fs.writeFileSync('hello.out', s);
console.log('>>> write end >>>');