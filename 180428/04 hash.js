"use strick";

const fs = require('fs');
const crypto = require('crypto');
const sha1 = crypto.createHash('sha1'); // sha1算法


function get_sha1(f) {
    let rs = fs.createReadStream(f);
    let cnt = 1;
    // chunk貌似默认64字节, 那怎么设置chunk呢?
    rs.on('data', function (chunk) {
        sha1.update(chunk); // 可以多次update
        cnt++;
    });
    // 读取结束, 输出sha1, 16进制字符串
    rs.on('end', function () {
        console.log(`cnt = ${cnt}`);
        console.log(sha1.digest('hex'));
    });
    rs.on('error', function (e) {
        console.log(e);
    });
}
// get_sha1('1.mp4'); // dbc85234c284b95b592fc600112b0837c9ce3d7b

// ---------------
// hmac
//-----------------
const hmac = crypto.createHmac('sha1', 'hikari');
let s = 'hello world';
sha1.update(s);
console.log(sha1.digest('hex')); // 2aae6c35c94fcfb415dbe95f408b9ce91ee846ed

hmac.update(s);
console.log(hmac.digest('hex')); // 81cf28a45ad5c74e8d4215032ae1e38d8e6e0f52