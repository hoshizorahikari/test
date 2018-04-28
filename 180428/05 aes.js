'use strict'

const crypto = require('crypto');

function aesEncrypt(data, key) { // aes192加密
    const cipher = crypto.createCipher('aes192', key);
    let crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrypted, key) { // aes192解密
    const decipher = crypto.createDecipher('aes192', key);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

let data = 'hoshizora rin';
let key = 'kayochin';
let encrypted = aesEncrypt(data, key);
let decrypted = aesDecrypt(encrypted, key);

console.log('原始: ' + data); // 原始: hoshizora rin
console.log('加密: ' + encrypted); // 加密: 6160f8ec1495601943cd2b1c3b7f8e5f
console.log('解密: ' + decrypted); // 解密: hoshizora rin