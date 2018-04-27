'use strick';

const fs = require('fs');

// 打开一个输入流
let rs = fs.createReadStream('sample.in', 'utf-8');
// data事件可能有多次, 每次传递的chunk是流的一部分数据
rs.on('data', function (chunk) {
    console.log('data: ');
    console.log(chunk);
});
rs.on('end', function () {
    console.log('read stream end...');
});

rs.on('error', function (err) {
    console.log(err);
});


let ws1 = fs.createWriteStream('output1.out', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

let ws2 = fs.createWriteStream('output2.txt');
ws2.write(Buffer.from('使用Stream写入二进制数据...\r\n', 'utf-8'));
ws2.write(Buffer.from('END.', 'utf-8'));
ws2.end();

console.log('done.');


function copy_file(f1, f2) {
    let rs = fs.createReadStream(f1);
    let ws = fs.createWriteStream(f2);
    let cnt=1;
    rs.on('data', function (chunk) {
        ws.write(chunk);
        console.log(cnt++);
    });
    rs.on('end', function () {
        ws.end();
        console.log('copy finished.');
        fs.stat(f2, function (err, stat) {
            if (err) {
                console.log(err);
            } else {
                console.log('size: '+ stat.size);
                console.log('birth time: '+stat.birthtime);
            }

        })
    });

    rs.on('error', function (err) {
        console.log(err);
    });

}
copy_file('第696话 最后之战.mp4', '696.mp4');