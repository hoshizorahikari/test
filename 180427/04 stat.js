'use strict';

const fs = require('fs');

fs.stat('sample.in', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是不是文件, 是不是目录?
        console.log('isFile: ' + stat.isFile());
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) { // 是文件, 打印文件大小, 创建日期, 修改日期
            console.log('size: ' + stat.size);
            console.log('birth time: ' + stat.birthtime); // date对象
            console.log('modified time: ' + stat.mtime); // date对象
        }
    }
});


try {
    let info = fs.statSync('sample.in');
    console.log('birth time: ' + info.birthtime);
} catch (err) {
    console.log(err);
}